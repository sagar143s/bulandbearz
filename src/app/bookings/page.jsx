"use client"
import Booking from '@/components/English/Booking/Booking'
import { Box } from '@mui/material'
import React from 'react'
import FooterArabic from '@/components/Arabic/Footer/Footer';
import Footer from '@/components/English/Footer/Footer';
import { useLanguage } from '@/context/LanguageContext'
import BottomBar from '@/components/English/bottombar/bottom';
import BottomBarAarabic from '@/components/Arabic/bottombar/bottom';

const Bookings = () => {
  const { language } = useLanguage();


  return (
    <>
    <Box sx={{height:'90dvh',overflow:'auto'}}>

    <Booking/>

    </Box>
    {language === 'english' ? <Footer/> :  <FooterArabic/> }
    {language === 'english' ? <BottomBar/> :  <BottomBarAarabic/> }

    </>
  )
}

export default Bookings