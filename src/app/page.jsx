"use client"
import React from 'react'
import Banner from '@/components/English/Banner/Banner'
import BannerArabi from '../components/Arabic/Banner/Banner'
import SocialMediaSidebar from '@/components/English/SocialMedia/SocialMedia'
import Columns from '@/components/English/Columns/Column'
import ColumnArabic from '@/components/Arabic/Columns/column'
import Counter from '@/components/English/Counter/Counter'
import CounterArabic from '@/components/Arabic/Counter/Counter'
import { Box } from '@mui/material'
 import ProjectItems from '@/components/English/Projects/Project'
 import ProjectItemsArabic from '../components/Arabic/projectItems/projectitems'
import Connecting from '@/components/English/Connect/Connect'
import Footer from '@/components/English/Footer/Footer'
import FooterArabic from '@/components/Arabic/Footer/Footer'
import { useLanguage } from '@/context/LanguageContext'
import Video from '@/components/English/Video/video'
import VideoArabic from '@/components/Arabic/video/video'
import Form from '@/components/English/HomeForm/Form'
import FormArabic from '@/components/Arabic/HomeForm/Form'
import BottomBar from '@/components/English/bottombar/bottom'
import BottomBarArabic from '@/components/Arabic/bottombar/bottom'
import BannerNew from '../components/English/BannerNew/page'
import BannerArabic from '@/components/Arabic/Newbanner/page'
import { SpeedInsights } from "@vercel/speed-insights/next"

const Home = () => {
  const { language } = useLanguage();

  console.log(language,"lang");
  return (
    <div style={{overflow:'auto',height:'90dvh'}}>
     
     
     <Box sx={{display:{xs:'none', sm:'none',md:'none',lg:'block'}}}>
     <SocialMediaSidebar/>
     </Box>
     <SpeedInsights/>

     {language === 'english' ? <BannerNew /> : <BannerArabic />}
     {language === 'english' ? <Columns/> : <ColumnArabic/>  }
     {language === 'english' &&  window.innerWidth > 600 ? <Video /> : null}
     {language === 'english' ? <Counter/> : <CounterArabic/>  }
     {language === 'english' ? <ProjectItems/> : <ProjectItemsArabic/>  }
     {language === 'english' ? <Form/> : <FormArabic/>  }
     {language === 'english' ? <Footer/> :  <FooterArabic/> }
     {language === 'english' ? <BottomBar/> :  <BottomBarArabic/> }
     
 
    </div>
  )
}

export default Home