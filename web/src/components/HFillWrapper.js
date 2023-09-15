import { Box } from "@mui/material";
import React from "react";

function HFillWrapper({ children, ...props }){
    return(
        <Box mx='auto' maxWidth={1250} boxSizing='border-box' px={3} {...props}>
            {children}
        </Box>
    );
}

export default HFillWrapper;