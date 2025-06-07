import React from 'react'
import { Button,
  Box,
 } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LanguageSelect from '../components/LanguageSelect';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import CartIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';
import Banner1 from '../assets/Banner1.png'; 
import FlashSalesSection from '../components/FlashSalesSection';
import CategorySection from '../components/CategorySection';
import ProductsSection from '../components/ProductsSection';
import ad from '../assets/ad.png'; 
import NewArrivalSection from '../components/NewArrivalSection';
import ServiceHighlights from '../components/ServicesHighlights';
import Footer from '../components/Footer';
import Avatar from '@mui/material/Avatar';



const ECommerceHome = () => {
  const navigate = useNavigate();
  const handleWishlist = () => {
    navigate('/wish');
  };
  const handleAbout = () => {
    navigate('/about');
  };
  const handleCart = () => {
    navigate('/Productdetails');
  };
  const handleContact = () => {
    navigate('/contact');
  };
  const handleHome = () => {
    navigate('/home');
  };
  const handleAccount = () => {
    navigate('/account');
  };
  const handleErrorPage = () => {
    navigate('/error');
  };
  return (
    <div>
      
    </div>
  )
}

export default ECommerceHome