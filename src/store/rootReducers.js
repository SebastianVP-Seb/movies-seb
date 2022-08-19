// import {combineReducers} from 'redux';
import { movieReducer, moviesSlice } from '@reducers/movie.reducer';
import { themeSliceReducer } from '@reducers/themeReducer';
import { authReducer, createReducerAuth } from '../reducers/authReducer';
import { uiReducer, uiReducerSlice } from '../reducers/ui.reducer';

// const reducerUI=uiReducerSlice.reducer;

const reducers={
    //es lo mismo que poner: authReducer, porque ya es un obj
    // 'auth': authReducer,
    'auth': createReducerAuth,
    // 'ui': uiReducer,
    [uiReducerSlice.name]: uiReducerSlice.reducer,
    // 'movies': movieReducer,
    [moviesSlice.name]: moviesSlice.reducer,
    // 'authReducerNuevo': createReducerAuth
    // reducerUI,
    [themeSliceReducer.name]: themeSliceReducer.reducer
};

//Ya no se necesita de combineReducers
// export const rootReducers=combineReducers(reducers);
export const rootReducers=reducers;
