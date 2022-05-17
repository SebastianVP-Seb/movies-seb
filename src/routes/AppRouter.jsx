import { observerUserSesion } from '@actions/auth.actions';
import SnackbarComponent from '@components/SnackbarComponent';
import { CssBaseline } from '@mui/material';
import http from '@services/http';
import { request } from '@services/http/axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import AuthRouter from './AuthRouter';
import DashboardRouter from './DashboardRouter';
import '@services/movies/collections';//importando el archivo para que se ejecute
import { selectedMovie } from '@actions/movie.actions';
import MenuRouter from './MenuRouter';

const AppRouter = () => {
  // Este comp no se TextDecoderStream, ya está testeado por react-router-dom 
  //las rutas no se testean, sólo los componentes por sí solos
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(observerUserSesion());
    // http.getFromAxios({path: 'search/movie', params: {'query': 'fast'}})
    //   .then(console.log)
    // dispatch(selectedMovie('299537'));
  }, []);



  return (
    <BrowserRouter>
        <Routes>
          {/* El path es el nombre de la carpeta  */}
          {/* Rutas públicas: */}
          <Route path='auth/*' element={<AuthRouter />} />
          {/* Rutas privadas: */}
          <Route path='dashboard/*' element={<DashboardRouter />} />
          <Route path='menuUser/*' element={<MenuRouter />} />
          {/* Si no encuentra esa ruta, dirígete a auth/login  */}
          <Route path='*' element={<Navigate to='/auth/login' />} />
        </Routes>
        <SnackbarComponent />
        <CssBaseline />
    </BrowserRouter>
  );
};

export default AppRouter;