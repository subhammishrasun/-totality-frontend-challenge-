import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h2">Welcome to Property Rental</Typography>
      <Button variant="contained" color="primary" component={Link} to="/properties" style={{ marginTop: '20px' }}>
        Browse Properties
      </Button><br></br>

      <Button variant="contained" color="primary" component={Link} to="/Login" style={{ marginRight: '20px',marginTop:'20px' }}>
        Login
      </Button><br></br>
      <Button variant="contained" color="primary" component={Link} to="/Register" style={{ marginRight: '20px',marginTop:'20px' }}>
        Register
      </Button><br></br>
      <Button variant="contained" color="primary" component={Link} to="/Checkout" style={{ marginRight: '20px',marginTop:'20px' }}>
        Checkout
      </Button>
    </div>
  );
};

export default Home;
