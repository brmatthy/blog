import { createSvgIcon } from '@mui/material';
import React from 'react';

const SketchfabIcon = createSvgIcon(
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="50px"
        height="50px"
    >
        <path 
            d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M24,38.805l-10-6.25V20.664l10,6.458V38.805z M14.367,18.484L25,11.819l10.633,6.665L25,25.149L14.367,18.484z M36,32.555l-10,6.25V27.122l10-6.458V32.555z"
            fill='#fff'
            transform='scale(0.95)'
        />
    </svg>
  );

export default SketchfabIcon;