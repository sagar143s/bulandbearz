import * as React from 'react';
import Skeleton from '@mui/material/Skeleton'; 
import { Grid } from '@mui/material';

export default function SkeletonColor() {
  return (
    <Grid container spacing={2}>
    {[1, 2, 3,4].map((index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Skeleton
          variant="rectangular"
          sx={{ width: '100%', height: '300px' }}
        />
      </Grid>
    ))}
  </Grid>
  );
}
