import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {//mandarlo a llamar en DashboardRoutes
    //Renderizará componentes children
    //authRouter: rutas públicas, DashboardRouter: rutas privadas, no importa donde se mande a llamar
    //este componente

    //para saber que hay una sesión: al hacer un login, en redux [AUTH] Login se observan los datos 
    //recabados, se podría usar cualquiera, usand uid
    const {uid}=useSelector(state=>state.auth);
    //replace evita que se vaya hacia atrás en la navegación
    //si no hay login, entonces mándalo a la ruta del login
  return uid ? children : <Navigate to='/auth/login' replace />;
};

export default PrivateRoutes;