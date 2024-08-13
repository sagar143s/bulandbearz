"use client";
import React, { useEffect, useState } from 'react';
import {
  Typography, Grid, Card, CardContent, Button, Box, Container, ToggleButton, ToggleButtonGroup
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { loadStripe } from "@stripe/stripe-js";
import Stripe from "stripe";
import ClearIcon from '@mui/icons-material/CancelRounded';
import FooterArabic from '@/components/Arabic/Footer/Footer';
import Footer from '@/components/English/Footer/Footer';
import { useLanguage } from '@/context/LanguageContext';
import BottomBar from '@/components/English/bottombar/bottom';
import BottomBarAarabic from '@/components/Arabic/bottombar/bottom';
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import Loader from '@/components/Loader/Loader';
import LoaderSub from './Loader/Loader';
import SkeletonColor from '@/components/English/Skelton/Skelton';

const SubscriptionPage = () => {
  const { language } = useLanguage();
    const [billingPeriod, setBillingPeriod] = useState('Per Month');
    const [userDetails ,setUserDetails] = useState(null)
    const [suscriptionPlan,setSubscriptionPlan] = useState([])
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState({});
    const [trigger,setTrigger] = useState(false)
    const [loadSub,setLoadSub]=useState(true)
    const telLink = 'https://t.me/+wxyWEO6-yf01NTJk'   
    const telLink1 = 'https://t.me/+Vr7-Uq44p4RhOTE8'   
    const router = useRouter();

    
    const handleBillingChange = (event, newBillingPeriod) => {
      if (newBillingPeriod) {
        setBillingPeriod(newBillingPeriod === 'month' ? 'month' : 'year');
      }
    };
  
    useEffect(()=>{
      const userId = localStorage.getItem('userId');
if(userId){
  const fetchUser = async()=>{
    const res = await fetch(`api/fetchUser/${userId}`,{
     method:'GET',
     headers:{
     'Content-Type':'application/json'
           } 
 })
 
    const response = await res.json()
     setUserDetails(response)
       }
 
       fetchUser()
}
      
    },[trigger])


    useEffect(()=>{
    
        const fetchSubscription = async()=>{
                 const res = await fetch('/api/fetchSubscriptions',{
                  method:'GET',
                  headers:{
                    'Content-Type':'application/json'
                  }
                 }) 
                 if(res.ok){
                  setLoadSub(false)
                 }else{
                  Swal.fire({
                    icon:'error',
                    title:'Error',
                    text:'Error in Loading'
                  })
                 }
                 const response = await res.json()
                
                 setSubscriptionPlan(response)
           }

           fetchSubscription()
    },[])

   const feature1 = [
    'No telegram Access',
    'Weekly Newsletter Access',

  ]

  const feature2=[
    'No telegram Access',
  'Weekly Newsletter Access',
 

]

  const  feature3= [ 
    'Telegram access',
  'Weekly Newsletter Access',
]



  const feature4=['Newsletter access',

  'No Telegram acces',
  'Ultra HD Quality',
  'Unlimited Users']

  const filteredPlans = suscriptionPlan.filter((plan) => plan.subscriptionType === billingPeriod);

 

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancelSubscribe = async()=>{
         setOpen(true)
    const subscriptionId = userDetails.subscriptionId
  const res = await fetch('/api/cancelsubscription',{
    method:'DELETE',
    body:JSON.stringify({subscriptionId})
  })
  if(res.ok){
    setOpen(false)
    Swal.fire({
      icon: "success",
      title: "Subscription Cancelled",  
    });
    setTrigger(!trigger)
  }
  }

  const handleSubscribe = async(plan)=>{
    setIsLoading(prevState => ({
      ...prevState,
      [plan.name]: true 
  }));
     if(userDetails==null){
      Swal.fire({
        icon: "error",
        title: "User is not logged in",
        text: "Please login in to subscribe",
        footer: '<a href="/login">Login?</a>'
      });
      setIsLoading(prevState => ({
        ...prevState,
        [plan.name]: false 
    }));
      return ;
      
     }
  

     const payload = {
      userDetails:userDetails,
      planDetails:plan,
     }
   const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

try {
  const stripe = await stripePromise;
  const result = await fetch("/api/checkout-sessions", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload)
  });

  const { sessionId } = await result.json();
  const { error } = await stripe.redirectToCheckout({
    sessionId,
  });

  if (error) {
    setIsLoading(prevState => ({
      ...prevState,
      [plan.name]: false // Set loading state for this plan back to false
  }));
    router.push("/error");
  }
  else{
    setIsLoading(prevState => ({
      ...prevState,
      [plan.name]: false // Set loading state for this plan back to false
  }));
    router.push('/paymentsuccess')
}
} catch (error) {
  setIsLoading(prevState => ({
    ...prevState,
    [plan.name]: false // Set loading state for this plan back to false
}));
  console.error("Error in creating checkout session:", error.message);
            router.push("/error");
}
  }

 
  return (
    <div style={{ overflow:"auto",height:"90dvh",display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
      <Container maxWidth="lg" style={{ paddingTop: '5vh', paddingBottom: '9vh'}}>
        <Box textAlign="center" marginBottom={4}>
          <Typography variant="h2" gutterBottom style={{ color: '#3b4371', fontWeight: 'bold' }}>
            Choose Your Plan
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Discover the perfect plan for your needs and enjoy our exclusive features.
          </Typography>
        </Box>
{userDetails?.subscribed == true ? 


<Grid container spacing={3} justifyContent="center">
<Grid item xs={12} sm={6} md={4} >
               <Card raised sx={{ backgroundColor: '#3b4371', boxShadow: '0 4px 8px rgba(0,0,0,0.1)',borderRadius:"15px",padding:"25px 10px",color:"#fff",height:'500px',position:'relative',}}>
                <CardContent>
                  <Typography variant="h5" component="h2" color="#fff" gutterBottom>
                 Current-Plan :   {userDetails?.package}
                  </Typography>
                  <Typography variant="h6" color="#009e61" style={{fontWeight:'bold',border:'2px solid #fff',textAlign:"center",background:"#fff",borderRadius:"5px"}} gutterBottom>
                  AED {userDetails?.price} / {userDetails?.subscriptionType == 'month' ? 'Monthly' :'Yearly'}
                  </Typography>
                   
                  {userDetails.subscriptionType=='month' && userDetails.package=='Weekly NewsLetter'? 
                  
                  
                    <Box   marginTop={3}>
                     
                        <Box component="span" style={{ display: 'flex', alignItems: 'center',gap:'1rem', marginTop: '1rem' }}>
                          <ClearIcon fontSize="small" style={{width:'20px'}} color="error" />
                          <Typography fontSize='15px' fontWeight='bold'>No telegram Access</Typography>
                        </Box>
                       
                       <Box component="span" style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                        <CheckCircleIcon fontSize="small" style={{width:'20px', marginRight: 15, color: 'green' }} />
                        <Typography fontSize='15px' fontWeight='bold'>Weekly Newsletters </Typography>
                        </Box>

                        
                    </Box>

                  : userDetails.subscriptionType=='month' &&  userDetails.package == 'Basic Telegram'?
                
                    <Box  marginTop={3}>
                     
                        <Box component="span" style={{ display: 'flex', alignItems: 'center',gap:'1rem', marginTop: '1rem' }}>
                        <CheckCircleIcon fontSize="small" style={{width:'20px', marginRight: 15, color: 'green' }} />
                          <Typography fontSize='15px' fontWeight='bold'>Telegram Access</Typography>
                        </Box>

                        <Box component="span" style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                        <CheckCircleIcon fontSize="small" style={{width:'20px', marginRight: 28, color: 'green' }} />
                        <Typography fontSize='15px' fontWeight='bold'>Weekly Newsletters </Typography>
                        </Box>
                    </Box>
                   :
                  userDetails.subscriptionType =='year' && userDetails.package=='Premium Telegram'?
                
                    <Box  marginTop={3}>
                     
                        <Box component="span" style={{ display: 'flex', alignItems: 'center', marginRight: 8 }}>
                        <CheckCircleIcon fontSize="small" style={{width:'20px', marginRight: 28, color: 'green' }} />
                        <Typography fontSize='15px' fontWeight='bold'>Telegram  Access</Typography>
                        </Box>
                     
                        <Box component="span" style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                        <CheckCircleIcon fontSize="small" style={{width:'20px', marginRight: 28, color: 'green' }} />
                        <Typography fontSize='15px' fontWeight='bold'>Weekly Newsletters</Typography>
                        </Box>

                    </Box>
                   :
                  userDetails.subscriptionType=='year' && userDetails.package=='Premium Weekly NewsLetter'?
                
                    <Box  marginTop={4}>
                      
                        <Box component="span" style={{ display: 'flex', alignItems: 'center', marginRight: 8 }}>
                          <ClearIcon fontSize="small" style={{width:'20px',marginRight:'1.8rem'}} color="error" />
                          <Typography fontSize='15px' fontWeight='bold'>No Telegram Access</Typography>
                        </Box>
                    


                        <Box component="span" style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                        <CheckCircleIcon fontSize="small" style={{width:'20px', marginRight: 28, color: 'green' }} />
                        <Typography fontSize='15px' fontWeight='bold'>Weekly Newsletters </Typography>
                        </Box>
                    </Box>
                  : ''
                }
                </CardContent>

                <Box   sx={{position:'absolute',bottom:30,width:'80%',right:35}}>
                
                  {userDetails?.package=='Premium Telegram' ||userDetails.package=='Basic Telegram' ? (
                    <Button
                    fullWidth
                    variant="contained"
                    href={telLink1}
                    sx={{
                      width:'100%',
                      fontWeight: 'bold',
                      background:"#fff",
                      color:"#000",
                      mt:'1rem',
                      padding:"10px 0",
                      '&:hover': {
                        backgroundColor: '#009e61',
                        color:"#fff"
                      },
                    }}
                  >
                   Telegram Private Group
                  </Button>
                  
                  ) : '' }

                      {userDetails?.package=='Premium Telegram' ||userDetails.package=='Basic Telegram' ? (
                    <Button
                    fullWidth
                    variant="contained"
                    href={telLink}
                    sx={{
                      width:'100%',
                      fontWeight: 'bold',
                      background:"#fff",
                      color:"#000",
                      mt:'1rem',
                      padding:"10px 10px",
                      '&:hover': {
                        backgroundColor: '#009e61',
                        color:"#fff"
                      },
                    }}
                  >
                    <CircleNotificationsIcon sx={{color:'red'}}/>&nbsp; Telegram Alerts Group
                  </Button>
                  
                  ) : '' }
                    <Button
                    fullWidth
                    variant="contained"
                    onClick={() => handleCancelSubscribe()}
                    sx={{
                      width:'100%',
                      fontWeight: 'bold',
                      background:"#fff",
                      color:"#000",
                      mt:'1rem',
                      padding:"10px 0",
                      '&:hover': {
                        backgroundColor: '#B72929',
                        color:"#fff"
                      },
                    }}
                  >
                    Cancel Subscription
                  </Button>
                </Box>
              </Card>
</Grid>


</Grid>







: loadSub ? (<><SkeletonColor/></> ) : (
        <Grid container spacing={3} justifyContent="center">
          {suscriptionPlan.map((plan, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card raised sx={{ backgroundColor: '#3b4371', boxShadow: '0 4px 8px rgba(0,0,0,0.1)',borderRadius:"15px",padding:"25px 10px",color:"#fff",height:'350px',position:'relative' }}>
                <CardContent>
                  <Typography variant="h5" component="h2" color="#fff" gutterBottom>
                    {plan.name}
                  </Typography>
                  <Typography variant="h6" color="#009e61" gutterBottom>
                AED    {plan.price} / {plan.subscriptionType == 'month' ? 'Monthly' :'Yearly'}
                  </Typography>
                   
                  {plan.subscriptionType=='month' && plan.name=='Weekly NewsLetter' ?
                   <Box   marginTop={3}>
                     
                   <Box component="span" style={{ display: 'flex', alignItems: 'center',gap:'1rem', marginTop: '1rem' }}>
                     <ClearIcon fontSize="small" style={{width:'20px'}} color="error" />
                     <Typography fontSize='15px' fontWeight='bold'>No telegram Access</Typography>
                   </Box>
                  
                  <Box component="span" style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                   <CheckCircleIcon fontSize="small" style={{width:'20px', marginRight: 15, color: 'green' }} />
                   <Typography fontSize='15px' fontWeight='bold'>Weekly Newsletters </Typography>
                   </Box>

                   
               </Box>
               :
                plan.subscriptionType=='month' && plan.name=='Basic Telegram'?
                <Box  marginTop={3}>
                     
                        <Box component="span" style={{ display: 'flex', alignItems: 'center',gap:'1rem', marginTop: '1rem' }}>
                        <CheckCircleIcon fontSize="small" style={{width:'20px', marginRight: 15, color: 'green' }} />
                          <Typography fontSize='15px' fontWeight='bold'>Telegram Access</Typography>
                        </Box>

                        <Box component="span" style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                        <CheckCircleIcon fontSize="small" style={{width:'20px', marginRight: 28, color: 'green' }} />
                        <Typography fontSize='15px' fontWeight='bold'>Weekly Newsletters</Typography>
                        </Box>
                    </Box>
                     :

                  plan.subscriptionType=='year' && plan.name=='Premium Telegram'?
                  <Box  marginTop={3}>
                     
                  <Box component="span" style={{ display: 'flex', alignItems: 'center', marginRight: 8 }}>
                  <CheckCircleIcon fontSize="small" style={{width:'20px', marginRight: 28, color: 'green' }} />
                  <Typography fontSize='15px' fontWeight='bold'>Telegram  Access</Typography>
                  </Box>
               
                  <Box component="span" style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                  <CheckCircleIcon fontSize="small" style={{width:'20px', marginRight: 28, color: 'green' }} />
                  <Typography fontSize='15px' fontWeight='bold'>Weekly Newsletters</Typography>
                  </Box>

               
              </Box>
               :
                  plan.subscriptionType=='year' && plan.name=='Premium Weekly NewsLetter'?
                  <Box  marginTop={4}>
                      
                  <Box component="span" style={{ display: 'flex', alignItems: 'center', marginRight: 8 }}>
                    <ClearIcon fontSize="small" style={{width:'20px',marginRight:'1.8rem'}} color="error" />
                    <Typography fontSize='15px' fontWeight='bold'>No Telegram Access</Typography>
                  </Box>
              


                  <Box component="span" style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                  <CheckCircleIcon fontSize="small" style={{width:'20px', marginRight: 28, color: 'green' }} />
                  <Typography fontSize='15px' fontWeight='bold'>Weekly Newsletters</Typography>
                  </Box>
              </Box>
            : ''
                }
                </CardContent>
                <Box   sx={{position:'absolute',bottom:20,width:'80%',right:35}}>
                  <Button
                    fullWidth
                    variant="contained"
                    disabled={isLoading[plan.name]}
                    onClick={() => handleSubscribe(plan)}
                    sx={{
                      width:'100%',
                      height:'45px',
                      fontWeight: 'bold',
                      background:"#fff",
                      color:"#000",
                      padding:"10px 0",
                      '&:hover': {
                        backgroundColor: '#009e61',
                        color:"#fff"
                      },
                    }}
                  >
               {isLoading[plan.name] ? <LoaderSub /> : 'Select Plan'}  
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid> )
        
      
      
      }
      </Container>
      <Box>
      {language === 'english' ? <Footer/> :  <FooterArabic/> }
      {language === 'english' ? <BottomBar/> :  <BottomBarAarabic/> }
      </Box>
      <Loader dialog={open} onClose={handleClose} />
    </div>
  );
};

export default SubscriptionPage;