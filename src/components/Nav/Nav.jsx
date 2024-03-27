import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import './Nav.css'
import { ListItemText } from '@mui/material';


function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        style: {
            backgroundColor: trigger ? 'rgba(74, 107, 74, 0.837)' : 'rgb(115, 147, 115)'
        }
    });
}

const drawerWidth = 240;
const navItems = [
    {
        name: "HOME",
        path: '/'
    },
    {
        name: "ABOUT ME",
        path: "/AboutMe"
    },
    {
        name: "WORK",
        path: "/Work"
    }
];

function Nav(props) {
    const currentPage = useLocation().pathname;
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding >
                        <Link to={item.path} className='nav-link'>
                            <ListItemButton sx={{ textAlign: 'center', width: drawerWidth }}>
                                <h4 className={currentPage === item.path ? 'nav-link sidebar-active' : 'nav-link'}>
                                    {item.name}
                                </h4>

                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (

        <Box sx={{ display: 'flex' }}>
            <ElevationScroll {...props} >
                <AppBar component="nav" sx={{ backgroundColor: 'rgb(115, 147, 115)' }}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >

                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                <Button key={item.name} sx={{ color: '#fff' }}>
                                    <Link className="nav-link" to={item.path}>
                                        <h4 className={currentPage === item.path ? 'nav-link active' : 'nav-link'}>
                                            {item.name}
                                        </h4>
                                    </Link>
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>

            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'rgba(74, 107, 74, 0.837)' },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>

    );
}


export default Nav;