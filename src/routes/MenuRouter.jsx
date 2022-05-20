import React from 'react';
import ProfileUser from '@pages/subMenu/ProfileUser';
import { Route, Routes } from 'react-router-dom';
import SettingsUser from '@pages/subMenu/SettingsUser';
import PrivateRoutes from './PrivateRoutes';
import Navbar from '@components/Navbar';
import NavbarDashboard from '@components/dashboard/NavbarDashboard';
import AvatarCustom from '@components/AvatarCustom';

const MenuRouter = () => {
  return (

    // <PrivateRoutes>
    <>
      <Navbar  />
      <Routes>
        <Route path='profile' element={<ProfileUser />} />
        <Route path='settings' element={<SettingsUser />} />
      </Routes>
    {/* </PrivateRoutes> */}
    </>
  );
};

export default MenuRouter;