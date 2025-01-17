"use client"
import React,{useEffect, useState} from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useUser } from '@/context/UserContext'
import GoogleIcon from '../../../../public/assets/login/google01.svg'
import Image from 'next/image'
import GoogleIcon1 from '@mui/icons-material/Google';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import Footer from '../Footer/Footer'
import FooterArabic from '@/components/Arabic/Footer/Footer'
import { useLanguage } from '@/context/LanguageContext'
import BottomBar from '@/components/English/bottombar/bottom'
import BottomBarArabic from '@/components/Arabic/bottombar/bottom' 
import { UserAuth } from '@/context/AuthContext'
import Swal from 'sweetalert2'
import Loader from './Loader/Loader'

const Login = () => {
    const [email,setEmail] = useState('')
    const [emailError,setEmailError] = useState('')
    const [passwordError,setPasswordError]=useState('')
    const [error,setError]=useState('')
    const [password,setPassword] = useState('')
    const router = useRouter()
    const {login} = useUser()
    const { language } = useLanguage();
    const {guser,googleSignIn,logOut} = UserAuth()
    const [isLoading,setIsLoading]=useState(false)
     
    const handleGoogle = async()=>{
      try{
     await googleSignIn()
     
      }catch(error){
        console.log(error.message);
      }
    }

    

    const handleSignout= async()=>{
  try {
    await logOut()
  } catch (error) {
    console.log(error.message);
  }
    }

    useEffect(()=>{
 if(guser){
const name = guser.displayName
const email=guser.email


    const saveUser = async()=>{
      try {
        const res = await fetch('/api/saveGoogleUser',{
          method:'POST',
          body:JSON.stringify({
            name,email
          }),
        })
        const response = await res.json()
        if(res.ok){
          Swal.fire({
            icon: "success",
            title: "Login Success",
        
          });
          const userId = response._id;
          const subscribed = response.subscribed
        
          if (userId) {
            localStorage.setItem('userId', userId);
            localStorage.setItem('subscribed', subscribed);
            login(response);
            router.push('/bookings', { shallow: true })
          }
         }else{
          const errorText = await res.text();
          Swal.fire({
            icon: "success",
            title: "Login Success",
            text:errorText
          });
         }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
      });
      }

    }

    saveUser()
 }else{

 }
    },[guser])
  
   
        
    


    const handleLogin = async(e) => {
      e.preventDefault();
  
      if (!email || !password) {
          console.error('Please provide both email and password');
          setError('Please provide both email and password')
          return;
      }
  
      try {
          setIsLoading(true)
          const res = await fetch('/api/auth/login', {
              method: 'POST',
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({
                  email,
                  password,
              }),
          })
          const response = await res.json()
  
          if (res.ok) {
              setIsLoading(false)
              const userId = response._id;
              const subscribed = response.subscribed
  
              if (userId) {
                  localStorage.setItem('userId', userId);
                  localStorage.setItem('subscribed', subscribed);
              }
              login(response);
              router.push('/bookings')
  
          } else {
              setIsLoading(false)
              setError(response)
              Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: response, // Display the error response directly
              });
          }
      } catch (err) {
          setIsLoading(false)
          console.log(err.message);
          Swal.fire({
              icon: "error",
              title: "Oops...",
              text: err.message,
          });
  
      }
  };

      const handleRegister=()=>{
        router.push('/register')
      }

      const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
      };

      const handleForgotPassword = () => {

        router.push('/forgot-password'); 
    };

    const handleGoogleLogin = (response) => {
     
    
    };

    
  
   

  return (
    <Box sx={{height:'90dvh',overflow:'auto'}}>
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',margin:'3rem 0'}}>
    <Box
  sx={{
    width: '30%',
    background: '#fff',
    border: '0.5px solid #32385a',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: '20px',
    height: '78vh',
    '@media screen and (max-width: 768px)': {
      width: '100%', 
      margin:'0 1rem',
      height: '80vh',
      
    },
  }}
>               <Typography fontSize='28px'  color='#32385a' fontWeight={600}>Login</Typography>
               <Box sx={{width:'70%',}}>
               <Typography marginTop='1rem' fontSize='16px' align='left' color='#32385a' fontWeight={500}>Email*</Typography>
               <TextField sx={{width:'100%',marginTop:'0.2rem'}}  InputProps={{style:{height:'40px'}}}   type="email" onChange={(e)=>setEmail(e.target.value)}/>
               
               </Box>

               <Box sx={{ width: '70%' }}>
                    <Typography marginTop='1rem' fontSize='16px' align='left' color='#32385a' fontWeight={500}>Password*</Typography>
                    <TextField value={password} type='password' sx={{ width: '100%', marginTop: '0.2rem' }} InputProps={{ style: { height: '40px' } }} onChange={handlePasswordChange} />
                   {error && ( <Typography color='red' fontSize='11px' mt='15px'>{error}</Typography>)}
                    <Typography onClick={handleForgotPassword} marginTop='0.5rem' fontSize='14px' align='right' color='#7f63f4' fontWeight={400} style={{ cursor: 'pointer' }}>Forgot Password?</Typography>
                </Box>



   
            


                <Button disabled={isLoading} type="submit" onClick={handleLogin} sx={{background:'#32385a',color:'#fff',width:'75%',height:'40px',padding:'10px 0',borderRadius:'5px',margin:'2rem 0rem 2rem ','&:hover':{background:'#32385a',color:'#fff'}}}>
                {isLoading ? <Loader /> : 'Login'}
                  </Button>
              

               <Button
               onClick={handleGoogle}
                     sx={{
                       background: 'transparent',
                       color: '#000',
                       width: '75%',
                       borderRadius: '5px',
                       margin: '0',
                       padding: '10px 0',
                       border:'1px solid #DB4437',
                       boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                       '&:hover': { background: '#32385a' ,color:'#fff', border:'1px solid transparent',},
                       display: 'flex',
                       justifyContent: 'center',
                       alignItems: 'center',
                       textTransform: 'none' 
                   }}>
                          <Typography sx={{ padding: "0 5px",'&:hover': {color:'#fff'}, }}>Sign in with </Typography> <Image src={GoogleIcon} alt='google'   style={{maxHeight:'30px', width:'auto'}}/>
                  </Button>

               <Typography onClick={handleRegister} marginTop='1rem'  fontSize='16px' align='left' color='#32385a' fontWeight={400}>Not Registered? <span style={{textDecoration:'underline',color:'#7f63f4',fontWeight:'400',cursor:'pointer'}} >Register Now</span></Typography>

             
           
         </Box>

    </Box>
    {language === 'english' ? <Footer/> :  <FooterArabic/> }
     {language === 'english' ? <BottomBar/> :  <BottomBarArabic/> }
    </Box>
  )
}

export default Login