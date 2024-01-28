
import Checkout from '@/components/English/Checkout/Checkout'
import Footer from '@/components/English/Footer/Footer'
import { Box } from '@mui/material'
import React from 'react'
import BottomBar from '@/components/English/bottombar/bottom'

const page = () => {
  return (
    <Box sx={{height:'90dvh',overflow:'auto',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
      <Checkout/>
      <Footer/>
      <BottomBar/>
    </Box>
  )
}

export default page