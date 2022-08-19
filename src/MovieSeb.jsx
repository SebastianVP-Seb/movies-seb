import React from 'react';
import { ThemeProvider } from '@mui/material';
import {theme1} from './theme';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import './sass/main.scss';
import store from './store';

const MovieSeb = () => {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme1} >
        <SnackbarProvider  maxSnack={4}>
          <AppRouter />
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default MovieSeb;