// src/components/FlashSalesSection.jsx

import React from 'react';
import { Box, Typography, Button, Grid, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FlashSalesCard from './FlashSalesCard';

// IMPORT YOUR LOCAL IMAGE FILES:
import gamingpad from '../assets/gamingpad.jpg';
import keyboard from '../assets/keyboard.jpg';
import monitor from '../assets/monitor.jpg';
import chair from '../assets/chair.jpg';

const products = [
  {
    id: 1,
    name: 'HAVIT HV-G92 Gamepad',
    discount: '-40%',
    price: '$120',
    originalPrice: '$160',
    rating: 4.5,
    reviews: 88,
    image: { src: gamingpad, alt: 'HAVIT HV-G92 Gamepad' },
  },
  {
    id: 2,
    name: 'AK-900 Wired Keyboard',
    discount: '-35%',
    price: '$960',
    originalPrice: '$1160',
    rating: 4.0,
    reviews: 75,
    image: { src: keyboard, alt: 'AK-900 Wired Keyboard' },
  },
  {
    id: 3,
    name: 'IPS LCD Gaming Monitor',
    discount: '-30%',
    price: '$370',
    originalPrice: '$400',
    rating: 4.5,
    reviews: 99,
    image: { src: monitor, alt: 'IPS LCD Gaming Monitor' },
  },
  {
    id: 4,
    name: 'S-Series Comfort Chair',
    discount: '-25%',
    price: '$375',
    originalPrice: '$400',
    rating: 4.5,
    reviews: 99,
    image: { src: chair, alt: 'S-Series Comfort Chair' },
  },
];

export default function FlashSalesSection() {
  return (
    <Box p={4}>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <Box>
          <Typography variant="caption" color="error">
            Today’s
          </Typography>
          <Typography variant="h4" fontWeight="bold">
            Flash Sales
          </Typography>
        </Box>

        <Box display="flex" gap={2}>
          <TimerUnit value="03" label="Days" />
          <TimerUnit value="23" label="Hours" />
          <TimerUnit value="19" label="Minutes" />
          <TimerUnit value="56" label="Seconds" />
        </Box>
      </Box>

      <Box display="flex" alignItems="center">
        {/* Left Arrow */}
        <IconButton>
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>

        {/* The 4 product cards (grid takes care of responsiveness) */}
        <Grid container spacing={2} flexGrow={1}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={3}>
              <FlashSalesCard product={product} />
            </Grid>
          ))}
        </Grid>

        {/* Right Arrow */}
        <IconButton>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>

      <Box mt={4} display="flex" justifyContent="center">
        <Button variant="contained" color="error">
          View All Products
        </Button>
      </Box>
    </Box>
  );
}

function TimerUnit({ value, label }) {
  return (
    <Box textAlign="center">
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{
          backgroundColor: 'black',
          color: 'white',
          px: 1.5,
          py: 0.5,
          borderRadius: '4px',
        }}
      >
        {value}
      </Typography>
      <Typography variant="caption" color="textSecondary">
        {label}
      </Typography>
    </Box>
  );
}
