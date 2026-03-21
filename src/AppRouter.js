import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Mentorship from './pages/Mentorship';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import CalculatorPage from './pages/CalculatorPage';
import ComingSoon from './pages/ComingSoon';

const AppRouter = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/mentorship" element={<Mentorship />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/comingsoon" element={<ComingSoon />} />
    </Routes>
    <Footer />
  </Router>
);

export default AppRouter;
