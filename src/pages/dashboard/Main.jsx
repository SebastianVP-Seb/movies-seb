import React from 'react';
import { Link } from 'react-router-dom';
import Imagen1 from '../../images/aurora.jpg'

const Main = () => {
  return (
      <>
        <h4>Main DASHBOARD</h4>
        <img src={Imagen1}  alt='hola' />
        <Link style={{margin: '1rem'}} to='/dashboard/main' >Ir a Login</Link>
        <Link style={{margin: '1rem'}} to='/dashboard/details' >Ir a details</Link>
        <Link style={{margin: '1rem'}} to='/dashboard/information' >Ir a information</Link>
        <Link style={{margin: '1rem'}} to='/dashboard/about' >Ir a about</Link>
        <Link style={{margin: '1rem'}} to='/dashboard/contact' >Ir a contact us</Link>
      </>
  );
};

export default Main;