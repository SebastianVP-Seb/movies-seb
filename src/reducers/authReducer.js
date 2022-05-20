import { loginAction, logOutAction } from "@actions/auth.actions";
import { createAction, createReducer } from "@reduxjs/toolkit";
import { TYPES } from "../types/reduxTypes";

const initialState= { };
// export const authReducer=(state=initialState, action)=>{
//     switch(action.type) {
//         case TYPES.AUTH.LOGIN:
//             return {
//                 ...state,
//                 ...action.payload,
//                 //para comprobar que si el email no está verificado, no se muestren las rutas protegidas
//                 //UserVerifiedRoutes
//                 // emailVerified: true
//             };
//         case TYPES.AUTH.LOGOUT:
//             return initialState;
//         default:
//             return state;
//     };
// };

//DEFINICIÓN DE ACCIONES PARA createReducer
// export const authLoginAction=createAction(TYPES.AUTH.LOGIN+'Nuevo');
// export const authlogOutAction=createAction(TYPES.AUTH.LOGOUT);

export const createReducerAuth=createReducer(initialState, (builder) => {
/*addCase('nombre de la acción, función') ; la f recibe el state y la acción, el cual es el reducer*/
    builder
        .addCase(loginAction, (state, action)=>{
            // console.log(action)
            //con la librería Immer se puede hacer:
            // console.log(state)
            // state=action.payload
            // console.log(state)

            return {
                ...state,
                ...action.payload
            }
        })
        .addCase(logOutAction, (state, action)=>{
            //ya no necesita del state y la action
            return initialState;
        })
});