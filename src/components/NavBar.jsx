import React from 'react';
import MobileNav from '../components/MobileNav';
import DesktopNav from '../components/DesktopNav';
import useIfMobile from '../hooks/Navbarhook';


const NavBar = () => {
  const isMobile = useIfMobile();
  return isMobile ? <MobileNav/> : <DesktopNav/>
};

export default NavBar;
