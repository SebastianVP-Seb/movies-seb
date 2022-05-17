import { getMoviePageData } from "@services/movies/collections";
import { TYPES } from "@types/reduxTypes";
import { UI } from "@types/uiTypes";
import { endLoading, startLoading, startOpenSnack } from "./ui.actions";

//el dispatch es lo que regresa thunk
export const selectedMovie=(idMovie)=>dispatch=>{

    dispatch(startLoading());
    return getMoviePageData(idMovie)
        .then((response)=>{
            console.log(response)
            if (response.success) {
                dispatch(selectedMovieAction({
                    ...response.details,
                    similars: response.similar.results, //[]
                    watchProviders: response.watchProviders.results, //[]
                }))
            }
        })
        .catch((error)=>{
            console.log(error)
            dispatch(startOpenSnack({message: `No se pudo cargar el elemento: ${error.message}`, 
                type: UI.SNACK.TYPE.ERROR}))
        })
        .finally(()=>{
            dispatch(endLoading())
        })
};

const selectedMovieAction=payload=>({
    type: TYPES.THE_MOVIE_DB.SELECTED,
    payload
});