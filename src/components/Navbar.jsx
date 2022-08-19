import React from 'react';
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import AppLogo from '../images/icons8-corona.png';
import {Link as LinkMaterial } from '@mui/material';
import { Link as LinkReact} from 'react-router-dom';
import BtnTheme from './btnTheme/BtnTheme';

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
        <LinkMaterial 
          component={LinkReact}
          to='/'
          sx={{textDecoration: 'none', textAlign: 'left'}}
        >
          <Box component='img' src={AppLogo} sx={{width: '3rem'}}/>
        </LinkMaterial>
        <h4 className='title_navbar'>i Am Sebastian</h4>
        <BtnTheme />
        {/* Permitirá renderizar varios componentes  */}
        {itemRenderComponents}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;