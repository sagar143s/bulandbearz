"use client";
import { Box, Typography, TextField, Button, Container, Radio, ThemeProvider, createMuiTheme } from '@mui/material';
import React, { useState } from 'react';
import ContactUs from '../../../../public/contact1.jpg';
import Image from 'next/image';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [callRequest, setCallRequest] = useState('a');
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    return /^[0-9]{10}$/.test(phoneNumber);
  };

  const handleChange = (event) => {
    setCallRequest(event.target.value);
  };

  const handleSubmit = () => {
    const errors = {
      name: name ? '' : 'Name is required',
      email: validateEmail(email) ? '' : 'Invalid email address',
      phoneNumber: validatePhoneNumber(phoneNumber) ? '' : 'Invalid phone number',
      message: message ? '' : 'Message is required',
    };

    setFormErrors(errors);

    if (!Object.values(errors).some((error) => error !== '')) {
      // Handle form submission
    }
  };

  const theme = createMuiTheme({
    direction: 'rtl', // Set the text direction to right-to-left (RTL)
  });

  return (
    <Container style={{ padding: '25px 0 50px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '3rem' }} dir='rtl'>
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',padding:"20px" }}>
          <Box item xs={12} md={6} lg={6} sx={{ flex: 1, flexGrow: 1, height: '600px', width: '200px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '11px' }}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image src={ContactUs} fill style={{ borderRadius: '11px', objectFit: 'cover' }} alt='events' />
            </div>
          </Box>
        </Box>

        <Box item xs={12} md={6} lg={6}  sx={{ flex: 2, paddingLeft: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'space-between' }}>
          <Typography fontSize='25px' fontWeight='600' color='#021b79'>اتصل بنا</Typography>
          <Box sx={{ width: '100%', height: '2px', background: '#f3f3f3' }}></Box>
          <TextField
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputProps={{ style: { borderRadius: '8px', height: '40px', fontSize: '15px', width: '85%' } }}
            helperText={formErrors.name}
            error={formErrors.name !== ''}
          />
        <TextField
  type="text"
  placeholder="أدخل بريدك الإلكتروني"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  InputProps={{ style: { borderRadius: '8px', height: '40px', fontSize: '15px', width: '85%' } }}
  helperText={<span style={{ direction: 'rtl' }}>{formErrors.email}</span>}
  error={formErrors.email !== ''}
/>

          <TextField
            type="text"
            placeholder="أدخل رقم هاتفك"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            InputProps={{ style: { borderRadius: '8px', height: '40px', fontSize: '15px', width: '85%' } }}
            helperText={formErrors.phoneNumber}
            error={formErrors.phoneNumber !== ''}
          />
       <Typography fontSize='15px' fontWeight='500' color='#021b79'>طلب مكالمة؟</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Radio
                checked={callRequest === 'a'}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'A' }}
                sx={{
                  color: '#093028',
                  '&.Mui-checked': {
                    color: 'orange',
                  },
                }}
              />
              <Typography fontSize='13px' fontWeight='500' color='black'>نعم</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Radio
                checked={callRequest === 'b'}
                onChange={handleChange}
                value="b"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'B' }}
                sx={{
                  color: '#093028',
                  '&.Mui-checked': {
                    color: 'orange',
                  },
                }}
              />
              <Typography fontSize='13px' fontWeight='500' color='black'>لا</Typography>
            </Box>
          </Box>
          <TextField
            type="text"
            placeholder="أدخل الرسالة"
            multiline
            rows={6}
            maxRows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            InputProps={{ style: { borderRadius: '8px', fontSize: '15px', width: '85%' } }}
            helperText={formErrors.message}
            error={formErrors.message !== ''}
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ background: 'linear-gradient(to right, #141e30, #243b55)', borderRadius: '8px', height: '45px', textTransform: 'none', fontSize: '15px', width: '85%' }}
            disabled={Object.values(formErrors).some((error) => error !== '')}
          >
         إرسال
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
