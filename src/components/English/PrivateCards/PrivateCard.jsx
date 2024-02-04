"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stock from '../../../../public/stockImg.jpeg'
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import Swal from 'sweetalert2';
import Stock1 from '../../../../public/stockImg1.jpeg'
import Stock2 from '../../../../public/stockImg2.jpeg'
import Footer from '../Footer/Footer'
import FooterArabic from '@/components/Arabic/Footer/Footer'
import { useLanguage } from '@/context/LanguageContext'
import BottomBar from '@/components/English/bottombar/bottom'
import BottomBarArabic from '@/components/Arabic/bottombar/bottom'
import { Box } from '@mui/material'




export default function PrivateCard({id,title,description,image,price}) {
  const router = useRouter()
  const { language } = useLanguage();


  


  const handleBook = ()=>{
    router.push(`/privateBooking/${id}`)
  }
  return (
    <Box sx={{padding:"1rem 0"}}>
    <Card sx={{ maxWidth: 365, height: '100%',display: 'flex', flexDirection: 'column',justifyContent:'space-between',borderRadius:"8px",boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
      <CardMedia
        sx={{ height: 200 }}
        title="Stock Bull"
      >
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image src={image} fill  style={{objectFit:'cover'}}   alt='events'/>
          </div>
      </CardMedia>
      
      
      <CardContent>
        <Typography    fontSize='20px' color='#32385a'  fontWeight='bold'>
          {title}
        </Typography>
        <Typography   color="#636FA4"  height={60} fontSize='14px' >
          {description}
        </Typography>

        
      </CardContent>
      
      <CardActions sx={{display:'flex',justifyContent:'space-between',padding:"15px 18px",  fontFamily: 'Poppins, sans-serif',fontFamily: 'Poppins, sans-serif',background:'linear-gradient(to right, #141e30, #243b55)'}} >
      <Typography   color="#fff"  fontSize='14px' fontWeight='500' >
         AED {price}
        </Typography>
        <Button variant='contained' onClick={handleBook}  sx={{background:'#fff',color:"#32385a",borderRadius:'17.5px',height:'35px',textTransform:'none',fontSize:'12px',fontWeight:'bold',  fontFamily: 'Poppins, sans-serif','&:hover': {
    background: '#008000',
    color: '#fff',
    fontWeight:"bold",
    fontFamily: 'Poppins, sans-serif',
  },
}}  size="large">Book Now</Button>
      </CardActions>
    </Card>
    </Box>
  );
}
