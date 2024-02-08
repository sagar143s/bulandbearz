// import React, { useState, useEffect } from 'react';
// import { Box, Container, Typography,Button } from '@mui/material';

// const PAGE = () => {
//   const sentences = [
//     'Analysis ',
//     'Motive ',
//     'Knowledge',
//     'Plan',
//     'Execute'
//   ];

//   const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

//   useEffect(() => {
//     const timer = setTimeout(() => {
  
//       setCurrentSentenceIndex(prevIndex => (prevIndex + 1) % sentences.length);
//     }, 5000);


//     return () => clearTimeout(timer);
//   }, [currentSentenceIndex]);

//   return (
//     <Box>
//       <Container>
//         <Typography variant='h2' style={{fontWeight:"bold",textAlign:"center"}}>
//           {sentences[currentSentenceIndex]}
//         </Typography>
//         <Typography variant='H4' sx={{fontStyle:"italic",textAlign:"center",justifyContent:"center",display:"flex"}}>MAKING MARKETS MAKE SENCE</Typography>
//         <Box sx={{display:"flex",justifyContent:"center"}}>
//         <Button
//   sx={{
//     background: "#32385a",
//     color: "#fff",
//     fontWeight: "bold",
//     fontFamily: 'poppins, sans-serif',
//     padding: ".5rem 2rem",
//     '&:hover': {
//       background: "red"
//     }
//   }}
// >
//   NEWSLETTER
// </Button>

//           <Button>PRIVATE CHANNEL</Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default PAGE;



// "use client"

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Image1 from '../../../../public/Home/Arab.png';
// import { Container, Button, Typography, Box } from '@mui/material';
// import BackImage from '../../../../public/Home/bg.png'

// const Banner = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const sentences = [
//         'ANALYSIS ',
//         'MOTIVE ',
//         'KNOWLEDGE',
//         'PLAN',
//         'EXECUTE'
//       ];
    
//       const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    
//       useEffect(() => {
//         const timer = setTimeout(() => {
      
//           setCurrentSentenceIndex(prevIndex => (prevIndex + 1) % sentences.length);
//         }, 1000);
    
    
//         return () => clearTimeout(timer);
//       }, [currentSentenceIndex]);
    

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     window.addEventListener('resize', handleResize);
//     handleResize();

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const mobileStyles = {
//     bannerContainer: {
//       flexDirection: 'column',
//     },
//     rightColumn: {
//       alignItems: 'center',
//     },
//     leftColumnH3: {
//       fontWeight: 'normal',
//       fontSize: '20px',
//     },
//   };

//   const desktopStyles = {
//     leftColumnH3: {
//       fontWeight: 'bold',
//       fontSize: '35px',
//       color: '#fff',
//       textAlign:'left'
//     },
//   };

//   return (
//     <div style={{
//       background: 'linear-gradient(to right, #f3904f, #3b4371)',
//       backgroundImage: `url('${'https://res.cloudinary.com/dxtzm8lcq/image/upload/v1706371823/banner2_qdxlhj.png'}')`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       color: '#fff',
//       padding:"80px 0"
      
//     }}>
//       <Container maxWidth="lg" style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: '20px 20px 0 20px',
//         ...(isMobile ? mobileStyles.bannerContainer : {})
//       }}>
//         <div >
//           <h1 style={{
//             background: 'linear-gradient(to right, #141e30, #243b55)',
//             fontSize: '15px',
//             padding: '10px 20px',
//             maxWidth: '195px',
//             color:'#fff',
//             borderRadius: '6px',
//             marginBottom:'1rem',
//             marginTop:'2.5rem'
//           }}>
//             Welcome to Venture
//           </h1>
//           <Typography variant='h2' style={{fontWeight:"bold",padding:"1rem 0",letterSpacing:'.8REM'}}>
//          {sentences[currentSentenceIndex]}
//          </Typography>
//           <Typography variant='H4' sx={{fontStyle:"italic"}}>MAKING MARKETS MAKE SENCE</Typography>
//           <Box sx={{display:"flex",justifyContent:"left",gap:"2rem"}}>
//           <Button href='./bookings' style={{  
//             background: 'linear-gradient(to right, #141e30, #32385a)',
//             color: '#fff',
//             padding:".5rem 2rem",
//             border: 'none',
//             cursor: 'pointer',
//             borderRadius: '6px',
//             marginTop:'2rem',
//             fontSize:'15px',
//             fontWeight:'600'
//             }}>
//             NEWSLETTER
//           </Button>
//           <Button href='./bookings' style={{  
//             background: '#fff',
//             color: '#32385a',
//            padding:".5rem 2rem",
//             border: 'none',
//             cursor: 'pointer',
//             borderRadius: '6px',
//             marginTop:'2rem',
//             fontSize:'15px',
//             fontWeight:'600'
//           }}>
//        PRIVATE CHANNEL
//           </Button>

//           </Box>
//         </div>
      
     
//       </Container>
//     </div>
//   );
// };

// export default Banner;















"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Image1 from '../../../../public/Home/Arab.png';
import { Container, Button, Typography, Box } from '@mui/material';
import BackImage from '../../../../public/Home/bg.png'

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sentences = [
        'ANALYSIS ',
        'MOTIVE ',
        'KNOWLEDGE',
        'PLAN',
        'EXECUTE'
      ];
    
      const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    
      useEffect(() => {
        const timer = setTimeout(() => {
      
          setCurrentSentenceIndex(prevIndex => (prevIndex + 1) % sentences.length);
        }, 1500);
    
    
        return () => clearTimeout(timer);
      }, [currentSentenceIndex]);
    

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mobileStyles = {
    bannerContainer: {
      flexDirection: 'column',
    },
    rightColumn: {
      alignItems: 'center',
    },
    leftColumnH3: {
      fontWeight: 'normal',
      fontSize: '20px',
    },
  };

  const desktopStyles = {
    leftColumnH3: {
      fontWeight: 'bold',
      fontSize: '35px',
      color: '#fff',
      textAlign:'left'
    },
  };

  return (
    <div style={{
      background: 'linear-gradient(to right, #f3904f, #3b4371)',
      backgroundImage: `url('${'https://res.cloudinary.com/dxtzm8lcq/image/upload/v1707224037/banner001_xfxb7t.png'}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
      padding:"8rem 0",
   
      
    }}>
      <Container>
      <Box sx={{justifyContent:"center",textAlign:"center"}}>
      <Typography  variant={isMobile ? 'h6' : 'h2'} style={{fontWeight:"900",padding:"1rem 0",letterSpacing:'.8REM'}}>
          {sentences[currentSentenceIndex]}
           </Typography>

           <Typography variant='H4' sx={{fontStyle:"italic"}}>MAKING MARKETS MAKE SENCE</Typography>


           <Box sx={{display:"flex",justifyContent:"center",gap:"1rem"}}>
           <Button href='./subscription' style={{  
             background: 'linear-gradient(to right, #141e30, #32385a)',
             color: '#fff',
             padding:".5rem 3rem",
             border: 'none',
             cursor: 'pointer',
             borderRadius: '6px',
             marginTop:'2rem',
             fontSize:'15px',
             fontWeight:'600',
             fontFamily: "Poppins, sans-serif" 
             }}>
          SUBSCRIPTIONS
           </Button>
           <Button href='./privatesessions' style={{  
             background: '#fff',
             color: '#32385a',
            padding:".5rem 2rem",
             border: 'none',
             cursor: 'pointer',
             borderRadius: '6px',
             marginTop:'2rem',
             fontSize:'15px',
             fontWeight:'500',
             fontFamily: "Poppins, sans-serif" 
           }}>
        PRIVATE SESSIONS
           </Button>
           <Button href='./bookings' style={{  
             background: 'transparent',
             color: '#fff',
            padding:".5rem 2rem",
             border: '2PX solid #fff',
             cursor: 'pointer',
             borderRadius: '6px',
             marginTop:'2rem',
             fontSize:'15px',
             fontWeight:'500',
             fontFamily: "Poppins, sans-serif" 
           }}>
        WORKSHOP
           </Button>
           </Box>
           
      </Box>
      </Container>
      
    </div>
  );
};

export default Banner;
