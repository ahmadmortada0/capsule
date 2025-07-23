import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Public from "../pages/Public/Public";
import SignUp from "../pages/SignUp/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/public" element={<Public />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};
export default MyRoutes;
