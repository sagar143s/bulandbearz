"use client";
import Footer from '@/components/English/Footer/Footer'
import Health from '@/components/English/Health/Health'
import Reservation from '@/components/English/Reservation/Reservation'
import { Box } from '@mui/material'
import { useLanguage } from '@/context/LanguageContext';
import React from 'react'


const page = () => {
  const { language } = useLanguage;


  return (
    <div style={{height:'90dvh',overflow:'auto',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
      {language === 'english' ?         <Health/> :      <Health/>}
      {language === 'english' ?    <Reservation/> :      <Reservation/>}
   
 
        <Box sx={{marginTop:'2rem'}}>
        {language === 'english' ?     <Footer/> :      <Footer/>}
       
        </Box>
    </div>
  )
}

export default page