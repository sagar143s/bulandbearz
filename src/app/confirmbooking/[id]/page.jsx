"use client"
import React, { useEffect, useState } from 'react'
import BookingConfirm from '@/components/English/Confirm/BookingConfirm'
import Footer from '@/components/English/Footer/Footer'
import { useParams } from 'next/navigation'



const ConfirmBooking = () => {
  const params = useParams()
  console.log(params.id,"param");
  const [courseData,setCourseData]=useState({})
  const [dates,setDates] = useState([])



useEffect(()=>{
const fetchCourse= async()=>{
const course = await fetch(`/api/fetchCourse/${params.id}`,{
  method:'GET',
  headers:{
    'Content-type':'application/json'
  }

 

})
const courseDetails = await course.json()
setCourseData(courseDetails)
setDates(JSON.parse(courseDetails.dates))
}

fetchCourse()
},[params.id])



  return (
    <div style={{height:'90dvh',overflow:'auto',
    scrollbarWidth: "none", 
    display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
      
        <BookingConfirm courseDetails={courseData} dates={dates}/>
        <Footer/>
    </div>
  )
}

export default ConfirmBooking