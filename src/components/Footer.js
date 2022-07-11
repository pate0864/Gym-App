import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1bg.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";



const Footer = () => (
  <Box mt="80px" bgcolor="#1d1d1d" >
    <Stack gap="40px" sx={{ alignItems: 'right' }} flexWrap="wrap" px="40px" pt="90px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '175px'}} />
    </Stack>
    
    <Typography color="#ffff" mt="-200px" ml="450px" fontSize="20px"> 

     <Stack style={{fontWeight: 'bold', fontSize:'30px'}} mb="20px"> Exercises </Stack>  

     All <br></br>
     Back <br></br>
     Cardio <br></br>
     Chest <br></br>
     Lower Arms <br></br>
     Lower Legs <br></br>
     </Typography>

     <Typography color="#ffff" mt="-180px" ml="650px" fontSize="20px">
     Neck <br></br>
     Shoulders <br></br>
     Upper Arms <br></br>
     Upper Legs <br></br>
     Waist 
     </Typography>

    <Typography variant="h5" sx={{ fontSize: { lg: '15px', xs: '10px' } }} mt="-75px" mr="200px" textAlign="right" pb="0px">
    <Box style={{fontWeight: 'bold', fontSize:'30px'}} color="#ffff" mt="-218px" mr="110px"> Follow Us </Box>
    <div className="social-container">
      <a
        href="https://www.youtube.com/"
        className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
    </Typography>
    <Typography variant="h5" sx={{ fontSize: { lg: '15px', xs: '10px' } }} mt="170px" textAlign="center" pb="40px" color="#ffff"> Copyright © 2022 Jupiter Fitness. All Rights Reserved.</Typography>
  </Box>
  
);

export default Footer;
