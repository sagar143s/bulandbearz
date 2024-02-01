"use client"
import React, { useEffect, useState } from 'react'
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import Stock from '../../../../public/stockImg.jpeg'
import { useParams } from 'next/navigation'
import Footer from '../Footer/Footer'
import FooterArabic from '@/components/Arabic/Footer/Footer'
import { useLanguage } from '@/context/LanguageContext'
import BottomBar from '@/components/English/bottombar/bottom'
import BottomBarArabic from '@/components/Arabic/bottombar/bottom'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const PrivateBook = () => {
    const [name,setName] = useState('')
    const [email,setEmail ]=useState('')
    const [contryCode,setCountryCode] =useState('971')
    const [phone,setPhone] = useState('')
    const [date,setDate]=useState('')
    const [time,setTime]=useState('')
    const [image,setImage]=useState('')
    const [title,setTitle]=useState('')
    const [price,setPrice] = useState('')
    const params = useParams()
    const { language } = useLanguage();


    const [errors, setErrors] = useState({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
    });

    useEffect(()=>{
    const fetchSession = async()=>{

   const res = await fetch(`/api/fetchSession/${params.id}`,{
    method:'GET',
    headers:{
        'Content-Type':'application/json'
    }
   })

   const response =await res.json()
     setImage(response.image)
     setTitle(response.title)
     setPrice(response.price)
  

    }

    fetchSession()
    },[])



    useEffect(()=>{
        const userId = localStorage.getItem('userId')
        const fetchUser = async()=>{
            const res = await fetch(`/api/fetchUser/${userId}`,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const response = await res.json()
            console.log(response,'user');
               setName(response?.name)
               setEmail(response.email)


        }
              fetchUser()
    },[])


    const validateForm = () => {
      let valid = true;
      const newErrors = { name: '', email: '', phone: '', date: '', time: '' };
    
      // Validate Name
      if (!name.trim()) {
        newErrors.name = 'Name is required';
        valid = false;
      }
    
      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.trim() || !emailRegex.test(email)) {
        newErrors.email = 'Valid email is required';
        valid = false;
      }
    
      // Validate Phone
      const phoneRegex = /^\d+$/;
      if (!phone.trim() || !phoneRegex.test(phone)) {
        newErrors.phone = 'Valid phone number is required';
        valid = false;
      }
    
      // Validate Date
      if (!date.trim()) {
        newErrors.date = 'Date is required';
        valid = false;
      }
    
      // Validate Time
      if (!time.trim()) {
        newErrors.time = 'Time is required';
        valid = false;
      }
    
      setErrors(newErrors);
    
      return valid;
    };
    
    


    const handleFormSubmit = async() => {
      const userId = localStorage.getItem('userId')
      try {
        if (validateForm()) {
          console.log('Form is valid, submitting...');
          const stripe = await stripePromise;
           const payload = {
            bookingDetails:{
              username:name,
              email:email,
              phone:phone,
              selectedDate:date,
              selectedTime:time,
            },
            courseDetails:{
              _id:params.id,
              title:title,
              price:price,
              privateSession:true
            },
            userId:userId
           }
           const response = await fetch("/api/checkoutsession", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });
  
          const { sessionId } = await response.json();
          const { error } = await stripe.redirectToCheckout({
                sessionId,
              });
        } else {
          console.log('Form is not valid, please check the errors');
        }
      } catch (error) {
        alert(error.message)
      }
      
    };

    
  return (
    <Box sx={{height:'90dvh',overflow:'auto'}}>

   <Container sx={{overflow:'auto',padding:"2rem 0 3rem"}}>

    <Box sx={{padding:"2rem 0"}}>
    <Typography  fontSize='25px' color='#32385a' fontWeight='bold' >Book Now</Typography>
          <Box sx={{background:'#f3f6f9' , height:'2px' ,width:'100%' }}></Box> 
    </Box>

    <Grid container spacing={2}>
    <Grid item xs={12} sm={12} md={6} lg={6}  >
        <Typography fontSize='14px' pt='15px' fontWeight='500'>Name</Typography>  
          <TextField value={name} sx={{width:'100%',mt:'5px'}} InputProps={{style:{
            fontSize:'14px',
            fontWeight:'500',
            height:'40px',

          }}} />
            <div style={{ color: 'red', fontSize: '12px' }}>{errors.name}</div>

    </Grid>
    <Grid item xs={12} sm={12} md={6} lg={6}  >
           
    <Typography fontSize='14px' pt='15px' fontWeight='500'>Email</Typography>  
          <TextField value={email} sx={{width:'100%',mt:'5px'}} InputProps={{style:{
            fontSize:'14px',
            fontWeight:'500',
            height:'40px'
          }}} />
    </Grid>
    <Grid item xs={12} sm={12} md={6} lg={6}  >
    <Typography fontSize='14px' pt='15px' fontWeight='500'>Phone(with country code)*</Typography>  
    <TextField type='number' value={contryCode} onChange={(e)=>setCountryCode(e.target.value)} sx={{width:'25%',mt:'5px'}} InputProps={{startAdornment:(
            <>+</>
          ) ,style:{
            fontSize:'14px',
            fontWeight:'500',
            height:'40px',
            borderRadius:0
          }}} />
          <TextField type='number' value={phone} onChange={(e)=>setPhone(e.target.value)} sx={{width:'75%',mt:'5px'}} InputProps={{style:{
            fontSize:'14px',
            fontWeight:'500',
            height:'40px',
            borderRadius:0
          }}} />
            <div style={{ color: 'red', fontSize: '12px' }}>{errors.phone}</div>

    </Grid>
    <Grid item xs={12} sm={12} md={6} lg={6}  >
    <Typography fontSize='14px' pt='15px' fontWeight='500'>Choose the Date*</Typography>  
          <TextField 
          type='date'
          value={date}
          onChange={(e)=>setDate(e.target.value)}
          sx={{width:'100%',mt:'5px'}} InputProps={{style:{
            fontSize:'14px',
            fontWeight:'500',
            height:'40px'
          }}} />
  <div style={{ color: 'red', fontSize: '12px' }}>{errors.date}</div>

    </Grid>
    
    <Grid item xs={12} sm={12} md={6} lg={6}  >
         <Typography fontSize='14px' pt='15px' fontWeight='500'>Choose the time*</Typography>  
          <TextField type='time'
          value={time}
          onChange={(e)=>setTime(e.target.value)}
          sx={{width:'100%',mt:'5px'}}  InputProps={{  style:{
            fontSize:'14px',
            fontWeight:'500',
            height:'40px'
          }}} />
            <div style={{ color: 'red', fontSize: '12px' }}>{errors.time}</div>

    </Grid>
    </Grid>

    <Box sx={{background:'#f3f6f9' ,mt:'3rem' , height:'2px' ,width:'100%' }}></Box> 

    <Box sx={{display:'flex' ,alignItems:'center' , justifyContent:{xs:'center',sm:'center', md:'space-between'},mt:'1rem',width:'100%',flexDirection:{xs:'column',sm:'column',md:'row'}}}>
    
    <Box>
        <Image src={image} width={300} height={180} alt='image' /> 
    </Box>

    <Box sx={{width:'50%'}}>
    <Grid container spacing={2}>
    <Grid item xs={12} sm={12} md={12} lg={12}  >
    <Typography fontSize='14px'  fontWeight='500'>Booking Title</Typography>  
          <TextField value={title}  sx={{width:'100%',mt:'5px'}} InputProps={{style:{
            fontSize:'14px',
            fontWeight:'500',
            height:'40px',
          }}} />
    </Grid>
    <Grid item xs={12} sm={12} md={12} lg={12}  >
    <Typography fontSize='14px'  fontWeight='500'>Booking Price</Typography>  
          <TextField value={price} sx={{width:'100%',mt:'5px'}} InputProps={{startAdornment:(
            <Box sx={{pr:'1rem'}}>AED</Box>
          ) ,style:{
            fontSize:'14px',
            fontWeight:'500',
            height:'40px',
          }}} />
    </Grid>
     
    <Grid item xs={12} sm={12} md={12} lg={12} sx={{pb:'1rem'}}>
     <Button onClick={handleFormSubmit} fullWidth variant='outlined' sx={{mt:'1rem',background:'#32385a',color:'#fff','&:hover':{background:'#32385a',color:'#fff'},textTransform:'none'}} >Book Now</Button>
    </Grid>      

    </Grid>
    </Box>

    </Box>

   </Container>
   {language === 'english' ? <Footer/> :  <FooterArabic/> }
     {language === 'english' ? <BottomBar/> :  <BottomBarArabic/> }
    </Box>
  )
}

export default PrivateBook