"use client";
import NewsSelected from '@/components/English/NewsSelected/NewsSelected'
import React from 'react'
import { Box } from '@mui/material'
import { useLanguage } from '@/context/LanguageContext'
import Footer from '@/components/English/Footer/Footer'
import FooterArabic from '@/components/Arabic/Footer/Footer'

const SelectNews = () => {
  const { language } = useLanguage();

  return (
   
 
    <Box sx={{height:'90dvh',overflow:'auto',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>

    {language === 'english' ?     <NewsSelected/>:  <NewsSelected/>}
    {/* {language === 'english' ? <Footer/> : <FooterArabic/>} */}
 
 
 </Box>
  )
}

export default SelectNews