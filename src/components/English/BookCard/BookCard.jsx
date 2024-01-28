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





export default function MediaCard({title,description,price,image,id,maxUsers}) {
  const router = useRouter()

  

console.log(maxUsers,'users');
  const handleBook = ()=>{

    if(maxUsers<=0){
      Swal.fire({
        icon: "error",
        title: "Sorry",
        text: "Maximum user limit reached!",
        footer: '<a href="/contact">Request a booking?</a>'
      });
    }else{

      router.push(`/confirmbooking/${id}`);
    }
   
  }
  return (
    <Card sx={{ maxWidth: 345, height: '100%',display: 'flex', flexDirection: 'column',justifyContent:'space-between',padding:"0 0 20px" }}>
      <CardMedia
        sx={{ height: 140 }}
       
        title="Stock Bull"
      >
<div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image src={image} fill  style={{objectFit:'cover'}}   alt='events'/>
          </div>
      </CardMedia>
      
      
      <CardContent   >
        <Typography    fontSize='20px' color='#32385a'  fontWeight='600'>
          {title}
        </Typography>
        <Typography   color="#636FA4"  height={50} fontSize='14px' >
          {description}
        </Typography>

        <Typography color="#636FA4" fontSize='12px' paddingTop='1rem' fontWeight='bold'  height={20}>Slot left : <span style={{color:'red'}}>{maxUsers}</span> </Typography>
      </CardContent>
      
      <CardActions sx={{display:'flex',justifyContent:'space-between',padding:"0 18px"}} >
      <Typography   color="#636FA4"  fontSize='12px' fontWeight='600'  >
         AED {price}
        </Typography>
        <Button variant='contained' onClick={handleBook}  sx={{background:'linear-gradient(to right, #f3904f, #3b4371)',borderRadius:'17.5px',height:'30px',textTransform:'none',fontSize:'12px'}}  size="large">Book Now</Button>
      </CardActions>
    </Card>
  );
}
