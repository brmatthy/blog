import React from 'react';
import { Box } from '@mui/material';
import IconLink from './IconLink';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SpotifyIcon from '../icons/SpotifyIcon';
import ItchIoIcon from '../icons/ItchIoIcon';
import ArtStationIcon from '../icons/ArtStationIcon';
import SketchfabIcon from '../icons/SketchFabIcon';
import WolrdsBeyondIcon from '../icons/WorldsBeyondIcon';

function LeftSection(){
  return(
    <Box>
    <IconLink
      name='Github'
      icon={() => <GitHubIcon/>}
      href='https://github.com/'
    />
    <IconLink
      name='LinkedIn'
      icon={() => <LinkedInIcon/>}
      href='https://github.com/'
    />
    <IconLink
      name='Pinterest'
      icon={() => <PinterestIcon/>}
      href='https://github.com/'
    />
    <IconLink
      name='Itch.io'
      icon={() => <ItchIoIcon/>}
      href='https://github.com/'
    />
    <IconLink
      name='Artstation'
      icon={() => <ArtStationIcon/>}
      href='https://github.com/'
    />
    <IconLink
      name='Sketchfab'
      icon={() => <SketchfabIcon/>}
      href='https://github.com/'
    />
    <IconLink
      name='Worlds Beyond'
      icon={() => <WolrdsBeyondIcon/>}
      href='https://github.com/'
    />
    <IconLink
      name='YouTube'
      icon={() => <YouTubeIcon/>}
      href='https://github.com/'
    />
    <IconLink
      name='Spotify'
      icon={() => <SpotifyIcon/>}
      href='https://github.com/'
    />
    
    </Box>
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
