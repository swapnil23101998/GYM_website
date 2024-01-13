import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/logo2.png';

function Navbar() {
  return (
   <Stack direction="row" justifyContent={"space-around"} sx={{ gap: { sm: '122px', xs: '48px'}, mt: { sm: '32px', xs: '20px'}, justifyContent: 'space-between'}} px="20px">
    <Link to="/">
    <img src={Logo} alt="logo" style={{ 'width': '60px', 'height': '60px', 'margin': '0 20px'}} />
    </Link>
    <Stack direction="row" gap="40px" fontSize="24px" >
        <Link to="/" style={{ 'textDecoration': 'none', 'color': 'white'}} >Home</Link>
        <a href="#exercises" style={{ 'textDecoration': 'none', 'color': 'white'}}>Exercises</a>
    </Stack>
   </Stack>
  )
}

export default Navbar