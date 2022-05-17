import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signOut,
    sendEmailVerification,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup
} from 'firebase/auth';
import { getTranscriptionCodeErrorFirebase } from './codes-transcription';
import {auth} from './init-config';

let unsuscribe;

//SECCIÓN LOGIN
export const loginUser=async ({email, password}) =>{

    try {
        const userCredentials=await signInWithEmailAndPassword(auth, email, password);
        const {emailVerified, phoneNumber, photoURL, uid, displayName}=userCredentials.user;
        return {
            error: false,
            user: { emailVerified, phoneNumber, photoURL, uid, email, name: displayName}
        };
    } catch (err) {
        return {
            error:true,
            message: getTranscriptionCodeErrorFirebase(err)
        };
    }
}

//SECCIÓN REGISTER
export const createUser=async({email, password, name })=>{//mandarlo a llamar en Register.jsx

    //updateProfile actualizará el nombre del obj UserCredentialImp.user.displayName
    try {
        const userCredentials=await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredentials.user, {displayName: name});
        //extrayendo la info
        const {emailVerified, phoneNumber, photoURL, uid}=userCredentials.user;
        //mandando email de verificación
        if(!emailVerified) {//como en un principio es falso, entra
            await sendEmailVerification(userCredentials.user)
        }
        // console.log(userCredentials);
        // console.log(userCredentials.user);
        //regresándola
        return {
            error: false,
            user: {email, name, emailVerified, phoneNumber, photoURL, uid}
        };
    } catch (err) {
        // console.log({err});
        console.log(err.code)
        // const error=getTranscriptionCodeErrorFirebase(err);
        // console.log(error);
        return {
            error:true,
            message: getTranscriptionCodeErrorFirebase(err)
        };
    };
};

//INICIO DE SESIÓN CON GOOGLE (proveedor)
export const signInWithGoogleProvider=async ()=>{//mandar a llamar en Login.jsx
    //como es una clase se debe instanciar
    const providerGoogle=new GoogleAuthProvider();
    try {
        // Inf extra que se puede obtener
        // https://developers.google.com/identity/protocols/oauth2/scopes
        // providerGoogle.addScope('https://www.googleapis.com/auth/contacts');

        const response=await signInWithPopup(auth, providerGoogle);
        //credenciales: acceso al servicio (proveedor).
        //credentialFromResult regresa todas las credenciales (access token, refresh token)
        const credentials=GoogleAuthProvider.credentialFromResult(response);
        const {emailVerified, phoneNumber, photoURL, uid, email, displayName}=response.user;
        console.log(response);
        console.log(credentials);
        // const user=response.user;
        return {
            error: false,
            user: {emailVerified, phoneNumber, photoURL, uid, email, name: displayName},
            credentials
        };
    } catch (err) {
        return {
            error: true,
            message: getTranscriptionCodeErrorFirebase(err),
            closePopup: err.code === 'auth/popup-closed-by-user'
        };
    };  
};

export const signInWithGitHubProvider=async ()=>{
    const providerGitHub=new GithubAuthProvider();
    try {
        providerGitHub.addScope('repo');
        const response=await signInWithPopup(auth, providerGitHub);
        const credentials=GithubAuthProvider.credentialFromResult(response);
        console.log({response, credentials});
    } catch (err) {
        return {
            error: true,
            message: getTranscriptionCodeErrorFirebase(err),
        };
    };
};

//OBSERVER
//se tendrá la sesión aunque se recargue la página. Firebase sigue manteniendo la sesión activa
export const observerAuthSesion=(observerAction)=>{//mandar a llamar en AppRouter
    unsuscribe=onAuthStateChanged(auth, (user)=>{
        console.log(user);//muestra el usuario que tiene sesión, y null si no hay usuario
        if(user) {
            const {emailVerified, phoneNumber, photoURL, uid, email, displayName}=user;
            observerAction({
                emailVerified, phoneNumber, photoURL, uid, email, name: displayName
            });
        };
    });
};

//PARA CERRAR SESIÓN
//se necesita hacer que el unsuscribe deje de escuchar, es necesario que la f del observer quede arriba
//para que en esta f, unsuscribe tome el valor la f observer, ya que si primero se pone esta f, 
//marcará un error diciendo que unsuscribe no es una f
export const logOutUser=async ()=>{//mandar a llamar en auth.actions
    try {
        await signOut(auth);
        unsuscribe();
        return {
            error: false
        };
    } catch (err) {
        return {
            error: true,
            message: getTranscriptionCodeErrorFirebase(err)
        };
    };
};
