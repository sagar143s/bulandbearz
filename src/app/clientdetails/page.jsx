"use client";
import ClientDetails from '@/components/English/ClientDetails/ClientDetails'
import { Box } from '@mui/material'
import React from 'react'
import FooterArabic from '@/components/Arabic/Footer/Footer';
import Footer from '@/components/English/Footer/Footer';
import { useLanguage } from '@/context/LanguageContext'
import BottomBar from '@/components/English/bottombar/bottom';
import BottomBarAarabic from '@/components/Arabic/bottombar/bottom';

const Page = () => {
const { language } = useLanguage();


  return (
    <>
    <Box sx={{overflow:'auto',height:'90dvh',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>

         <ClientDetails />
         {language === 'english' ? <Footer/> :  <FooterArabic/> }
         {language === 'english' ? <BottomBar/> :  <BottomBarAarabic/> }
    </Box>
    
    </>
  )
}

export default Page