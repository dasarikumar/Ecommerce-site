import React from 'react'
import { Button,
 } from '@mui/material';
import LanguageSelect from '../components/LanguageSelect';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import CartIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import {Divider} from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Footer from '../components/Footer';
import EditProfile from '../components/EditProfile';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';



const Account = () => {
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

export default Account