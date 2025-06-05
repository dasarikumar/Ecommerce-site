// src/components/FlashSalesCard.jsx

import React from 'react';
import {
  Box,
  Card,
  Typography,
  IconButton,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import StarIcon from '@mui/icons-material/Star';

export default function FlashSalesCard({ product = {} }) {
  // Destructure the product, using defaults if product is undefined
  const {
    name = '',
    discount = '',
    price = '',
    originalPrice = '',
    rating = 0,
    reviews = 0,
    image = { src: '', alt: '' },
  } = product;

  return (
    <Card sx={{ p: 2, position: 'relative', borderRadius: 2, boxShadow: 3 }}>
      {/* Discount badge */}
      <Box
        sx={{
          position: 'absolute',
          top: 8,
          left: 8,
          bgcolor: 'error.main',
          color: 'white',
          px: 1,
          py: 0.5,
          borderRadius: '4px',
          fontSize: '12px',
        }}
      >
        {discount}
      </Box>

      {/* Favorite & View icons */}
      <Box
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          display: 'flex',
          gap: 1,
          color: 'grey.600',
        }}
      >
        <IconButton size="small">
          <FavoriteBorderIcon fontSize="small" />
        </IconButton>
        <IconButton size="small">
          <VisibilityOutlinedIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Product Image */}
      <Box
        component="img"
        src={image.src}
        alt={image.alt}
        sx={{
          width: '100%',
          height: 140,
          objectFit: 'contain',
          my: 2,
        }}
      />

      {/* Product Name */}
      <Typography
        variant="subtitle2"
        sx={{ fontWeight: 500, mb: 1, lineHeight: 1.2 }}
      >
        {name}
      </Typography>

      {/* Price / Original Price */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
        <Typography variant="body1" color="error" fontWeight="bold">
          {price}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textDecoration: 'line-through' }}
        >
          {originalPrice}
        </Typography>
      </Box>

      {/* Rating Stars + Review Count */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 2 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon
            key={i}
            fontSize="small"
            sx={{ color: i < Math.floor(rating) ? 'gold' : 'grey.300' }}
          />
        ))}
        <Typography variant="caption" color="text.secondary">
          ({reviews})
        </Typography>
      </Box>

     {/* // Optional “Add To Cart” black button if blackButton === true */}
      {/* {blackButton && (
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'black',
            color: 'white',
            textTransform: 'none',
            '&:hover': { backgroundColor: 'grey.900' },
          }}
          fullWidth
          size="small"
        >
          Add To Cart
        </Button>
      )} */}
    </Card>
  );
}
