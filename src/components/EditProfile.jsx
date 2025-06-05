import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const EditProfile = () => {
  return (
    <Box sx={{ px: 10, py: 3 }}>
      {/* Breadcrumb and Welcome */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="body2" color="text.secondary">Home / My Account</Typography>
        <Typography variant="body2">Welcome! <span style={{ color: 'red' }}>Md Rimel</span></Typography>
      </Box>

      <Grid direction='flex' flexDirection='row' container spacing={4}>
        {/* Left Sidebar */}
        <Grid direction='flex' flexDirection='column' item xs={12} md={3}>
          <List>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>Manage My Account</Typography>
            <ListItem sx={{ml:5}}  disablePadding>
              <ListItemText primary="My Profile" primaryTypographyProps={{ sx: { color: 'red', fontWeight: 500 } }} />
            </ListItem>
            <ListItem sx={{ml:5}} disablePadding>
              <ListItemText primary="Address Book" sx={{color:'#919191'}} />
            </ListItem>
            <ListItem sx={{ml:5}}  disablePadding>
              <ListItemText primary="My Payment Options" sx={{color:'#919191'}} />
            </ListItem>

            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>My Orders</Typography>
              <ListItem sx={{ml:5}}  disablePadding>
                <ListItemText primary="My Returns" sx={{color:'#919191'}} />
              </ListItem>
              <ListItem sx={{ml:5}}  disablePadding>
                <ListItemText primary="My Cancellations" sx={{color:'#919191'}} />
              </ListItem>
            </Box>

            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>My Wishlist</Typography>
            </Box>
          </List>
        </Grid>
        {/* Profile Form */}
        <Grid item xs={12} md={9}>
          <Box sx={{ml:14, bgcolor: 'white', p: 4, borderRadius: 2, boxShadow: 2, width: '610px' }}>
            <Typography variant="h6" sx={{ color: 'red', mb: 3 }}>Edit Your Profile</Typography>
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
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Address" variant="outlined" />
              </Grid>
                <Box sx={{ width: '100%', maxWidth: 600 }}>
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}>
    <Typography variant="subtitle1">Password Changes</Typography>
    <TextField label="Current Password" type="password" variant="outlined" fullWidth />
    <TextField label="New Password" type="password" variant="outlined" fullWidth />
    <TextField label="Confirm New Password" type="password" variant="outlined" fullWidth />
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
      <Button variant="text">Cancel</Button>
      <Button variant="contained" color="error">Save Changes</Button>
    </Box>
  </Box>
</Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditProfile;
