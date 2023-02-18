import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import portre from '/src/assets/profile.png';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
}));

export default function About() {
  return (
      <Box sx={{ flexGrow: 0 }} className="about">
        <Grid container spacing={0}>
          <Grid item xs={6} md={9}>
            <Item>
               <h1>Hamid Asiabari</h1> 
                <p>
                Hello . I am Hamid. I have 11 years of programming experience in different languages and have worked with many companies as a programmer, consultant and project manager. In recent years, I have worked as a freelancer with the best people I know in this field, and now with all these experiences, I am ready to serve you to get the best results for you.
                </p>
                <h2>
                React js, React Native, NodeJs, Docker and swarm
                </h2>
            </Item>
          </Grid>
          <Grid item xs={6} md={3}>
            <Item>
               <img src={portre} className="portrePhoto"/>
            </Item>
          </Grid>
        </Grid>
      </Box>
  );
}