// pages/index.js

import React from 'react';
import { Container, TextField, Button, Grid } from '@mui/material';

const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div  style={{ backgroundImage:'url("https://res.cloudinary.com/dxtzm8lcq/image/upload/v1705564801/Contact_j3iz1f.png")', backgroundSize: 'cover', width: '100%', minHeight: '50vh',padding:"10px 0 50px" }}>
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
        <Grid sx={{background:'#fff',padding:"50px 50px 30px",borderRadius:"15PX", boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'}}>
      <h1 style={{ textAlign: 'center', color: '#1976D2' }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          required
          type="email"
        />
        <TextField
          label="Message"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          required
        />
        <Button
          variant="contained"
          type="submit"
          style={{ marginTop: '20px',background:"#32385a" }}
        >
          Submit
        </Button>
      </form>
      </Grid>
    </Container>
    </div>
  );
};

export default Home;
