import React, { useState } from 'react';

import './animations.css'

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArticleIcon from '@mui/icons-material/Article';
import WorkIcon from '@mui/icons-material/Work';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DraftsIcon from '@mui/icons-material/Drafts';


export default function Footer() {

    const [bounce, setBounce] = useState(0)

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }} id="contacts">
      <div className="container">
        <a target="blank" href="https://github.com/GiuliaGiovannoli">
        <div className="color" style={{ animation: bounce && bounce === 1 ? "firstBounce 2s ease infinite" : "" }} href="https://www.linkedin.com/in/giulia-giovannoli">
          <Fab color="info" onMouseEnter={() => setBounce(1)} onMouseLeave={() => setBounce(0)}>
            <GitHubIcon style={{ animation: bounce && bounce === 1 ? "delayedBounce 2s ease infinite" : "" }} />
          </Fab>
        </div>
        </a>
        <a target="blank" href="https://www.canva.com/design/DAE_FIYIVlM/4zLO0O5k5yuikmNnYwiSFA/edit?utm_content=DAE_FIYIVlM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
        <div className="color" style={{ animation: bounce && bounce === 3 ? "firstBounce 2s ease infinite" : "" }}>
          <Fab color="info" onMouseEnter={() => setBounce(3)} onMouseLeave={() => setBounce(0)}>
            <ArticleIcon style={{ animation: bounce && bounce === 3 ? "delayedBounce 2s ease infinite" : "" }} />
          </Fab>
        </div>
        </a>
        <a target="blank" href="https://www.linkedin.com/in/giulia-giovannoli">
        <div className="color" style={{ animation: bounce && bounce === 5 ? "firstBounce 2s ease infinite" : "" }}>
          <Fab color="info" onMouseEnter={() => setBounce(5)} onMouseLeave={() => setBounce(0)}>
            <LinkedInIcon style={{ animation: bounce && bounce === 5 ? "delayedBounce 2s ease infinite" : "" }} />
          </Fab>
        </div>
        </a>
        <a target="blank" href="https://www.youtube.com/watch?v=R0Eiuf1wGNE&t=319s">
        <div className="color" style={{ animation: bounce && bounce === 2 ? "firstBounce 2s ease infinite" : "" }}>
          <Fab color="info" onMouseEnter={() => setBounce(2)} onMouseLeave={() => setBounce(0)}>
            <YouTubeIcon style={{ animation: bounce && bounce === 2 ? "delayedBounce 2s ease infinite" : "" }} />
          </Fab>
        </div>
        </a>
        <a target="blank" href="mailto:giovannoli.giulia@gmail.com">
        <div className="color" style={{ animation: bounce && bounce === 6 ? "firstBounce 2s ease infinite" : "" }}>
          <Fab color="info" onMouseEnter={() => setBounce(6)} onMouseLeave={() => setBounce(0)}>
            <DraftsIcon style={{ animation: bounce && bounce === 6 ? "delayedBounce 2s ease infinite" : "" }} />
          </Fab>
        </div>
        </a>
      </div>
      
    </Box>
  );
}