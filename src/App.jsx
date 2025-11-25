import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './component/home/home';
import Login from './component/login/login';
import Signup from './component/login/signup';

import Seller_home from './component/seller/seller_home';
import Seller_information from './component/seller/seller_information';
import SellerLogin from './component/seller/seller_login';
import CartPage from './component/cart/addToCart';
import AddmobileProduct from './component/cart/addmobileProduct';
import ShowProduct from './component/home/showProduct';
import ShowMobileProduct from './component/home/showMobileProduct';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/signup'} element={<Signup />} />

        {/* === Add to cart === */}
        <Route path={'/cart'} element={<CartPage />} />
        <Route path={'/addmobileproduct'} element={<AddmobileProduct />} /> 
        <Route path={'/showproduct/:id/'} element={<ShowProduct />} /> 
        <Route path={'/showmobileproduct/:id/'} element={<ShowMobileProduct />} /> 



        {/* === SELLER === */}
        <Route path="/seller" element={<Seller_home />} />
        <Route path="/seller_login" element={<SellerLogin />} />
        <Route path="/seller_information" element={<Seller_information />} />



      </Routes>
    </BrowserRouter>
  )
}

export default App