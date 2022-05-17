import React, { useMemo } from 'react';
import { Avatar, Tooltip } from '@mui/material';
import { useSelector } from 'react-redux';
import { getNameInitials } from '../utils/helpers';

const AvatarCustom = (props) => {
  /*Current target, elemento que ha sido agregado hacia el clickque fue lanzado */
  /*Tooltip permite agregar un title al elemento, este no es propiio de MUI, lo puede recibir 
  cualquier elemento html */

  //El handleOpenMenu, ya llega por props
  // const {handleOpenMenu} = props;
  
    const {name, photoURL}=useSelector(state=>state.auth);
    const nameInitials=useMemo(()=>getNameInitials(name),[name]);

    //patrón para ejecutar props
    const avatarProps=useMemo(()=>
      photoURL
        ? {...props, src: photoURL, alt: name, sx: {cursor: 'pointer'}}
        : {...props, sx: {cursor: 'pointer'}, children: nameInitials}
    );
  return (
    <Tooltip title='Menú' >
      <Avatar {...avatarProps} />
      {/* <Avatar onClick={handleOpenMenu} >
        {nameInitials}
      </Avatar> */}
    </Tooltip>
  );
};

export default AvatarCustom;