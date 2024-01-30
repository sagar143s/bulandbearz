"use client"
import React from 'react';
import { Button, Typography, Container, Box, Paper } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useRouter } from 'next/navigation';
import Footer from '@/components/English/Footer/Footer'
import FooterArabic from '@/components/Arabic/Footer/Footer';
import { useLanguage } from '@/context/LanguageContext'
import BottomBar from '@/components/English/bottombar/bottom';
import BottomBarArabic from '@/components/Arabic/bottombar/bottom';

const PaymentSuccess = () => {
  const { language } = useLanguage();
  const router = useRouter();

  const handleBackToBookings = () => {
    // Navigate back to the bookings page
    router.push('/cart');
  };

  return (
    <Box sx={{height: '90vh',overflow:"auto"}}>
    <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',height:"70dvh"  }}>
      <Paper elevation={6} sx={{ p: 4, textAlign: 'center', maxWidth: 600, borderRadius: 12, background: '#f0f0f0',paddingTop:"4rem",paddingBottom:"5rem",border:"1px solid #32385a",boxShadow:' rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' }}>

        <CheckCircleOutlineIcon color="success" style={{ fontSize: 80, marginBottom: 20 }} />
        <Typography variant="h4" gutterBottom>
          Payment Successful!
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
          Your transaction was completed successfully. Thank you for choosing our services!
        </Typography>
        <Button
          onClick={handleBackToBookings}
          variant="contained"
          color="primary"
          size="large"
          sx={{ background: 'linear-gradient(to right, #141e30, #243b55)',border:'2px solid #243b55' , '&:hover': { background: '#fff',color:"#32385a",border:'2px solid #32385a',fontWeight:'bold' } }}
        >
          Return to Bookings
        </Button>
      </Paper>
    </Container>
       {language === 'english' ? <Footer /> : <FooterArabic />}
       {language === 'english' ? <BottomBar /> : <BottomBarArabic />}
     </Box>
  );
};

export default PaymentSuccess;