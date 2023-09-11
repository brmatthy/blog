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
      name='Itch.io'
      icon={() => <ItchIoIcon/>}
      href='https://tijmenmatthys.itch.io/'
    />
    <IconLink
      name='Github'
      icon={() => <GitHubIcon/>}
      href='https://github.com/tijmenmatthys'
    />
    <IconLink
      name='LinkedIn'
      icon={() => <LinkedInIcon/>}
      href='https://www.linkedin.com/in/tijmenmatthys'
    />
    <IconLink
      name='Artstation'
      icon={() => <ArtStationIcon/>}
      href='https://www.artstation.com/tijmenmatthys'
    />
    <IconLink
      name='Sketchfab'
      icon={() => <SketchfabIcon/>}
      href='https://sketchfab.com/tijmenmatthys'
    />
    <IconLink
      name='Pinterest'
      icon={() => <PinterestIcon/>}
      href='https://www.pinterest.com/tijmenmatthys/'
    />



    <IconLink
      name='Worlds Beyond'
      icon={() => <WolrdsBeyondIcon/>}
      href='https://www.worldsbeyond.be/'
    />
    <IconLink
      name='YouTube'
      icon={() => <YouTubeIcon/>}
      href='https://www.youtube.com/c/worldsbeyond/'
    />
    <IconLink
      name='Spotify'
      icon={() => <SpotifyIcon/>}
      href='https://open.spotify.com/artist/5Gjhr3kpK4L3NeqVf6GQrw'
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
