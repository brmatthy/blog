import React from "react";
import { Typography, Box, Link } from "@mui/material";

function IconLink({ name, icon, href }){
    console.log(name)
    return(
        <Link href={href} color="primary.contrastText">
            <Box display="flex" >
                {icon()}
                <Typography sx={{ ml: 1 }} >
                {name}
                </Typography>
            </Box>
        </Link>
    );
}

export default IconLink;