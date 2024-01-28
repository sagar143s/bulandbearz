'use client';
import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Paper, Grid } from '@mui/material';

const Health = () => {
  return (
    <Container sx={{ maxWidth: '800px', paddingTop: '50px', textAlign: 'center', direction: 'rtl' }}>
      <Typography variant="h3" fontWeight='600' sx={{ color: '#f3904f', marginBottom: '10px' }}>
      عيادة الصحة المالية
      </Typography>

      <Typography variant="body1" sx={{ color: 'grey', marginBottom: '20px' }}>
      تحقيق الحرية المالية بتوجيه من مرشدينا ذوي الخبرة.
      </Typography>

      <Typography variant="body1" sx={{ textAlign: 'justify', color: '#333', marginBottom: '30px' }}>
      سيقوم مرشدونا المخصصون بتوجيهك من خلال جلسات وجهٍ لوجه أو عبر الإنترنت، وتقديم نصائح متخصصة مصممة خصيصًا لتلبية احتياجاتك.
      </Typography>



      < Paper elevation={3} sx={{ padding: '20px', marginBottom: '30px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '2px 2px 2px 4px rgba(0, 0, 0, 0.1)',direction:'rtl' }}>
      <List > 
    <ListItem sx={{ direction: 'rtl',textAlign:'right' }} >
      <ListItemText
        primary="المرشد 1 - السيد سيف النقبي"
        secondary="فهم وتقييم الوضع المالي الحالي والأهداف المستقبلية."
      />
    </ListItem>
    <ListItem sx={{ direction: 'rtl',textAlign:'right' }}>
      <ListItemText
        primary="المرشد 2 - ديفيا بارساني"
        secondary="قم بتحليل عميق لوضعك المالي الحالي وتعلم استراتيجيات إدارة الأموال لتحسين وضعك."
      />
    </ListItem>
    <ListItem sx={{ direction: 'rtl',textAlign:'right' }}>
      <ListItemText
        primary="المرشد 3 - شكيب حماد"
        secondary="تعلم لفهم أهمية بدء عمل تجاري صغير كمصدر ثانوي للدخل مع تحمل مخاطر منخفضة واختبار السوق بخطة واضحة حول كيفية تطويرها خطوة بخطوة."
      />
    </ListItem>
    <ListItem sx={{ direction: 'rtl',textAlign:'right' }}>
      <ListItemText
        primary="المرشد 4 - السيد سيف النقبي"
        secondary="متابعة وتحديد أولوياتك المالية وقيمك وسلوكياتك."
      />
    </ListItem>
  </List>
</Paper>


      <Grid container spacing={3} sx={{ marginBottom: '30px' }}>
       
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: '20px', height: '100%',  backgroundColor: '#fff' ,boxShadow:'2px 2px 2px 4px rgba(0, 0, 0, 0.1)' }}>
            {/* Additional content or feature 2 */}
            <Typography variant="h6" sx={{ color: '#f3904f', marginBottom: '10px' }}>
            منتدى المجتمع
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'justify', color: '#333' }}>
            تواصل مع الآخرين في رحلة مالية مماثلة، شارك تجاربك، وابحث عن النصائح في منتدى المجتمع الخاص بنا.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: '20px', height: '100%', backgroundColor: '#fff' ,boxShadow:'2px 2px 2px 4px rgba(0, 0, 0, 0.1)'}}>
            {/* Additional content or feature 1 */}
            <Typography variant="h6" sx={{ color: '#f3904f', marginBottom: '10px' }}>
            أدوات التخطيط المالي
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'justify', color: '#333' }}>
            استكشف أدواتنا التفاعلية للتخطيط وإدارة أمورك المالية بفعالية.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Health;
