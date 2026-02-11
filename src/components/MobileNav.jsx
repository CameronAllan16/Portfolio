import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/MobileNav.css';

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  //opens & closes menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  //close hamburger when clicking outside of menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      //checking if 1.) menu is open 2.) click is outside of the menu 3.)ignores the menu button
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        event.target.id !== 'hamburger'
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <div className="nav-bar">
      <div className="nav-content">
        <nav className="navigation">
          <p className="brand">Cameron Allan</p>
          <button id="hamburger" className="hamburger" onClick={toggleMenu}>
            {menuOpen ? '✖' : '☰'}
          </button>

          {menuOpen && (
            <ul ref={navRef} className={`nav-links ${menuOpen ? 'active' : ''}`}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/About">About</NavLink>
              </li>
              <li>
                <NavLink to="/Projects">Projects</NavLink>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
