"use client"
import React from 'react';
import Image from 'next/image';
import Girl from '../../../../public/girl.png';
import { Button } from '@mui/material';

const Connecting = () => {
  return (
    <div style={styles.containermain}>
      <div style={styles.container}>
        <div style={styles.textContainer}>
          <h5>GET AN APPOINTMENT</h5>
          <h1>Empowering Businesses, Fostering Ideas, and Uniting People for Lasting Impact</h1>
          <p>Welcome to our consultancy platform, where we bring together businesses, innovative ideas, and individuals to create a profound impact. Our mission is to provide expert guidance and support to help you achieve your goals.</p>
        <Button style={styles.buttoncallus}>Get in Touch</Button>
        </div>
        <div style={styles.imageContainer}>
          <Image src={Girl} alt="Image" style={styles.image} />
        </div>
      </div>
    </div>
  );
};

const styles = {
    container: {
        display: 'flex',
        width: '100%',
        background: 'transparent',
        maxWidth: '1200px',
        margin: '0 auto',
        alignItems: 'center', 
      },
  containermain: {
    display: 'flex',
    width: '100%',
    background: 'linear-gradient(90deg, rgba(2,77,142,1) 0%, rgba(9,85,121,1) 0%, rgba(47,35,35,1) 100%)',
    margin:'80px 0 0 0',
  },
  textContainer: {
    flex: '75%',
    padding: '20px',
    boxSizing: 'border-box',
    color: '#fff',
    alignItem:'center',
  },
  imageContainer: {
    flex: '25%',
    boxSizing: 'border-box',
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  buttoncallus: {
    background: '#237843',
    color:'#fff',
    padding:'10px 30px'
  },
  '@media (max-width: 768px)': {
    container: {
      flexDirection: 'column', 
    },
    textContainer: {
      flex: '100%',
    },
    imageContainer: {
      flex: '100%', 
      marginBottom: '20px', 
    },
  },
  '@media (max-width: 480px)': {
    'textContainer h5': {
      fontSize: '10px', 
    },
    'textContainer h3': {
        fontSize: '10px', 
      },
      'textContainer p': {
        fontSize: '8px', 
      },
  },
  
};

export default Connecting;
