"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Image1 from '../../../../public/Home/Arab.png';
import { Container, Button } from '@mui/material';
import BackImage from '../../../../public/Home/bg.png'

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mobileStyles = {
    bannerContainer: {
      flexDirection: 'column',
    },
    rightColumn: {
      alignItems: 'center',
    },
    leftColumnH3: {
      fontWeight: 'normal',
      fontSize: '20px',
    },
  };

  const desktopStyles = {
    leftColumnH3: {
      fontWeight: 'bold',
      fontSize: '35px',
      color: '#fff',
      textAlign:'left'
    },
  };

  return (
    <div style={{
      background: 'linear-gradient(to right, #f3904f, #3b4371)',
      backgroundImage: `url('${'https://res.cloudinary.com/dxtzm8lcq/image/upload/v1706371823/banner2_qdxlhj.png'}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
      padding:"80px 0"
      
    }}>
      <Container maxWidth="lg" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 20px 0 20px',
        ...(isMobile ? mobileStyles.bannerContainer : {})
      }}>
        <div style={{ flex: 1 }}>
          <h1 style={{
            background: 'linear-gradient(to right, #141e30, #243b55)',
            fontSize: '15px',
            padding: '15px 20px',
            maxWidth: '195px',
            color:'#fff',
            borderRadius: '6px',
            marginBottom:'1rem',
            marginTop:'2.5rem'
          }}>
            Welcome to Venture
          </h1>
          <h3 style={isMobile ? mobileStyles.leftColumnH3 : desktopStyles.leftColumnH3} >
          Cultivate long-term investments with personalized plans and professional support.
          </h3>
          <p style={{ fontWeight: 'bold',marginTop:'1.5rem',textAlign:'left' }}>Elevate your ambitions with our professional support—forge your personalized investment plan with us, starting from the ground up.</p>
          <Button href='./bookings' style={{  
            background: 'linear-gradient(to right, #141e30, #32385a)',
            color: '#fff',
            width:'180px',
            height:'45px',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            borderRadius: '6px',
            marginTop:'2rem',
            fontSize:'15px',
            fontWeight:'600'
          }}>
            Book Now
          </Button>
        </div>
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          ...(isMobile ? mobileStyles.rightColumn : {})
        }}>
          {/* <Image src={Image1} alt="Sales by Month" width={750}   style={{ height: '70vh',objectFit:"contain" }} /> */}
        </div>
      </Container>
    </div>
  );
};

export default Banner;
