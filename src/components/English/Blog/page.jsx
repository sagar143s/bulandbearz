"use client";
import React from 'react';
import { Container, Typography, Paper, Grid } from '@mui/material';

const BlogPage = () => {
  return (
    <Container>
      <Typography variant="h4" style={{ color: "#f3904f", fontWeight: 'bold', textAlign: 'center', margin: '20px 0' }}>
        Consultancy Blog
      </Typography>
      <Grid container spacing={3}>
        {[1, 2, 3].map((post) => (
          <Grid key={post} item xs={12} sm={6} md={4}>
            <Paper style={{ padding: '20px', minHeight: '150px' }}>
              <Typography variant="h6" style={{ color: "#333", marginBottom: '10px' }}>
                Blog Post Title {post}
              </Typography>
              <Typography style={{ color: "#666", marginBottom: '10px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <button style={{ background: "#f3904f", color: "#fff", padding: '8px 16px', border: 'none', cursor: 'pointer' }}>
                Read More
              </button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BlogPage;
