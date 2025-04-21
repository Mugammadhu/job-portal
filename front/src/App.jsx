import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Testimonials from './pages/Testimonials'
import FindTalents from "./pages/FindTalents";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/find-talents" element={<FindTalents />} />
      </Routes>
    </Router>
  );
};

export default App;
