import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './component/home/home';
import Login from './component/login/login';
import Signup from './component/login/signup';


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/signup'} element={<Signup />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App