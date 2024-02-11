import React, { useState } from 'react';
import { Container, TextField, Button, Grid } from '@mui/material';
import Swal from 'sweetalert2';

const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Simple validation
    if (!name.trim()) {
      setNameError(true);
      return;
    } else {
      setNameError(false);
    }

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    if (!message.trim()) {
      setMessageError(true);
      return;
    } else {
      setMessageError(false);
    }

    try{
      const res = await fetch('/api/sendContact',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          name,email,message
        })
      })
      if(res.ok){
        Swal.fire({
          position: "center",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
        setName('')
        setEmail('')
        setMessage('')
      }
    }catch(error){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }

    // If all validations pass, you can proceed with form submission logic
   
  };

  return (
    <div  style={{ backgroundImage:'url("https://res.cloudinary.com/dxtzm8lcq/image/upload/v1705564801/Contact_j3iz1f.png")', backgroundSize: 'cover', width: '100%', minHeight: '50vh',padding:"10px 0 50px" }}>
     <Container maxWidth="sm" style={{ marginTop: '50px' }}>
        <Grid sx={{ background: '#fff', padding: "50px 50px 30px", borderRadius: "15PX", boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;' }}>
          <h1 style={{ textAlign: 'center', color: '#32385a' }}>Contact Us</h1>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              label="Name"
              variant="outlined"
              margin="normal"
              required
              error={nameError}
              helperText={nameError ? 'Name is required' : ''}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Email"
              variant="outlined"
              margin="normal"
              required
              type="email"
              error={emailError}
              helperText={emailError ? 'Invalid email format' : ''}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Message"
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
              required
              error={messageError}
              helperText={messageError ? 'Message is required' : ''}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              variant="contained"
              type="submit"
              style={{ marginTop: '20px', background: "#32385a" }}
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