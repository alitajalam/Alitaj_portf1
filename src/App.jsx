import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navebar";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Admin Page */}
        <Route path="/admin" element={<Admin />} />
      </Routes>

    </div>
  );
};

export default App;