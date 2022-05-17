import { SnackbarProvider } from 'notistack';
import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import './sass/main.scss';
import store from './store';

const MovieSeb = () => {
  return (
    <Provider store={store}>
      <SnackbarProvider  maxSnack={4}>
        <AppRouter />
      </SnackbarProvider>
    </Provider>
  );
};

export default MovieSeb;