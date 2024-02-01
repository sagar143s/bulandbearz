'use client';
import * as React from 'react';
import { useState } from 'react';
import { Grid, Typography, Paper, Box, Button, Container } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import Image from 'next/image';
import Icon1 from '../../../../public/icons Home/1.png'
import Icon2 from '../../../../public/icons Home/2.png'
import Icon3 from '../../../../public/icons Home/3.png'
import Icon4 from '../../../../public/icons Home/4.png'

const services = [
  {
    title: 'Guided Learning',
    image: Icon2,
    description: 'Personalized consultations and curated online resources for mastering trading fundamentals.',
  },
  {
    title: 'Platform Proficiency',
    image: Icon1,
    description: 'Cultivate enduring investments with personalized plans and tailored guidance. ',
  },
  {
    title: 'Strategic Planning', 
    image: Icon4,
    description: 'Develop a custom trading strategy with our experienced consultants.',
  },
  {
    title: 'Confidence Building:',
    image: Icon3,
    description: 'Develop your skills without any risk through hands-on demonstrations led by industry professionals.',
  },
];


const Columns =()=> {
    const [expandedService, setExpandedService] = useState(null);
    const isMobile = useMediaQuery('(max-width:600px)');

    const toggleExpand = (index) => {
      if (expandedService === index) {
        setExpandedService(null);
      } else {
        setExpandedService(index);
      }
    };
  
    return (
      <Container maxWidth="lg" sx={{ padding: '5rem 1rem 3rem ' }}>
        <Typography  fontSize='20px' textTransform='none' marginBottom={'1rem'}   sx={{ textAlign: 'center', color: '#485563',fontWeight:'600' }}>
        DISCOVER TRADE MASTERY        </Typography>
        <Typography variant={isMobile ? 'h6' : 'h4'} textTransform='none' component="h2" gutterBottom style={{ textAlign: 'center', marginBottom: 32, color: 'rgb(2,77,142)', fontWeight: 'bold' }}>
        Navigating the Markets with Insightful Consultancy
      </Typography>
      <Grid container spacing={3}>
  {services.map((service, index) => (
    <Grid item xs={12} sm={6} md={3} lg={3} key={index} style={{borderRadius:'10px' }}>
      <Paper elevation={6} style={{ padding: 18, display: 'flex', flexDirection: 'column', alignItems: 'left', height: '100%', backgroundColor: '#fafafa',borderRadius:'10px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 2, backgroundColor: 'transparent', borderRadius: '50%', padding: '10px' }}>
      <Image 
    src={service.image} 
    alt={service.title} 
    width={70} 
    height={70} 
    style={{ padding: "5px", objectFit: "contain" }}
/>
      </Box>
        <Typography variant="body1" style={{ padding: '10px 0', overflow: 'hidden', textAlign: 'left', color: '#000', fontWeight: 'bold',fontSize:'18px' }}>
          {service.title}
        </Typography>
        <Typography variant="body1" style={{ height: '90px', overflow: 'hidden', textAlign: 'left', color: '#616161', textAlign: 'justify',fontSize:'14px' }}>
          {service.description}
        </Typography>
      </Paper>
    </Grid>
  ))}
</Grid>
    </Container>
  );
}


export default Columns