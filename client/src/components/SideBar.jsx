import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import SearchBar from './SearchBar';
import { Link, useNavigate } from 'react-router-dom'

import Auth from '../utils/auth';

const categories = [
    {
        id: 'For You',
        children: [
            {
                id: 'My Mystical Collection',
                icon: <PeopleIcon />,
                path: '/collection'
            },
            {
                id: 'My Deck',
                icon: <DnsRoundedIcon />,
                path: '/myDeck'
            },
        ],
    },
];


const item = {
    py: '2px',
    px: 3,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover, &:focus': {
        bgcolor: 'rgba(255, 255, 255, 0.08)',
    },
};

const itemCategory = {
    boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
    py: 1.5,
    px: 3,
};

export default function Navigator(props) {
    const navigate = useNavigate();
    const { ...other } = props;
    const drawerWidth = 240;

    return (
        <Drawer variant="permanent" sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' } }} anchor='left' {...other}>
            <List disablePadding>
                <ListItem>
                    <SearchBar />
                </ListItem>
                <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
                    <Link to={`/`}>
                        <Box
                            component="img"
                            src='../images/Logo.png'
                            sx={{ height: '40px', width: '100%' }}
                        />
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton selected={false} sx={item} onClick={() => navigate('/')}>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItemButton>
                </ListItem>
                {categories.map(({ id, children }) => (
                    <Box key={id} sx={{ bgcolor: '#101F33' }}>
                        <ListItem sx={{ py: 2, px: 3 }}>
                            <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
                        </ListItem>
                        {children.map(({ id: childId, icon, active, path }) => (
                            <ListItem disablePadding key={childId}>
                                <ListItemButton selected={active} sx={item} onClick={() => navigate(path)}>
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText>{childId}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))}
                        <Divider sx={{ mt: 2 }} />
                    </Box>
                ))}
                <ListItem disablePadding>
                    <ListItemButton sx={item}>
                        <ListItemIcon>
                            {/* You can choose an icon that represents sign in or sign up */}
                            <PeopleIcon />
                        </ListItemIcon>
                        { Auth.loggedIn() ? getLogOutComponent() : getLogInComponent() }
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    );
};

function getLogInComponent() {
    return (
        <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemText primary="Login / Sign Up" />
        </Link>
    );
}

function getLogOutComponent() {
    return <ListItemText primary="Log Out" onClick={Auth.logout} />;
}