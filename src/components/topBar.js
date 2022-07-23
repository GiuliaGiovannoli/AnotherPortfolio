import React from 'react';

import './styles.css';

import { styled, Stack, Stepper, Step, StepLabel, StepConnector } from '@mui/material';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';


export default function TopBar({steps}) {

const ColorlibConnector = styled(StepConnector)(() => ({
  top: 22,
  height: 3,
  border: 0,
  backgroundImage: 'linear-gradient( 136deg, rgb(204, 249, 255) 10%, rgb(124, 232, 255) 50%, rgb(0, 188, 253) 90%)',
  borderRadius: 1,
}));

const ColorlibStepIconRoot = styled('div')(() => ({
  backgroundImage: 'linear-gradient( 136deg, rgb(0, 172, 223) 10%, rgb(0, 128, 191) 60%, rgb(227, 250, 255) 100%)',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
}));

function ColorlibStepIcon(props) {
  const icons = {
    1: <CoPresentIcon />,
    2: <AccountTreeIcon />,
    3: <WhereToVoteIcon />,
  };

  return (
    <ColorlibStepIconRoot>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

  return (
    <Stack sx={{ width: '100%', marginBottom: "50px" }}>
      <Stepper alternativeLabel connector={<ColorlibConnector />}>
        {steps && steps.map((el, index) =>  {
          return (
          <Step key={index} onClick={()=> window.location.href = "/AnotherPortfolio/" + el.link}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              {el.stepName}
            </StepLabel>
          </Step>
          
          )
        })}
      </Stepper>
    </Stack>
  );
}