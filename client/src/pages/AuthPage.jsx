import React from 'react';
import { Box, Tab, Tabs, Typography, Container } from '@mui/material';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const AuthPage = () => {
    const [tabIndex, setTabIndex] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop: 8 }}>
                <Tabs value={tabIndex} onChange={handleTabChange} centered>
                    <Tab label="Login" />
                    <Tab label="Sign Up" />
                </Tabs>
            </Box>
            {tabIndex === 0 && (
                <Box sx={{ mt: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        Login
                    </Typography>
                    <LoginForm />
                </Box>
            )}
            {tabIndex === 1 && (
                <Box sx={{ mt: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        Sign Up
                    </Typography>
                    <SignupForm />
                </Box>
            )}
        </Container>
    );
};

export default AuthPage;
