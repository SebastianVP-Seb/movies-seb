import React, { useState } from 'react';
import { Link as LinkReact } from 'react-router-dom';
import TextFieldPassword from '@components/TextFieldPassword';
import { Box, Grid, Link as LinkMaterial , TextField, Typography } from '@mui/material';
import GoogleBtn from '@components/GoogleBtn';
import GoogleLogo from '../../images/logo-de-google.svg';
import { validateFormRegister } from '../../utils/validations';
import { useSnackbar } from 'notistack';
// import { createUser } from '../../services/firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { startLoginWithGoogle, startRegisterUser } from '../../actions/auth.actions';
import { LoadingButton } from '@mui/lab';

export const Register = () => {

  const dispatch=useDispatch();
  const {loading}=useSelector(state=>state.ui);

  const {enqueueSnackbar}=useSnackbar();

  const [errorMessages, setErrorMessages]=useState({
    name: '', email: '', password: '', confirmPassword:''
  });

  const handleSubmit=(e)=>{
    e.preventDefault();
    const form=Object.fromEntries(new FormData(e.target));
    console.log(form);
    const {messagesError, isValidForm}=validateFormRegister(form);
    setErrorMessages(messagesError);

    if(isValidForm) {
      // console.log('Formulario válido');
      // dispatch
      dispatch(startRegisterUser(form));
      // createUser(form);
      // enqueueSnackbar(`Hola ${form.name}!`, {variant: 'success', preventDuplicate: true});
    } else {
      enqueueSnackbar(`No se puede registrar`, {variant: 'error', preventDuplicate: true});
    }
  };

  const handleRegisterWithGoogle=()=>{
    dispatch(startLoginWithGoogle());
  };

  return (
    <Box sx={{marginTop: 3 }}>
      <Typography component='h4' variant='h4' sx={{fontFamily: 'graff2', textAlign: 'center', letterSpacing: '.3rem'}} >
      <span className='flecha_a'>B</span> Regístrate <span className='flecha_a'>J</span></Typography>
        <Box component='form'  onSubmit={handleSubmit} sx={{marginTop: 2}} noValidate >
          <TextField
            sx={{color: 'blueviolet'}}
            label='Nombre'
            name='name'
            type='text'
            color='secondary'
            autoComplete='off'
            required
            autoFocus
            fullWidth
            margin='normal'
            helperText={errorMessages.name}
            error={Boolean(errorMessages.name)}
          />
          <TextField
            label='Email'
            name='email'
            type='email'
            color='secondary'
            autoComplete='off'
            required
            fullWidth
            margin='normal'
            helperText={errorMessages.email}
            error={Boolean(errorMessages.email)}
          />
          <TextFieldPassword label='Contraseña' name='password'
            helperText={errorMessages.password}
            error={Boolean(errorMessages.password)}
          />
          <TextFieldPassword label='Confirmar Contraseña' name='confirmPassword'
            helperText={errorMessages.confirmPassword}
            error={Boolean(errorMessages.confirmPassword)}
          />

          <LoadingButton
            loading={loading}
            variant="outlined" 
            color='secondary' 
            type='submit' 
            // boxShadow
            sx={{marginY: 1, boxShadow: '2rem 2 2 rgba(#0000, .4)' }} 
            fullWidth
          >Regístrate</LoadingButton>

          <Grid container justifyContent='center'>
            <Grid item>
              <LinkMaterial component={LinkReact} to='/auth/login' variant='h6'
              sx={{fontSize: '1rem', textDecoration: 'none', textAlign: 'left', color: '#000',
                padding: '.4rem 1rem', marginBottom: '4rem',
              }} >
                Inicia sesión
              </LinkMaterial>
            </Grid>
          </Grid>

          <GoogleBtn onClick={handleRegisterWithGoogle} >
            <img src={GoogleLogo} className='google_logo' />
            Regístrate con Google
          </GoogleBtn>
        </Box>
    </Box>
  );
};
