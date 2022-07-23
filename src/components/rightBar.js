import React, { useState } from 'react';

import './styles.css';

import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import BookIcon from '@mui/icons-material/Book';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArticleIcon from '@mui/icons-material/Article';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DraftsIcon from '@mui/icons-material/Drafts';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';


export default function RightBar() {

    const [bookOpen, setBookOpen] = useState(true)

    const iconsLink = [
        { icon: <GitHubIcon />, link: "", name: 'github' },
        { icon: <LinkedInIcon />, link: "", name: 'linkedin' },
        { icon: <ArticleIcon />, link: "", name: 'resume' },
        { icon: <DraftsIcon />, link: "", name: 'email' },
        { icon: <WorkspacePremiumIcon />, link: "", name: 'certifications' },
        { icon: <YouTubeIcon />, link: "", name: 'video' },
      ];


  return (
    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1, }}>
      <SpeedDial
        open={bookOpen}
        onOpen={() => setBookOpen(true)}
        ariaLabel="SpeedDial tooltip"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={bookOpen ? <MenuBookIcon /> : <BookIcon />}
        onClose={() => setBookOpen(false)}
        direction={"up"}
      >
        {iconsLink.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen={false}
            onClick={() => console.log(action.link)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}


