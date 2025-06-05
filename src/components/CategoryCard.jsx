// src/components/FlashSalesCard.jsx

import React from 'react';
import {
  Card,
  Typography,
} from '@mui/material';

export default function CategoryCard({ product = {} }) {
  const {
    name = '',
    icon = '',
    
  } = product;

  return (
    <Card  sx={{  p: 7, position: 'relative' ,display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', borderRadius: 2, boxShadow: 3 }}>
        <div style={{ pb:2, display: 'flex', flexDirection:'column', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
            {icon}
      <Typography>
        {name}
      </Typography>
            </div>
    </Card>
  );
}
