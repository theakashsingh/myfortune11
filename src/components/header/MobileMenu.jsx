/* eslint-disable react/prop-types */
import { useRef } from "react";

const MobileMenu = ({ isMenuOpen, children }) => {
  const menuRef = useRef(null);

  return (
    <div
      ref={menuRef}
      className={`md:hidden bg-black text-white flex flex-col space-y-4 overflow-hidden transition-all duration-500 ease-in-out ${
        isMenuOpen ? "max-h-[400px] p-4 opacity-100" : "max-h-0 p-0 opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default MobileMenu;
