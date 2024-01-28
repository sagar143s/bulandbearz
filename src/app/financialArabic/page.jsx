import Footer from '@/components/English/Footer/Footer'
import Health from '@/components/Arabic/Healtharabic/Health'
import Reservation from '@/components/Arabic/Reservationarabic/Reservation'
import React from 'react'
import { Box } from '@mui/material'


const page = () => {
  return (
    <div style={{height:'90dvh',overflow:'auto',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <Health/>
        <Reservation/>
        <Box sx={{marginTop:'2rem'}}>
        <Footer/>
        </Box>
    </div>
  )
}

export default page