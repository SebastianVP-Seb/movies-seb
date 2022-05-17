import React from 'react';

const GoogleBtn = (props) => {

    //en las props podría recibir un onClick, clase...
    const {children}=props;

  return (
    <button className='google_btn' type='button' {...props} >
        {children || 'Inicia sesión con Google'}
    </button>
  );
};

export default GoogleBtn;