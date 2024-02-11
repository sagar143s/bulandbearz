"use client"
import React, { useEffect, useState } from 'react'
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

  const [bookingDetail,setBookingDetail] = useState({})
  const [courseDetails,setCourseDetails] = useState({})

  const router = useRouter();

  useEffect(()=>{
    const storedBooking = localStorage.getItem('booking');
    const bookingDetails = storedBooking ? JSON.parse(storedBooking) : null;
    const id = bookingDetails.courseId
    setBookingDetail(bookingDetails)

   const fetchCourse = async()=>{
    const response  = await fetch(`/api/fetchCourse/${id}`,{
      method:'GET',
      headers:{
        'Content-type':'aaplication/json'
      }
    })
    const res =await response.json()
    setCourseDetails(res)
    
  }

  fetchCourse()

  },[])


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






    const handleCheckout = async()=>{
        try {
            
          const userId = localStorage.getItem('userId');
            const stripe = await stripePromise;
            const payload = {
              bookingDetails: bookingDetail,
              courseDetails: courseDetails,
              userId:userId
          };
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
    <Container sx={{marginTop:'5rem',marginBottom:'5rem'}}>
        <Box sx={{display:'flex',gap:'1rem',flexDirection:{xs:'column',sm:'column',md:'row'}}}>
            <Box sx={{flex:2,display:'flex',background:'#fff',flexDirection:'column',gap:'1rem',width:'100%',border:'solid 1px #dddfe1',boxShadow:'1.5px 2.6px 10px 0 rgba(119, 119, 119, 0.1)',borderRadius:'11px'}}>
          <Box sx={{background:'#32385a',borderRadius:'11px 11px 0px 0px',height:'70px',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',}} >
          <Typography align='center'  fontSize='25px' fontWeight='500' color='#fff' paddingTop='1rem'>Validate Client Information</Typography>
          </Box>
         
         <Box sx={{width:'100%',paddingLeft:'1rem'}}>
          <Typography  fontSize='14px' fontWeight='400' color='#021b79' paddingTop='1rem' paddingBottom='0.2rem'>Confirm Name *</Typography>
          <TextField value={bookingDetail.username}  type='text' InputProps={{ style: { borderRadius: '8px', height: '40px', fontSize: '15px', width: '200%',marginTop:'.25rem'  } }} />
          </Box>
          <Box sx={{width:'100%',paddingLeft:'1rem'}}>
          <Typography  fontSize='14px' fontWeight='400' color='#021b79' paddingTop='.5rem' paddingBottom='0.2rem'>Confirm Email *</Typography>
          <TextField value={bookingDetail.email}  placeholder='Enter the Email' type='email' InputProps={{ style: { borderRadius: '8px', height: '40px',  fontSize: '15px', width: '200%',marginTop:'.25rem' } }} />
          </Box>
          <Box sx={{width:'100%',paddingLeft:'1rem',paddingBottom:'1rem'}}>
          <Typography  fontSize='14px' fontWeight='400' color='#021b79' paddingTop='.5rem' paddingBottom='0.2rem'>Confirm Phone *</Typography>
          <TextField value={bookingDetail.phone}  placeholder='Enter the Email' type='email' InputProps={{ style: { borderRadius: '8px', height: '40px',  fontSize: '15px', width: '200%',marginTop:'.25rem' } }} />
           </Box>
       </Box>
            <Box sx={{flex:1 ,background:'#fff',display:'flex',flexDirection:'column',gap:'0.5rem',width:'100%',border:'solid 1px #dddfe1',boxShadow:'1.5px 2.6px 10px 0 rgba(119, 119, 119, 0.1)',borderRadius:'11px'}}>
            <Box sx={{background:'#32385a',borderRadius:'11px 11px 0px 0px',height:'70px',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
            <Typography align='center'  fontSize='25px' fontWeight='500' color='#fff' paddingTop='1rem'>Order Summary </Typography>
            </Box>
            <Box sx={{display:'flex', alignItems:'center' , justifyContent:'space-between',paddingLeft:'1rem',paddingRight:'1rem'}}>
            <Typography   fontSize='15px' fontWeight='400' color='#021b79' paddingTop='0.5rem'>{courseDetails.title} <br></br> {courseDetails.description} </Typography>
            <div style={{ position: 'relative', width: '50px', height: '50px' }}>
            <Image src={Stock} fill style={{objectFit:'cover'}}  alt='events'/>
             </div>
             
            </Box>
          <Box sx={{ width: '100%', height: '2px', background: '#f3f3f3' }}></Box>

            <Box sx={{display:'flex', alignItems:'center' , justifyContent:'space-between',paddingLeft:'1rem',paddingRight:'1rem'}}>
            <Typography   fontSize='15px' fontWeight='400' color='#021b79' paddingTop='1rem'>Date & Time</Typography>
            <Typography   fontSize='15px' fontWeight='400' color='#021b79' paddingTop='1rem'>{bookingDetail.selectedDate}<br></br>{bookingDetail.selectedTime} </Typography> 
            </Box>
          <Box sx={{ width: '100%', height: '2px', background: '#f3f3f3' }}></Box>

            <Box sx={{display:'flex', alignItems:'center' , justifyContent:'space-between',paddingLeft:'1rem',paddingRight:'1rem'}}>
            <Typography   fontSize='16px' fontWeight='450' color='#021b79' paddingTop='1rem'>Price </Typography>
            <Typography   fontSize='16px' fontWeight='450' color='#021b79' paddingTop='1rem'>{courseDetails.price} AED</Typography> 
            
            </Box>
            <Box sx={{display:'flex', alignItems:'center' , justifyContent:'space-between',paddingLeft:'1rem'}}>
               <Box></Box>
             <Box sx={{ width: '50%', height: '2px', background: '#f3f3f3' }}></Box>
               
            </Box>

            <Box sx={{display:'flex', alignItems:'center' , justifyContent:'space-between',paddingLeft:'1rem',paddingRight:'1rem'}}>
            <Typography   fontSize='16px' fontWeight='450' color='#021b79' paddingTop='1rem'>Discount </Typography>
            <Typography   fontSize='16px' fontWeight='450' color='#021b79' paddingTop='1rem'>0 AED </Typography> 
            
            </Box>

            <Box sx={{display:'flex', alignItems:'center' , justifyContent:'space-between',paddingLeft:'1rem'}}>
               <Box></Box>
             <Box sx={{ width: '50%', height: '2px', background: '#f3f3f3' }}></Box>
               
            </Box>

            <Box sx={{display:'flex', alignItems:'center' , justifyContent:'space-between',paddingLeft:'1rem',paddingRight:'1rem',paddingBottom:"2rem"}}>
            <Typography   fontSize='19px' fontWeight='450' color='#021b79' paddingTop='1rem'>Total</Typography>
            <Typography   fontSize='19px' fontWeight='450' color='#021b79' paddingTop='1rem'>{courseDetails.price} AED </Typography> 
            
            </Box>

            
            </Box>

        </Box>
           <Box sx={{display:'flex',justifyContent:'center',marginBottom:'1rem'}}>
        <Button variant='contained' onClick={handleCheckout}  sx={{ background: '#32385a', borderRadius: '8px', height: '45px', textTransform: 'none',  fontSize: '12px', width: '50%', marginTop: '3rem','&:hover':{background:'#32385a'} }}>Pay Now</Button>

           </Box>
    </Container>
  )
}

export default Checkout