"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function NewsCard({item}) {
   const router = useRouter()


 const  handleView =()=>{
  router.push(`/news/${item._id}`)
 }

 const newsDate = new Date(item.date);

  // Format the date as '6 Feb'
  const formattedDate = newsDate.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
  });

 
  return (
    <Card sx={{ maxWidth: 345 ,height:'330px' }} onClick={()=>handleView()}>
      <CardActionArea>
        <CardMedia

   sx={{ height: 150 }}
          >
           <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image src={item?.news[0]?.imageUrl} fill  style={{objectFit:'cover'}}   alt='events'/>
          </div>
          </CardMedia>
        <CardContent>
          <Typography gutterBottom fontSize='20px' fontWeight='500'>
            {item?.news[0]?.title}
          </Typography>
          <Typography fontSize='14px' height='100px'  fontWeight='400'
          sx={{
            maxHeight: '4rem', // Set the maximum height of the description
            overflow: 'hidden', // Hide the overflow content
            textOverflow: 'ellipsis', // Display ellipsis (...) for overflow
            display: '-webkit-box',
            // WebkitBoxOrient: 'vertical',
          }}
          >
            {item?.news[0]?.description}
          </Typography>
          <Box sx={{display:'flex',justifyContent:'space-between',flexDirection:"row",marginTop:'1rem'}}>
          <Typography fontSize='12px' marginTop='0.5rem' color='orangered' fontWeight='400' onClick={()=>handleView()} sx={{cursor:'pointer'}}>
            View More
          </Typography>
          <Typography fontSize='12px' marginTop='0.5rem' color='orangered' fontWeight='400'  sx={{cursor:'pointer'}}>
          {formattedDate}
          </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
