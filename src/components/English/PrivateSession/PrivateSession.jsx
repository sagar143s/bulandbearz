"use client"
import {Container, Box,Typography, Grid, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PrivateCard from '../PrivateCards/PrivateCard'




const PrivateSession = () => {
 const [sessions,setSessions] = useState([])

 useEffect(()=>{
    const fetchSession = async()=>{

const res = await fetch('api/privatesessionlist',{
    method:'GET',
    headers:{
        'Content-Type':'application/json'
    }
})

const response = await res.json()
  setSessions(response)
console.log(response,'sessions');


    }

    fetchSession()

 },[])


  return (
    <Container sx={{pt:'2rem',height:'90dvh',overflow:'auto'}}>
      <Box>
          <Typography  fontSize='25px' fontWeight='bold' >Private Sessions</Typography>
          <Box sx={{background:'#f3f6f9' , height:'1px' ,width:'100%' }}></Box> 
     </Box> 

     <Grid container spacing={3} sx={{mt:'1rem'}}>
        {Array.isArray(sessions) && sessions.map((session,index)=>(
            <Grid key={index} item xs={12} sm={6} md={4}  >
          <PrivateCard  id={session._id} title={session.title} description={session.description} image={session.image} price={session.price} />
           </Grid>
        ))}
        
    </Grid>
       
     </Container>
  )
}

export default PrivateSession