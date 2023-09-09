import {Outlet} from "react-router-dom";
import NavBar from "./NavBar";
import BottomBar from "./BottomBar";
import {Box, Fab, Slide, Toolbar, useScrollTrigger} from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function ScrollTopBtn() {
    const trigger = useScrollTrigger({
        //target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Slide direction="up" in={trigger}>
            <Box
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16}}
            >
                <Fab
                    size="small"
                    onClick={handleClick}
                    sx={{
                        backgroundColor:'secondary.main',
                        color: 'secondary.contrastText',
                        '&:hover': { color: 'secondary.main' }
                    }}
                >
                    <KeyboardArrowUpIcon/>
                </Fab>
            </Box>
        </Slide>
    );
}


function MainLayout(){
    return(
        <>
            <NavBar/>
            <Toolbar></Toolbar>
            <div
                sx={{ display: 'flex' }}
            >
                <Outlet sx={{ flexGrow: 1 }} />
                <ScrollTopBtn />
                <BottomBar/>
            </div>

            
        </>
    );
}

export default MainLayout;
