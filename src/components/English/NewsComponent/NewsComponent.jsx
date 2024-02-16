"use client"
import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Death from '../../../../public/stockImg1.jpeg'
import Actor from '../../../../public/stockImg3.jpeg'
import Fire from '../../../../public/stockImg2.jpeg'
import Grid from '@mui/material/Grid';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import NewsCard from '../NewsCard/NewsCard'
import Footer from '../Footer/Footer'
import FooterArabic from '@/components/Arabic/Footer/Footer'
import { useLanguage } from '@/context/LanguageContext'
import BottomBar from '@/components/English/bottombar/bottom'
import BottomBarArabic from '@/components/Arabic/bottombar/bottom'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Swal from 'sweetalert2'
import SkeletonColor from '../Skelton/Skelton'



const NewsComponent = () => {
  const { language } = useLanguage();
  const router = useRouter()
  const [sortby, setSortBy] = useState('none');
  const [loading,setLoading] = useState(true)
  const [news,setNews]= useState([])


  const handleChange = (event) => {
    setSortBy(event.target.value);
  };



  useEffect(()=>{
    const userId = localStorage.getItem('userId')
    if(!userId){
      router.push('/login')
    }
    
    const fetchUser = async()=>{
        const res = await fetch(`/api/fetchUser/${userId}`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        const response = await res.json()
        if(!response.subscribed){
          Swal.fire({
            icon: "error",
            title: "Not Subscribed",
            text: "Please Subscribe to Access the news!",
          })
          router.push('/subscription')
        }
    }
          fetchUser()
     },[])


  useEffect(()=>{
    const fetchNews = async()=>{
      const res= await fetch('/api/fetchNews',{
        method:"GET",
        headers:{
          'Content-Type':'application/json'
        }
      })
      if(res.ok){
        setLoading(false)
      }else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error in network",
         
        }); 
      }
      const response = await res.json()
     
      if(res.ok){
        setNews(response)
      }
    }
    fetchNews()
  },[])



 


 
  const sortedNews = () => {
    switch (sortby) {
      case 'today':
        return news.filter((item) => isToday(item.date));
      case 'week':
        return news.filter((item) => isDateInThisWeek(item.date));
      case 'month':
        return news.filter((item) => isDateInThisMonth(item.date));
      default:
        return news;
    }
  };
  
  const isToday = (date) => {
    const today = new Date();
    const newsDate = new Date(date);
    return (
      today.getDate() === newsDate.getDate() &&
      today.getMonth() === newsDate.getMonth() &&
      today.getFullYear() === newsDate.getFullYear()
    );
  };
  
  const isDateInThisWeek = (date) => {
    
    const today = new Date();
    const firstDayOfWeek = new Date(today);
    firstDayOfWeek.setDate(today.getDate() - today.getDay());
  
    
    const newsDate = new Date(date);
  
    
    return (
      newsDate >= firstDayOfWeek && newsDate <= new Date(today.setDate(firstDayOfWeek.getDate() + 6))
    );
  };
  
  const isDateInThisMonth = (date) => {
   
    const today = new Date();
  
    
    const newsDate = new Date(date);
  
    
    return today.getMonth() === newsDate.getMonth() && today.getFullYear() === newsDate.getFullYear();
  };


  
  return (
    <Box sx={{height:'90dvh',overflow:'auto',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
    <Container  >



<Box sx={{display:'flex',justifyContent:'space-between',mt:"1rem"}}>
<Typography paddingTop='20px' color='#3b4371' fontWeight='600' fontSize='35px'>News</Typography>
  <Box>
    <Typography fontSize='13px' fontWeight='500' marginLeft='0.5rem'>SortBy</Typography>
<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
     
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={sortby}
        sx={{fontSize:'13px', fontWeight:'500'}}
        onChange={handleChange}
      >
        <MenuItem sx={{fontSize:'13px', fontWeight:'500'}} value="none">
          None
        </MenuItem>
        <MenuItem sx={{fontSize:'13px', fontWeight:'500'}} value='today'>Today</MenuItem>
        <MenuItem sx={{fontSize:'13px', fontWeight:'500'}} value='week'>This week</MenuItem>
        <MenuItem sx={{fontSize:'13px', fontWeight:'500'}} value='month'>This Month</MenuItem>
      </Select>
    </FormControl>
    </Box>
</Box>
<Box sx={{marginTop:'.5rem',background:'#f3f6f9',height:'2px',marginBottom:'2rem'}}></Box>

            <Box sx={{background:'#a8a9b3',borderRadius:'15px',margin:'0 0 3rem'}}>
        <Typography style={{padding:"15px",color:'#fff',fontStyle:"italic",fontSize:"14px"}}>
        *<b>disclaimer</b>: Not financial advice. This newsletter reflects my own personal trading journey, for entertainment purposes only. I am not qualified or licensed to advise anyone on their investments or trades, I am sharing my personal ideas and experiences only. Never make financial decisions based on any information on this site or any associated platforms. Always consult a professional for investment related advice.* 
        </Typography>
      </Box>



<Container sx={{display:'grid',placeItems:'center'}}>
  {loading ? (
                   <SkeletonColor/>
  ) 
:
(
  <Grid container spacing={{ xs: 5, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }} sx={{paddingBottom:'2rem',marginTop:'1rem'}} >
  {sortedNews().map((item,index) => (
            <Grid key={index} item xs={12} sm={12} md={4}>
              {/* <Box onClick={handleView(item.id)}> */}
              <NewsCard item={item} />
              {/* </Box> */}
            </Grid>
          ))}
  </Grid>
)
}
 

  </Container>
  

          


           
  </Container>
  <Box>
  {language === 'english' ? <Footer/> :  <FooterArabic/> }
  {language === 'english' ? <BottomBar/> :  <BottomBarArabic/> }
  </Box>
  </Box>
  )
}

export default NewsComponent