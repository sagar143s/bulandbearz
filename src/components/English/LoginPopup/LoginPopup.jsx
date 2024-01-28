"use client"
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
import { useRouter, useSearchParams } from "next/navigation";


const LoginPopup = ({ open, onClose }) => {

  const [email,setEmail] = useState('')
  const [password,setPassword ] = useState('')
  const [error, setError] = useState('');
  const [resetPassword, setResetPassword] = useState(false);
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPasswordDialog, setShowNewPasswordDialog] = useState(false);  
  const router = useRouter()
 

  const handleLogin = async(e) => {
    try{
      const res = await fetch('/api/auth/login',{
        method:'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
       })


       console.log(res,"response");
       if(res.status==201){
        onClose();
        router.push('/bookings')
       }
    }
    catch(err){
      console.log(err.message);
    }
     
   
  };

  const handleResetPassword = () => {
    if (isFormValid()) {
   
    }
  };

  const handleForgotPassword = () => {
    setResetPassword(true);
    setShowOtpInput(true);
  };
  const handleSubmitEmail = () => {
   
    setShowEnterEmailDialog(false);
    setShowOtpInput(true); 
  };

  const handleVerifyOtp = () => {
   
    setShowNewPasswordDialog(true);
  };

  const handleNewPasswordSubmit = () => {
    if (newPassword === confirmPassword) {
      setShowNewPasswordDialog(false);
    } else {
      setError("Passwords do not match.");
    }
  };

  const handleGoogleLogin = () => {
 
  };

  const handleResetPasswordClose = () => {
    setResetPassword(false);
    setShowOtpInput(false);
  };

  const isFormValid = () => {
    if (!credentials.username || !credentials.password) {
      setError('Username and password are required.');
      return false;
    }

    // Additional validation logic here
    return true;
  };



  return (
    <>
      <Dialog open={open && !resetPassword} onClose={onClose} maxWidth="xs">
        <DialogTitle>
          Login
          <IconButton onClick={onClose} style={{ position: 'absolute', right: 8, top: 8 }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              placeholder='Email'
              variant="outlined"
              fullWidth
              name="email"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              name="password"
              onChange={(e)=>setPassword(e.target.value)}
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
              onClick={handleLogin}
              sx={{ backgroundColor: '#1976d2' }}
            >
              Log In
            </Button>
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Link href="#" onClick={handleForgotPassword} style={{ textDecoration: 'none', color: '#757575' }}>
              Forgot Password?
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => alert('Sign Up clicked')}
              sx={{ backgroundColor: '#4caf50' }}
            >
              Sign Up
            </Button>
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Typography variant="body2" color="textSecondary">
              or
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={handleGoogleLogin}
              startIcon={<GoogleIcon />}
              sx={{ borderColor: '#f44336', color: '#f44336' }}
            >
              Sign In with Google
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
      </Dialog>

      {resetPassword && (
        <Dialog open={resetPassword} onClose={handleResetPasswordClose} maxWidth="xs">
          <DialogTitle>
      Reset Password
      <IconButton onClick={handleResetPasswordClose} style={{ position: 'absolute', right: 8, top: 8 }}>
        <CloseIcon />
      </IconButton>
    </DialogTitle>
    <DialogContent>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body2" color="textSecondary">
            Enter your email address to reset your password.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
        
          />
        </Grid>
       
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
           
          >
            Reset Password
          </Button>
        </Grid>
      </Grid>
     </DialogContent>

        </Dialog>
      )}

      {showOtpInput && (
        <Dialog open={showOtpInput} onClose={() => setShowOtpInput(false)} maxWidth="xs">
            <DialogTitle>
            Verify OTP
            {/* ... (DialogTitle code remains unchanged) */}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Enter 6-digit OTP"
                  variant="outlined"
                  fullWidth
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleVerifyOtp}
                >
                  Verify OTP
                </Button>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      )}

      {showNewPasswordDialog && (
        <Dialog open={showNewPasswordDialog} onClose={() => setShowNewPasswordDialog(false)} maxWidth="xs">
       <DialogTitle>
            Set New Password
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="New Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleNewPasswordSubmit}
                >
                  Submit New Password
                </Button>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default LoginPopup;
