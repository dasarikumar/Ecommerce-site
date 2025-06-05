import React from 'react';
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  Link,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function SigninPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/'); // Navigate to homepage after login
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://cdn.pixabay.com/photo/2017/08/30/01/04/online-1561484_960_720.jpg"
            alt="E-commerce Website"
            sx={{
              width: '100%',
              height: isMobile ? 'auto' : '500px',
              objectFit: 'cover',
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ maxWidth: 400, mx: 'auto', textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Login to Exclusive
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Enter your details below
            </Typography>

            <Box component="form" noValidate autoComplete="off" sx={{ mt: 3 }}>
              <TextField fullWidth label="Email" type="email" margin="normal" variant="standard" />
              <TextField fullWidth label="Password" type="password" margin="normal" variant="standard" />

              <Button
                fullWidth
                variant="contained"
                onClick={handleLogin}
                sx={{
                  mt: 4,
                  py: 1.5,
                  backgroundColor: 'orange',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 16,
                  '&:hover': { backgroundColor: '#e69500' },
                }}
              >
                Login
              </Button>

              <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
                Don't have an account?{' '}
                <Link onClick={() => navigate('/signup')} underline="hover" style={{ cursor: 'pointer' }}>
                  Sign up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SigninPage;
