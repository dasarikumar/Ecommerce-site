import React from 'react'
import { Button,
  Box,
 } from '@mui/material';
import LanguageSelect from '../components/LanguageSelect';
import FaviouriteIcon from '@mui/icons-material/FavoriteBorder';
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
import { useNavigate } from 'react-router-dom';



const WithoutHome = () => {
  const navigate = useNavigate();
  const handleWishlist = () => {
    navigate('/wish');
  };
  const handleLogin = () => {
    navigate('/signin');
  };
  const handleAbout = () => {
    navigate('/about');
  };
  const handleCart = () => {
    navigate('/cart');
  };
  const handleContact = () => {
    navigate('/contact');
  };
  const handleHome = () => {
    navigate('/home');
  };
  return (
    <div>
      
    </div>
  )
}

export default WithoutHome;