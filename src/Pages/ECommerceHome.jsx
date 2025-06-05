import React from 'react'
import { Button,
  Box,
 } from '@mui/material';
import LanguageSelect from '../comp/LanguageSelect';
import FaviouriteIcon from '@mui/icons-material/FavoriteBorder';
import CartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { SearchIcon } from 'lucide-react';
import { Divider } from 'antd';
import InputBase from '@mui/material/InputBase';
import Banner1 from '../assets/Banner1.png'; 
import FlashSalesSection from '../comp/FlashSalesSection';
import CategorySection from '../comp/CategorySection';
import ProductsSection from '../comp/ProductsSection';
import ad from '../assets/ad.png'; 
import NewArrivalSection from '../comp/NewArrivalSection';
import ServiceHighlights from '../comp/ServicesHighlights';
import Footer from '../comp/Footer';



const ECommerceHome = () => {
  return (
    <div>
      <header style={{ display:'flex', flexDirection:'row' , justifyContent:'center', backgroundColor: '#000', textAlign: 'center' }}>
        <p style={{ color: '#fff'  }}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        <Button variant="text" style={{ color: '#fff', borderColor: '#fff', marginLeft: '20px' }}>
          Shop Now
          </Button>
         <LanguageSelect display='flex' flexDirection='row' justifyContent='end' alignItems='end' />
        </header>
        <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-evenly', alignItems:'center', marginTop:'20px' }}>
          <h3>Exclusive</h3>
          <Button variant="text" color="" style={{ marginRight: '10px' }}>
            Home
          </Button>
          <Button variant="text" color="" style={{ marginRight: '10px' }}>
            Products
          </Button>
          <Button variant="text" color="" style={{ marginRight: '10px' }}>
            About Us
          </Button>
          <Button variant="text" color="">
            Sign Up
          </Button>
          <div style={{ position: 'relative', width: '200px' }}>
      <SearchIcon style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', color: '#888' }} />
      <InputBase
        placeholder="What are you looking for?"
        style={{
          paddingLeft: '35px',
          border: '1px solid #ccc',
          borderRadius: '2px',
          width: '250px',
        }}
      />
    </div>
          <FaviouriteIcon style={{ color: '#000', marginLeft: '10px' }} />
          <CartIcon style={{ color: '#000', marginLeft: '10px' }} />
          <Avatar/>
          </div>
          <Divider>
          </Divider>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
           <div style={{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  marginLeft: '150px',
  lineHeight: '2.8',
}}>
  <p style={{ color: '#000', margin: 0 }}>Women's Fashion</p>
  <p style={{ color: '#000', margin: 0 }}>Men's Fashion</p>
  <p style={{ color: '#000', margin: 0 }}>Electronics</p>
  <p style={{ color: '#000', margin: 0 }}>Home & Lifestyle</p>
  <p style={{ color: '#000', margin: 0 }}>Medicine</p>
  <p style={{ color: '#000', margin: 0 }}>Sports & Outdoor</p>
  <p style={{ color: '#000', margin: 0 }}>Baby's & Toys</p>
  <p style={{ color: '#000', margin: 0 }}>Groceries & Pets</p>
  <p style={{ color: '#000', margin: 0 }}>Health & Beauty</p>
</div>
<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: '100px' }}>
  <img src={Banner1} alt="Image" style={{ width: '800px', height: '300px' }} />
</div>
          </div>
          <FlashSalesSection/>
          <CategorySection/>
          <ProductsSection/>
          <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100vh" // or any specific height to center vertically
>
  <img
    src={ad}
    alt="Rectangle 1"
    style={{ width: '80%', height: 'auto' }}
  />
</Box>
<NewArrivalSection/>
<ServiceHighlights/>
<Footer/>
    </div>
  )
}

export default ECommerceHome