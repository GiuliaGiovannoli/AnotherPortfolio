import React from 'react';

import './styles.css';

import Projects from './projects';

import data from "../data/data.json";

import Grid from '@mui/material/Grid';


export default function ProjectGrid() {
  return (
    <div id="grid">
    <Grid sx={{ justifyContent: "space-around" }} container spacing={2} id="projects">
      {data.map((el) => (
        <Grid key={el.index} item>

          <Projects data={el} />

        </Grid>
       ))}
    </Grid>
    </div>
  );
}