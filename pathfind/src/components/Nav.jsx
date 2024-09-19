import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          <Link to="/">Path Finder</Link>
        </div>
        <div className="nav_menu_btn" id="menu-btn" onClick={toggleMenu}>
          <i className="ri-menu-line"></i>
        </div>
      </div>
      <ul className={`nav__links ${menuOpen ? 'open' : ''}`} id="nav-links">
        <li><Link to="/">Courses</Link></li>
        <li><Link to="/">Internships</Link></li>
        <li><Link to="/">Jobs</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Sign up</Link></li>
      </ul>
    </nav>
  );
}
