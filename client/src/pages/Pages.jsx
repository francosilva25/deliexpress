import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './homepage/HomePage'
import Login from './auth/Login'
import Register from './auth/Register'
import Cart from './cart/Cart'
import NotFound from './utils/NotFound/NotFound'
import DetailProduct from '../components/Products/DetailProduct';
import {GlobalState} from '../GlobalState'
import {useContext} from 'react';

const Pages = () => {
  const state = useContext(GlobalState)
  const [isLogged] = state.userAPI.isLogged

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detail/:id" element={<DetailProduct />} />

        <Route path="/Login" element={isLogged ? NotFound : Login} />
        <Route path="/Register" element={isLogged ? NotFound : Register} />

        <Route path="/cart" element={<Cart />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Pages