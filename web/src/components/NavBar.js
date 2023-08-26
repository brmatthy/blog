import React from 'react';
import {AppBar, Slide, Tab, Tabs, useScrollTrigger} from '@mui/material';

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

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        // event.type can be equal to focus with selectionFollowsFocus.
        if (
            event.type !== 'click' ||
            (event.type === 'click' && samePageLinkNavigation(event))
        ) {
            setValue(newValue);
        }
    };


    return(
        <HideOnScroll>
            <AppBar>
                <Tabs value={value} onChange={(e,v) => handleChange(e,v)} aria-label="nav tabs example">
                    <LinkTab label="Home" href="/" />
                    <LinkTab label="Projects" href="/projects" />
                    <LinkTab label="About" href="/about" />
                </Tabs>
            </AppBar>
        </HideOnScroll>

    );

}

export default NavBar;