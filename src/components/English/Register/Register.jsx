"use client"
import React,{useState} from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Footer from '../Footer/Footer'
import FooterArabic from '@/components/Arabic/Footer/Footer'
import { useLanguage } from '@/context/LanguageContext'
import BottomBar from '@/components/English/bottombar/bottom'
import BottomBarArabic from '@/components/Arabic/bottombar/bottom'
import Swal from 'sweetalert2'
import Loader from './Loader/Loader'



const Register = () => {
    const [username,setUserName] = useState('')
    const [userlastname, setUserLastName] = useState('');
    const [email,setEmail] = useState('')
    const [telegramusername, setTelegramUsername] = useState("");
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [error,setError] = useState('')
    const router = useRouter()
    const [isLoading,setIsLoading]=useState(false)
    const { language } = useLanguage();
    var logerr = ''

    const isSpecialChar = (str) => /[!@#$%^&*(),.?":{}|<>]/.test(str);


    const handleSignup = async()=>{
   
    //   if (!username || !userlastname || !email || !password || !confirmPassword) {
    //     setError("All fields are required");
    //     return;
    // } 

    if (!username || !userlastname  || !telegramusername || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
  }

if(password !== confirmPassword){
  setError("Passwords do not match");
    return;
}

const usernameRegex = /^[A-Za-z]+$/;
if (!usernameRegex.test(username)) {
  setError('Firstname should contain only letters');
  return;
}

const userLastnameRegex = /^[A-Za-z]+$/;
if (!userLastnameRegex.test(userlastname)) {
    setError('Lastname should contain only letters');
    return;
}

const usertelegramusernameRegex = /^.*$/;
if (!usertelegramusernameRegex.test(telegramusername)) {
  setError("Invalid Telegram Username");
  return;
}



const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  setError('Invalid email format');
  return;
}


if (password.length < 8 || isSpecialChar(password)) {
  setError('Password must be at least 8 characters long and should not contain special characters');
  return;
}


else{
  try {
    setIsLoading(true)
    const res = await fetch("/api/auth/register", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          lastname: userlastname, 
          telegramusername, 
          email,
          password,
        }),
    });
    if (res.ok) {
       setIsLoading(false)
        router.push('/login');
    } else {
        // Get the error response a
        setIsLoading(false)
        const errorText = await res.text();
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: errorText, 
        });
    }
} catch (error) {
  setIsLoading(false)
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
    });
}
      
}
    }




  return (
    <Box sx={{height:'90dvh',overflow:'auto'}}>
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:"3rem",marginBottom:"3rem"}}>
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
    height: '95vh',
    '@media screen and (max-width: 768px)': {
      width: '100%', 
      margin:'0 1rem',
      height: '95vh',
      
    },
  }}
>              <Typography fontSize='28px'  color='#32385a' fontWeight={600} sx={{padding:'3rem 0 .5rem',textDecoration:'none'}}>Sign Up  </Typography>
               <Box sx={{width:'80%',display:'flex',gap:'5px'}}>
                <Box>                
               <Typography marginTop='1rem' fontSize='16px' align='left' color='#32385a' fontWeight={500}>First Name*</Typography>
               <TextField sx={{width:'100%',marginTop:'0.2rem'}}  InputProps={{style:{height:'40px'}}} onChange={(e)=>setUserName(e.target.value)}/>
               </Box>
                <Box >
                <Typography marginTop='1rem' fontSize='16px' align='left' color='#32385a' fontWeight={500}>Last Name*</Typography>
               <TextField sx={{width:'100%',marginTop:'0.2rem'}}  InputProps={{style:{height:'40px'}}} onChange={(e)=>setUserLastName(e.target.value)}/>
             
                </Box>
               </Box>
               <Box sx={{width:'80%',}}>
               <Typography marginTop='.7rem' fontSize='16px' align='left' color='#32385a' fontWeight={500}>Telegram User Name </Typography>
               <TextField sx={{width:'100%',marginTop:'0.2rem'}}  InputProps={{style:{height:'40px'}}}  onChange={(e) => setTelegramUsername(e.target.value)}/>
               </Box>
              
               <Box sx={{width:'80%',}}>
               <Typography marginTop='.7rem' fontSize='16px' align='left' color='#32385a' fontWeight={500}>Email*</Typography>
               <TextField sx={{width:'100%',marginTop:'0.2rem'}}  InputProps={{style:{height:'40px'}}} onChange={(e)=>setEmail(e.target.value)}/>
               </Box>
               <Box sx={{width:'80%'}}>
               {/* <Typography marginTop='1rem' fontSize='16px' align='left' color='#32385a' fontWeight={500}>Password*</Typography> */}
               {/* <Typography  sx={{ marginTop: { xs: '2.5rem', md: '1rem' },    fontSize: '16px',textAlign: 'left',color: '#32385a',fontWeight: 500,}}>Password*</Typography> */}
               <Typography marginTop='.7rem' fontSize='16px' align='left' color='#32385a' fontWeight={500}>Password*</Typography>
               <TextField type='password' sx={{width:'100%',marginTop:'0.2rem'}}  InputProps={{style:{height:'40px'}}} onChange={(e)=>setPassword(e.target.value)}/>
               </Box>
               <Box sx={{width:'80%'}}>
               <Typography marginTop='.7rem' fontSize='16px' align='left' color='#32385a' fontWeight={500}>Confirm Password*</Typography>
               <TextField type='password' sx={{width:'100%',marginTop:'0.2rem'}}  InputProps={{style:{height:'40px'}}} onChange={(e)=>setConfirmPassword(e.target.value)}/>
               {error && (
                <Typography  marginTop='0.2rem' fontSize='12px' align='left' color='red' fontWeight={400}>{error}</Typography>
               )}
               </Box>
              
               <Box sx={{display:'flex',width:'80%',gap:'5px'}}>
              
               </Box>

               <Button disabled={isLoading}  onClick={handleSignup}  sx={{background:'#32385a',height:'40px',color:'#fff',width:'80%',borderRadius:'5px',margin:'2rem 0rem 0rem','&:hover':{background:'#32385a',color:'#fff'}}}>
                {isLoading ? <Loader /> : 'Sign Up'}
           
                </Button>
               <Typography component={Link} href='./login' sx={{ padding: "1rem 0 3rem", color: '#32385a',textDecoration:"underline" }}>
  Already Have an Account?
</Typography>         </Box>
         </Box>
    {language === 'english' ? <Footer/> :  <FooterArabic/> }
     {language === 'english' ? <BottomBar/> :  <BottomBarArabic/> }
    </Box>
  )
}

export default Register