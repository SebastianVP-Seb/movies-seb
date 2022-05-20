import { createAction } from "@reduxjs/toolkit";
import {
    createUser,
    loginUser,
    logOutUser,
    observerAuthSesion,
    signInWithGitHubProvider,
    signInWithGoogleProvider
} from "../services/firebase/auth";
import { TYPES } from "../types/reduxTypes";
import { UI } from "../types/uiTypes";
import { endLoading, startLoading, startOpenSnack } from "./ui.actions";

//Tarea de Thunk.
//Al regresarle una f luego de formLogin, recibe dos argumentos: dispatch y state
export const startLoginUser=formLogin=>dispatch=>{
    dispatch(startLoading());
    // dispatch(authLoginAction({
    //     id: 'seb',
    //     name: 'Jade'
    // }));
    loginUser(formLogin)
        .then(response=>{
            if(response.error) {
                dispatch(startOpenSnack({
                    message: response.message, type: UI.SNACK.TYPE.ERROR
                }));
            } else {
                dispatch(loginAction(response.user));
                dispatch(startOpenSnack({message: `Bienvenid@ ${response.user.name}`, type: UI.SNACK.TYPE.SUCCESS}));
            };
        })
        .finally(()=>dispatch(endLoading()));
};

//Inicio se sesión con Google
export const startLoginWithGoogle=()=>dispatch=>{
    dispatch(startLoading());
    signInWithGoogleProvider()
        .then((response)=>{
            if(response.error) {
                dispatch(startOpenSnack({
                    message: response.message, 
                    type: response.closePopup ? UI.SNACK.TYPE.INFO : UI.SNACK.TYPE.ERROR}));
            } else {
                dispatch(loginAction({...response.user, ...response.credentials}));
                const [firstName]=response.user.name.split(' ');
                dispatch(startOpenSnack({message: `Bienvenid@ ${firstName}`, type: UI.SNACK.TYPE.SUCCESS}));
            }}
        )
        .finally(()=>{
            dispatch(endLoading());
        });
};

export const startLoginWithGitHub=()=>dispatch=>{
    dispatch(startLoading());
    signInWithGitHubProvider()
        .then((response)=>{
            if(response.error) {
                dispatch(startOpenSnack({
                    message: response.message, 
                    type: response.closePopup ? UI.SNACK.TYPE.INFO : UI.SNACK.TYPE.ERROR}));
            } else {
                dispatch(loginAction({...response.user, ...response.credentials}));
                const [firstName]=response.user.name.split(' ');
                dispatch(startOpenSnack({message: `Bienvenid@ ${firstName}`, type: UI.SNACK.TYPE.SUCCESS}));
            }}
        )
        .finally(()=>{
            dispatch(endLoading());
        });
};

export const startRegisterUser=formRegister=>dispatch=>{
    //comienzo del loader
    dispatch(startLoading());
    createUser(formRegister)
        .then(response=>{
            console.log(response)
            if(response.error){
                //hay un error, ya que error es true
                dispatch(startOpenSnack({message: response.message, type: UI.SNACK.TYPE.ERROR}));
            } else {
                dispatch(loginAction(response.user));
                const [firstName]=response.user.name.split(' ');
                dispatch(startOpenSnack({message: `Bienvenid@ ${firstName}`, type: UI.SNACK.TYPE.SUCCESS}));
            };
        })
        .finally(()=>{//se ejecuta siempre que termine una promesa
            //terminar loader
            dispatch(endLoading());
        });
};

//PARA EL OBSERVER
export const observerUserSesion=()=>dispatch=>{
    observerAuthSesion((user)=>{
        dispatch(startLoading());
        if(user.name) {
            dispatch(loginAction(user));
            const [firstName]=user?.name.split(' ');
            dispatch(startOpenSnack({message: `${firstName} ha regresado`, type: UI.SNACK.TYPE.SUCCESS}));
        }
    });
    dispatch(endLoading());
};

//PARA CERRAR SESIÓN
//Se le debe también avisar a Firebase que la sesión ha sido cerrada, en auth.js
export const startLogOut=()=>dispatch=>{
    //comienza loader
    dispatch(startLoading());
    logOutUser()
        .then(response=>{
            if(response.error) {
                dispatch(startOpenSnack({message: response.message, type: UI.SNACK.TYPE.ERROR}));
            } else {
                dispatch(logOutAction());
                dispatch(startOpenSnack({
                    message: 'sesion cerrada',
                    type: UI.SNACK.TYPE.SUCCESS
                }))
            };
        })
    .finally(()=>{
        //termina loader
        dispatch(endLoading());
    });
};

//DEFINICIÓN DE ACCIONES PARA createReducer
export const loginAction=createAction(TYPES.AUTH.LOGIN+'Nuevo');
export const logOutAction=createAction(TYPES.AUTH.LOGOUT);

//FIRMAS, para redux antigüo
// const loginAction=(payload)=>({
//     type: TYPES.AUTH.LOGIN,
//     payload
// });

// const logOutAction=()=>({
//     type: TYPES.AUTH.LOGOUT
// });