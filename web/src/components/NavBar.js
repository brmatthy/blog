import React from 'react';
import {AppBar, Drawer, Grid, List, ListItem, ListItemIcon, ListItemText, Slide, Tab, Tabs, Typography, useMediaQuery, useScrollTrigger, useTheme} from '@mui/material';
import {Link, useLocation} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import IconButton from '@mui/material/IconButton';

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

function DesktopTabs(){
    return(
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
    );
}

function MoblieNav({icon, name, to}){
    return(
            <List>
                <ListItem>
                    <ListItemIcon>
                        {icon} 
                    </ListItemIcon>
                    <ListItemText primary={name}/>
                </ListItem>
            </List>
        );

}

function NavBar(){
    const location = useLocation();
    const mobileBreak = useMediaQuery('(max-width:600px)');
    const [open, setOpen] = React.useState(false);


    const toggleDrawer = () => {
        setOpen(!open);
    };
    

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
                        {
                            mobileBreak ? (
                                <IconButton
                                    color="inherit"
                                    onClick={toggleDrawer}
                                >
                                    <MenuIcon />
                                </IconButton>
                            ) : (
                                <DesktopTabs/>
                            )
                        }                
                    </Grid>
                </Grid>
                <Drawer
                    anchor='right'
                    open={open}
                    onClose={toggleDrawer}
                >
                    <MoblieNav
                        icon={<HomeIcon/>}
                        name='Home'
                        to='/'
                    />
                    <MoblieNav
                        icon={<WorkIcon/>}
                        name='Projects'
                        to='/projects'
                    />
                    <MoblieNav
                        icon={<InfoIcon/>}
                        name='About'
                        to='/about'
                    />
                </Drawer>
            </AppBar>
            
        </HideOnScroll>
        
    );

}

export default NavBar;