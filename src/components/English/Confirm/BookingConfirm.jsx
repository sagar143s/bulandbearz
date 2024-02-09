"use client"
import React,{useState,useEffect} from 'react'
import { Box,Typography,Button, Container, TextField, Select, MenuItem, CircularProgress } from '@mui/material'
import Calendar from '../Calendar/Calendar'
import TimeRange from '../TimePicker/TimePicker'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/navigation'




const BookingConfirm = ({courseDetails,dates}) => {
  
const [usernameError, setUsernameError] = useState('');
const [emailError, setEmailError] = useState('');
const [phoneError, setPhoneError] = useState('');
const [dateError, setDateError] = useState('');
const [timeError, setTimeError] = useState('');
const [loading, setLoading] = useState(true);

  
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
    const [countryCode,setCountryCode] = useState(971)



    useEffect(()=>{


      const userId = localStorage.getItem('userId');
    const fetchUser = async () => {
      try {
        const res = await fetch(`/api/fetchUser/${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!res.ok) {
          router.push('/login', { shallow: true });
        } else {
          const response = await res.json();
          setUserName(response?.name);
          setEmail(response.email);
        }
      } finally {
        setLoading(false); 
      }
    };

    fetchUser();
    },[])

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
      setDateError(event.target.value ? '' : 'Please select a date');
      setSelectedTime('');
  };


  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
    setTimeError(event.target.value ? '' : 'Please select a time');
};

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    console.log(selectedDate,selectedTime);
    
   const handleBook = ()=>{
     

 if (!username || !email || !phone || !selectedDate || !selectedTime) {
        setUsernameError(username ? '' : 'Username is required');
        setEmailError(/^\S+@\S+\.\S+$/.test(email) ? '' : 'Invalid email format');
        setPhoneError(/^\d{10}$/.test(phone) ? '' : 'Phone number must be 10 digits');
        setDateError(selectedDate ? '' : 'Please select a date');
        setTimeError(selectedTime ? '' : 'Please select a time');
        return;
    }



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



   const handleUsernameChange = (e) => {
    setUserName(e.target.value);
    setUsernameError(e.target.value ? '' : 'Username is required');
};

const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(/^\S+@\S+\.\S+$/.test(e.target.value) ? '' : 'Invalid email format');
};

const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setPhoneError(/^\d{10}$/.test(e.target.value) ? '' : 'Phone number must be 10 digits');
};



  return (
    <Container  >
{loading ? ( // Show loader while data is still loading
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ padding: '2rem' }}>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Box>
            <Typography  fontSize='22px' fontWeight='600' color='#021b79'>Book Now</Typography>
            <Box sx={{ width: '100%', height: '2px', background: '#f3f3f3' }}></Box>
          </Box>
          <Box sx={{ paddingTop: '0rem' }}>
            <Typography  fontSize='20px' fontWeight='550' color='#021b79' >{courseDetails?.title}</Typography>
            <Typography  fontSize='13px' fontWeight='400' color='#2c3e50' >{courseDetails?.subtitle}</Typography>
            {courseDetails?.descPoints?.map((item,index)=>(
              <Box key={index} sx={{pl:'2rem',pt:'0.5rem'}}>
              <ul key={index}>
                <li style={{fontSize:'12px',fontFamily:'Rubik'}}>{item}</li>
              </ul>
              </Box>
            ))}

          </Box>
        </Box>

        <Box>
          {/* <Typography  fontSize='20px' fontWeight='500' color='#021b79' paddingTop='1rem'>Enter client Details</Typography> */}
          <Box sx={{ width: '100%', height: '2px', background: '#f3f3f3',mt:'0.5rem' }}></Box>
          <Box sx={{ width: '100%',display:'flex',gap:'1rem',marginTop:'1rem',flexDirection:{xs:'column',sm:'column',md:'column',lg:'row',xl:'row'}}}>
          <TextField placeholder='Enter the Name' value={username}  error={Boolean(usernameError)}  helperText={usernameError} sx={{width:'100%'}} type='text' InputProps={{ style: { borderRadius: '8px', height: '40px', fontSize: '12px', marginTop:'1rem' } }} />
          <TextField placeholder='Enter the Email' value={email}  error={Boolean(emailError)}  helperText={emailError}  sx={{width:'100%'}} type='email' InputProps={{ style: { borderRadius: '8px', height: '40px',  fontSize: '12px',marginTop:'1rem' } }} />
          </Box>
          <Box sx={{display:'flex'}}>
           <TextField  value={countryCode}    sx={{width:'15%'}} InputProps={{ startAdornment:(<p style={{marginRight:'5px'}}>+</p>), style: { borderRadius: '8px 0px 0px 8px', height: '40px',  fontSize: '12px', marginTop:'1rem' } }}/> 
          <TextField placeholder='Enter the Phone number' onChange={(e)=>setPhone(e.target.value)}   error={Boolean(phoneError)}  helperText={phoneError}   sx={{width:'85%'}} InputProps={{ style: { borderRadius: '0px 8px 8px 0px', height: '40px',  fontSize: '12px', marginTop:'1rem',} }} />
          </Box>

          
           
          
        </Box>
        <Box sx={{marginTop:'1rem'}}>
            <Typography fontSize='16px' fontWeight='500' color='#2c3e50'>Choose the Available Date*</Typography>
            <Select
                value={selectedDate}
                onChange={handleDateChange}
                displayEmpty
                 error={Boolean(emailError)}  helperText={emailError} 
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
                        error={Boolean(timeError)}  helperText={timeError}  
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
        <Button variant='contained' onClick={handleBook}  sx={{ background: 'linear-gradient(to right, #141e30, #243b55)', borderRadius: '8px', height: '45px', textTransform: 'none', fontSize: '12px', width: '30%', marginTop: '3rem' }}>Go Next</Button>
        </Box>
        
      </Box>
      )}

      
    </Container>
  )
}

export default BookingConfirm