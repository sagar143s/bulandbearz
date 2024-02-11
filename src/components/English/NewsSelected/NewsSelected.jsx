import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import Image from 'next/image';
import Death from '../../../../public/stockImg1.jpeg'
import Actor from '../../../../public/stockImg3.jpeg'
import Fire from '../../../../public/stockImg2.jpeg'
import Stopck from '../../../../public/stockup1.jpg'
import { useParams } from 'next/navigation';
import Footer from '../Footer/Footer'
import FooterArabic from '@/components/Arabic/Footer/Footer'
import { useLanguage } from '@/context/LanguageContext'
import BottomBar from '@/components/English/bottombar/bottom'
import BottomBarArabic from '@/components/Arabic/bottombar/bottom'


const NewsSelected = () => {
  const { language } = useLanguage();
 const params = useParams()
 const [news , setNews] = useState([])

console.log(params.id);


 useEffect(()=>{
    const fetchNews = async()=>{
    const res = await fetch(`/api/fetchNewsId/${params.id}`,{
      method:'GET',
      headers:{
        'Content-Type':'application/json'
              }
              })
const response = await res.json()
     console.log(response,'newsResponse');
     setNews(response.news)
              }

    fetchNews()


 },[])




  return (
    <Box sx={{height: '90dvh', overflow: 'auto'}}>
      <Container>
      <Typography paddingTop='20px' color='#3b4371' fontWeight='600' fontSize='45px' sx={{textAlign:"center"}}>News</Typography>
      <Box sx={{marginTop:'.5rem',background:'#f3f6f9',height:'2px',marginBottom:'2rem'}}></Box>
      </Container>
    {Array.isArray(news) && news?.map((item,index)=>(
      <Container key={index}>
         <Typography fontSize='25px' color='#32385a' fontWeight='600' style={{marginTop:'2rem',textDecoration:"underline"}}>
         {item?.title}
          </Typography>
      <Grid container spacing={2} sx={{ marginTop: '.5rem' }}>

      <Grid item xs={12} md={12}>
  <div style={{ width: '100%', height: 'auto', position: 'relative' }}>
    <Image src={item?.imageUrl} layout='responsive' width={500} height={300} alt='Img' />
  </div>
</Grid>




        <Grid item xs={12}>
       
          <Typography fontSize='14px' paddingLeft={1} textAlign='justify' color='#3f3f3f' fontWeight='500' sx={{ padding: "0 0 0px 0" }}>
          {item?.description}
          </Typography>
        </Grid>

      </Grid>
    
    </Container>
    ))}
    <Box sx={{mt:'5rem'}}>
    {language === 'english' ? <Footer/> :  <FooterArabic/> }
     {language === 'english' ? <BottomBar/> :  <BottomBarArabic/> }
     </Box>
    </Box>
  );
}

export default NewsSelected;
