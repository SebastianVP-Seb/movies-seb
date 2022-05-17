import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavbarDashboard from '@components/dashboard/NavbarDashboard';
import Navbar from '@components/Navbar';
import PrivateRoutes from './PrivateRoutes';
import UserVerifiedRoutes from './UserVerifiedRoutes';
import MovieSelect from '@pages/dashboard/MovieSelect';

const DashboardRouter = () => {
  return (
    <PrivateRoutes>
      <Navbar itemRenderComponents={
        <>
          <NavbarDashboard />
        </>} 
      />
      <Routes>
        {/* En el path se pone lo que sigue de dashboard/  */}
        {/* <Route path='main' element={<Main />} /> */}
        <Route path='*' element={<UserVerifiedRoutes />} />
        <Route path='email-verified' element={<h2>Verifica el email</h2>} />
        {/* <Route path=':idMovie' element={<MovieSelect />} /> */}
      </Routes>
    </PrivateRoutes>
  );
};

export default DashboardRouter;