import React from "react";
import { Slide, useScrollTrigger } from "@mui/material";

function HideOnScroll(props, direction) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide 
            appear={true}
            direction={direction}
            in={!trigger}
        >
            {children}
        </Slide>
    );
}

export default HideOnScroll;