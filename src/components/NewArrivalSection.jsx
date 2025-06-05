import ps5 from '../assets/ps5.png';
import women from '../assets/women.png';
import speakers from '../assets/speakers.png';
import perfums from '../assets/perfums.png';
import { Box ,Button,Card,CardMedia,Grid,Typography } from '@mui/material';
 

const arrivals = [
  {
    title: 'PlayStation 5',
    desc: 'Black and White version of the PS5 coming out on sale.',
    image: { src: ps5, alt: 'PlayStation 5' },
    height: 500,
  },
  {
    title: "Women's Collections",
    desc: 'Featured woman collections that give you another vibe.',
    image: { src: women, alt: "Women's Collections" },
    height: 240,
  },
  {
    title: 'Speakers',
    desc: 'Amazon wireless speakers',
    image: { src: speakers, alt: 'Speakers' },
    height: 120,
  },
  {
    title: 'Perfume',
    desc: 'GUCCI INTENSE OUD EDP',
    image: { src: perfums, alt: 'Perfume' },
    height: 120,
  },
];

const NewArrivalSection = () => {
  return (
    <Box sx={{ px: 4, py: 6 }}>
      {/* Header */}
      <Box mb={4}>
        <Typography variant="subtitle2" color="error" sx={{ fontWeight: 'bold' }}>
          Featured
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          New Arrival
        </Typography>
      </Box>

      {/* Layout */}
      <Grid container spacing={2}>
        {/* Left Large Card */}
        <Grid item xs={12} md={6}>
          <ArrivalCard {...arrivals[0]} />
        </Grid>

        {/* Right Cards */}
        <Grid item xs={12} md={6} container spacing={2}>
          <Grid item xs={12}>
            <ArrivalCard {...arrivals[1]} />
          </Grid>
          <Grid item xs={6}>
            <ArrivalCard {...arrivals[2]} />
          </Grid>
          <Grid item xs={6}>
            <ArrivalCard {...arrivals[3]} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

const ArrivalCard = ({ title, desc, image, height }) => {
  return (
    <Card sx={{ position: 'relative', height: `${height}px`, color: '#fff', overflow: 'hidden' , backgroundColor: 'black'}}>
      <CardMedia
        component="img"
        image={image.src}
        alt={image.alt}
        sx={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          filter: 'brightness(0.85)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          color: '#fff',
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          {desc}
        </Typography>
        <Button variant="text" size="small" color="red">
          Shop Now
        </Button>
      </Box>
    </Card>
  );
};

export default NewArrivalSection;
