import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import Image from 'next/image';
import Death from '../../../../public/stockImg1.jpeg'
import Actor from '../../../../public/stockImg3.jpeg'
import Fire from '../../../../public/stockImg2.jpeg'
import Stopck from '../../../../public/stockup1.jpg'
import { useParams } from 'next/navigation';


const NewsSelected = () => {

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
    {Array.isArray(news) && news?.map((item)=>(
      <Container >
         <Typography fontSize='25px' color='#f3904f' fontWeight='500' style={{marginTop:'2rem'}}>
         {item?.title}
          </Typography>
      <Grid container spacing={2} sx={{ marginTop: '1rem' }}>


        <Grid item xs={12} md={12}>
          <Box sx={{ width: '100%', height: '400px', position: 'relative' }}>
            <Image src={item?.imageUrl} layout='fill' alt='Img' />
          </Box>
        </Grid>


        <Grid item xs={12}>
       
          <Typography fontSize='14px' paddingLeft={1} textAlign='justify' color='#3f3f3f' fontWeight='500' sx={{ padding: "0 0 50px 0" }}>
          {item?.description}
          </Typography>
        </Grid>

      </Grid>
    
    </Container>
    ))}
    
 
    </Box>
  );
}

export default NewsSelected;
