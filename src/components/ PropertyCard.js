import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const PropertyCard = ({ image, title, description, price, onBook }) => {
  return (
    <Card style={{ maxWidth: 345, margin: '20px' }}>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={image}
      />
      <CardContent>
        <Typography variant="h5" component="div">{title}</Typography>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
        <Typography variant="h6" component="div">${price}</Typography>
        <Button variant="contained" color="primary" onClick={onBook}>Book Now</Button>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
