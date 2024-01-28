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
      <Container sx={{ marginTop: '2rem', width: '100vw',padding:"3rem 0" }}>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' }, width: '100%',gap:'2rem' }} dir='rtl'>

              <Box sx={{ flex: 1, width: '100%' }}>

                  <Typography fontSize='18px' align='left' color='#f3904f' fontWeight='600' >مَن نَحن</Typography>
                  <Box sx={{ background: '#f3f3f3', height: '1px', width: '100%', marginTop: '0.3rem', marginBottom: '1.5rem', }}></Box>


                  <Typography fontSize='30px' color='#f3904f' fontWeight='600'>قم برفع مستوى أعمالك في دبي مع حافة استراتيجيتنا.</Typography>

                   <Typography fontSize='15px' color='gray' fontWeight='500' textAlign='justify' paddingTop='1.5rem'>
                   فتح أفق النمو وتحقيق أهدافك طويلة الأمد. اختبر حرية التركيز على ما يهم، بينما نقوم ببناء قصة نجاحك.</Typography>
                  <Typography fontSize='15px' color='gray' fontWeight='500' textAlign='justify' paddingTop='1.5rem'>نحن شركة استشارات رائدة مقرها في دبي متخصصة في التنمية الاستراتيجية للمشاريع التجارية والحكومية. في منظر الأعمال الديناميكي الحالي، تلجأ الشركات إلينا للحصول على حلول مبتكرة في مجالات البيع والتسويق والعمليات. تكمن خبرتنا في تنفيذ استراتيجيات عالمية لرفع مستوى فريقك وتحقيق الأهداف على المدى الطويل في دبي المتنوعة.</Typography>
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