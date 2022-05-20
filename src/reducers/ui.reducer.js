import { createSlice } from "@reduxjs/toolkit";
import { TYPES } from "../types/reduxTypes";
import { UI } from "../types/uiTypes";

const initialState={
    snack: {
        anchorOrigin: UI.SNACK.POSITION.TOP_RIGHT,
        message: '',
        type: 'info',
        open: false,
        duration: 3000
    },
    loading: false
};

//Para redux anterior
// export const uiReducer=(state= initialState, action)=>{
//     switch (action.type) {
//         case TYPES.UI.SNACK.OPEN:
//             //en el payload se pondrá lo que cambia
//             return {
//                 ...state,
//                 snack: {
//                     ...state.snack,
//                     ...action.payload,
//                     open: true,
//                 }
//             };

//         case TYPES.UI.SNACK.CLOSE:
//             return {
//                 ...state,
//                 snack: {
//                     ...state.snack,
//                     open: false,
//                 }
//             };
        
//         case TYPES.UI.LOADING.ON:
//             return {
//                 ...state,
//                 loading: true
//             };

//         case TYPES.UI.LOADING.OFF:
//             return {
//                 ...state,
//                 loading: false
//             };

//         default:
//             return state;    
//     };
// };

//mandar a llamar en rootReducer.js

export const uiReducerSlice=createSlice({
    // name: 'uiSliceReducer',
    //implementación con Immer, permite mutabilidad 
    name: 'ui',
    initialState,
    reducers: {
        //sin flecha
        //No está permitido mutar el estado y tener el return, es una de las dos opciones: 
        //se muta o se simula que se muta
        openSnackAction(state, action) {
            console.log(action)
            // return {
            //     ...state,
            //     snack: {
            //         ...state.snack,
            //         ...action.payload,
            //         open: true,
            //     }
            // };
            //al permitir mutabilidad, ya no se necesita el return de arriba:
            state.snack.open= true;
            //se pueden modificar varias propiedades que vengan en el payload
            state.snack.anchorOrigin=action.payload.anchorOrigin
            state.snack.message=action.payload.message
            state.snack.duration=action.payload.duration
            state.snack.open=true
            state.snack.type=action.payload.type
        },
        closeSnackAction(state, action) {
            // return {
            //     ...state,
            //     snack: {
            //         ...state.snack,
            //         open: false,
            //     }
            // };
            state.snack.open= false;
            //modificando más estados:
            // state.snack.type= UI.SNACK.TYPE.WARNING
        },

        loadingOn(state, action) {
            // return {
            //     ...state,
            //     loading: true
            // };
            state.loading= true;
        },

        loadingOff(state, action) {
            // return {
            //     ...state,
            //     loading: false
            // };
            state.loading= false;
        }
    }
});

//Extrayendo las acciones e importando en ui.actions.js
export const {
    openSnackAction, closeSnackAction, loadingOn, loadingOff
}=uiReducerSlice.actions;

//las acciones definidas dentro del reducerSlice en el obj reducers
// uiReducerSlice.actions.openSnackAction({
//     snack: {open: true}
// });

// uiReducerSlice.actions.closeSnackAction({

// });