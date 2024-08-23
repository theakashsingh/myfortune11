/* eslint-disable react/prop-types */
// import { useState, useEffect, useRef } from "react";
// import { NavLink } from "react-router-dom";
// import { useScroll } from "../../pages/scrollContext";
// import "./headerAnimation.css";
// import HamburgerMenu from "./HamburgerMenu";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const menuRef = useRef(null);

//   const { scrollTo } = useScroll();

//   const handleScroll = () => {
//     const currentScrollY = window.scrollY;

//     if (currentScrollY > 100 && !isScrolled) {
//       setIsScrolled(true);
//     } else if (currentScrollY <= 100 && isScrolled) {
//       setIsScrolled(false);
//     }
//   };

//   const handleMenuToggle = () => {
//     setIsMenuOpen(prev => !prev);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [isScrolled]);

//   return (
//     <header
//       className={`w-full z-50 transition-transform duration-500 ease-in-out ${
//         isScrolled
//           ? "fixed top-0 left-0 shadow-lg animate-slideDown"
//           : "relative"
//       }`}
//     >
//       <div
//         className={`bg-black text-white p-4 flex items-center justify-between transition-transform duration-500 ease-in-out ${
//           isScrolled ? "animate-slideDownFade" : ""
//         }`}
//       >
//         <div className="text-2xl font-bold">
//           <img
//             src="https://www.myfortune11.com/myfortune-img/logo2.png"
//             alt="My Fortune 11"
//             className="h-10 w-auto"
//           />
//         </div>
//         <nav className="hidden md:flex space-x-6">
//           <NavLink
//             to="/"
//             onClick={() => scrollTo("home")}
//             className={({ isActive }) =>
//               isActive ? "text-yellow-500 hover:underline" : "hover:underline"
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/overview"
//             onClick={() => scrollTo("overview")}
//             className={({ isActive }) =>
//               isActive ? "text-yellow-500 hover:underline" : "hover:underline"
//             }
//           >
//             Overview
//           </NavLink>
//           <NavLink
//             to="/myfortune11"
//             onClick={() => scrollTo("myfortune11")}
//             className={({ isActive }) =>
//               isActive ? "text-yellow-500 hover:underline" : "hover:underline"
//             }
//           >
//             MyFortune11
//           </NavLink>
//           <NavLink
//             to="/faq"
//             onClick={() => scrollTo("faq")}
//             className={({ isActive }) =>
//               isActive ? "text-yellow-500 hover:underline" : "hover:underline"
//             }
//           >
//             FAQ
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               isActive ? "text-yellow-500 hover:underline" : "hover:underline"
//             }
//           >
//             Contact
//           </NavLink>
//           <NavLink
//             to="/phone"
//             className={({ isActive }) =>
//               isActive ? "text-yellow-500 hover:underline" : "hover:underline"
//             }
//           >
//             +91-6390010019
//           </NavLink>
//         </nav>
//         <div className="md:hidden">
//           <HamburgerMenu
//             isActive={isMenuOpen}
//             handleToggle={handleMenuToggle}
//           />
//         </div>
//       </div>
//       <div
//         ref={menuRef}
//         className={`md:hidden bg-black text-white flex flex-col space-y-4 p-4 overflow-hidden transition-all duration-500 ease-in-out ${
//           isMenuOpen ? "max-h-[400px] p-4 opacity-100" : "max-h-0 p-0 opacity-0"
//         }`}
//       >
//         <NavLink
//           to="/"
//           onClick={() => scrollTo("home")}
//           className="hover:underline"
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/overview"
//           className="hover:underline"
//           onClick={() => scrollTo("overview")}
//         >
//           Overview
//         </NavLink>
//         <NavLink
//           to="/myfortune11"
//           onClick={() => scrollTo("myfortune11")}
//           className="hover:underline"
//         >
//           MyFortune11
//         </NavLink>
//         <NavLink
//           to="/faq"
//           className="hover:underline"
//           onClick={() => scrollTo("faq")}
//         >
//           FAQ
//         </NavLink>
//         <NavLink
//           to="/contact"
//           className="hover:underline"
//           onClick={handleMenuToggle}
//         >
//           Contact
//         </NavLink>
//         <NavLink
//           to="/phone"
//           className="hover:underline"
//           onClick={handleMenuToggle}
//         >
//           +91-6390010019
//         </NavLink>
//       </div>
//     </header>
//   );
// };

// export default Header;


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

