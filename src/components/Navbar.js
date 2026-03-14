import React from 'react';
import './Navbar.css';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate('/')}>KikiApps</div>
      <ul className="navbar-links">
        <li onClick={() => navigate('/')}>Home</li>
        <li onClick={() => navigate('/services')}>Services</li>
        <li onClick={() => navigate('/mentorship')}>Mentorship</li>
        <li onClick={() => navigate('/portfolio')}>Portfolio</li>
        <li onClick={() => navigate('/about')}>About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
