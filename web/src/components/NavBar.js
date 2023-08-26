
import {AppBar, Slide, useScrollTrigger} from '@mui/material';

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