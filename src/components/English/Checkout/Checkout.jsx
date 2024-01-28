"use client"
import React from 'react'
import { Box,Typography,Button, Container, TextField } from '@mui/material'
import Stock from '../../../../public/stockImg.jpeg'
import Stock1 from '../../../../public/stockImg1.jpeg'
import Image from 'next/image'
import { loadStripe } from '@stripe/stripe-js'
import { useRouter } from 'next/navigation'


const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );


const Checkout = () => {
const router = useRouter();
    const handleCheckout = async()=>{
        try {
            const stripe = await stripePromise;
            const response = await fetch("/api/checkoutsession", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
            });
      
            const { sessionId } = await response.json();
            const { error } = await stripe.redirectToCheckout({
              sessionId,
            });
      
            if (error) {
              router.push("/error");
            }
            else{
                router.push('/paymentsuccess')
            }
          } catch (err) {
            console.error("Error in creating checkout session:", err);
            router.push("/error");
          }
    }
  return (
    <Container sx={{marginTop:'7rem'}}>
        <Box sx={{display:'flex',gap:'1rem'}}>
            <Box sx={{flex:2,display:'flex',background:'#fff',flexDirection:'column',gap:'1rem',width:'100%',border:'solid 1px #dddfe1',boxShadow:'1.5px 2.6px 10px 0 rgba(119, 119, 119, 0.1)',borderRadius:'11px'}}>
          <Box sx={{background:'linear-gradient(to right, #f3904f, #3b4371)',borderRadius:'11px 11px 0px 0px',height:'70px',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',}} >
          <Typography align='center'  fontSize='25px' fontWeight='500' color='#fff' paddingTop='1rem'>Confirm Client Details</Typography>
          </Box>
         
         <Box sx={{width:'100%',paddingLeft:'1rem'}}>
          <Typography  fontSize='14px' fontWeight='400' color='#021b79' paddingTop='1rem' paddingBottom='0.2rem'>Confirm Name *</Typography>
          <TextField value="Sajad Hakkim"  type='text' InputProps={{ style: { borderRadius: '8px', height: '40px', fontFamily: "Rubik", fontSize: '15px', width: '200%' } }} />
          </Box>
          <Box sx={{width:'100%',paddingLeft:'1rem'}}>
          <Typography  fontSize='14px' fontWeight='400' color='#021b79' paddingTop='1rem' paddingBottom='0.2rem'>Confirm Email *</Typography>
          <TextField value="SajadHak@gmail.com"  placeholder='Enter the Email' type='email' InputProps={{ style: { borderRadius: '8px', height: '40px', fontFamily: "Rubik", fontSize: '15px', width: '200%',marginTop:'1rem' } }} />
          </Box>
          <Box sx={{width:'100%',paddingLeft:'1rem',paddingBottom:'1rem'}}>
          <Typography  fontSize='14px' fontWeight='400' color='#021b79' paddingTop='1rem' paddingBottom='0.2rem'>Confirm Phone *</Typography>
          <TextField value="+971 55 297 2298"  placeholder='Enter the Email' type='email' InputProps={{ style: { borderRadius: '8px', height: '40px', fontFamily: "Rubik", fontSize: '15px', width: '200%',marginTop:'1rem' } }} />
          </Box>
            </Box>
            <Box sx={{flex:1 ,background:'#fff',display:'flex',flexDirection:'column',gap:'0.5rem',width:'100%',border:'solid 1px #dddfe1',boxShadow:'1.5px 2.6px 10px 0 rgba(119, 119, 119, 0.1)',borderRadius:'11px'}}>
            <Box sx={{background:'linear-gradient(to right, #f3904f, #3b4371)',borderRadius:'11px 11px 0px 0px',height:'70px',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
            <Typography align='center'  fontSize='25px' fontWeight='500' color='#fff' paddingTop='1rem'>Order Summary </Typography>
            </Box>
            <Box sx={{display:'flex', alignItems:'center' , justifyContent:'space-between',paddingLeft:'1rem',paddingRight:'1rem'}}>
            <Typography   fontSize='15px' fontWeight='400' color='#021b79' paddingTop='0.5rem'>Learn stocks <br></br> from scratch 101 course </Typography>
            <div style={{ position: 'relative', width: '50px', height: '50px' }}>
            <Image src={Stock} fill style={{objectFit:'cover'}}  alt='events'/>
             </div>
             
            </Box>
          <Box sx={{ width: '100%', height: '2px', background: '#f3f3f3' }}></Box>

            <Box sx={{display:'flex', alignItems:'center' , justifyContent:'space-between',paddingLeft:'1rem',paddingRight:'1rem'}}>
            <Typography   fontSize='15px' fontWeight='400' color='#021b79' paddingTop='1rem'>Date & Time</Typography>
            <Typography   fontSize='15px' fontWeight='400' color='#021b79' paddingTop='1rem'>December 30,<br></br> 2023 at 6:00 PM </Typography> 
            </Box>
          <Box sx={{ width: '100%', height: '2px', background: '#f3f3f3' }}></Box>

            <Box sx={{display:'flex', alignItems:'center' , justifyContent:'space-between',paddingLeft:'1rem',paddingRight:'1rem'}}>
            <Typography   fontSize='16px' fontWeight='450' color='#021b79' paddingTop='1rem'>Price </Typography>
            <Typography   fontSize='16px' fontWeight='450' color='#021b79' paddingTop='1rem'>388 AED </Typography> 
            
            </Box>
            <Box sx={{display:'flex', alignItems:'center' , justifyContent:'space-between',paddingLeft:'1rem'}}>
               <Box></Box>
             <Box sx={{ width: '50%', height: '2px', background: '#f3f3f3' }}></Box>
               
            </Box>

            <Box sx={{display:'flex', alignItems:'center' , justifyContent:'space-between',paddingLeft:'1rem',paddingRight:'1rem'}}>
            <Typography   fontSize='16px' fontWeight='450' color='#021b79' paddingTop='1rem'>Discount </Typography>
            <Typography   fontSize='16px' fontWeight='450' color='#021b79' paddingTop='1rem'>13 AED </Typography> 
            
            </Box>

            <Box sx={{display:'flex', alignItems:'center' , justifyContent:'space-between',paddingLeft:'1rem'}}>
               <Box></Box>
             <Box sx={{ width: '50%', height: '2px', background: '#f3f3f3' }}></Box>
               
            </Box>

            <Box sx={{display:'flex', alignItems:'center' , justifyContent:'space-between',paddingLeft:'1rem',paddingRight:'1rem'}}>
            <Typography   fontSize='19px' fontWeight='450' color='#021b79' paddingTop='1rem'>Total</Typography>
            <Typography   fontSize='19px' fontWeight='450' color='#021b79' paddingTop='1rem'>375 AED </Typography> 
            
            </Box>

            
            </Box>

        </Box>
           <Box sx={{display:'flex',justifyContent:'center'}}>
        <Button variant='contained' onClick={handleCheckout}  sx={{ background: 'linear-gradient(to right, #f3904f, #3b4371)', borderRadius: '8px', height: '45px', textTransform: 'none', fontFamily: "Rubik", fontSize: '12px', width: '50%', marginTop: '3rem' }}>Pay Now</Button>

           </Box>
    </Container>
  )
}

export default Checkout