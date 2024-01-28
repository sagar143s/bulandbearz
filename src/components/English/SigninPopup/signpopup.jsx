'use client';
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Typography,
  Link,
  Grid,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GoogleIcon from '@mui/icons-material/Google';

const SignupPopup = ({ open, onClose }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSignup = async() => {
    if (credentials.password !== credentials.confirmPassword) {
      setError('Passwords do not match');
      return;
    }else{
      const res = await fetch("/api/auth/register",{
        method:'POST',
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          credentials
        }),
      })
    const response = await res.json()
      if(res.status==200){
        onClose()
      }

    }

  };

  const handleGoogleSignup = () => {

  };

  

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs">
      <DialogTitle>
        Sign Up
        <IconButton onClick={onClose} style={{ position: 'absolute', right: 8, top: 8 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              name="username"
              value={credentials.username}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              name="phoneNumber"
              value={credentials.phoneNumber}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              name="confirmPassword"
              value={credentials.confirmPassword}
              onChange={handleInputChange}
            />
          </Grid>
          {error && (
            <Grid item xs={12}>
              <Typography color="error">{error}</Typography>
            </Grid>
          )}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSignup}
              sx={{ backgroundColor: '#4caf50' }}
            >
              Sign Up
            </Button>
          </Grid>
          <Grid item xs={12}>
          <Button
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={handleGoogleSignup}
              startIcon={<GoogleIcon/>}
              sx={{ borderColor: '#f44336', color: '#f44336' }}
            >
              Sign Up with Google
            </Button>
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Typography variant="body2" color="textSecondary">
              Already have an account?{' '}
              <Link href="#" onClick={() => alert('Login clicked')} style={{ textDecoration: 'none', color: '#757575' }}>
                Log In
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default SignupPopup;
