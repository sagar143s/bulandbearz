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
    <Box sx={{height:'62dvh',display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <Paper elevation={5} style={{ padding: '30px', maxWidth: '400px', background: 'linear-gradient(to right, #141e30, #243b55)', border: '2px solid #32385a', borderRadius: '8px' }}>
    
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
        
        {language === 'english' ? <Typography variant="body1" paragraph sx={{color:"#fff"}}>
          The page you are looking for might be under construction or does not exist.
        </Typography> : <Typography variant="body1" paragraph sx={{color:"#fff"}}>
          الصفحة التي تبحث عنها قد تكون قيد الإنشاء أو غير موجودة.
        </Typography>}

        <Link href='./'><Button variant="contained"  style={{ marginTop: '20px',background:"#32385a" ,fontWeight:"bold"}}>
          {language === 'english' ? 'Go Home' : 'ارجع إلى البيت'}
        </Button>
        </Link>
      </Paper>


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
