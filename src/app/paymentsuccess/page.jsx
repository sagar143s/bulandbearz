"use client"
import React from 'react';
import { Button, Typography, Container, Box } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useRouter } from 'next/navigation';

const PaymentSuccess = () => {
  const router = useRouter();

  const handleBackToBookings = () => {
    // Navigate back to the bookings page
    router.push('/cart');
  };

  return (
    <Container sx={{display:'flex',alignItems:'center',justifyContent:'center',height:'90dvh'}}>
      <Box textAlign="center" py={5}>
        <CheckCircleOutlineIcon color="primary" style={{ fontSize: 60 }} />
        <Typography variant="h3" gutterBottom>
          Payment Successful!
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Your transaction was completed successfully.
        </Typography>
        <Button onClick={handleBackToBookings} variant="contained" color="secondary" size="large" style={{ marginTop: 20,background:'#32385a' }}>
          Go Back to Bookings
        </Button>
      </Box>
    </Container>
  );
};

export default PaymentSuccess;
