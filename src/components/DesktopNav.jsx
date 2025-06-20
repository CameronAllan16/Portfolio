import { NavLink } from 'react-router-dom';
import '../assets/navbar.css';

const DesktopNav = () => {
  return (
    <div className="nav-bar">
      <div className="nav-content">
        <nav className="navigation">
          <p className="brand">Cameron Allan</p>
          <ul>
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

export default DesktopNav;