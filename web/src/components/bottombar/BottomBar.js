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
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PaletteIcon from '@mui/icons-material/Palette';

function LeftSection(){
  return(
    <Box sx= {{ py: 5, pl: 3}}>
      <Box sx={{ mb: 3 }} >

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
      </Box>



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

function RightSection(){
  return(
    <Box sx= {{ py: 5, pr: 3}}>
      <IconLink
        name='Home'
        icon={() => <HomeIcon/>}
        href='/'
        reversed
      />
      <IconLink
        name='Projects'
        icon={() => <PaletteIcon/>}
        href='/projects'
        reversed
      />
      <IconLink
        name='About'
        icon={() => <InfoIcon/>}
        href='/about'
        reversed
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
      <div></div>
      <RightSection/>
    </Box>
  );
}

export default BottomBar;
