"use client";
import React from 'react'
import { Container, Typography, Box, List, ListItem, ListItemIcon } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';

const Page = () => {
  return (
    <Container sx={{padding:"50px 0"}}>
      <Typography variant='h4' sx={{ color: "#f3904f", fontWeight: 'bold', textAlign: 'center' }}>Goals</Typography>
      <Box>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckIcon sx={{ color: "#f3904f" }} />
            </ListItemIcon>
            Facilitating clients in surpassing their goals, ensuring results that go beyond expectations.
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon sx={{ color: "#f3904f" }} />
            </ListItemIcon>
            Enhancing and evolving internal processes for optimized client project outcomes.
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon sx={{ color: "#f3904f" }} />
            </ListItemIcon>
            Crafting strategic plans to elevate the performance of client projects.
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon sx={{ color: "#f3904f" }} />
            </ListItemIcon>
            Empowering individuals to attain a superior strategic intellectual level.
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon sx={{ color: "#f3904f" }} />
            </ListItemIcon>
            Elevating the identity of customer projects to a superior level.
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon sx={{ color: "#f3904f" }} />
            </ListItemIcon>
            Achieve these goals with our specialized services in Dubai, leveraging global strategies for unprecedented success.
          </ListItem>
        </List>
      </Box>
    </Container>
  )
}

export default Page;
