import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoutes = ({children}) => {//mandar a llamar en AuthRouter
    const {uid}=useSelector(state=>state.auth);

  return uid ? <Navigate to='/dashboard/main' replace /> : children ;
};

export default PublicRoutes;