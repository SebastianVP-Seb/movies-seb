import { TYPES } from "@types/reduxTypes";

const initialState={
    selected: {
        //..details
        similars: {},
        watchProviders: {},
    },
    populars:{},
    // similars: {},
    trending: {
        day: {},
        week: {}
    }
};

//Estructura de la acción
// action: {
//     type: '',
//     payload: '{...details, watchProvider: {}, similars: {}'
// }

export const movieReducer=(state=initialState, action)=>{
    switch (action.type) {
        case TYPES.THE_MOVIE_DB.SELECTED: 
            return {
                ...state,
                selected: {
                    ...state.selected,
                    ...action.payload
                }
            };
        case TYPES.THE_MOVIE_DB.POPULAR:
            return {
                ...state,
                populars: {
                    ...state.populars,
                    ...action.payload
                }
            }
        case TYPES.THE_MOVIE_DB.TRENDING:
            return {
                ...state,
                trending: {
                    ...state.trending,
                    ...action.payload
                }
            }
        default:
            return state;
    };
};