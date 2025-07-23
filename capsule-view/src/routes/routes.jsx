import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Profile from "../pages/Profile/Profile";
import Public from "../pages/Public/Public";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react'

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/public" element={<Public />} />
    </Routes>
  );
};
export default MyRoutes;