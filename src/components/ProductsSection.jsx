// src/components/FlashSalesSection.jsx

import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import ProductsCard from './ProductsCard';

// IMPORT YOUR LOCAL IMAGE FILES:
import gamingpad from '../assets/gamingpad.jpg';
import keyboard from '../assets/keyboard.jpg';
import monitor from '../assets/monitor.jpg';
import chair from '../assets/chair.jpg';

const products = [
  {
    id: 1,
    name: 'HAVIT HV-G92 Gamepad',
    price: '$120',
    originalPrice: '$160',
    rating: 4.5,
    reviews: 88,
    image: { src: gamingpad, alt: 'HAVIT HV-G92 Gamepad' },
  },
  {
    id: 2,
    name: 'AK-900 Wired Keyboard',
    price: '$960',
    originalPrice: '$1160',
    rating: 4.0,
    reviews: 75,
    image: { src: keyboard, alt: 'AK-900 Wired Keyboard' },
  },
  {
    id: 3,
    name: 'IPS LCD Gaming Monitor',
    price: '$370',
    originalPrice: '$400',
    rating: 4.5,
    reviews: 99,
    image: { src: monitor, alt: 'IPS LCD Gaming Monitor' },
  },
  {
    id: 4,
    name: 'S-Series Comfort Chair',
    price: '$375',
    originalPrice: '$400',
    rating: 4.5,
    reviews: 99,
    image: { src: chair, alt: 'S-Series Comfort Chair' },
  },
];

export default function ProductsSection() {
  return (
    <Box p={4}>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <Box>
          <Typography variant="caption" color="error">
            This Month
          </Typography>
          <Typography variant="h4" fontWeight="bold">
            Best Selling Products
          </Typography>
        </Box>

        <Box display="flex" gap={2}>
          <Button variant="outlined" color="error">
            View All
            </Button>
        </Box>
      </Box>

      <Box display="flex" alignItems="center">
       

        {/* The 4 product cards (grid takes care of responsiveness) */}
        <Grid container spacing={2} flexGrow={1}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={3}>
              <ProductsCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>

      
    </Box>
  );
}

