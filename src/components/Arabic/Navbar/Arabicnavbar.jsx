"use client";
import { Box,Typography,Button,TextField } from '@mui/material'
import React,{useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import TranslateIcon from '@mui/icons-material/Translate';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import Image from 'next/image';
import Logo from '../../../../public/lOGO.png'
import Logo1 from '../../../../public//logos/logowhite.png'
import User from '../../../../public/User.png'
import Link from 'next/link';
import Language from '../../../../public/lgs.png'
import Cart from '../../../../public/cart.png'
 import LoginPopup from '../LoginPopup/LoginPopup'; 
import SignupPopup from '../SigninPopup/signpopup';
import './Arabicheader.module.css'




const EnglishHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [loginPopupOpen, setLoginPopupOpen] = useState(false);
  const [signupPopupOpen, setSignupPopupOpen] = useState(false);
  const open = Boolean(anchorEl);
  
  const open1 = Boolean(anchorEl1);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickLan = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleCloseLan = () => {
    setAnchorEl1(null);
  };

  const handleLogin = () => {
    setLoginPopupOpen(true);
  };

  const handleCloseLoginPopup = () => {
    setLoginPopupOpen(false);
  };

  const handleSignup = () => {
    setSignupPopupOpen(true);
  };
  
  const handleCloseSignupPopup = () => {
    setSignupPopupOpen(false);
  };

  return (
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',height:'10dvh',padding:'1rem',background:'linear-gradient(to right, #f3904f, #3b4371)',boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',position: 'relative', overflow: 'hidden' }}>
      
   <Box sx={{display:{xs:'none' ,sm:'none',md:'flex'},alignItems:'center',justifyContent:'center',gap:'1rem',color:'#021b79'}}>
     
     <Link href='/cart'>   <Avatar sx={{cursor:'pointer',width:'30px' ,height:'30px'}}>
     <Image src={Cart} alt="User"  fill/>
     
     </Avatar>
     </Link>
  
    
  
     <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2,color:'#021b79' }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
           <Avatar sx={{width:'30px' ,height:'30px'}}>
     <Image src={User} alt="User"fill />
  </Avatar>
             
            </IconButton>
  
            <IconButton
              onClick={handleClickLan}
              size="small"
              sx={{ ml: 2,color:'#021b79' }}
              aria-controls={open1 ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open1 ? 'true' : undefined}
            >
              <Avatar sx={{width:'30px' ,height:'30px'}}>
      <Image src={Language} alt="User" fill  />
  </Avatar>
             
            </IconButton>
      
      
     </Box>
  
     <Box sx={{display:{xs:'block',sm:'block',md:'none'}}}>
      <MenuIcon />
  
     </Box>
  
     <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 28,
                height: 28,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 15,
                width: 15,
                height: 15,
                bgcolor: 'background.paper',
                transform: 'translateY(-60%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
   
          <MenuItem onClick={handleLogin}  sx={{fontFamily:'Rubik',fontSize:'14px' ,fontWeight:'600'}}>
            Log In
          </MenuItem>
          
          <MenuItem onClick={handleSignup} sx={{fontFamily:'Rubik',fontSize:'14px' ,fontWeight:'600'}}>
            Sign Up
          </MenuItem>
        </Menu>
  
        <Menu
          anchorEl={anchorEl1}
          id="account-menu"
          open={open1}
          onClose={handleCloseLan}
          onClick={handleCloseLan}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 15,
                height: 15,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 15,
                width: 15,
                height:15,
                bgcolor: 'background.paper',
                transform: 'translateY(-60%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleCloseLan} sx={{fontFamily:'Rubik',fontSize:'14px' ,fontWeight:'600'}}>
            English
          </MenuItem>
          <MenuItem onClick={handleCloseLan} sx={{fontFamily:'Rubik',fontSize:'14px' ,fontWeight:'600'}}>
            Arabic
          </MenuItem>
        </Menu>
  
        {loginPopupOpen && (
          <LoginPopup open={loginPopupOpen} onClose={handleCloseLoginPopup} />
        )}
         {signupPopupOpen && (
          <SignupPopup open={signupPopupOpen} onClose={handleCloseSignupPopup} />
        )}

   <Box sx={{display:{xs:'none' ,sm:'none',md:'flex'},alignItems:'center',justifyContent:'center',gap:'1rem',direction:'rtl'}}>
   <Link href='/' style={{textDecoration:'none'}}><Typography fontFamily='Rubik' fontWeight='500' fontSize='15px' color='#fff' sx={{border: '1px solid rgba(44, 62, 80, 0.5)',paddingLeft:'0.5rem',paddingRight:'0.5rem',paddingTop:'0.2rem',paddingBottom:'0.2rem',cursor:'pointer',borderRadius:'8px' ,'&:hover':{background:'#fff',color:'#000'}}}>المنزل</Typography></Link>
   <Link href='/about' style={{textDecoration:'none'}}><Typography fontFamily='Rubik' fontWeight='500' fontSize='15px' color='#fff' sx={{border: '1px solid rgba(44, 62, 80, 0.5)',paddingLeft:'0.5rem',paddingRight:'0.5rem',paddingTop:'0.2rem',paddingBottom:'0.2rem',cursor:'pointer',borderRadius:'8px','&:hover':{background:'#fff',color:'#000'}}}>حولنا</Typography></Link>
   <Link href='/bookings' style={{textDecoration:'none'}}><Typography fontFamily='Rubik' fontWeight='500' fontSize='15px' color='#fff' sx={{border: '1px solid rgba(44, 62, 80, 0.5)',paddingLeft:'0.5rem',paddingRight:'0.5rem',paddingTop:'0.2rem',paddingBottom:'0.2rem',cursor:'pointer',borderRadius:'8px','&:hover':{background:'#fff',color:'#000'}}}>احجز الآن</Typography></Link>
   <Link href='/financial' style={{textDecoration:'none'}}><Typography fontFamily='Rubik' fontWeight='500' fontSize='15px' color='#fff' sx={{border: '1px solid rgba(44, 62, 80, 0.5)',paddingLeft:'0.5rem',paddingRight:'0.5rem',paddingTop:'0.2rem',paddingBottom:'0.2rem',cursor:'pointer',borderRadius:'8px','&:hover':{background:'#fff',color:'#000'}}}>عيادة الصحة المالية</Typography></Link>
   <Link href='/contact' style={{textDecoration:'none'}}><Typography fontFamily='Rubik' fontWeight='500' fontSize='15px' color='#fff' sx={{border:'1px solid rgba(44, 62, 80, 0.5)',paddingLeft:'0.5rem',paddingRight:'0.5rem',paddingTop:'0.2rem',paddingBottom:'0.2rem',cursor:'pointer',borderRadius:'8px','&:hover':{background:'#fff',color:'#000'}}}>تواصل معنا</Typography></Link>
   </Box>


  
       <Box sx={{width:'120px', height:'60px'}} >
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
    <Image src={Logo1} fill alt='events' style={{ objectFit: 'contain' }} />
        </div>
   </Box>
    </Box>
  )
}

export default EnglishHeader