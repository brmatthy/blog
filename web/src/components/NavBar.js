import React from 'react';
import {AppBar, Slide, Tab, Tabs, useScrollTrigger} from '@mui/material';
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
            {...props}
        />
    );
}

function NavBar(){
    const location = useLocation();
    return(
        <HideOnScroll>
            <AppBar>
                <Tabs value={location.pathname}>
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
            </AppBar>
        </HideOnScroll>

    );

}

export default NavBar;