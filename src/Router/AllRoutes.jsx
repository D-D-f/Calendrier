import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Page/Home/Home";
import Employees from "../Page/Employees/Employees";

const AllRoutes = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Employees />} path="/employees" />
    </Routes>
  );
};

export default AllRoutes;
