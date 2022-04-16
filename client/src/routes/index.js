import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const EYM_ROUTES = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/*" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default EYM_ROUTES;
