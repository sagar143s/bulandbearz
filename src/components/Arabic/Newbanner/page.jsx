"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Image1 from '../../../../public/Home/Arab.png';
import { Container, Button, Typography, Box } from '@mui/material';
import BackImage from '../../../../public/Home/bg.png'

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sentences = [
    'تحليل',
    'دافع',
    'معرفة',
    'خطة',
    'تنفيذ'
      ];
    
      const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    
      useEffect(() => {
        const timer = setTimeout(() => {
      
          setCurrentSentenceIndex(prevIndex => (prevIndex + 1) % sentences.length);
        }, 1500);
    
    
        return () => clearTimeout(timer);
      }, [currentSentenceIndex]);
    

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
      backgroundImage: `url('/banner.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
      padding:"8rem 0",
   
      
    }}>
      <Container>
      <Box sx={{justifyContent:"center",textAlign:"center"}}>
      <Typography  variant={isMobile ? 'h6' : 'h2'} style={{fontWeight:"900",padding:"1rem 0",letterSpacing:'.8REM'}}>
          {sentences[currentSentenceIndex]}
           </Typography>

           <Typography variant='H4' sx={{fontStyle:"italic"}}>جعل الأسواق تصبح منطقية</Typography>


           <Box sx={{display:"flex",justifyContent:"center",gap:"1rem"}}>
           <Button href='./subscription' style={{  
             background: 'linear-gradient(to right, #141e30, #32385a)',
             color: '#fff',
             padding:".5rem 3rem",
             border: 'none',
             cursor: 'pointer',
             borderRadius: '6px',
             marginTop:'2rem',
             fontSize:'15px',
             fontWeight:'600',
             fontFamily: "Poppins, sans-serif" ,
             '@media (max-width: 400px)': {
                fontSize: '13px',
              },
             }}>
       الاشتراكات
           </Button>
           <Button href='./privatesessions' style={{  
             background: '#fff',
             color: '#32385a',
            padding:".5rem 2rem",
             border: 'none',
             cursor: 'pointer',
             borderRadius: '6px',
             marginTop:'2rem',
             fontSize:'15px',
             fontWeight:'600',
             fontFamily: "Poppins, sans-serif" ,
             '@media (max-width: 400px)': {
                fontSize: '13px',
              },
           }}>
الجلسات الخاصة
           </Button>
           <Button href='./bookings' style={{  
             background: 'transparent',
             color: '#fff',
            padding:".5rem 2rem",
             border: '2PX solid #fff',
             cursor: 'pointer',
             borderRadius: '6px',
             marginTop:'2rem',
             fontSize:'15px',
             fontWeight:'600',
             fontFamily: "Poppins, sans-serif" ,
             '@media (max-width: 400px)': {
                fontSize: '13px',
              },
           }}>
      متجر العمل
           </Button>
           </Box>
           
      </Box>
      </Container>
      
    </div>
  );
};

export default Banner;
