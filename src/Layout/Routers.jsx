import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout_structure from './Layout_structure';
import SignUpPage from '../Body/Body_menu/Signup_page';
import Signin_page from '../Body/Body_menu/Signin_page';
import About from '../Body/Body_menu/About';
import Wish_list from '../Body/Body_menu/Wish_list';
import Product_details from '../Body/Body_menu/Product_details';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout_structure />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<Signin_page />} />
        <Route path="/about" element={<About />} />
        <Route path='Wish_list' element = {<Wish_list/>} />
        <Route path="Product_details" element={<Product_details/>} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
