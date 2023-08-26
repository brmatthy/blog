import {Outlet} from "react-router-dom";
import NavBar from "./NavBar";
import {Box, Fab, Slide, useScrollTrigger} from "@mui/material";
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
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                <Fab size="small" onClick={handleClick}>
                    <KeyboardArrowUpIcon/>
                </Fab>
            </Box>
        </Slide>
    );
}


function MainLayout(){
    return(
        <>
            <NavBar />
            <Outlet />
            <ScrollTopBtn />
        </>
    );
}

export default MainLayout;