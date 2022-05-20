import React, { useState } from 'react';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

const TextFieldPassword = ({label, name, error, helperText}) => {

    //Los valores se recuperarán del form
    const [showPassword, setShowPassword]=useState('');

    const handleClickShowPassword=()=>{
        setShowPassword(!showPassword);
    };

    return (
        <FormControl variant="outlined" fullWidth margin='normal' required>
            <InputLabel error={error}>{label}</InputLabel>
            <OutlinedInput 
                error={error}
                type={showPassword ? 'text' : 'password'}
                label={label}
                name={name}
                // color='secondary'
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                        >
                            {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                        </IconButton>
                    </InputAdornment>
                }
            />
            {helperText && <Typography sx={{
                margin: '.3rem 0 0 1rem',
                fontSize: '.77rem',
                color: error ? '#db2f2f' : 'inherit'
            }}>{helperText}</Typography>}
        </FormControl>
    );
};

export default TextFieldPassword;