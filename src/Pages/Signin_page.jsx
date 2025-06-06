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
import SigninImage from '../assets/Side.png';

function SigninPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4 } }}>
      <Grid
        container
        spacing={4}
        alignItems="center"
        direction="row"
      >
        {/* Left Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={SigninImage}
            alt="Signin Visual"
            sx={{
              width: '500px',
              height: 'auto',
              display: 'block',
              marginLeft: '0',
            }}
          />
        </Grid>

        {/* Right Login Form Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              maxWidth: 400,
              mx: 'auto',
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Login to Exclusive
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Enter your details below
            </Typography>

            <Box component="form" noValidate autoComplete="off" sx={{ mt: 3 }}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                margin="normal"
                variant="standard"
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="standard"
              />

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

              <Typography variant="body2" sx={{ mt: 2 }}>
                Don’t have an account?{' '}
                <Link
                  onClick={() => navigate('/signup')}
                  underline="hover"
                  sx={{ cursor: 'pointer' }}
                >
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
