import {Outlet, Link} from "react-router-dom";
import NavBar from "./NavBar";
import {Box, Fab, Fade, Slide, useScrollTrigger} from "@mui/material";
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
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/projects">projects</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
            <ScrollTopBtn />
        </>
    );
}

export default MainLayout;