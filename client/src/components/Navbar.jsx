import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Modal from '@mui/material/Modal';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';
import Auth from '../../utils/auth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const AppNavbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState('login');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit" component={RouterLink} to="/">
              Jace's Library
            </Button>
          </Typography>
          <Button color="inherit" component={RouterLink} to="/">Search For Cards</Button>
          <Button color="inherit" component={RouterLink} to="/sets">View All Sets</Button>
          {Auth.loggedIn() ? (
            <>
              <Button color="inherit" component={RouterLink} to="/saved">See Your Card Collection</Button>
              <Button color="inherit" component={RouterLink} to="/deck">View Deck</Button>
              <Button color="inherit" onClick={Auth.logout}>Logout</Button>
            </>
          ) : (
            <Button color="inherit" onClick={() => setShowModal(true)}>Login/Sign Up</Button>
          )}
        </Toolbar>
      </AppBar>

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Tabs value={value} onChange={handleChange} aria-label="login signup tabs">
            <Tab value="login" label="Login" />
            <Tab value="signup" label="Sign Up" />
          </Tabs>
          {value === 'login' && <LoginForm handleModalClose={() => setShowModal(false)} />}
          {value === 'signup' && <SignUpForm handleModalClose={() => setShowModal(false)} />}
        </Box>
      </Modal>
    </>
  );
};

export default AppNavbar;
