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

export const uiReducer=(state= initialState, action)=>{
    switch (action.type) {
        case TYPES.UI.SNACK.OPEN:
            //en el payload se pondrá lo que cambia
            return {
                ...state,
                snack: {
                    ...state.snack,
                    ...action.payload,
                    open: true,
                }
            };

        case TYPES.UI.SNACK.CLOSE:
            return {
                ...state,
                snack: {
                    ...state.snack,
                    open: false,
                }
            };
        
        case TYPES.UI.LOADING.ON:
            return {
                ...state,
                loading: true
            };

        case TYPES.UI.LOADING.OFF:
            return {
                ...state,
                loading: false
            };

        default:
            return state;    
    };
};