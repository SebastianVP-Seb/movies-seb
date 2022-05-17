import { Alert, Snackbar } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCloseSnack } from '../actions/ui.actions';

const SnackbarComponent = () => {

  const dispatch=useDispatch();
  
  const {anchorOrigin, message, type, open, duration}=useSelector(state=>state.ui.snack);

  const handleClose=()=>{
    dispatch(startCloseSnack());
  };

  return (
    <Snackbar
      anchorOrigin={anchorOrigin}
      onClose={handleClose}
      open={open}
      autoHideDuration={duration}
      sx={{marginTop: '3.5rem', marginRight: '2rem'}}
    >
      <Alert onClose={handleClose} severity={type} sx={{width: '100%'}}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarComponent;