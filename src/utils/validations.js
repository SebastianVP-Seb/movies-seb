import {isAlpha, isEmail, isStrongPassword, equals} from 'validator';

export const validateFormRegister=({name, email, password, confirmPassword})=>{
    const validName=isAlpha(name, 'es-ES', {ignore: ' '});
    const validEmail=isEmail(email);
    const validPassword=isStrongPassword(password, {
        minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1
    });
    const arePasswordsEquals=equals(confirmPassword, password);

    const isValidForm=validName && validEmail && validPassword && arePasswordsEquals;

    const messagesError=[];
    //sobre qué va, y el mensaje
    if(!validName) messagesError.name= 'Introduce un nombre válido';
    if(!validEmail) messagesError.email= 'Introduce un email válido';
    if(!validPassword) messagesError.password= 'Contraseña débil';
    if(!arePasswordsEquals) messagesError.confirmPassword= 'Las contraseñas no coinciden';

    console.log({isValidForm});
    console.log({messagesError});

    return {isValidForm, messagesError};
};

export const validateFormLogin=({email})=>{
    const validEmail=isEmail(email);
    const messagesError={};
    if(!validEmail) messagesError.email='Introduce un email válido';

    return {
        isValidForm: validEmail,
        messagesError
    };
};