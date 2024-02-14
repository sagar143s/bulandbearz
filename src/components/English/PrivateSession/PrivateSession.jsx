"use client"
import {Container, Box,Typography, Grid, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PrivateCard from '../PrivateCards/PrivateCard'
import Footer from '../Footer/Footer'
import FooterArabic from '@/components/Arabic/Footer/Footer'
import { useLanguage } from '@/context/LanguageContext'
import BottomBar from '@/components/English/bottombar/bottom'
import BottomBarArabic from '@/components/Arabic/bottombar/bottom'
import SkeletonColor from '../Skelton/Skelton'
import Swal from 'sweetalert2'




const PrivateSession = () => {
 const [sessions,setSessions] = useState([])
 const [loading,setLoading] = useState(true)
 const { language } = useLanguage();


 useEffect(()=>{


    const fetchSession = async()=>{

const res = await fetch('api/privatesessionlist',{
    method:'GET',
    headers:{
        'Content-Type':'application/json'
    }
})

const response = await res.json()
if(res.ok){
  setLoading(false)
}else{
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Error in network!",
  });
}
  setSessions(response)



    }

    fetchSession()

 },[])


  return (
    <Box sx={{height:'90dvh',overflow:'auto'}}>

    <Container sx={{pt:'2rem',height:'80dvh',overflow:'auto'}}>
      <Box>
          <Typography  fontSize='35px'  fontWeight='bold'  style={{color:'#32385a'}}>Private Sessions</Typography>
          <Box sx={{background:'#f3f6f9' , height:'1px' ,width:'100%' }}></Box> 
     </Box> 
     {loading ? 
     (
<SkeletonColor/>
     )
      : 
     
    (
<Grid container spacing={3} sx={{mt:'1rem'}}>
        {Array.isArray(sessions) && sessions.map((session,index)=>(
            <Grid key={index} item xs={12} sm={6} md={4}  >
          <PrivateCard  id={session._id} title={session.title} description={session.subtitle} image={session.image} price={session.price} sessionNumbers={session.sessionNumbers} />
           </Grid>
        ))}
        
    </Grid>
    )
  }

     
       
     </Container>
     {language === 'english' ? <Footer/> :  <FooterArabic/> }
     {language === 'english' ? <BottomBar/> :  <BottomBarArabic/> }
    </Box>
  )
}

export default PrivateSession