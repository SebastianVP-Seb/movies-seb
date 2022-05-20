import { AppBar, Box, Button, Toolbar } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import AppLogo from '../images/icons8-corona.png';

const Navbar = ({itemRenderComponents}) => {
  /*NavLink, comportamiento similar a Link, éste recibe la var isActive en sus propiedades children, 

  
  className y style */
  return (
    <AppBar position='static' elevation={2} >
      <Toolbar sx={{
        display: 'flex',
        justifyContent: 'space-around',
        color: 'white'
      }}>
        <Box component='img' src={AppLogo} sx={{width: '3rem'}} />
        <h4 className='title_navbar'>i Am Sebastian</h4>
        <Button sx={{color: 'white', backgroundColor: 'black'}} onCl >
          Change Theme
        </Button>
        {/* Permitirá renderizar varios componentes  */}
        {itemRenderComponents}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;