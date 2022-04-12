import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import AboutUs from "../pages/About us";
import PricingContent from "../components/prueba"
import ArticlePage from "../pages/Article"; */
import HomePage from "../pages/Homepage";
import Login from "../pages/Login";

const EYM_ROUTES = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default EYM_ROUTES;
