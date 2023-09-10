import React from 'react';
import { Box } from '@mui/material';
import GithubIcon from '../icons/GithubIcon'
import IconLink from './IconLink';

function LeftSection(){
  return(
    <>
    <IconLink
      name='Github'
      icon={() => <GithubIcon/>}
      href='https://github.com/'
    />
    </>
  );
}


function BottomBar(){
  return(
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        p: 1,
        
        bgcolor: 'primary.main',

      }}
    >
      <LeftSection/>
      <div>Item 2</div>
      <div>Item 3</div>
    </Box>
  );
}

export default BottomBar;
