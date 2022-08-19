import React from 'react'
import { useSelector } from "react-redux"

const Hola=()=>{
    const {main, dark, light}=useSelector(state=>state.theme);
    console.log(main, dark, light)
    // Hola();  

    return (
        <></>
    )

};


    export const palette = {
    //     // mode: 'dark',
    //     //Morado
    //     primary: {
            main: '#651fff',
            dark: '#311b92',
            light: '#7c4dff',
    
            // main: '#00e5ff',
            // dark: '#00b8d4',
            // light: '#84ffff',
            // contrastText: '#fff',
            
            // main,
            // dark,
            // light
        }
    // }


