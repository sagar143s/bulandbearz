"use client"
import React, { useState } from 'react';
import  {Box, Button, Container, Typography} from '@mui/material'
import Image from 'next/image';
import WhoareWe from '../../../../public/img.jpg';
import styled from 'styled-components';




const StyledImage = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 350px;

    @media (max-width: 600px) {
      height: auto;
    }
  }
`;

const Story = () => {
    const [showMore, setShowMore] = useState(false);

    const handleButtonClick = () => {
      setShowMore(!showMore);
    };

 
  
  return (
      <Container sx={{ marginTop: '2rem', width: '100vw',padding:"3rem 1rem" }}>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' }, width: '100%',gap:'2rem' }}>

              <Box sx={{ flex: 1, width: '100%' }}>

                  <Typography fontSize='18px' align='left' color='#f3904f' fontWeight='600' >WHO WE ARE</Typography>
                  <Box sx={{ background: '#f3f3f3', height: '1px', width: '100%', marginTop: '0.3rem', marginBottom: '1.5rem', }}></Box>


                  <Typography fontSize='30px' color='#f3904f' fontWeight='600'>Elevate your Dubai business with our strategic edge.</Typography>

                   <Typography fontSize='15px' color='gray' fontWeight='500' textAlign='justify' paddingTop='1.5rem'>
                   Unlocking growth and realizing your long-term objectives. Experience the freedom to focus on what matters, while we build your success story.                  </Typography>
                  <Typography fontSize='15px' color='gray' fontWeight='500' textAlign='justify' paddingTop='1.5rem'>We&apos;re a premier Dubai-based consulting firm specializing in strategic development for commercial and governmental projects. In today&apos;s dynamic business landscape, companies turn to us for innovative solutions in sales, marketing, and operations. Our expertise lies in implementing global strategies to elevate your team and achieve long-term goals in vibrant Dubai.</Typography>
                  {/* <Button sx={{ border: '1px solid #f3f3f3', borderRadius: '6px', color: '#fff', textTransform: 'none', width: '180px', marginTop: '1.5rem', background: 'linear-gradient(to right, #32385a, #3b4371)' }}>Load More</Button> */}

              </Box>

              <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', width: '100%', marginLeft: { md: 'none', lg: '9rem' } }}>
          <Box sx={{ padding: '0.5rem 0.5rem 0.2rem 0.5rem', border: '1px solid #f3f3f3', boxShadow: '1.5px 2.6px 10px 0 rgba(119, 119, 119, 0.3)' }}>
            <StyledImage>
              <Image src={WhoareWe} alt="Our Story" width={1000} height={800} />
            </StyledImage>
          </Box>
        </Box>




          </Box>
      </Container>






  )
}

export default Story