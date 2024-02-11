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






export default function MediaCard({title,description,price,image,id,maxUsers,sessionNumbers}) {
  const router = useRouter()


  const truncatedDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 9) {
        return words.slice(0, 9).join(' ') + '...';
    }
    return description;
};

  const calculateProgress = () => {
    const remainingSlots = maxUsers; 
    const progressPercentage = (remainingSlots / maxUsers) * 100;
    return progressPercentage;
  };

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
      const userId = localStorage.getItem('userId')
      if(userId){
        router.push(`/confirmbooking/${id}`,{ shallow: true });
      }else{
        router.push(`/login`,{ shallow: true });
      }
    }
   
  }
  return (
    <Card sx={{ maxWidth: 345, height: '100%',display: 'flex', flexDirection: 'column',justifyContent:'space-between',padding:"0 0 0px" }}>
      <CardMedia
        sx={{ height: 140 }}
       
        title="Bull and Bearz"
      >
<div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image src={image} fill  style={{objectFit:'cover'}}   alt='events'/>
          </div>
      </CardMedia>
      
      
      <CardContent   >
        <Typography    fontSize='20px' height={70} color='#32385a'   style={{fontFamily: 'Poppins, sans-serif'}} fontWeight='600'>
          {title}
        </Typography>
        <Typography   color="#636FA4"  height={50} fontSize='14px'style={{fontFamily: 'Poppins, sans-serif'}}  >
     {truncatedDescription(description)}
        </Typography>
        
        <Typography style={{fontFamily: 'Poppins, sans-serif'}} color="#636FA4" fontSize='14px' paddingTop='1rem' fontWeight='600'  height={32}>Sessions : <span style={{color:'red',fontSize:'15px'}}>{sessionNumbers}</span> </Typography>
        <Typography style={{fontFamily: 'Poppins, sans-serif'}} color="#636FA4" fontSize='12px' paddingTop='1rem' fontWeight='600'  height={32}>Slot left : <span style={{color:'red'}}>{maxUsers}</span> </Typography>
        {/* <div style={{marginTop: '0.5rem',height: '8px',width: '100%', backgroundColor: '#eee', }}>
          <div style={{ width: `${calculateProgress()}%`,height: '5px',borderRadius:"25px", transition: 'width 0.3s ease-in-out',height: '100%',background: 'linear-gradient(to right, #2b5876, #4e4376)'  }}></div>
        </div> */}
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
  );
}
