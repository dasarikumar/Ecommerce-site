import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import VerifiedIcon from '@mui/icons-material/Verified';

const services = [
  {
    icon: <LocalShippingIcon fontSize="large" />,
    title: 'FREE AND FAST DELIVERY',
    desc: 'Free delivery for all orders over $140',
  },
  {
    icon: <HeadsetMicIcon fontSize="large" />,
    title: '24/7 CUSTOMER SERVICE',
    desc: 'Friendly 24/7 customer support',
  },
  {
    icon: <VerifiedIcon fontSize="large" />,
    title: 'MONEY BACK GUARANTEE',
    desc: 'We return money within 30 days',
  },
];

const ServiceHighlights = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: 10, backgroundColor: '#fff' }}>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index} textAlign="center">
            {/* Icon container */}
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                backgroundColor: '#d9d9d9',
                mx: 'auto',
                mb: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  backgroundColor: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                }}
              >
                {service.icon}
              </Box>
            </Box>

            {/* Text */}
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              {service.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {service.desc}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServiceHighlights;
