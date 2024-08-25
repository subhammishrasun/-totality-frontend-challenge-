import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Property Rental
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/properties">Properties</Button>
        <Button color="inherit" component={Link} to="/cart">Cart</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
