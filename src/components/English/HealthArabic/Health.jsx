'use client';
import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Paper, Grid } from '@mui/material';

const Health = () => {
  return (
    <Container sx={{ maxWidth: '800px', paddingTop: '50px', textAlign: 'center' }}>
      <Typography variant="h3" fontWeight='600' sx={{ color: '#f3904f', marginBottom: '10px' }}>
        Financial Health Clinic
      </Typography>

      <Typography variant="body1" sx={{ color: 'grey', marginBottom: '20px' }}>
        Achieve financial freedom with the guidance of our experienced mentors.
      </Typography>

      <Typography variant="body1" sx={{ textAlign: 'justify', color: '#333', marginBottom: '30px' }}>
        Welcome to our comprehensive program designed to help you achieve your financial goals. Our dedicated mentors will guide you through in-person or online sessions, providing specialized advice tailored to your needs.
      </Typography>



      <Paper elevation={3} sx={{ padding: '20px', marginBottom: '30px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '2px 2px 2px 4px rgba(0, 0, 0, 0.1)' }}>
  <List>
    <ListItem >
      <ListItemText
        primary="Guide 1 - Mr. Saif Al Naqbi"
        secondary="Understanding and evaluating the current financial situation and future goals."
      />
    </ListItem>
    <ListItem>
      <ListItemText
        primary="Guide 2 - Divya Barsani"
        secondary="Deeply analyze your current financial situation and learn money management strategies to improve your situation."
      />
    </ListItem>
    <ListItem>
      <ListItemText
        primary="Guide 3 - Shakib Hammad"
        secondary="Learn to help you understand the importance of starting a small business as a second source of income while taking low risks and testing the market with a clear plan on how to develop it step by step."
      />
    </ListItem>
    <ListItem>
      <ListItemText
        primary="Guide 4 - Mr. Saif Al Naqbi"
        secondary="Follow up and determine your financial priorities, values, and behaviors."
      />
    </ListItem>
  </List>
</Paper>


      <Grid container spacing={3} sx={{ marginBottom: '30px' }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: '20px', height: '100%', backgroundColor: '#fff' ,boxShadow:'2px 2px 2px 4px rgba(0, 0, 0, 0.1)'}}>
            {/* Additional content or feature 1 */}
            <Typography variant="h6" sx={{ color: '#f3904f', marginBottom: '10px' }}>
              Financial Planning Tools
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'justify', color: '#333' }}>
              Explore our interactive tools to plan and manage your finances effectively.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: '20px', height: '100%',  backgroundColor: '#fff' ,boxShadow:'2px 2px 2px 4px rgba(0, 0, 0, 0.1)' }}>
            {/* Additional content or feature 2 */}
            <Typography variant="h6" sx={{ color: '#f3904f', marginBottom: '10px' }}>
              Community Forum
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'justify', color: '#333' }}>
              Connect with others on a similar financial journey, share experiences, and seek advice in our community forum.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Health;
