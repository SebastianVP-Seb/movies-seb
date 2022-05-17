import Main from '@pages/dashboard/Main';
import React from 'react';
import {useSelector} from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

const UserVerifiedRoutes = () => {

    const {emailVerified}=useSelector(state=>state.auth);

    return emailVerified 
    ? (
        <Routes>
            <Route path='main' element={<Main />} />
            <Route path='details' element={<h3>details</h3>} />
            <Route path='information' element={<h3>information</h3>} />
            <Route path='about' element={<h3>about</h3>} />
            <Route path='contact' element={<h3>Contact us</h3>} />
            {/* Más rutas...  */}
        </Routes>
    )
    : <Navigate to='/dashboard/email-verified' />
  ;
};

export default UserVerifiedRoutes;