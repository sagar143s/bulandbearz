"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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
      backgroundImage: `url('${'https://res.cloudinary.com/dxtzm8lcq/image/upload/v1706383891/banner2-modified_k6d8vt.png'}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
      padding:"80px 0"

      
    }} dir='rtl'>
      <Container maxWidth="lg" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 20px 0 20px',
        ...(isMobile ? mobileStyles.bannerContainer : {})
      }} dir='rtl'>
        <div style={{ flex: 1 }} dir='rtl'>
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
          مرحبًا بك في فينتشر
          </h1>
          <h3 style={isMobile ? mobileStyles.leftColumnH3 : desktopStyles.leftColumnH3} >
          زرع الاستثمارات على المدى الطويل من خلال خطط شخصية ودعم مهني.
          </h3>
          <p style={{ fontWeight: 'bold',marginTop:'1.5rem',textAlign:'left' }}>ارتق بطموحاتك مع دعمنا المهني - صقل خطط استثمارك الشخصية معنا، بدءًا من الصفر.</p>
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
          احجز الآن
          </Button>
        </div>
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          ...(isMobile ? mobileStyles.rightColumn : {})
        }} dir='rtl'>
          {/* <Image src='https://res.cloudinary.com/dxtzm8lcq/image/upload/v1705729843/bbcourse/Arab_teljma.png' alt="Sales by Month"  width={750} height={500}  style={{ height: '70vh',objectFit:"contain" }} /> */}
        </div>
      </Container>
    </div>
  );
};

export default Banner;
