import Booking from '@/components/Arabic/BookingArabic/Booking'
import Footer from '@/components/English/Footer/Footer'
import { Box } from '@mui/material'
import React from 'react'
import BottomBar from '@/components/Arabic/bottombar/bottom'

const Bookings = () => {



  return (
    <>
    <Box sx={{height:'90dvh',overflow:'auto'}}>

    <Booking/>
    <Footer/>
    </Box>
    <BottomBar/>

    </>
  )
}

export default Bookings