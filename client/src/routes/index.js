import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import AboutUs from "../pages/About us";
import PricingContent from "../components/prueba"
import ArticlePage from "../pages/Article"; */
import HomePage from "../pages/Homepage";
import Login from "../pages/Login";
import RegisterPage from "../pages/Register";

const EYM_ROUTES = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default EYM_ROUTES;
