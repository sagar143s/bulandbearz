"use client"
import React,{useState,useEffect} from 'react'
import { Box,Typography,Button, Container, TextField, Select, MenuItem } from '@mui/material'
import Calendar from '../Calendar/Calendar'
import TimeRange from '../TimePicker/TimePicker'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/navigation'
const BookingConfirm = ({courseDetails,dates}) => {
  
  
  
  const dateData = courseDetails?.dates 
  const courseId = courseDetails?._id
  
  const parsedDates =dates
  console.log(parsedDates,"par");

  const router = useRouter()
    const [expanded, setExpanded] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [availableTimes, setAvailableTimes] = useState([]);
    const [selectedTime, setSelectedTime] = useState('');
    const [username,setUserName]= useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')

    // Update available times when selected date changes
    useEffect(() => {
        const found = parsedDates.find(d => d.date === selectedDate);
        if (found) {
            setAvailableTimes(found.time);
        }
    }, [selectedDate]);

    // Handle change in date select
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
        setSelectedTime('');
    };

    // Handle change in time select
    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    console.log(selectedDate,selectedTime);
    
   const handleBook = ()=>{
     



    const bookingDetails = {
      
          username,
          email,
          phone,
          selectedDate,
          selectedTime,
          courseId
      
  };

  // Store the booking details in local storage
  localStorage.setItem('booking', JSON.stringify(bookingDetails));
    router.push('/clientdetails')
   }
  return (
    <Container  >
      <Box sx={{ padding: '2rem' }}>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Box>
            <Typography  fontSize='22px' fontWeight='600' color='#021b79'>Book Now</Typography>
            <Box sx={{ width: '100%', height: '2px', background: '#f3f3f3' }}></Box>
          </Box>
          <Box sx={{ paddingTop: '1.5rem' }}>
            <Typography  fontSize='20px' fontWeight='550' color='#021b79' >{courseDetails?.title}</Typography>
            <Typography  fontSize='13px' fontWeight='400' color='#2c3e50' >{courseDetails?.description}</Typography>
          </Box>
        </Box>

        <Box>
          {/* <Typography  fontSize='20px' fontWeight='500' color='#021b79' paddingTop='1rem'>Enter client Details</Typography> */}
          <Box sx={{ width: '100%', height: '2px', background: '#f3f3f3' }}></Box>
          <Box sx={{ width: '100%',display:'flex',alignItems:'center',gap:'1rem',marginTop:'1rem'}}>
          <TextField placeholder='Enter the Name' onChange={(e)=>setUserName(e.target.value)} sx={{width:'30%'}} type='text' InputProps={{ style: { borderRadius: '8px', height: '40px', fontFamily: "Rubik", fontSize: '12px', marginTop:'1rem' } }} />
          <TextField placeholder='Enter the Email' onChange={(e)=>setEmail(e.target.value)} sx={{width:'30%'}} type='email' InputProps={{ style: { borderRadius: '8px', height: '40px', fontFamily: "Rubik", fontSize: '12px',marginTop:'1rem' } }} />
          </Box>
          <Box>
          <TextField placeholder='Enter the Phone number' onChange={(e)=>setPhone(e.target.value)} sx={{width:'61.5%'}} InputProps={{ style: { borderRadius: '8px', height: '40px', fontFamily: "Rubik", fontSize: '12px', marginTop:'1rem' } }} />
          </Box>

          
           
          
        </Box>
        <Box sx={{marginTop:'1rem'}}>
            <Typography fontSize='16px' fontWeight='500' color='#2c3e50'>Choose the Available Date*</Typography>
            <Select
                value={selectedDate}
                onChange={handleDateChange}
                displayEmpty
                sx={{height:'40px',fontSize:'13px' ,fontWeight:500,width:'61.5%',borderRadius:'8px'}}
                // fullWidth
                
            >
                
                {parsedDates?.map((item, index) => (
                    <MenuItem key={index} value={item.date}>{item.date}</MenuItem>
                ))}
            </Select>

            {selectedDate && (
                <>
                    <Typography fontSize='16px' fontWeight='500' color='#2c3e50' sx={{ mt: 2 }}>Choose the Available Time*</Typography>
                    <Select
                        value={selectedTime}
                        onChange={handleTimeChange}
                        displayEmpty
                        sx={{height:'40px',fontSize:'13px' ,fontWeight:500,width:'61.5%',borderRadius:'8px'}}
                      
                    >
                        
                        {availableTimes?.map((time, index) => (
                            <MenuItem key={index} value={time}>{time}</MenuItem>
                        ))}
                    </Select>
                </>
            )}
        </Box>

       

        <Box sx={{ width: '100%', height: '2px', background: '#f3f3f3',marginTop:'2rem' }}></Box>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Button variant='contained' onClick={handleBook}  sx={{ background: 'linear-gradient(to right, #141e30, #243b55)', borderRadius: '8px', height: '45px', textTransform: 'none', fontFamily: "Rubik", fontSize: '12px', width: '30%', marginTop: '3rem' }}>Go Next</Button>
        </Box>
        
      </Box>
    </Container>
  )
}

export default BookingConfirm