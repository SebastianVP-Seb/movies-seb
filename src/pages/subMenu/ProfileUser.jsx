import { Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const ProfileUser = () => {

  const {name, photoURL, email}=useSelector(state=>state.auth);
  console.log({name});

  return (
    <div>
      <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems:'center',
        marginTop:'2rem'
      }} >
        <Box component='p' sx={{fontFamily: 'graff1', fontSize:'2.5rem'}} >Perfil de {name}</Box>
        <Box component='img'src={photoURL} width='12rem' height='12rem' borderRadius='10rem' />
        <Box component='p' sx={{marginTop: '2rem', fontSize: '1.4rem'}} >Tu correo registrado es: {email}</Box>
      </Box>
    </div>
  );
};

export default ProfileUser;