"use client";
import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import Link from 'next/link'; 
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [emailErrpr,setEmailError] = useState('')
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showOtpInput, setShowOtpInput] = useState(false);
    const [showCreateNewPassword, setShowCreateNewPassword] = useState(false);
    const router = useRouter()
    
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleOtpChange = (event) => {
      const inputValue = event.target.value;
      if (/^\d*$/.test(inputValue) && inputValue.length <= 6) {
        setOtp(inputValue);
      }
    };
  
    const handleEmailSubmit = async() => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError('Invalid email address')
        return;
      }

      

      const res = await fetch('api/auth/forgotemail',{
        method:'POST',
        body:JSON.stringify({email}),
        headers:{
          'Content-Type':'application/json'
        }
      })

      const response = await res.json()
      

      if(res.status==404){
        setEmailError('Email not found! Signup')
      }else if(res.ok){
        
        Swal.fire({
          icon: "success",
          title: "Password sent to Email sent",
          text: "You can update the password in profile page",
          footer: '<a href="/login">Login with password sent to the email</a>'
        }).then((result) => {
          if (result.isConfirmed) {
            router.push('/login')
          } else if (result.isDenied) {
            router.push('/login')
          }
        });

      }

  
     
      // setShowOtpInput(true);
    };
  
    const handleSubmitOtp = () => {
    
      setShowOtpInput(false);
      setShowCreateNewPassword(true);
    };
  
    const handleResendOtp = () => {
      
      // You can add logic to resend the OTP
    };
  
    const handleNewPasswordChange = (event) => {
      setNewPassword(event.target.value);
    };
  
    const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);
    };
  
    const handleResetPassword = () => {
      
      // Add logic to handle password reset
    };
  
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <Paper elevation={3} sx={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '300px' }}>
          {(showOtpInput && !showCreateNewPassword) && (
            <Typography variant="h5" sx={{ mb: 2 }}>Forgot Password</Typography>
          )}
  
          {!showCreateNewPassword ? (
            <>
              {!showOtpInput ? (
                <>
                  <Typography sx={{ mb: 3 }}>Enter your email to receive OTP</Typography>
                  <TextField
                    label="Email"
                    variant="outlined"
                    value={email}
                    error={!!emailErrpr}
                    helperText={emailErrpr}
                    onChange={handleEmailChange}
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                  <Button variant="contained" style={{ background: "#32385a" }} onClick={handleEmailSubmit} fullWidth>
                    Send OTP
                  </Button>
                </>
              ) : (
                <>
                  <Typography sx={{ mb: 3 }}>Enter the OTP sent to your email</Typography>
                  <TextField
                    label="OTP"
                    variant="outlined"
                    value={otp}
                    onChange={handleOtpChange}
                    fullWidth
                    sx={{ mb: 2 }}
                    inputProps={{ inputMode: 'numeric', pattern: '\\d*' }}
                  />
                  <Button variant="contained" style={{ background: "#32385a" }} onClick={handleSubmitOtp} fullWidth>
                    Verify OTP
                  </Button>
                  <Button sx={{ mt: 1 }} onClick={handleResendOtp}>
                    Resend OTP
                  </Button>
                  {/* <Link href="/login" passHref sx={{ width: '100%',justifyContent:"center",display:"flex" }}>
                    <Button variant="outlined" style={{ background: "#32385a", color: 'white', width: "100%" }}>
                      Back to Login
                    </Button>
                  </Link> */}
                </>
              )}
            </>
          ) : (
            <>
              <Typography sx={{ mb: 3,fontWeight:'bold',color:'#32385a' }} variant="h6">Enter your new password</Typography>
              <TextField
                label="New Password"
                type="password"
                variant="outlined"
                value={newPassword}
                onChange={handleNewPasswordChange}
                fullWidth
                sx={{ mb: 2 }}
              />
  
              <TextField
                label="Confirm Password"
                type="password"
                variant="outlined"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                fullWidth
                sx={{ mb: 2 }}
              />
              <Button variant="contained" style={{ background: "#32385a" }} onClick={handleResetPassword} fullWidth>
                Reset Password
              </Button>
            </>
          )}
        </Paper>
      </Box>
    );
  };
  
  export default ForgotPassword;