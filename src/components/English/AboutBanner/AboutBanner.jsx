"use client"
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import BannerImage from '../../../../public/about/banner.png';

const BannerContainer = styled.div`
  position: relative;
  text-align: center;
  width: 100vw; 
  height: 60vh;
  overflow: hidden;
  
  @media (max-width: 550px) {
    height: 40vh; 
  }
`;



const CenteredText = styled(motion.div)`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 54px;
  font-weight:'600';
  text-align: center;
  width: 100%;
  @media (max-width: 600px) {
    font-size: 36px; 
  }
`;


const CenteredText2 = styled(motion.div)`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  text-align: center;
  width: 100%;
  @media (max-width: 600px) {
    font-size: 15px; 
    top: 60%;
  }
`;



const AboutBanner = () => {
  return (
    <BannerContainer>
      <Image src='https://res.cloudinary.com/dxtzm8lcq/image/upload/v1706385302/banner_fxr75p.png' alt='ban'  fill  />

      <CenteredText>
        About Us
      </CenteredText>
      
      <CenteredText2>
      Uniting for impactful investment success.
      </CenteredText2>
      
      
      
    </BannerContainer>
  )
}

export default AboutBanner