import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Exe from '../assets/images/exe.png';


const HeroBanner = () => {
  return (
    <Box sx = {{
        mt: { xs: '70px'},
        ml: { sm: '50px'}
    }} position="relative" p='20px'>
        <Typography color='red' fontWeight='600' fontSize='50px' sx = {{ marginLeft: { lg: '6rem' }}}>
            Fitness Club
        </Typography>
        <Typography fontWeight='700' sx = {{ fontSize: { lg: '44px', sm: '40px'}, marginLeft: { lg: '6rem' }}} mb='30px' mt='30px' color='white'>
            Sweat, Smile <br /> and Repeat..!
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={3} sx = {{ marginLeft: { lg: '6rem' }}} color='white'>
            Check out the most effective exercises
        </Typography>
        <Button variant='contained' href="#exercises" sx = {{ marginLeft: { lg: '6rem' }, backgroundColor:'red'}}>Explore Exercises</Button>
        <Typography fontWeight={600} fontSize={200} color={'red'} sx= {{ opacity: 0.2, display: { lg: 'block', xs: 'none'}, marginTop: '-100px', textAlign:'end'}}>Exercises</Typography>
        <img src={Exe} alt="hero-image" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner