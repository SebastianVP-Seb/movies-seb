import { Button } from '@mui/material';
import React from 'react';

const GoogleBtn = (props) => {

    //en las props podría recibir un onClick, clase...
    const {children}=props;

  return (
    <Button
      // color='customColor'
      className='google_btn'
      {...props}
    >
        {children || 'Inicia sesión con Google'}
    </Button>
  );
};

export default GoogleBtn;