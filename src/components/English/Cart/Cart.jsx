"use client"
import { Box, Button, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Stock from '../../../../public/stockImg.jpeg'
import Stock1 from '../../../../public/stockImg1.jpeg'
import Stock2 from '../../../../public/stockImg2.jpeg'
import Image from 'next/image'
import Footer from '../Footer/Footer'
import FooterArabic from '@/components/Arabic/Footer/Footer'
import { useLanguage } from '@/context/LanguageContext'
import BottomBar from '@/components/English/bottombar/bottom'
import BottomBarArabic from '@/components/Arabic/bottombar/bottom'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import LinkIcon from '@mui/icons-material/Link';
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Cart = () => {
  const { language } = useLanguage();
 const [bookings,setBookings] = useState([])
 const router = useRouter()

 useEffect(()=>{
  const userId = localStorage.getItem('userId');
  if(!userId){
    router.push('/login', { shallow: true });
  }
  const fetchUser = async () => {
    try {
      const res = await fetch(`/api/fetchUser/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        router.push('/login', { shallow: true });
      }
    }
    catch(error){
      alert(error.message)
    }
  }
  fetchUser();
 },[])


 useEffect(()=>{
  const fetchBooking = async()=>{
    const userId = localStorage.getItem('userId')
const res = await fetch(`/api/getMyBookings/${userId}`,{
  method:'GET',
  headers:{
    'Content-type':'aaplication/json'
  }
})

const booking = await res.json()
setBookings(booking)

  }


  fetchBooking()
 },[])






 
  return (
    <Box sx={{height:'90dvh',overflow:'auto',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
    <Container sx={{padding:"1rem 0 5rem"}}>
        <Box sx={{padding:'2rem'}}>
            <Typography  fontSize='35px' fontWeight='600' paddingLeft='1rem' color='#32385a'>Bookings</Typography>
            <Box sx={{background:'#f3f3f3' ,height:'1px' ,width:'100%',margin:'1rem'}}></Box>

            {bookings.length==0 && (
              <Box sx={{display:'grid',placeItems:'center',height:'60vh'}}>
                     <Typography fontSize='25px' color='#f3904f' fontWeight='600'>There are no Bookings Yet</Typography>
              </Box>

            )}
            
            {bookings.length!=0 && bookings.map((booking,index)=>(
 <Box key={index}>
 <Box  sx={{ display:'flex',justifyContent:'space-between' ,gap:'1rem',  width:'100%',height:'auto',border:'1px solid #32385a',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',marginTop:'3rem',borderRadius:'6px',padding:'2rem',flexDirection:{xs:'column',sm:'column',md:'row'}}}>
            <div style={{ position: 'relative', width: '35%', height: '100%',minHeight:'200px' }}>
            <Image src={Stock1} layout="fill" objectFit="cover"  alt='events' style={{borderRadius:"10PX",minWidth:"220px"}}/>
            </div>
              
              <Box sx={{display:'flex',flexDirection:'column',gap:'1rem',
             '@media screen and (min-width: 900px)': {
             padding:"0 0 0 5rem"
            },
            '@media screen and (min-width: 1100px)': {
              padding:"0 0 0 0rem"
             },}}>
               <Typography  fontSize='19px' fontWeight='500' color='#021b79'>Item &nbsp; &nbsp;&nbsp;: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <span style={{fontWeight:"bold"}}>{booking.package}</span> </Typography>
        {booking.privateSession && !booking.aprroved ?  <Typography  fontSize='16px' paddingTop='0.1rem' fontWeight='500' color='#021b79'>Date &nbsp; : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {booking.date} <span style={{color:'red',fontSize:'11px' ,fontWeight:'400'}}>**Please Check the Date and time (it may vary after approval)  **</span> </Typography> :  <Typography  fontSize='16px' paddingTop='0.1rem' fontWeight='500' color='#021b79'>Date &nbsp; : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {booking.date} </Typography>}      
        {booking.privateSession && !booking.aprroved ?  <Typography  fontSize='16px' paddingTop='0.1rem' fontWeight='500' color='#021b79'>Time &nbsp; : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {booking.time} <span style={{color:'red',fontSize:'11px' ,fontWeight:'400'}}>**Please Check the Date and time (it may vary after approval)  **</span> </Typography> :  <Typography  fontSize='16px' paddingTop='0.1rem' fontWeight='500' color='#021b79'>Time&nbsp;(24hrs) &nbsp; : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {booking.time} </Typography>}  
   
               <Typography  fontSize='16px' paddingTop='0.1rem' fontWeight='500'  color='#021b79'>Zoom Meeting Link :{booking.aprroved == true   ? 
   booking?.link.map((link ,index)=>(
    <span key={index}>
<a href={link}><span style={{ textDecoration: 'none', cursor: 'pointer', color: '#f05933',padding:"0 1rem" }}>
     Click Here  <span style={{fontSize:'10px',color:'#000'}}>{index==0?'1st Meeting Link':'2nd Meeting Link'}</span>  
  </span> </a> 
  </span>
   ))
         : 

          "The link will reach to you shortly after admin approval"
        }  </Typography>
               <Typography  fontSize='13px' paddingTop='0.1rem' fontWeight='500' align='right'  color='#021b79'>For any queries contact our <Link style={{fontSize:"13px",padding:"0px",textDecoration:"underline"}} href='/contact'>Customare Care</Link> </Typography>

              <Box sx={{display:'flex',alignItems:'center',justifyContent:'end',paddingTop:'.5rem',gap:'1rem'}}>
                  <Button 
                href='./subscription'
                rel="noopener noreferrer"
               sx={{fontSize:'15px',fontWeight:'400',background:'linear-gradient(to right, #141e30, #243b55)',textTransform:'none',width:'100%',color:'#fff','&:hover':{background:'linear-gradient(to left, #141e30, #243b55)',color:'#fff',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'}}}>Join Telegram Group</Button>
          
              </Box>
              <Box sx={{color:'#32385a',border:"1px solid #414976",padding:"5px 15px",borderRadius:"5PX",background:"#F2F3F8"}}>
                <Typography sx={{fontSize:"13px"}}>Note: Upon approval, one copy of the meeting link will be in your cart, and another will be sent to your email for seamless access. Thank you.</Typography></Box>
               </Box>
              </Box>
              
 </Box>

            ))}
            

              
        </Box>
    </Container>
    <Box>
     {language === 'english' ? <Footer/> :  <FooterArabic/> }
     {language === 'english' ? <BottomBar/> :  <BottomBarArabic/> }
     </Box>
    </Box>
  )
}

export default Cart