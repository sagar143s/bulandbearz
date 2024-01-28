'use client';
import React from 'react';
import { Container, Grid, Button, Typography } from '@mui/material';

const Reservation = () => {
  return (
    <div style={{ backgroundColor: '#3b4371', color: '#fff', padding: '50px 0', textAlign: 'center' }}>
      <Container maxWidth="xl">
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {/* Reservation Content */}
         

          {/* Book Now Button */}
          <Grid item xs={12} sm={2}>
            <Button
              sx={{
                background: '#fff',
                color: 'rgb(2, 77, 142)',
                fontWeight: 'bold',
                '&:hover': {
                  background: '#fff',
                  color: '#000',
                },
              }}
              variant="contained"
              color="secondary"
              fullWidth
            >
   احجز الآن 
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4">للحجوزات وتحديد المواعيدs</Typography>
            <Typography variant="body1">معلومات إضافية حول الحجز.</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Reservation;

