import React, { useState } from 'react';
import AvatarCustom from '@components/AvatarCustom';
import { Menu, MenuItem } from '@mui/material';
import { useDispatch } from 'react-redux';
import { startLogOut } from '@actions/auth.actions';

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
        <MenuItem >Perfil</MenuItem>
        <MenuItem>Configuración</MenuItem>
        <MenuItem onClick={handleCloseSesion} >Cerrar sesión</MenuItem>
      </Menu>
    </>
  );
};

export default NavbarDashboard;