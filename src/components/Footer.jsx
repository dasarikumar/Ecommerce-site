import React from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  IconButton,
  Button,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

const Footer = () => {
  return (
    <Box sx={{  backgroundColor: '#000', color: '#fff', px: { xs: 2, md: 10 }, pt: 10 }}>
      <Grid sx={{ display:'flex' , flexDirection:'row',justifyContent:'space-around'}} container spacing={4}>
        {/* Exclusive */}
        <Grid item xs={12} md={2.5}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Exclusive
          </Typography>
          <p >
            Subscribe
          </p>
          <p>
            Get 10% off your first order
          </p>
          <Box sx={{ display: 'flex', border: '1px solid #fff', borderRadius: 1 }}>
            <TextField
              variant="standard"
              placeholder="Enter your email"
              InputProps={{ disableUnderline: true }}
              sx={{
                flex: 1,
                px: 1,
                py: 0.5,
                input: { color: '#fff' },
                width: '50px',
              }}
            />
            <IconButton type="submit" sx={{ color: '#fff' }}>
              <SendIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* Support */}
        <Grid item xs={12} md={2.5}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Support
          </Typography>
          <p variant="body2">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p>
            exclusive@gmail.com
          </p>
          <p>
            +88015-88888-9999
          </p>
        </Grid>

        {/* Account */}
        <Grid item xs={12} md={1.5}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Account
          </Typography>
          <Typography variant="body2">My Account</Typography>
          <Typography variant="body2">Login / Register</Typography>
          <Typography variant="body2">Cart</Typography>
          <Typography variant="body2">Wishlist</Typography>
          <Typography variant="body2">Shop</Typography>
        </Grid>

        {/* Quick Link */}
        <Grid item xs={9} md={2}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Quick Link
          </Typography>
          <Typography variant="body2">Privacy Policy</Typography>
          <Typography variant="body2">Terms Of Use</Typography>
          <Typography variant="body2">FAQ</Typography>
          <Typography variant="body2">Contact</Typography>
        </Grid>

        {/* Download App */}
        <Grid item xs={12} md={3.5}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Download App
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Save $3 with App New User Only
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/QR_code_example.svg"
              alt="QR"
              width={80}
              height={80}
            />
            <Box>
              <Button
                variant="outlined"
                startIcon={<GoogleIcon />}
                sx={{ color: '#fff', borderColor: '#fff', mb: 1 }}
              >
                Google Play
              </Button>
              <Button
                variant="outlined"
                startIcon={<AppleIcon />}
                sx={{ color: '#fff', borderColor: '#fff' }}
              >
                App Store
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box
        sx={{
          textAlign: 'center',
          py: 4,
          borderTop: '1px solid #333',
          mt: 4,
          color: 'gray',
          fontSize: '0.9rem',
        }}
      >
        © Copyright Rimel 2022. All rights reserved
      </Box>
    </Box>
  );
};

export default Footer;
