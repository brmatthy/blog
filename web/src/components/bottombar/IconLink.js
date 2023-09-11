import React from "react";
import { Typography, Box, Link } from "@mui/material";

function IconLink({ name, icon, href, reversed=false }){
    return(
        <Link 
            href={href}
            color="primary.contrastText"
        >
            <Box
                display="flex"
                flexDirection={reversed ? "row-reverse" : "row"}
            >
                {icon()}
                <Typography sx={{ mx:1 }} >
                {name}
                </Typography>
            </Box>
        </Link>
    );
}

export default IconLink;