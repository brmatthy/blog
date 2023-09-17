import { Button } from "@mui/material";
import React from "react";

function TagBtn({tag, onClick}){
    return(
        <Button
            onClick={() => onClick()}
            color="secondary"
            size="small"
            variant="outlined"
            sx={{
                textTransform: 'capitalize'
            }}
        >
            {tag}
        </Button>
    );
}

export default TagBtn;