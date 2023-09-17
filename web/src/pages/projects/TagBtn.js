import { Button } from "@mui/material";
import React from "react";

function TagBtn({tag, onClick, variant, ...props}){
    return(
        <Button
            onClick={() => onClick()}
            color="secondary"
            size="small"
            variant={variant}
            sx={{
                textTransform: 'capitalize',
                ...props
            }}
        >
            {tag}
        </Button>
    );
}

export default TagBtn;