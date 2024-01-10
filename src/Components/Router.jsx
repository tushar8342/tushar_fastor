import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import OTPForm from "./OTPForm";
import RestaurantList from "./RestaurantList";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/otp-verification" element={<OTPForm />} />
      <Route path="/restaurant-lists" element={<RestaurantList />} />
    </Routes>
  );
};

export default Router;
