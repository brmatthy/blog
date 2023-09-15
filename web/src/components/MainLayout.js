import {Outlet} from "react-router-dom";
import NavBar from "./NavBar";
import BottomBar from "./bottombar/BottomBar";
import {Box, Fab, Slide, Toolbar, useScrollTrigger} from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import HFillWrapper from "./HFillWrapper";


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


function MainLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />
      <Toolbar sx={{ mb:3}}></Toolbar>
      <div style={{ flex: 1 }}>
        <HFillWrapper>
            <Outlet />
        </HFillWrapper>
      </div>
      <ScrollTopBtn />
      <div style={{ flex: 0}}>
            <BottomBar/>
      </div>
    </div>
  );
}

export default MainLayout;
