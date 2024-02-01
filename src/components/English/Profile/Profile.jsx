import { Avatar, Box, Button, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import React,{useEffect, useRef, useState} from 'react' 
import User from '../../../../public/userupdate.png'
import Edit from '../../../../public/edit.svg'
import FooterArabic from '@/components/Arabic/Footer/Footer';
import Footer from '@/components/English/Footer/Footer';
import { useLanguage } from '@/context/LanguageContext'
import BottomBar from '@/components/English/bottombar/bottom';
import BottomBarAarabic from '@/components/Arabic/bottombar/bottom';

const Profile = () => {
   const [image,setImage]=useState(null)
   const [name,setName]=useState('')
   const [id,setId]=useState('')
   const [currentPassword,setCurrentPassword]=useState('')
   const [newPassword,setNewPassword]=useState('')
   const [confirmPassword,setConfirmPassword]= useState('')
   const [imageName,setImageName] = useState('')
   const [imageData, setImageData] = useState(null)
   const [error,setError]= useState('')
   const { language } = useLanguage();


   const ref = useRef()

   const uploadImage = ()=>{
      ref.current.click()
     }

     const handleImageChange = (e) => {
      const selectedImage = e.target.files[0];
      
      if (selectedImage) {
        // Check if the image size is less than 1MB
        if (selectedImage.size > 1024 * 1024) {
            return  
      } else {
         
          setImage(selectedImage);
          setImageName(selectedImage.name)
        }
      }
    };



    useEffect(()=>{
      const userId = localStorage.getItem('userId')
      const fetchUser = async()=>{
        const user = await fetch(`/api/fetchUser/${userId}`,{
         method:'GET',
         headers:{
            'Content-type':'application/json'
         }
        }
        
        )

        const userresponse = await user.json()
        console.log(userresponse);
        setName(userresponse.name)
        setImage(userresponse.image)
        
      }
      fetchUser()
    },[])

    const handleSubmit = async(e)=>{
       e.preventDefault()
       const userId = localStorage.getItem('userId')
       if(newPassword !== confirmPassword){
         setError('Password Not match')
         return
       }
       
       const formData = new FormData()
       if(image){
         formData.append('image',image)
       }
       formData.append('name',name)
       formData.append('currentpassword',currentPassword)
       formData.append('newPassword',newPassword)
       formData.append('id',userId)

       const res = await fetch('/api/updateProfie',{
         method:'POST',
         body:formData,
       })

       if(res.ok){
         alert('set sanam')
       }else{
         alert('oombi myr')
       }





    }


    console.log(image);

    
  return (
    <Box sx={{ overflow: 'auto', height: "90dvh",display:'flex',flexDirection:'column',justifyContent:'space-between' }}>
      <Box sx={{ display: 'grid', placeItems: 'center', width: '100%', margin: "8rem 0 5rem" }}>


        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #f3f3f3', position: 'relative', width: '100%', flexDirection: 'column', background: "#f3f6f9", border: '1px solid #32385a', borderRadius: "25px", maxWidth: "500px", boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px' }}>
          <Box sx={{ position: 'absolute', top: -90, }}>
            <Avatar alt='user' sx={{ width: '150px', height: '150px', position: 'relative' }}>

              <Image src={image ? image : User} fill alt='User' />
            </Avatar>
            <Image onClick={uploadImage} src={Edit} width={25} height={25} style={{ position: 'absolute', right: 10, bottom: 5, cursor: 'pointer' }} />
            <input
              type='file'
              ref={ref}
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', color: '#32385a', marginTop: '7rem' }}>
            <Typography align='left' fontWeight='bold'>Username</Typography>
            <TextField value={name} onChange={(e) => setName(e.target.value)} sx={{ width: '100%' }} InputProps={{
              style: {
                height: '40px'
              }
            }} />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', color: '#32385a', marginTop: '0.5rem' }}>
            <Typography align='left' fontWeight='bold'>Current Password</Typography>
            <TextField type='password' value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} sx={{ width: '100%' }} InputProps={{
              style: {
                height: '40px'
              }
            }} />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', color: '#32385a', marginTop: '0.5rem' }}>
            <Typography align='left' fontWeight='bold'>New Password</Typography>
            <TextField type='password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} sx={{ width: '100%' }} InputProps={{
              style: {
                height: '40px'
              }
            }} />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', color: '#32385a', marginTop: '0.5rem' }}>
            <Typography align='left' fontWeight='bold'>Confirm Password</Typography>
            <TextField type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} error={!!error} helperText={error} sx={{ width: '100%' }} InputProps={{
              style: {
                height: '40px'
              }
            }} />
          </Box>



          <Button onClick={handleSubmit} sx={{ height: '40px', background: '#32385a', color: 'white', textTransform: 'none', margin: '2rem 0rem', width: '30%', '&:hover': { background: '#32385a', color: 'white' } }}>Update Profile</Button>

        </Box>

      </Box>
      <Box>
        {language === 'english' ? <Footer /> : <FooterArabic />}
        {language === 'english' ? <BottomBar /> : <BottomBarAarabic />}
      </Box>
    </Box>
  )
}

export default Profile