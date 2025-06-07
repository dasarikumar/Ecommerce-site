import React from 'react'
import { Button,
 } from '@mui/material';
import LanguageSelect from '../components/LanguageSelect';
import FaviouriteIcon from '@mui/icons-material/FavoriteBorder';
import CartIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import { Divider } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';




const PageError = () => {
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
  }


  return (
    <div>
      
    </div>
  )
}

export default PageError