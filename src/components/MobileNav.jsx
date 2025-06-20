import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/MobileNav.css';

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="nav-bar">
      <div className="nav-content">
        <nav className="navigation">
          <p className="brand">Cameron Allan</p>
          <button className="hamburger" onClick={toggleMenu}>
            {menuOpen ? '✖' : '☰'}
          </button>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/Experience">Experience</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
