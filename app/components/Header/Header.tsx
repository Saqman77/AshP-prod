"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "./Header.scss";
import ContactUs from "../get-in-touch-button/ContactUs";
import { navLinks } from "./navLinks"; // Importing navLinks object
import { useThemeContext } from "../../utils/ThemeContextProvider";
import { useSanityData } from "../../lib/sanityContext";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { isMenuOpen, toggleMenu, closeMenu } = useThemeContext();
  const header = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  // CMS Data
  const data = useSanityData();

  useEffect(() => {
    const adjustBodyPadding = () => {
      if (header.current) {
        const navbarHeight = header.current.getBoundingClientRect().height;
        const mainer = document.querySelector(".main");
        if (mainer) {
          (mainer as HTMLElement).style.paddingTop = `${navbarHeight}px`;
        }
      }
    };

    // Adjust padding on load
    adjustBodyPadding();

    // Adjust padding on window resize
    window.addEventListener("resize", adjustBodyPadding);

    return () => {
      window.removeEventListener("resize", adjustBodyPadding);
      const mainer = document.querySelector(".main");
      if (mainer) {
        (mainer as HTMLElement).style.paddingTop = "";
      } // Reset padding on cleanup
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Prevent header from hiding on iOS bounce effect
      if (currentScrollY < 0) return;

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

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, closeMenu]);

  // const toggleMenu = () => {
  //   setIsMenuOpen((prev) => !prev); // Toggle menu open state
  // };

  return (
    <>
      <header
        ref={header}
        className={`header ${isHidden ? "header-hidden" : ""} ${
          isScrolled ? "header-blur" : "header-transparent"
        }`}
      >
        <div className="nav-wrapper">
          <div className="menu-wrapper">
            <nav className="nav">
              <ul>
                {Object.entries(navLinks).map(([key, path]) => {
                  const label =
                    key === "fredibuddies"
                      ? "FrEdiBuddies"
                      : key.charAt(0).toUpperCase() + key.slice(1);

                  return (
                    <li key={key} data-text={label}>
                      <Link
                        data-text={label}
                        href={path}
                        className={`link ${
                          pathname === path ? "header-active" : ""
                        }`}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <ContactUs />
          </div>
          <div className="main-logo-wrapper">
            <Link href="/" className="logo">
              {data.logo && (
                <Image
                  src={data.logo?.url}
                  alt={data.logo?.alt}
                  className="header-logo"
                  onClick={closeMenu}
                  width={400}
                  height={100}
                  quality={100}
                  priority
                />
              )}
            </Link>
          </div>

          <div className="mob-nav">
            <div className="mobile-logo-wrapper">
              <Link href="/" className="mobile-logo">
                <Image
                  src={"/header/mobile-logo.svg"}
                  alt="Logo"
                  className="mobile-logo"
                  onClick={closeMenu}
                  width={100}
                  height={100}
                />
              </Link>
            </div>
            {/* <ContactUs /> */}
            <button
              className={`menu-btn ${isMenuOpen ? "active" : ""}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <nav className={`nav-list ${isMenuOpen ? "open" : ""}`}>
        <ul className="mob-list">
          <div className="list-header">
            <div className="mob-logo">
              <Link href="/" className="mobile-logo">
                <Image
                  src={"/header/mobile-logo.svg"}
                  alt="Logo"
                  className="mobile-logo"
                  onClick={closeMenu}
                  width={100}
                  height={100}
                />
              </Link>
              {/* <Image src={mobileLogo} alt="Mobile Logo" className="mobile-logo" onClick={closeMenu} /> */}
            </div>
            <button className="close-btn" onClick={toggleMenu}>
              <span className="close-icon"></span>
              <span className="close-icon"></span>
            </button>
          </div>
          {/* <ul className='mob-ul'>
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
                    to="/about"
                    className={({ isActive }) => (isActive ? 'header-active link' : 'link')}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/fredibuddies"
                    className={({ isActive }) => (isActive ? 'header-active link' : 'link')}
                  >
                    FrEdiBuddies
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) => (isActive ? 'header-active link' : 'link')}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul> */}
          <ul className="mob-ul" onClick={toggleMenu}>
            {(Object.entries(navLinks) as [string, string][]).map(
              ([label, path]) => (
                <li key={label}>
                  <Link
                    href={path}
                    className={`link ${
                      pathname === path ? "header-active" : ""
                    }`}
                  >
                    {label === "fredibuddies"
                      ? "FrEdiBuddies"
                      : label.charAt(0).toUpperCase() + label.slice(1)}
                  </Link>
                </li>
              )
            )}
          </ul>
        </ul>
      </nav>
    </>
  );
};

export default Header;
