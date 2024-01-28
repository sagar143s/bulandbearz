"use client"
import { Container,Box,Typography,Button } from '@mui/material'
import React,{useState} from 'react'
import Radio from '@mui/material/Radio';
import Grid from '@mui/material/Grid';
import MediaCard from '../../English/BookCard//BookCard';
import Stock from '../../../../public/stockImg.jpeg'
import Stock1 from '../../../../public/stockImg1.jpeg'
import Stock2 from '../../../../public/stockImg2.jpeg'
import Stock3 from '../../../../public/stockImg3.jpeg'
import Stock4 from '../../../../public/stockImg4.jpeg'


const Booking = () => {
  const [selectedValue, setSelectedValue] = useState(0);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
 


  const Categories = ["استشارات الاستثمار","بحث السوق","تحليل اتجاهات السوق","إدارة المخاطر","تحليل فني","تخطيط مالي","استراتيجيات التداول" ]
  const Services = [{title:'استشارة فردية',description:'استشارة فردية مع صالح نام - مواعيد لاحقة',price:'1466',image:Stock},
  {title:'تعلم الأسهم',description:'دورة تعلم الأسهم من البداية 101',price:'466',image:Stock1},
  {title:'تعلم الأسهم بشكل مكثف',description:'دورة تعلم الأسهم بشكل مكثف بواسطة تينت كلين - يومين',price:'1466',image:Stock2},
  {title:'عضوية النخبة',description:'تمت عضوية النخبة لمدة 6 أشهر',price:'787',image:Stock3},
  {title:'استشارة فردية',description:'استشارة فردية مع الدكتور محمد الفندي',price:'700',image:Stock4},
  {title:'استثمارات مالية',description:'استشارة في خطة الاستثمار المالي - سيف النقبي',price:'1466',image:Stock1},
  {title:'المتجر الإلكتروني',description:'متجر العلامة التجارية عبر الإنترنت - تواريخ لاحقةs',price:'366',image:Stock2},
  {title:'مشروع تجاري',description:'بناء أو تطوير مشروع تجاري', price:'1466', image:Stock4},





]


  return (
    
     <Container sx={{padding:'1.5rem'}}>
        <Box sx={{display:'flex',gap:'1rem',height:'90dvh'}}>
        <Box sx={{flex:3,overflow:'auto',height:'100%',paddingLeft:'1rem',paddingTop:'0.2rem',paddingBottom:'2rem',scrollbarWidth: "none", 
    '&::-webkit-scrollbar': {
        display: 'none', 
    },
    '&-ms-overflow-style:': {
        display: 'none', 
    },}}>
           <Grid container spacing={2}>
      {Services.map((service,index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <MediaCard title={service.title} description= {service.description} price={service.price} image={service.image} />
        </Grid>
      ))}
    </Grid>
           </Box>
          <Box sx={{paddingBottom:'1rem',display:{xs:'none', sm:'none' ,md:'block'}}} >
            
           <Box sx={{flex:1,
          
           height:'70%',
           width:'250px',border:'2px solid #f3f3f3',borderRadius:'25px',boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',padding:'2rem',overflow:'auto',scrollbarWidth: "none", // Hide the scrollbar for firefox
    '&::-webkit-scrollbar': {
        display: 'none', 
    },
    '&-ms-overflow-style:': {
        display: 'none', 
    },}}>
               
               <Typography fontFamily='Rubik' fontSize='16px' paddingBottom='1rem' align='center' fontWeight='600' color='#f3904f'>Categories</Typography>
{Categories.map((category,index)=>(
 <Box key={index} sx={{display:'flex',alignItems:'center',paddingTop:'0.5rem'}}>
   <Radio
      checked={selectedValue === String(index)}
      onChange={handleChange}
      value={String(index)} 
      name="radio-buttons"
      inputProps={{ 'aria-label': index }}
      size='small'
      sx={{
        color: '#093028',
        '&.Mui-checked': {
          color: 'orange',
        },
      }}
    />
<Typography fontFamily='Rubik' fontSize='13px' fontWeight='500' color='#6a707e'>{category}</Typography>
    
 </Box>
))}
            
           </Box>
           <Box sx={{width:'250px',height:'25%',border:'2px solid #f3f3f3',borderRadius:'25px',boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',marginTop:'1rem'}}>
                      <Box sx={{background:'#32385a',height:'50%',borderRadius:'25px 25px 0 0',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}} >
                      <Typography fontFamily='Rubik' fontSize='16px' fontWeight='500' color='#fff'>Free Consultations</Typography>
                        <Typography fontFamily='Rubik' fontSize='10px' align='center' fontWeight='400' color='#fff'>Consultation with Proffesionals for 10 min</Typography>
                      </Box>
                      <Box sx={{display:'grid',placeItems:'center',height:'50%'}}>
                      <Button variant='contained' sx={{background:'linear-gradient(to right, #141e30, #243b55)',borderRadius:'17.5px',height:'30px',textTransform:'none',fontFamily:"Rubik",fontSize:'12px'}}>Explore Now</Button>
                      </Box>
           </Box>

           </Box>



          
        </Box>

        
     </Container>
  )
}

export default Booking
