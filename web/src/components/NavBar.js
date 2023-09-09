import React from 'react';
import {AppBar, Drawer, Grid, List, ListItem, ListItemIcon, ListItemText, Slide, Tab, Tabs, Typography, useMediaQuery } from '@mui/material';
import {Link, useLocation} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import IconButton from '@mui/material/IconButton';
import HideOnScroll from './HideOnScroll';

function LinkTab(props) {
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
        <Tabs value={useLocation().pathname} textColor='secondary' indicatorColor='secondary'>
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

function MoblieNav({icon, name, to, onClick}){
    const selected = useLocation().pathname === to;
    return(
            <ListItem 
                component={Link} 
                to={to}
                onClick={onClick}
                sx={{ mr:2 }}
            >
                <ListItemIcon
                    sx={{
                        color: selected ? 'secondary.main' : 'primary.contrastText'
                    }}
                >
                    {icon} 
                </ListItemIcon>
                <ListItemText 
                    primary={name}
                    sx={{
                        color: selected ? 'secondary.main' : 'primary.contrastText'
                    }}
                />
            </ListItem>
        );

}

function NavBar(){
    const mobileBreak = useMediaQuery('(max-width:600px)');
    const [open, setOpen] = React.useState(false);


    const toggleDrawer = () => {
        setOpen(!open);
    };

    return(
        <HideOnScroll direction='down'>
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
                    <Grid item sx={{ mt:2}}>
                        {
                            mobileBreak ? (
                                <IconButton
                                    color="inherit"
                                    onClick={toggleDrawer}
                                    sx={{ textAlign: 'justify-center'}}
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
                    PaperProps={{
                        sx:{
                            backgroundColor:'primary.main'
                        }
                    }}
                >
                    <List>
                        <MoblieNav
                            icon={<HomeIcon/>}
                            name='Home'
                            to='/'
                            onClick={toggleDrawer}
                        />
                        <MoblieNav
                            icon={<WorkIcon/>}
                            name='Projects'
                            to='/projects'
                            onClick={toggleDrawer}
                        />
                        <MoblieNav
                            icon={<InfoIcon/>}
                            name='About'
                            to='/about'
                            onClick={toggleDrawer}
                        />
     
                    </List>
                </Drawer>
            </AppBar>
        </HideOnScroll>
    );

}

export default NavBar;