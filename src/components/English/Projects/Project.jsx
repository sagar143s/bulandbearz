"use client"
import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { Container } from '@mui/material';

import Image1 from '../../../../public/Home/services/investment.png'
import Image2 from '../../../../public/Home/services/market.png'
import Image3 from '../../../../public/Home/services/trend.png'
import Image4 from '../../../../public/Home/services/technical.png'
import Image5 from '../../../../public/Home/services/financial.png'
import Image6 from '../../../../public/Home/services/trading.png'
import Image from 'next/image';

// Array of card details to populate the cards
const cardDetails = [
  { title: 'Investment Advisory',  description: 'EExplore Investment Advisory for strategic stock market decisions and diverse platforms, ensuring informed choices for optimal financial outcomes.', imageUrl: Image1},
  { title: 'Market Research',  description: 'Empower investment decisions with comprehensive stock market research for well-informed and strategic investment choices.',  imageUrl: Image2},
  { title: 'Market Trends Analysis',  description: 'Elevate investments with our Trends Analysis service, providing precise insights for strategic decisions in dynamic markets.',  imageUrl: Image3 },
  { title: 'Technical Analysis',  description: 'Leverage advanced tools for market trend analysis, gain insights, and optimize returns with our comprehensive financial analysis.',  imageUrl: Image4 },
  { title: 'Financial Planning', description: 'Secure your financial future with personalized investment strategies, ensuring a prosperous journey towards lasting financial success.',  imageUrl: Image5 },
  { title: 'Trading Strategies  ', description: 'Maximize returns with our cutting-edge trading strategies, leveraging market insights for strategic and informed investment decisions.',  imageUrl: Image6 },

];
const topSection = {
  heading: 'FINANCIAL INSIGHTS SPECTRUM',
  subheading: 'Unveiling Investment Advisory',
  description: 'A Comprehensive Guide to Investment Advisory, Offering Expert Analysis and Strategic Perspectives for Informed Financial Decision-Making in Todays Dynamic Markets.',
};

const ProjectItems = () => {
  return (
    <Container  sx={{ flexGrow: 1, paddingTop:'80px',paddingBottom:'5rem' }}>
 <Grid container spacing={5} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={12} md={6}>
          <Typography gutterBottom variant="h4" component="div" style={{fontWeight:'bold',color:'#485563',textTransform:'none'}} >
            {topSection.heading}
          </Typography>
          <Typography gutterBottom variant="h6" component="div" color='text.secondary' fontWeight='600' >
            {topSection.subheading}
          </Typography>
          
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" color="darkgray" paddingTop='1rem' fontWeight='500'>
            {topSection.description}
          </Typography>
          <Button href='./bookings' sx={{background:'#32385a',borderRadius:'5px',fontWeight:'bold',textTransform:'none',color:'#fff',marginTop:'1rem',width:'180px',border:'1px solid #32385a', '&:hover': {color:'#fff',border:'1px solid #32385a',background:'linear-gradient(to right, #141e30, #32385a)'}}}>DISCOVER MORE</Button>
        </Grid>
      </Grid>

    <Box sx={{ flexGrow: 1, paddingTop: '50px' }}>
      <Grid container spacing={3}>
        {cardDetails.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={{borderRadius:'10px'}}>
            <CardMedia component="div">
                 <Image src={card.imageUrl} alt={card.title}style={{width:"100%",height:"200px"}}  />
                 </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color='#485563' fontWeight={600}>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="#485563" fontWeight='500'>
                  {card.description}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'start', padding: 2 }}>
                <Button href='./bookings' style={{background:'#32385a',borderRadius:'5px',fontWeight:'500',textTransform:'none',width:'150px'}} size="small"  variant="contained">Learn More</Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Container>
  );
};

export default ProjectItems;
