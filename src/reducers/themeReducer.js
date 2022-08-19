import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    main: '#00e5ff',
    dark: '#00b8d4',
    light: '#84ffff',
    contrastText: '#fff',
};

export const themeSliceReducer=createSlice({
    name: 'theme',
    initialState,
    reducers: {
        selectPurpleAction(state) {
            state.main= '#651fff'
            state.dark='#311b92'
            state.light='#7c4dff'
        },
        selectBlueAction(state) {
            state.main='#00e5ff'
            state.dark='#00b8d4'
            state.light='#84ffff'
        },
        selectPinkAction(state) {
            state.main= '#f50057'
            state.dark= '#880e4f'
            state.light= '#ef5350'
        }
    }
});

export const {
    selectPurpleAction, selectBlueAction, selectPinkAction
}=themeSliceReducer.actions;