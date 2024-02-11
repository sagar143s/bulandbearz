import React from 'react';
import { Box, Container, Grid, Typography, Link as MuiLink } from '@mui/material';
import Image from 'next/image';
import logo from '../../../../public/logos/logowhite.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#32385a', color: 'white', py: 3, textAlign: 'right' }}>
    <Container maxWidth="lg">
      <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ padding: "10px 0 0" }} dir='rtl'>
        <Grid item xs={12} sm={6} md={3} lg={3} sx={{ height: "60px" }}>
          <Typography variant="h6" gutterBottom>
            <Image src={logo} alt='Bull And Bearz' style={{ maxWidth: "180px", height: "auto" }} />
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} sx={{ height: "150px" }}>
          <Typography variant="h6" gutterBottom>
            تعرف علينا
          </Typography>
          <Grid sx={{ lineHeight: '2rem' }}>
            <MuiLink href="./" color="inherit" sx={{ display: 'block', textDecoration: "none" }}>الرئيسية</MuiLink>
            <MuiLink href="/about" color="inherit" sx={{ display: 'block', textDecoration: "none" }}>من نحن</MuiLink>
            {/* <MuiLink href="#" color="inherit" sx={{ display: 'block', textDecoration: "none" }}>عيادة الصحة المالية</MuiLink> */}
            <MuiLink href="/contact" color="inherit" sx={{ display: 'block', textDecoration: "none" }}>تواصل معنا</MuiLink>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} sx={{ height: "150px" }}>
          <Typography variant="h6" gutterBottom>
            وسائل التواصل الاجتماعي
          </Typography>
          <Grid sx={{ lineHeight: '2rem' }}>
          <MuiLink  href="https://t.me/BullandBearzWelcome" color="inherit" sx={{ display: 'block' ,textDecoration:"none" ,'&:hover': {textDecoration: 'underline'},}}><Typography>إنستغرام</Typography></MuiLink>
            {/* <MuiLink href="#" color="inherit" sx={{ display: 'block' ,textDecoration:"none" ,'&:hover': {textDecoration: 'underline'},}}><Typography>فيسبوك</Typography></MuiLink> */}
            <MuiLink href="mailto:bullandbearz.ae@gmail.com"color="inherit" sx={{ display: 'block' ,textDecoration:"none" ,'&:hover': {textDecoration: 'underline'},}}><Typography>يوتيوب</Typography></MuiLink>
            <MuiLink href="https://api.whatsapp.com/+971504664433"color="inherit" sx={{ display: 'block' ,textDecoration:"none" ,'&:hover': {textDecoration: 'underline'},}}><Typography>تويتر</Typography></MuiLink>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} sx={{ height: "150px" }}>
          <Typography variant="h6" gutterBottom>
            السياسات
          </Typography>
          <Grid sx={{ lineHeight: '2rem' }}>
            <MuiLink href="./Terms-condition" color="inherit" sx={{ display: 'block', textDecoration: "none" }}>الشروط والأحكام</MuiLink>
            <MuiLink href="./privacy-policy"color="inherit" sx={{ display: 'block', textDecoration: "none" }}>سياسة الخصوصية</MuiLink>
            <MuiLink href="./faq" color="inherit" sx={{ display: 'block', textDecoration: "none" }}>الأسئلة الشائعة</MuiLink>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </Box>
);
};

export default Footer;