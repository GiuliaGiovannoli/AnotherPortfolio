import React from 'react';

import './styles.css';

import CookBlog from "../img/cookBlog.png";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';


export default function Projects({data}) {

  return (
    <>
      <Card sx={{ display: 'flex', flex: "row wrap", alignItems: "center", justifyContent: "space-around", padding: "10px" }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }} id="box">
          <CardContent sx={{ flex: '1 0 auto' }} id="cardText">
            <Typography component="div" variant="h5" id="title">
              {data.projectTitle}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div" id="text">
              <span id="tecnologies">Technologies used: </span> <br/>
                {data.technologies}.
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div" id="text">
              <span id="about">What is it about: </span> <br/>
                {data.about}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-evenly', pl: 1, pb: 1 }}>
            <IconButton aria-label="play/pause">
              <CodeIcon color="info" />
            </IconButton>
            <IconButton aria-label="next">
              <LanguageIcon color="info" />
            </IconButton>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 300, height: 320 }}
          image={CookBlog}
          alt={data.projectTitle}
        />
      </Card>
    </>
  );
}