// import thunk from 'redux-thunk';
// import {applyMiddleware, compose, createStore} from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducers } from './rootReducers';
import { configureStore } from '@reduxjs/toolkit';

/*
npm i redux
    react-redux
    redux-devtools-extension
    redux-thunk
*/

/*El initialState servirá para las pruebas */

const initStore=(initialState)=>{

    /*Si en las vars de entorno: ENVIROMENT=development : se activan las devTools */

    const isDevelopment=process.env.ENVIROMENT==='development';
    // const middlewares=[thunk];
    // const middlewaresEnhancer=applyMiddleware(...middlewares);
    // const enhancers=[middlewaresEnhancer];
    // const composeEnhancers=isDevelopment ? composeWithDevTools(...enhancers) : compose(...enhancers);
    // return createStore(rootReducers, initialState, composeEnhancers);
    return configureStore({
        reducer: rootReducers,
        devTools: isDevelopment,
        preloadedState: initialState
    });
};

export const store=initStore();//para las pruebas se hacen las dos exportaciones
export default store;

// store.dispatch
// store.getState