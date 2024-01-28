"use client"
import { Box, Button, Dialog, DialogContent ,Typography } from '@mui/material'

import React, { useState } from 'react'
import { useUser } from '@/context/UserContext'

const LogoutPop = ({dialogue,onClose}) => {
    const [open,setOpen] = useState(false)
    const {logout} = useUser()

   
   useState(()=>{
    setOpen(dialogue)
   })
   
    const handleClose =()=>{
    setOpen(false)
    onClose()
   }
   const handleLogout=()=>{
    logout()
    setOpen(false)
    onClose()
   }


  return (
    <Dialog
     open={dialogue} 
     onClose={handleClose}
     sx={{borderRadius:'22px'}}
    >
        <DialogContent sx={{width:'350px',borderRadius:'22px'}}>
            <Box sx={{display:'grid',placeItems:'center'}}>
                    <Typography fontWeight={600} >Are you Sure Want to logout ?</Typography>
                    <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',gap:'2rem',marginTop:'2rem'}}>
               <Button onClick={handleLogout} sx={{background:'#32385a',color:'#fff','&:hover':{background:'#32385a',color:'#fff'} ,width:'100px'}} >Logout</Button>
               <Button onClick={handleClose} variant='outlined' sx={{background:'#fff',color:'#000',border:'1px solid #000' ,width:'100px','&:hover':{background:'#fff',color:'#000',border:'1px solid #000'}}}>Cancel</Button>
                    </Box>
            </Box>
        </DialogContent>
    </Dialog>
  )
}

export default LogoutPop