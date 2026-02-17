import { NavLink } from 'react-router-dom';
import React from 'react';
import '../assets/DesktopNav.css';

const DesktopNav = () => {
  return (
    <div className="nav-bar">
      <div className="nav-content">
        <nav className="navigation">
          <div className="brand-container">
            <p className="brand">Cameron Allan</p>
          </div>

          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/Projects">Projects</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DesktopNav;
