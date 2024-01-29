"use client";
import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const ErrorPage = ({ statusCode }) => {
  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
        <Typography variant="h1" color="error" gutterBottom>
          {statusCode || 'Oops!'}
        </Typography>
        <Typography variant="h5" color="error" paragraph>
          {statusCode ? `An error ${statusCode} occurred on server` : 'Something went wrong.'}
        </Typography>
        <Typography variant="body1" paragraph>
          The page you are looking for might be under construction or does not exist.
        </Typography>
      </Paper>
    </Container>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
