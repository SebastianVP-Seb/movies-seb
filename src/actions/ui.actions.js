import { TYPES } from "../types/reduxTypes";
import { UI } from "../types/uiTypes";

export const startOpenSnack=(params)=>dispatch=>{
    const {anchorOrigin= UI.SNACK.POSITION.TOP_RIGHT, message, type= 'info', duration= 3000} = params;
    dispatch(openSnackAction({anchorOrigin, message, type, duration}));
};

export const startCloseSnack=()=>dispatch=>{
    dispatch(closeSnackAction());
};

export const startLoading=()=>(dispatch, getState)=>{
    const {loading}=getState().ui;
    //si loading es falso: ejecuta en On
    loading ||dispatch(loadingOn());
};

export const endLoading=()=>(dispatch, getState)=>{
    const {loading}=getState().ui;
    //si loading es true, ejecuta el Off
    loading && dispatch(loadingOff());
};

const openSnackAction=payload=>({
    type: TYPES.UI.SNACK.OPEN,
    payload
});

const closeSnackAction=payload=>({
    type: TYPES.UI.SNACK.CLOSE,
    payload
});

const loadingOn=()=>({
    type: TYPES.UI.LOADING.ON
});

const loadingOff=()=>({
    type: TYPES.UI.LOADING.OFF
});