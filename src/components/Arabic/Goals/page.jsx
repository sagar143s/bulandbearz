"use client";
import React from 'react'
import { Container, Typography, Box, List, ListItem, ListItemIcon } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';

const Page = () => {
  return (
    <Container sx={{padding:"50px 0"}}>
      <Typography variant='h4' sx={{ color: "#f3904f", fontWeight: 'bold', textAlign: 'center' }}>أهداف</Typography>
      <Box>
        <List>
          <ListItem dir='rtl'>
            <ListItemIcon>
              <CheckIcon sx={{ color: "#f3904f" }} />
            </ListItemIcon>
            تيسير مساعدة العملاء في تجاوز أهدافهم، ضمان النتائج التي تتجاوز التوقعات.
          </ListItem>
          <ListItem dir='rtl'>
            <ListItemIcon>
              <CheckIcon sx={{ color: "#f3904f" }} />
            </ListItemIcon>
            تعزيز وتطوير العمليات الداخلية لتحقيق نتائج محسنة لمشروع العميل.
          </ListItem>
          <ListItem dir='rtl'>
            <ListItemIcon>
              <CheckIcon sx={{ color: "#f3904f" }} />
            </ListItemIcon>
            صياغة خطط استراتيجية لرفع أداء مشاريع العميل.
          </ListItem>
          <ListItem dir='rtl'>
            <ListItemIcon>
              <CheckIcon sx={{ color: "#f3904f" }} />
            </ListItemIcon>
            تمكين الأفراد لتحقيق مستوى ذهني استراتيجي متفوق.
          </ListItem>
          <ListItem dir='rtl'>
            <ListItemIcon>
              <CheckIcon sx={{ color: "#f3904f" }} />
            </ListItemIcon>
            رفع هوية مشاريع العملاء إلى مستوى متفوق.
                      </ListItem>
          <ListItem dir='rtl'>
            <ListItemIcon>
              <CheckIcon sx={{ color: "#f3904f" }} />
            </ListItemIcon>
            حقق هذه الأهداف مع خدماتنا المتخصصة في دبي، باستغلال استراتيجيات عالمية لتحقيق نجاح لا مثيل له.
          </ListItem>
        </List>
      </Box>
    </Container>
  )
}

export default Page;
