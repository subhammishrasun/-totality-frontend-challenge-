import React, { useState } from 'react';
import PropertyCard from '../components/ PropertyCard'; // Ensure the path is correct
 // Import if needed

const PropertyListings = () => {
  const [properties] = useState([
    { id: 1, name: 'Product 1', price: '$10', description: 'Description 1', image: 'image2.jpeg' },
    { id: 2, name: 'Product 2', price: '$20', description: 'Description 2', image: 'image1.jpg' },
    { id: 3, name: 'Product 3', price: '$30', description: 'Description 3', image: 'th.jpeg' },
    { id: 4, name: 'Product 4', price: '$40', description: 'Description 4', image: 'image4.jpeg' },
    { id: 5, name: 'Product 5', price: '$130', description: 'Description 5', image: 'th3.jpg' },
    { id: 6, name: 'Product 6', price: '$230', description: 'Description 6', image: 'image5.jpg' },
    { id: 7, name: 'Product 7', price: '$330', description: 'Description 7', image: 'image.jpg' },
    { id: 8, name: 'Product 8', price: '$350', description: 'Description 8', image: 'image7.jpg' },


  ]);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {properties.map(property => (
        <PropertyCard
          key={property.id}
          name={property.name}
          price={property.price}
          description={property.description}
          image={property.image}
        />
      ))}
    </div>
  );
};

export default PropertyListings;
