"use client";
import Contact from '@/components/English/Contact/Contact'
import ContactArabic from '@/components/Arabic/Contact/Contact'
import Footer from '@/components/English/Footer/Footer'
import { Box } from '@mui/material'
import { useLanguage } from '@/context/LanguageContext'
import BottomBar from '@/components/English/bottombar/bottom';
import BottomBarArabic from '@/components/Arabic/bottombar/bottom';
import React from 'react'

const Connect = () => {
  const { language } = useLanguage();


  return (
    
   <Box sx={{height:'90dvh',overflow:'auto',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>

    {language === 'english' ?  <Contact/> : <ContactArabic/>}
    {language === 'english' ? <Footer/> : <Footer/>}
    {language === 'english' ? <BottomBar/> : <BottomBarArabic/>}

 </Box>
  )
}

export default Connect