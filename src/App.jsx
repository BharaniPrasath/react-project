import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './component/home/home';
import Login from './component/login/login';
import Signup from './component/login/signup';

import Seller_home from './component/seller/seller_home';
import Seller_information from './component/seller/seller_information';
import SellerLogin from './component/seller/seller_login';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/signup'} element={<Signup />} />
        {/* === SELLER === */}
        <Route path="/seller" element={<Seller_home />} />
        <Route path="/seller_login" element={<SellerLogin />} />
        <Route path="/seller_information" element={<Seller_information />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App