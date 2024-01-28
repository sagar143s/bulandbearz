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

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const router = useRouter()
    const {login} = useUser()
    const { language } = useLanguage();
    const {guser,googleSignIn,logOut} = UserAuth()

     
    const handleGoogle = async()=>{
      try{
     await googleSignIn()
   console.log(gsin);
      }catch(error){
        console.log(error.message);
      }
    }

    console.log(guser,'guser');

    const handleSignout= async()=>{
  try {
    await logOut()
  } catch (error) {
    console.log(error.message);
  }
    }

    useEffect(()=>{
 if(guser){
console.log("unde");
const name = guser.displayName
const email=guser.email


    const saveUser = async()=>{
const res = await fetch('/api/saveGoogleUser',{
  method:'POST',
  body:JSON.stringify({
    name,email
  }),
})
const response = await res.json()
if(res.ok){
  alert('sucess')
  const userId = response._id;
  const subscribed = response.subscribed

  if (userId) {
    localStorage.setItem('userId', userId);
    localStorage.setItem('subscribed', subscribed);
  }
  login(response);
  router.push('/bookings')
  
 }
    }

    saveUser()
 }else{
 console.log("ille");
 }
    },[guser])
  
    // useEffect(() => {
    //   getRedirectResult(auth).then(async (userCred) => {
    //     if (!userCred) {
    //       return;
    //     }
  
    //     fetch("/api/login", {
    //       method: "POST",
    //       headers: {
    //         Authorization: `Bearer ${await userCred.user.getIdToken()}`,
    //       },
    //     }).then((response) => {
    //       if (response.status === 200) {
    //         router.push("/");
    //       }
    //     });
    //   });
    // }, []);
        
    


    const handleLogin = async(e) => {
      if (!email || !password) {
        console.error('Please provide both email and password');
        return;
      }
    

        try{
          const res = await fetch('/api/auth/login',{
            method:'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
           })
           const response = await res.json()
           console.log(response,"hui");
           if(res.ok){
            const userId = response._id;
            const subscribed = response.subscribed

            if (userId) {
              localStorage.setItem('userId', userId);
              localStorage.setItem('subscribed', subscribed);
            }
            login(response);
            router.push('/bookings')
            
           }
        }
        catch(err){
          console.log(err.message);
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
     
      console.log(response);
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
               <TextField sx={{width:'100%',marginTop:'0.2rem'}}  InputProps={{style:{height:'40px'}}} onChange={(e)=>setEmail(e.target.value)}/>
               </Box>

               <Box sx={{ width: '70%' }}>
                    <Typography marginTop='1rem' fontSize='16px' align='left' color='#32385a' fontWeight={500}>Password*</Typography>
                    <TextField type='password' sx={{ width: '100%', marginTop: '0.2rem' }} InputProps={{ style: { height: '40px' } }} onChange={handlePasswordChange} />
                    <Typography onClick={handleForgotPassword} marginTop='0.5rem' fontSize='14px' align='right' color='#7f63f4' fontWeight={400} style={{ cursor: 'pointer' }}>Forgot Password?</Typography>
                </Box>

   
            


                <Button onClick={handleLogin} sx={{background:'#32385a',color:'#fff',width:'75%',padding:'10px 0',borderRadius:'5px',margin:'2rem 0rem 2rem ','&:hover':{background:'#32385a',color:'#fff'}}}>Login</Button>
              

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