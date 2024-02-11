"use client"
import { Container,Box,Typography,Button } from '@mui/material'
import { Card, CardContent, CardMedia } from '@mui/material';
import React,{useEffect, useState} from 'react'
import Radio from '@mui/material/Radio';
import Grid from '@mui/material/Grid';
import MediaCard from '../BookCard/BookCard';
import Stock from '../../../../public/stockImg.jpeg'
import Stock1 from '../../../../public/stockImg1.jpeg'
import Stock2 from '../../../../public/stockImg2.jpeg'
import Vert from '../../../../public/vert.jpg'

import Stock3 from '../../../../public/stockImg3.jpeg'
import Stock4 from '../../../../public/stockImg4.jpeg'
import Footer from '../Footer/Footer'
import FooterArabic from '@/components/Arabic/Footer/Footer'
import { useLanguage } from '@/context/LanguageContext'
import BottomBar from '@/components/English/bottombar/bottom'
import BottomBarArabic from '@/components/Arabic/bottombar/bottom'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Skeleton from '@mui/material/Skeleton';

const Booking = () => {
  const [selectedValue, setSelectedValue] = useState(0);
  const { language } = useLanguage();
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };



  useEffect(()=>{

    const fetchCourses = async()=>{
      try {
        const response = await fetch('/api/getCourse', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
          },
        });

        if (response.ok) {
          const courses = await response.json();
          setCourseData(courses);
        }
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
     
  
    }
  
    fetchCourses()
  },[])
  
  const handlePrivate = ()=>{
     router.push('/privatesessions')
  }
 


  const Categories = ["Investment Advisory","Market Research","Market Trends Analysis","Risk Management","Technical Analysis","Financial Planning","Trading Strategies" ]

  return (
    <Box sx={{height:'90dvh',overflow:'auto'}}>
     <Container sx={{padding:'1.5rem'}}>
        <Box sx={{display:'flex',gap:'1rem',height:'90dvh'}}>
  
          <Box sx={{paddingBottom:'1rem',display:{xs:'none', sm:'none' ,md:'block'}}} >
          <Box sx={{width:'250px',height:'25%',border:'2px solid #f3f3f3',borderRadius:'25px',boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'}}>
                      <Box sx={{background:'#32385a',height:'50%',borderRadius:'25px 25px 0 0',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}} >
                      <Typography  fontSize='16px' fontWeight='500' color='#fff'>Book Private Sessions</Typography>
                        <Typography  fontSize='10px' align='center' fontWeight='400' color='#fff'>Consultation with Proffesionals</Typography>
                      </Box>
                      <Box sx={{display:'grid',placeItems:'center',height:'50%'}}>
                      <Button onClick={handlePrivate} variant='contained' sx={{background:'linear-gradient(to right, #141e30, #243b55)',borderRadius:'17.5px',height:'30px',textTransform:'none',fontSize:'12px'}}>Book Now</Button>
                      </Box>
           </Box>

           <Box sx={{height:'50%',width:'250px',background:'linear-gradient(to right, #2b5876, #4e4376)',mt:'1rem',borderRadius:'25px'}}>
               <Image src={Vert} alt='vert' style={{width:'100%',height:'50%',borderRadius:'25px 25px 0px 0px'}} />
               <Typography align='center' mt='2rem' width='100%' color='#fff' fontWeight='500' >Book Common <br/>&amp; Private Sessions</Typography>
             <Box sx={{display:'flex',justifyContent:'center',mt:'2rem'}}>
               <Button onClick={handlePrivate}  variant='contained' sx={{background:'#fff',color:'#000','&:hover':{background:'#fff',color:'#000'},borderRadius:'17.5px',height:'30px',textTransform:'none',fontSize:'12px'}}>Book Now</Button>
             </Box>
         
           </Box>
           
           

           </Box>



           <Box sx={{flex:3,overflow:'auto',height:'100%',paddingLeft:'1rem',paddingTop:'0.2rem',paddingBottom:'2rem',scrollbarWidth: "none", 
    '&::-webkit-scrollbar': {
        display: 'none', 
    },
    '&-ms-overflow-style:': {
        display: 'none', 
    },}}>
              {/* <Typography  fontSize='35px'  fontWeight='bold'  style={{color:'#32385a'}}>WorkShop<Typography>Common Sessions</Typography></Typography> */}
              <Box sx={{background:'#f3f6f9' , height:'1px' ,width:'100%',marginBottom:"1.5rem" }}></Box> 
          {loading ? ( // Check if data is still loading
              <Grid container spacing={2}>
                {/* Render skeleton instead of MediaCard */}
                {[1, 2, 3,4,5,6,7,8,9].map((index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Skeleton
                      variant="rectangular"
                      sx={{ width: '100%', height: '300px' }}
                    />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Grid container spacing={2}>
                {courseData.map((service, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <MediaCard
                      title={service.title}
                      description={service.subtitle}
                      price={service.price}
                      image={service.image}
                      id={service._id}
                      maxUsers={service.maxUsers}
                      sessionNumbers={service.sessionNumbers}
                    />
                  </Grid>
                ))}
              </Grid>
            )}
           </Box>
        </Box>

        
     </Container>
     {language === 'english' ? <Footer/> :  <FooterArabic/> }
     {language === 'english' ? <BottomBar/> :  <BottomBarArabic/> }
    </Box>
  )
}
export default Booking
