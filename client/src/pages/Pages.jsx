import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./homepage/HomePage";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Cart from "./cart/Cart";
import NotFound from "./utils/NotFound/NotFound";
import DetailProduct from "../components/Products/DetailProduct";
import Header from "../components/headers/Header";
import CreateProduct from "../components/createProduct/CreateProduct";
import { GlobalState } from "../GlobalState";
import RegisterRestaurant from "./auth/RegisterRestaurant";

const Pages = () => {
  const state = useContext(GlobalState);
  const [isLogged] = state.UserAPI.isLogged;
  const [isAdmin] = state.UserAPI.isAdmin;

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detail/:id" element={<DetailProduct />} />
        <Route path="/login" element={isLogged ? <NotFound /> : <Login />} />
        <Route
          path="/register"
          element={isLogged ? <NotFound /> : <Register />}
        />
        <Route
          path="/registerrestaurant"
          element={isLogged ? <NotFound /> : <RegisterRestaurant />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/create_product"
          element={isAdmin ? <CreateProduct /> : <NotFound />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
