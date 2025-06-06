import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout_structure from './Layout_structure';
import SignUpPage from '../Pages/Signup_page';
import Signinpage from '../Pages/Signin_page';
import About from '../Pages/About';
import Wish_list from '../Pages/Wish_list';
import Product_details from '../Pages/Product_details';
import ECommerceHome from '../Pages/ECommerceHome';
import WithoutHome from '../Pages/HomewithOut';
import Contact from '../Pages/Contact';
import Account from '../Pages/Account';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WithoutHome />} />
        <Route path="/signin" element={<Signinpage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<ECommerceHome />} />
        <Route path="/about" element={<About />} />
        <Route path='/wish' element = {<Wish_list/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="Productdetails" element={<Product_details/>} />
        <Route path="/account" element={<Account/>} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
