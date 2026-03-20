import React, { useState } from 'react';
import './Navbar.css';
import Button from './Button';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Mentorship', path: '/mentorship' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About', path: '/about' },
  ];
  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate('/')}>Kiki Apps</div>
      <div className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={menuOpen ? "navbar-links open" : "navbar-links"}>
        {navLinks.map((link) => (
          <li
            key={link.path}
            onClick={() => {navigate(link.path); setMenuOpen(false);}}
            className={location.pathname === link.path ? 'active' : ''}
          >
            {link.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
