import React from 'react';
import { Box } from '@mui/material';


function BottomBar(){
    return(
        <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Box>
    );
}

export default BottomBar;
