import React, { useState } from 'react';
import { startLoginUser, startLoginWithGitHub, startLoginWithGoogle } from '@actions/auth.actions';
import GoogleBtn from '@components/GoogleBtn';
import TextFieldPassword from '@components/TextFieldPassword';
import { Box, Grid, TextField, Typography, Link as LinkMaterial } from '@mui/material';
import {LoadingButton} from '@mui/lab';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { Link as LinkReact} from 'react-router-dom';
import GoogleLogo from '../../images/logo-de-google.svg';
import GitHubLogo from '../../images/icons8-github.svg';
import { validateFormLogin } from '../../utils/validations';
import { signInWithGitHubProvider, signInWithGoogleProvider } from '@services/firebase/auth';

export const Login = () => {

  const {loading}=useSelector(state=>state.ui);

  const dispatch=useDispatch();
  const [errorForm, setErrorForm]=useState({name: '', email: ''});

  const {enqueueSnackbar}=useSnackbar();

  const handleSubmit=(e)=>{
    e.preventDefault();
    const form=Object.fromEntries(new FormData(e.target));
    const {isValidForm, messagesError}=validateFormLogin(form);
    setErrorForm({...errorForm, ...messagesError});
    if(isValidForm) {
      // dispatch
      dispatch(startLoginUser(form));
    } else {
      enqueueSnackbar(`No se puede iniciar sesión`, {variant: 'error', preventDuplicate: true});
    }
  };

  //INICIO DE SESIÓN CON GOOGLE
  const handleLoginWithGoogle=()=>{
    // signInWithGoogleProvider();
    dispatch(startLoginWithGoogle());
  };

  const handleLoginWithGitHub=()=>{
    // signInWithGitHubProvider();
    dispatch(startLoginWithGitHub());
  };

  return (
    <Box sx={{marginTop: 3 }}>
      <Typography component='h4' variant='h4' sx={{fontFamily: 'graff2', textAlign: 'center', letterSpacing: '.3rem'}}>
        <span className='flecha_a'>B</span> Inicia Sesión <span className='flecha_a'>J</span></Typography>
      <Box component='form'  onSubmit={handleSubmit} sx={{marginTop: 2}} noValidate>
      <TextField
          label='Email'
          name='email'
          type='email'
          color='secondary'
          autoComplete='off'
          required
          autoFocus
          fullWidth
          margin='normal'
          helperText={errorForm.email}
          error={Boolean(errorForm.email)}
        />
        <TextFieldPassword label='Contraseña' name='password'
          helperText={errorForm.password}
          error={Boolean(errorForm.password)}
        />
        <LoadingButton 
          loading={loading}
          variant="outlined" 
          color='secondary' 
          type='submit' 
          // boxShadow
          sx={{marginY: 2, boxShadow: '2rem 2 2 rgba(#0000, .4)' }} 
          fullWidth
        >Inicia sesión</LoadingButton>
        <Grid container justifyContent='center'>
          <Grid item>
            <LinkMaterial component={LinkReact} to='/auth/register' variant='h6' 
              sx={{fontSize: '1rem', textDecoration: 'none', textAlign: 'left', color: '#000',
              padding: '.4rem 1rem', marginBottom: '4rem',
            }}
            >
              Regístrate
            </LinkMaterial>
          </Grid>
        </Grid>
        <GoogleBtn onClick={handleLoginWithGoogle} >
          <img src={GoogleLogo} className='google_logo' />
          Inicia sesión con Google
        </GoogleBtn>
        <GoogleBtn onClick={handleLoginWithGitHub} >
          <img src={GitHubLogo} className='google_logo' />
          Inicia sesión con GitHub
        </GoogleBtn>
      </Box>
    </Box>
  );
};
