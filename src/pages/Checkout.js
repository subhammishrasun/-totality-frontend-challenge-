import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { TextField, Button, Typography } from '@mui/material';

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const [contactInfo, setContactInfo] = useState('');
  const [paymentInfo, setPaymentInfo] = useState('');

  const handleCheckout = () => {
    // Handle checkout logic here
    console.log('Checkout details:', { contactInfo, paymentInfo, cart });
  };

  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <Typography variant="h4">Checkout</Typography>
      <div>
        <Typography variant="h6">Total Cost: ${totalCost}</Typography>
        <TextField
          label="Contact Information"
          value={contactInfo}
          onChange={(e) => setContactInfo(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Payment Information"
          value={paymentInfo}
          onChange={(e) => setPaymentInfo(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleCheckout}>
          Complete Purchase
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
