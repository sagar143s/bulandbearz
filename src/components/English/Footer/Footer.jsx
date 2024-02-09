import React from 'react';
import { Box, Container, Grid, Typography, Link as MuiLink } from '@mui/material';
import Image from 'next/image';
import logo from '../../../../public/logos/logowhite.png';



const Footer = () => {
  return (
    <>
    <Box component="footer" sx={{ bgcolor: '#32385a', color: 'white', py: 3, }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center" alignItems="center" style={{padding:"10px 0 0"}}>
        <Grid item xs={12} sm={6} md={3} lg={3} sx={{height:"60px"}}>
            <Typography variant="h6" gutterBottom>
              <Image src={logo} alt='Bull And Bearz' style={{maxWidth:"180px",height:"auto"}}/>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} sx={{height:"180px"}}>
            <Typography variant="h6" gutterBottom>
              Get to Know Us
            </Typography>
            <Grid sx={{lineHeight:'2rem'}}>
            <MuiLink href="/" color="inherit" sx={{ display: 'block',textDecoration:"none",'&:hover': {textDecoration: 'underline'},}}>Home</MuiLink>
            <MuiLink href="/about" color="inherit" sx={{ display: 'block',textDecoration:"none",'&:hover': {textDecoration: 'underline'},}}>About Us</MuiLink>
            {/* <MuiLink href="#" color="inherit" sx={{ display: 'block',textDecoration:"none" }}>Financial Health Clinic</MuiLink> */}
            <MuiLink href="/contact" color="inherit" sx={{ display: 'block',textDecoration:"none",'&:hover': {textDecoration: 'underline'},}}>Connect With Us</MuiLink>
          </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} sx={{height:"180px"}}>
             <Typography variant="h6" gutterBottom>
         Social Media 
            </Typography>
          {/* <MuiLink href="#" color="inherit" sx={{ display: 'block' ,textDecoration:"none" ,'&:hover': {textDecoration: 'underline'},}}><InstagramIcon/></MuiLink>
            <MuiLink href="#" color="inherit" sx={{ display: 'block',textDecoration:"none" }}><FacebookIcon/> </MuiLink>
            <MuiLink href="#" color="inherit" sx={{ display: 'block' ,textDecoration:"none" ,'&:hover': {textDecoration: 'underline'},}}><YouTubeIcon/></MuiLink>
            <MuiLink href="#" color="inherit" sx={{ display: 'block' ,textDecoration:"none" ,'&:hover': {textDecoration: 'underline'},}}><TwitterIcon/></MuiLink> */}

           <Grid sx={{lineHeight:'2rem'}}>
            <MuiLink href="https://t.me/BullandBearzWelcome" target='blank' color="inherit" sx={{ display: 'block' ,textDecoration:"none" ,'&:hover': {textDecoration: 'underline'},}}><Typography>Telegram</Typography></MuiLink>
            <MuiLink href="#" color="inherit" sx={{ display: 'block' ,textDecoration:"none" ,'&:hover': {textDecoration: 'underline'},}}><Typography>Instagram</Typography></MuiLink>
            <MuiLink href="mailto:example@example.com" color="inherit" sx={{ display: 'block', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}><Typography>Email</Typography></MuiLink>
            <MuiLink href="https://api.whatsapp.com/+971504664433" color="inherit" sx={{ display: 'block', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}> <Typography>WhatsApp</Typography></MuiLink>
            </Grid>
          </Grid>
   
         
          <Grid item xs={12} sm={6} md={3} lg={3} sx={{height:"180px"}}>
             <Typography variant="h6" gutterBottom>
              Policies
            </Typography>
            <Grid sx={{lineHeight:'2rem'}}>
          <MuiLink href="./Terms-condition" color="inherit" sx={{ display: 'block' ,textDecoration:"none" ,'&:hover': {textDecoration: 'underline'},}}>Terms & Conditions</MuiLink>
            <MuiLink href="./privacy-policy" color="inherit" sx={{ display: 'block',textDecoration:"none",'&:hover': {textDecoration: 'underline'},}}>Privacy Policy</MuiLink>
            <MuiLink href="./faq" color="inherit" sx={{ display: 'block' ,textDecoration:"none" ,'&:hover': {textDecoration: 'underline'},}}>FAQs</MuiLink>
          </Grid>
          </Grid>
        
        </Grid>
        {/* <Grid container justifyContent="center" sx={{ mt: 4 }}>
          <Image src={logo} alt="Amazon Logo" width={250} height={60} />
        </Grid>
     */}
      </Container>
    </Box>
    
    </>
  );
};

export default Footer;
