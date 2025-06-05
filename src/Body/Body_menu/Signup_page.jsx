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
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signin'); // Navigate to signin after account creation
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
              Create an Account
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Enter your details below
            </Typography>

            <Box component="form" noValidate autoComplete="off" sx={{ mt: 3 }}>
              <TextField fullWidth label="Name" margin="normal" variant="standard" />
              <TextField fullWidth label="Email" type="email" margin="normal" variant="standard" />
              <TextField fullWidth label="Password" type="password" margin="normal" variant="standard" />

              <Button
                fullWidth
                variant="contained"
                onClick={handleSignUp}
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
                Create Account
              </Button>

              <Button
                fullWidth
                variant="outlined"
                sx={{
                  mt: 2,
                  py: 1.5,
                  backgroundColor: '#ffffff',
                  color: '#000',
                  fontWeight: 500,
                  fontSize: 16,
                  borderColor: '#ddd',
                  textTransform: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1.5,
                }}
              >
                <GoogleIcon sx={{ fontSize: 20 }} />
                Sign up with Google
              </Button>

              <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
                Already have an account?{' '}
                <Link onClick={() => navigate('/signin')} underline="hover" style={{ cursor: 'pointer' }}>
                  Login
                </Link>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SignUpPage;
