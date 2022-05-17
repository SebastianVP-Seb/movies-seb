import thunk from 'redux-thunk';
import {applyMiddleware, compose, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducers } from './rootReducers';

/*
npm i redux
    react-redux
    redux-devtools-extension
    redux-thunk
*/

/*El initialState servirá para las pruebas */

const configureStore=(initialState)=>{
    const isDevelopment=process.env.ENVIROMENT==='development';
    const middlewares=[thunk];
    const middlewaresEnhancer=applyMiddleware(...middlewares);
    const enhancers=[middlewaresEnhancer];
    const composeEnhancers=isDevelopment ? composeWithDevTools(...enhancers) : compose(...enhancers);
    return createStore(rootReducers, initialState, composeEnhancers);
};

const store=configureStore();
export default store;