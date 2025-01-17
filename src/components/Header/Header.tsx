import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import logo from '/src/assets/header/Frame 9.png';
import ContactUs from '../get-in-touch-button/ContactUs';
import { useThemeContext } from '../../utils/ThemeContextProvider';

const Header: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { isMenuOpen, toggleMenu, closeMenu } = useThemeContext();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if the user is scrolling up or down
      if (currentScrollY > lastScrollY) {
        setIsHidden(true); // Scrolling down
        closeMenu();
      } else {
        setIsHidden(false); // Scrolling up
      }

      // Check if the user has scrolled past the top
      setIsScrolled(currentScrollY > 0);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, closeMenu]);

  // const toggleMenu = () => {
  //   setIsMenuOpen((prev) => !prev); // Toggle menu open state
  // };

  return (
    <>
      <header
        className={`header ${isHidden ? 'header-hidden' : ''} ${
          isScrolled ? 'header-blur' : 'header-transparent'
        }`}
      >
        <div className="nav-wrapper">
          <NavLink to="/" className="logo">
            <img src={logo} alt="Logo" className="header-logo" onClick={toggleMenu}/>
          </NavLink>
          <nav className="nav">
            <ul>
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => (isActive ? 'header-active' : '')}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) => (isActive ? 'header-active' : '')}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/freedie"
                  className={({ isActive }) => (isActive ? 'header-active' : '')}
                >
                  Freedie
                </NavLink>
              </li>
            </ul>
            <ContactUs />
          </nav>
          <div className="mob-nav">
            <ContactUs />
            <button
              className={`menu-btn ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
          <nav className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
          <ul className="mob-list"
            onClick={toggleMenu}
          >
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? 'header-active link' : 'link')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) => (isActive ? 'header-active link' : 'link')}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/freedie"
                className={({ isActive }) => (isActive ? 'header-active link' : 'link')}
              >
                Freedie
              </NavLink>
            </li>
          </ul>
          </nav>
      </header>
    </>
  );
};

export default Header;
