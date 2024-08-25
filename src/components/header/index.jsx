/* eslint-disable react/prop-types */

import  { useState, useEffect } from "react";
import HamburgerMenu from "./HamburgerMenu";
import MobileMenu from "./MobileMenu";
import "./headerAnimation.css";

const Header = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 100 && !isScrolled) {
      setIsScrolled(true);
    } else if (currentScrollY <= 100 && isScrolled) {
      setIsScrolled(false);
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <header
      className={`bg-black px-3 mx-auto w-full flex flex-col justify-center z-50 transition-transform duration-500 ease-in-out ${
        isScrolled
          ? "fixed top-0 left-0 shadow-lg animate-slideDown"
          : "relative"
      }`}
    >
      <div
        className={`lg:max-w-6xl md:max-w-3xl sm:max-w-lg w-full mx-auto text-white py-1 flex items-center justify-between transition-transform duration-500 ease-in-out ${
          isScrolled ? "animate-slideDownFade" : ""
        }`}
      >
        <div className="text-2xl font-bold">
          <img
            src="https://www.myfortune11.com/myfortune-img/logo2.png"
            alt="My Fortune 11"
            className="max-w-[72px]"
          />
        </div>
        <nav className="hidden md:flex">
          {children}
        </nav>
        <div className="md:hidden">
          <HamburgerMenu
            isActive={isMenuOpen}
            handleToggle={handleMenuToggle}
          />
        </div>
      </div>
      <MobileMenu isMenuOpen={isMenuOpen} handleMenuToggle={handleMenuToggle}>
        {children}
      </MobileMenu>
    </header>
  );
};

export default Header;

