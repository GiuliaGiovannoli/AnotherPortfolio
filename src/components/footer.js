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
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';


export default function Footer() {

    const [bounce, setBounce] = useState(0)

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <div className="container">
        <div className="color" style={{ animation: bounce && bounce === 1 ? "firstBounce 2s ease infinite" : "" }} >
          <Fab color="info" onMouseEnter={() => setBounce(1)} onMouseLeave={() => setBounce(0)}>
            <GitHubIcon style={{ animation: bounce && bounce === 1 ? "delayedBounce 2s ease infinite" : "" }} />
          </Fab>
        </div>
        <div className="color" style={{ animation: bounce && bounce === 2 ? "firstBounce 2s ease infinite" : "" }}>
          <Fab color="info" onMouseEnter={() => setBounce(2)} onMouseLeave={() => setBounce(0)}>
            <YouTubeIcon style={{ animation: bounce && bounce === 2 ? "delayedBounce 2s ease infinite" : "" }} />
          </Fab>
        </div>
        <div className="color" style={{ animation: bounce && bounce === 3 ? "firstBounce 2s ease infinite" : "" }}>
          <Fab color="info" onMouseEnter={() => setBounce(3)} onMouseLeave={() => setBounce(0)}>
            <ArticleIcon style={{ animation: bounce && bounce === 3 ? "delayedBounce 2s ease infinite" : "" }} />
          </Fab>
        </div>
        <div className="color" style={{ animation: bounce && bounce === 4 ? "firstBounce 2s ease infinite" : "" }}>
          <Fab color="info" onMouseEnter={() => setBounce(4)} onMouseLeave={() => setBounce(0)}>
            <WorkIcon style={{ animation: bounce && bounce === 4 ? "delayedBounce 2s ease infinite" : "" }} />
          </Fab>
        </div>
        <div className="color" style={{ animation: bounce && bounce === 5 ? "firstBounce 2s ease infinite" : "" }}>
          <Fab color="info" onMouseEnter={() => setBounce(5)} onMouseLeave={() => setBounce(0)}>
            <LinkedInIcon style={{ animation: bounce && bounce === 5 ? "delayedBounce 2s ease infinite" : "" }} />
          </Fab>
        </div>
        <div className="color" style={{ animation: bounce && bounce === 6 ? "firstBounce 2s ease infinite" : "" }}>
          <Fab color="info" onMouseEnter={() => setBounce(6)} onMouseLeave={() => setBounce(0)}>
            <DraftsIcon style={{ animation: bounce && bounce === 6 ? "delayedBounce 2s ease infinite" : "" }} />
          </Fab>
        </div>
        <div className="color" style={{ animation: bounce && bounce === 7 ? "firstBounce 2s ease infinite" : "" }} >
          <Fab color="info" onMouseEnter={() => setBounce(7)} onMouseLeave={() => setBounce(0)}>
            <WorkspacePremiumIcon style={{ animation: bounce && bounce === 7 ? "delayedBounce 2s ease infinite" : "" }} />
          </Fab>
        </div>
      </div>
      
    </Box>
  );
}