import React from 'react';
import {AppBar, Box, Grid, Slide, styled, Tab, Tabs, Typography, useScrollTrigger} from '@mui/material';
import {useLocation} from "react-router-dom";
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

function samePageLinkNavigation(event) {
    return !(event.defaultPrevented ||
        event.button !== 0 || // ignore everything but left-click
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey);

}

function LinkTab(props) {
    return (
        <Tab
            component="a"
            sx={{
                mb: 0,
                color:'primary.contrastText',
                '&:hover': { color: 'secondary.dark' },
            }}
            {...props}
        />
    );
}

const AntTab = styled((props) => <Tab component="a" {...props} />)(({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
        minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: 'rgba(0, 0, 0, 0.85)',
    '&:hover': {
        color: '#40a9ff',
        opacity: 1,
    },
    '&.Mui-selected': {
        color: '#1890ff',
        fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
        backgroundColor: '#d1eaff',
    },
}));

function NavBar(){
    const location = useLocation();
    return(
        <HideOnScroll>
            <AppBar>
                <Grid container >
                    <Grid item xs sx={{ textAlign: 'justify-center', mx: 2, mt:2 }}>
                        <Typography gutterBottom variant="h4" component="div" sx={{ mb: 0}}>
                            <Box sx={{ fontWeight: 'bold', letterSpacing: 2}}>Tijmen Matthys</Box>
                        </Typography>
                        <Typography variant="subtitle1"  component="div" sx={{ mb: 0, letterSpacing: 1}}>
                            Gamedev student & Songwriter
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Tabs value={location.pathname} textColor='secondary' indicatorColor='secondary'>
                            <LinkTab
                                label="Home"
                                value="/"
                                href="/"
                                icon={<HomeIcon />}
                                iconPosition={'start'}
                            />
                            <LinkTab
                                label="Projects"
                                value="/projects"
                                href="/projects"
                                icon={<WorkIcon />}
                                iconPosition={'start'}
                            />
                            <LinkTab
                                label="About"
                                value="/about"
                                href="/about"
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