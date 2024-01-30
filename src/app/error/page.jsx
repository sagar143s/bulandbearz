"use client";
import React from 'react';
import { Container, Typography, Paper, Box, Button } from '@mui/material';
import Link from 'next/link';
import Footer from '@/components/English/Footer/Footer'
import FooterArabic from '@/components/Arabic/Footer/Footer';
import { useLanguage } from '@/context/LanguageContext'
import BottomBar from '@/components/English/bottombar/bottom';
import BottomBarArabic from '@/components/Arabic/bottombar/bottom';

const ErrorPage = ({ statusCode }) => {
  const { language } = useLanguage();

  return (
    <Box sx={{ height: "90vh",overflow:'auto' }}>
    <Box >
      <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center',height:'68dvh' }}>
    <Paper elevation={6} sx={{ p: 4, textAlign: 'center', maxWidth: 600, borderRadius: 12, background: '#f0f0f0',paddingTop:"4rem",paddingBottom:"5rem",border:"1px solid #32385a",boxShadow:' rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' }}>
    
        {language === 'english' ? <Typography variant="h2" color="error" gutterBottom sx={{fontWeight:"bold"}}>
          {statusCode || '404 ERROR'}
        </Typography> : <Typography variant="h2" color="error" gutterBottom dir='rtl' sx={{fontWeight:"bold"}}>
          {statusCode || '404 خطأ'}
        </Typography>}
      
        {language === 'english' ? <Typography variant="h5" color="error" paragraph>
          {statusCode ? `An error ${statusCode} occurred on the server` : 'Something went wrong.'}
        </Typography> : <Typography variant="h5" color="error" paragraph>
          {statusCode ? `An error ${statusCode} occurred on the server` : 'حدث خطأ.'}
        </Typography>}
        
        {language === 'english' ? <Typography variant="body1" paragraph sx={{color:"#32385a"}}>
          The page you are looking for might be under construction or does not exist.
        </Typography> : <Typography variant="body1" paragraph sx={{color:"#32385a"}}>
          الصفحة التي تبحث عنها قد تكون قيد الإنشاء أو غير موجودة.
        </Typography>}



        {language === 'english' ? <Link href='./' style={{}}>
        <Button
        
          variant="contained"
          color="primary"
          size="large"
          sx={{ background: 'linear-gradient(to right, #141e30, #243b55)',border:'2px solid #243b55',marginTop:"3rem" , '&:hover': { background: '#fff',color:"#32385a",border:'2px solid #32385a',fontWeight:'bold' } }}
        >
          Return to Home
        </Button>
        </Link> : <Link href='./' style={{}}>
        <Button
        
          variant="contained"
          color="primary"
          size="large"
          sx={{ background: 'linear-gradient(to right, #141e30, #243b55)',border:'2px solid #243b55',marginTop:"3rem" , '&:hover': { background: '#fff',color:"#32385a",border:'2px solid #32385a',fontWeight:'bold' } }}
        >
         العودة إلى الصفحة الرئيسية
        </Button>
        </Link>}

   
      </Paper>
      </Container>


    </Box>
    {language === 'english' ? <Footer /> : <FooterArabic />}
      {language === 'english' ? <BottomBar /> : <BottomBarArabic />}
    </Box>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
