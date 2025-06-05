
import React from 'react';
import { Box, Typography, Grid} from '@mui/material';
import CategoryCard from './CategoryCard';

import SmartphoneIcon from '@mui/icons-material/Smartphone';
import ComputerIcon from '@mui/icons-material/Computer';
import WatchIcon from '@mui/icons-material/Watch';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
const products = [
  {
    id: 1,
    name: 'Phone',
    icon: <SmartphoneIcon size={100} />,  
  },
  {
    id: 2,
    name: 'Computer',
    icon: <ComputerIcon />,
  },
  {
    id: 3,
    name: 'SmartWatch',
    icon: <WatchIcon />,
  },
  {
    id: 4,
    name: 'Camera',
    icon: <CameraAltOutlinedIcon />,
  },
  {
    id: 5,
    name: 'Headphones',
    icon: <HeadphonesOutlinedIcon />,
  },
  {
    id: 6,
    name: 'Gaming',
    icon: <SportsEsportsOutlinedIcon  />,
  },
  
];


export default function CategorySection() {
  return (
    <Box p={4}>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <Box>
          <Typography variant="caption" color="error">
            Categories
          </Typography>
          <Typography variant="h4" fontWeight="bold">
            Browse By Category
          </Typography>
        </Box>
      </Box>

      <Box display="flex" alignItems="center">
        {/* Left Arrow */}
        {/* <IconButton>
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton> */}

        {/* The 4 product cards (grid takes care of responsiveness) */}
        <Grid container spacing={2} flexGrow={1}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={3}>
              <CategoryCard product={product} />
            </Grid>
          ))}
        </Grid>

      </Box>

      <Box mt={4} display="flex" justifyContent="center">
        
      </Box>
    </Box>
  );
}


