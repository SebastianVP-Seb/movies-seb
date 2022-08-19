import React, { useState } from 'react';
import AvatarCustom from '@components/AvatarCustom';
import { Menu, MenuItem } from '@mui/material';
import { useDispatch } from 'react-redux';
import { startLogOut } from '@actions/auth.actions';
import {Link as LinkMaterial } from '@mui/material';
import { Link as LinkReact} from 'react-router-dom';

const NavbarDashboard = () => {

  const dispatch=useDispatch();

  const [anchorEl, setAnchorEl]=useState(null);

  const handleOpenMenu=(e)=>setAnchorEl(e.currentTarget);
  const handleCloseMenu=()=>setAnchorEl(null);
  const handleCloseSesion=()=>dispatch(startLogOut());

  return (
    <>
      <AvatarCustom onClick={handleOpenMenu} />
      <Menu 
        open={Boolean(anchorEl)} 
        anchorEl={anchorEl}
        onClose={handleCloseMenu}
        sx={{marginTop: '1rem'}}
      >
        <MenuItem >
          <LinkMaterial component={LinkReact} to='/menuUser/profile' 
            sx={{textDecoration: 'none', textAlign: 'left'}}
            >Perfil
          </LinkMaterial>
        </MenuItem>
        <MenuItem>
        <LinkMaterial component={LinkReact} to='/menuUser/profile' 
            sx={{textDecoration: 'none', textAlign: 'left'}}
            >Configuración
          </LinkMaterial>
        </MenuItem>
        <MenuItem onClick={handleCloseSesion} >Cerrar sesión</MenuItem>
      </Menu>
    </>
  );
};

export default NavbarDashboard;