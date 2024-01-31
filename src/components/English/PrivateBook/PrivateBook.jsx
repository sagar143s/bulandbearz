"use client"
import React, { useEffect, useState } from 'react'
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import Stock from '../../../../public/stockImg.jpeg'
import { useParams } from 'next/navigation'


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

    
  return (
   <Container sx={{pt:'2rem',height:'90dvh',overflow:'auto'}}>

    <Box>
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
    </Grid>
    <Grid item xs={12} sm={12} md={6} lg={6}  >
    <Typography fontSize='14px' pt='15px' fontWeight='500'>Choose the Date*</Typography>  
          <TextField type='date'
          value={date}
          onChange={(e)=>setDate(e.target.value)}
          sx={{width:'100%',mt:'5px'}} InputProps={{style:{
            fontSize:'14px',
            fontWeight:'500',
            height:'40px'
          }}} />
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
     <Button fullWidth variant='outlined' sx={{mt:'1rem',background:'#32385a',color:'#fff','&:hover':{background:'#32385a',color:'#fff'},textTransform:'none'}} >Book Now</Button>
    </Grid>      

    </Grid>
    </Box>

    </Box>

   </Container>
  )
}

export default PrivateBook