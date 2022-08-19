import { Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const ProfileUser = () => {

  const {name, photoURL, email}=useSelector(state=>state.auth);

  return (
    <div>
      <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems:'center',
        marginTop:'1rem'
      }} >
        <Box component='p' sx={{fontFamily: 'graff1', fontSize:'3.5rem' }} color= 'primary'>Hola {name}!</Box>
        <Box component='img'src={photoURL} width='12rem' height='12rem' borderRadius='10rem' />
        <Box component='p' sx={{marginTop: '2rem', fontSize: '1.4rem'}} >Correo: {email}</Box>
      </Box>
    </div>
  );
};

export default ProfileUser;