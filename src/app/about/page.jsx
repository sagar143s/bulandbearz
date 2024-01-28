"use client";
import AboutBanner from '@/components/English/AboutBanner/AboutBanner'

import AboutColumn from '@/components/English/AboutColumn/AboutColumn'
import AboutColumnArabic from '@/components/Arabic/AboutColumn/AboutColumn'
import Footer from '@/components/English/Footer/Footer'
import FooterArabic from '@/components/Arabic/Footer/Footer'
import Story from '@/components/English/Story/Story'
import StoryArabic from '@/components/Arabic/Story/Story'
import { Container } from '@mui/material'
import React from 'react'
import Goals from '../../components/English/Goals/page'
import GoalsArabic from '../../components/Arabic/Goals/page'
import { useLanguage } from '@/context/LanguageContext'
import BottomBar from '@/components/English/bottombar/bottom';
import BottomBarArabic from '@/components/Arabic/bottombar/bottom';
import AboutBannerArabic from '@/components/Arabic/aboutBanner/aboutbanner';

const About = () => {
  const { language } = useLanguage();

  return (
    <div style={{overflow:'auto',height:'90dvh'}}>

{language === 'english' ?    <AboutBanner/> :  <AboutBannerArabic />}
{language === 'english' ?          <Story/> :  <StoryArabic/>}
{language === 'english' ?     <AboutColumn/>:  <AboutColumnArabic/>}
{language === 'english' ?           <Goals/>:  <GoalsArabic/>}
{language === 'english' ?         <Footer/> :  <FooterArabic/>}
{language === 'english' ?         <BottomBar/> :  <BottomBarArabic/>}
      
        
    </div>
  )
}

export default About