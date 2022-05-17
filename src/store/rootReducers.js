import { movieReducer } from '@reducers/movie.reducer';
import {combineReducers} from 'redux';
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/ui.reducer';

const reducers={
    //es lo mismo que poner: authReducer, porque ya es un obj
    'auth': authReducer,
    'ui': uiReducer,
    'movies': movieReducer
};

export const rootReducers=combineReducers(reducers);