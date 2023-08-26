
import {AppBar, Slide, useScrollTrigger} from '@mui/material';

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

function NavBar(){
    return(
        <HideOnScroll>
            <AppBar>
                <h1>test</h1>
            </AppBar>
        </HideOnScroll>

    );

}

export default NavBar;