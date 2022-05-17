import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import {Login, Register} from '@pages/auth';
import Navbar from '../components/Navbar';
import { Box, Button, Container } from '@mui/material';
import PublicRoutes from './PublicRoutes';

const AuthRouter = () => {
    //Para rutas anhidadas, ej: auth/login auth/register, la ruta general será auth
  return (
    <PublicRoutes>
      <Navbar itemRenderComponents={
        <Box component='nav'>
          <Button LinkComponent={NavLink} variant='button'
            to='/auth/login'
            className='navLink_btn'
          >Inicia sesión</Button> {" | "}
          <Button LinkComponent={NavLink} variant='button' color='primary'
            to='/auth/register'
            className='navLink_btn'
          >Regístrate</Button>
        </Box>
      }/>
      <Container component='main' maxWidth='sm'>
        <Routes>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
        </Routes> 
      </Container>
    </PublicRoutes>
  );
};

export default AuthRouter;