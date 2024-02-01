import React from 'react';
import { Container } from '@mui/material';

const Video = () => {
  const videoUrl = 'https://res.cloudinary.com/dxtzm8lcq/video/upload/v1705489054/Static%20Home/WhatsApp_Video_2024-01-16_at_7.33.48_PM_vxvoxj.mp4';

  return (
    <Container style={{padding:"50px 0"}}>
    <div style={{ position: 'relative' }}>
      <h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', zIndex: 1 ,textAlign:'center',justifyContent:"center"}}>
      Acquire in-depth education and receive insightful analyses
      </h1>
      <video width="100%" height="auto" autoPlay loop muted  style={{borderRadius:"25px"}}>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </Container>
  );
}

export default Video;
