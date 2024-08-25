import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the new createRoot API
import App from './App';
import { CartProvider } from './contexts/CartContext';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component using the new API
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
