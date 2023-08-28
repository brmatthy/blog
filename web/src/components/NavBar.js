import React from 'react';
import {AppBar, Box, Grid, Slide, Tab, Tabs, Typography, useScrollTrigger} from '@mui/material';
import {Link, useLocation} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

function LinkTab(props) {
    const children = props.children

    return (
        <Tab
            component={Link}
            sx={{
                mb: 0,
                color:'primary.contrastText',
                '&:hover': { color: 'secondary.dark' },
            }}
            {...props}
        />
    );
}

function NavBar(){
    const location = useLocation();
    return(
        <HideOnScroll>
            <AppBar>
                <Grid container >

                    <Grid 
                        item
                        xs
                        sx={{ textAlign: 'justify-center', mx: 2, mt:2, color: 'inherit', textDecoration: 'inherit' }} 
                        component={Link}
                        to="/"
                    >
                        <Typography gutterBottom variant="h4" component="div" sx={{ mb: 0}}>
                            Tijmen Matthys
                        </Typography>
                        <Typography variant="subtitle1"  component="div" sx={{ mb: 0}}>
                            Gamedev student & Songwriter
                        </Typography>

                    </Grid>
                    <Grid item>
                        <Tabs value={location.pathname} textColor='secondary' indicatorColor='secondary'>
                            <LinkTab
                                label="Home"
                                value="/"
                                to="/"
                                icon={<HomeIcon />}
                                iconPosition={'start'}
                            />
                            <LinkTab
                                label="Projects"
                                value="/projects"
                                to="/projects"
                                icon={<WorkIcon />}
                                iconPosition={'start'}
                            />
                            <LinkTab
                                label="About"
                                value="/about"
                                to="/about"
                                icon={<InfoIcon />}
                                iconPosition={'start'}
                            />
                        </Tabs>
                    </Grid>
                </Grid>


            </AppBar>
        </HideOnScroll>

    );

}

export default NavBar;