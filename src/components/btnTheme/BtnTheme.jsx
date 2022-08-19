import React from 'react';
import { Button } from '@mui/material';
import { startPurpleTheme } from '@actions/theme.actions';
import { theme1 } from '../../theme';
import { useSelector } from 'react-redux';

const BtnTheme = () => {

  const {main, dark, light}=useSelector(state=>state.theme);
    console.log(main, dark, light)

  const handlePurpleChange=()=>{
    startPurpleTheme()
    console.log(startPurpleTheme())
    // console.log('hola')
    // theme1
  };

  const handlePinkChange=()=>{

  };

  const handleBlueChange=()=>{

  };

  return (
    <>
      <Button 
        onClick={handlePurpleChange}
        sx={{color: 'white', backgroundColor: 'black'}} >
        Purple
      </Button>
      <Button sx={{color: 'white', backgroundColor: 'black'}} >
        Pink
      </Button>
      <Button sx={{color: 'white', backgroundColor: 'black'}} >
        Blue
      </Button>
    </>
  );
};

export default BtnTheme;