import React from 'react';

import './styles.css';

import { Grid, Paper, Typography, CardMedia } from '@mui/material';

import One from "../img/One.jpg"

export default function AboutMe() {

  return (
    <div id="card">
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 1500,
        flexGrow: 1,
      }}
      id="paper"
    >
      <Grid container spacing={0}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={0}>
            <CardMedia
              component="img"
              sx={{ width: 300, height: 420 }}
              image={One}
              alt={"me"}
            />
          </Grid>
          <Grid item xs container direction="column" spacing={0}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div" id="welcome">
                Hi there! Welcome,
              </Typography>
              <Typography variant="body2" gutterBottom id="intro">
                My name is Giulia, nice to meet you. <br/>
                I am a front-end developer based in Berlin. <br/>
                I code web applications as well as GUI for desktop software. <br/>
                I am driven to create animations and UI effects, I also love creating intuitive, dynamic user experiences. <br/>
                In my personal life, I am a paw-parent of three beautiful pets. <br/>
              </Typography>
              <br/>
              <Typography variant="body2" gutterBottom id="intro">
                Technologies I use and know: <br/>
                Languages: HTML5, CSS3, Javascript, QML, JSON <br/>
                Front-end: ReactJS <br/>
                Back-end: NodeJS <br/>
                Databases: MongoDB, PostgreSQL <br/>
                Tools: Terminal or Command Line, Git, NPM, Postman.<br/>
              </Typography>
              <Typography variant="body2" id="discover">
                Discover more, by having a look at my projects. 
              </Typography>
            </Grid>
            <Grid item>
              <a href="#contacts" style={{ textDecoration: "none" }}>
              <Typography sx={{ cursor: 'pointer', margin: "15px 0", fontWeight: "600" }} variant="body2" id="ways">
                You can contact me in many ways, choose your favorite one.
              </Typography>
              </a>
            </Grid>
            <Grid item>
            <Typography variant="body2" color="text.secondary" id="thanks">
                Thank you for taking the time to look at my Portfolio, see you soon.
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
        </Grid>
        </Grid>
      </Grid>
    </Paper>
     </div>
  );
}