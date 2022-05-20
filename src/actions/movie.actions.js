import { selectedMovieAction } from "@reducers/movie.reducer";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMoviePageData } from "@services/movies/collections";
// import { TYPES } from "@types/reduxTypes";
import { UI } from "@types/uiTypes";
import { endLoading, startLoading, startOpenSnack } from "./ui.actions";

//Reemplazará a selectedMovie
export const selectedMovieThunk=createAsyncThunk( 
    'movies/getSelectedMovie', 
    async ({idMovie}, {dispatch}) => {
    // async (idMovie, thunkApi) => {
        dispatch(startLoading());
        try {
            dispatch(endLoading());
            const response=await getMoviePageData(idMovie);
            // thunkApi.dispatch
            // thunkApi.getState
            return {
                ...response.details,
                similars: response.similar.results, //[]
                watchProviders: response.watchProviders.results, //[]
            };
        } catch (error) {
            dispatch(endLoading());
            throw new Error(error);
        };
    },
    // {
    //     condition: ({idMovie}, thunkApi)=>{
    //         const state=thunkApi.getState();
    //         console.log(state);
    //         // return Boolean(state.auth?.uid);
    //     },
    // }
);

// selectedMovieThunk.f

//el dispatch es lo que regresa thunk
export const selectedMovie=(idMovie)=>(dispatch, getState)=>{

    dispatch(startLoading());
    return getMoviePageData(idMovie) //función asíncrona
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

//Para redux anterior
// const selectedMovieAction=payload=>({
//     type: TYPES.THE_MOVIE_DB.SELECTED,
//     payload
// });