import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { List, ListItem, ListItemText, Button, Typography, Divider } from '@mui/material';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  // Calculate the total cost of the items in the cart
  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Your Cart</Typography>
      <Divider />
      <List>
        {cart.length === 0 ? (
          <Typography variant="h6">Your cart is empty</Typography>
        ) : (
          cart.map((item) => (
            <ListItem key={item.id} style={{ marginBottom: '10px' }}>
              <ListItemText
                primary={item.title}
                secondary={`Price: $${item.price} | Quantity: ${item.quantity}`}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                style={{ marginRight: '10px' }}
              >
                +
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                style={{ marginRight: '10px' }}
                disabled={item.quantity <= 1} // Disable if quantity is 1
              >
                -
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
            </ListItem>
          ))
        )}
      </List>
      <Divider />
      <Typography variant="h6" style={{ marginTop: '20px' }}>Total Cost: ${totalCost.toFixed(2)}</Typography>
    </div>
  );
};

export default Cart;
