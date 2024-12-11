import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Register from "./pages/Register";
import UserProtectWrapper from "./components/UserProtectWrapper";
import AdminDashboard from "./pages/Admin";
import "driver.js/dist/driver.css";
const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/admin"
          element={
            <UserProtectWrapper>
              <AdminDashboard />
            </UserProtectWrapper>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
