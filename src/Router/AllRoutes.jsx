import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Page/Home/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
    </Routes>
  );
};

export default AllRoutes;
