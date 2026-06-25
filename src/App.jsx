import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navebar";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import AdminDashboard from "./pages/AdminDashboard";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
};

export default App;