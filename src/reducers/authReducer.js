import { TYPES } from "../types/reduxTypes";

const initialState= {

};

export const authReducer=(state=initialState, action)=>{

    switch(action.type) {
        case TYPES.AUTH.LOGIN:
            return {
                ...state,
                ...action.payload,
                //para comprobar que si el email no está verificado, no se muestren las rutas protegidas
                //UserVerifiedRoutes
                // emailVerified: true
            };
        case TYPES.AUTH.LOGOUT:
            return initialState;
        default:
            return state;
    };
};