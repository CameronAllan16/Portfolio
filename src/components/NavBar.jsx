import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/navbar.css';

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="nav-content">
        <p className="title">Cameron Allan</p>
      </div>
      <div className="nav-content">
        <nav>
          <ul>
            <li>
              <NavLink className="link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/About">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/Projects">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/Experience">
                Experience
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
