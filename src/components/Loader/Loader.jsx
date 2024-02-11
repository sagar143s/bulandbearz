"use client"
import React,{useEffect, useState} from 'react'
import styles from './Loader.module.css'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Loader = ({dialog,onClose} ) => {
    
    const [open, setOpen] = React.useState(false);
    

    useEffect(()=>{
         setOpen(dialog)
    },[])

    const handleClose = () => {
        setOpen(false);
        onClose()
      };

  return (
 <Dialog
 open={dialog}
onClose={handleClose}
aria-labelledby="alert-dialog-title"
aria-describedby="alert-dialog-description"
PaperProps={{
    style: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
  }}
 >
    <DialogContent sx={{background:'transparent',width:"150px",height:'120px',display:'grid',placeItems:'center'}}>
    <div className={styles.honeycomb} >
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
</DialogContent>
</Dialog>
  )
}

export default Loader