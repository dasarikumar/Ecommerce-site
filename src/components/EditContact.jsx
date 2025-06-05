import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const EditProfile = () => {
  return (
    <Box  sx={{ px: 10, py: 3 }}>
      {/* Breadcrumb and Welcome */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="body2" color="text.secondary">Home / My Account</Typography>
        <Typography variant="body2">Welcome! <span style={{ color: 'red' }}>Md Rimel</span></Typography>
      </Box>

      <Grid container spacing={3} sx={{ mt: 3 }}>
  {/* Left Sidebar */}
  <Grid item xs={12} md={4} lg={3}>
    <List sx={{ width: '300px', bgcolor: 'background.paper' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <LocalPhoneOutlinedIcon
          sx={{
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '50%',
            padding: '10px',
            marginRight: '10px',
            
          }}
        />
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Call To Us
        </Typography>
      </Box>
      <ListItem disablePadding>
        <ListItemText
          primary="We are available 24/7, 7 days a week"
          primaryTypographyProps={{ sx: { fontWeight: 500 } }}
        />
      </ListItem>
      <ListItem disablePadding>
        <ListItemText primary="Phone: +88438844983" />
      </ListItem>
      <Divider sx={{ my: 2 }} />

      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <EmailOutlinedIcon
          sx={{
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '50%',
            padding: '10px',
            marginRight: '10px',
          }}
        />
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Write To Us
        </Typography>
      </Box>
      <ListItem disablePadding>
        <ListItemText
          primary="Fill out our form and we will contact you within 24 hours."
          primaryTypographyProps={{ sx: { fontWeight: 500 } }}
        />
      </ListItem>
      <ListItem disablePadding>
        <ListItemText primary="Email: customer@exclusive.com" />
      </ListItem>
      <ListItem disablePadding>
        <ListItemText primary="Email: support@exclusive.com" />
      </ListItem>
    </List>
  </Grid>

  {/* Right Content - Edit Profile */}
  <Grid item xs={12} md={8} lg={9}>
    <Box
      sx={{
        bgcolor: 'white',
        p: 3,
        borderRadius: 2,
        boxShadow: 2,
        width: '700px', // full width in grid
      }}
    >
      <Typography variant="h6" sx={{ color: 'red', mb: 2 }}>
        Edit Your Profile
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="First Name" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Last Name" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Email" variant="outlined" />
        </Grid>
      </Grid>

      {/* Password Section */}
      <Box sx={{ mt: 4 }}>
        <TextField label="Your Message" type="desc" variant="outlined" fullWidth sx={{ mb: 2 }} />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
         
          <Button variant="contained" color="error">
            Save Changes
          </Button>
        </Box>
      </Box>
    </Box>
  </Grid>
</Grid> 


    </Box>
  );
};

export default EditProfile;
