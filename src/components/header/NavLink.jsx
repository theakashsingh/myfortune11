/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import { useScroll } from "../../pages/scrollContext";
import { connectViaTelephone, connectViaWhatsApp } from "../../connect";

const NavTag = ({ to, scroll, title }) => {
  const { scrollTo } = useScroll();
  const phoneNumber = "+917499111213";
  const message = "I want More Information About My Fortune 11";

  const handleNavLink = () => {
    if (title === "Contact") {
      connectViaWhatsApp(phoneNumber, message);
    } else if (title === "+91-7499111213") {
      connectViaTelephone(title);
    } else {
      scrollTo(scroll);
    }
  };
  return (
    <>
      <div onClick={handleNavLink} className="cursor-pointer">
        <NavLink
          to={to}
          className="relative py-[1.2rem] pr-[1rem] after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-[0.4rem] after:h-[0.4rem] after:bg-[#032071] after:rounded-full after:opacity-0 hover:after:opacity-100 transition-opacity duration-300"
        >
          {title}
        </NavLink>
      </div>
      <span className="md:hidden w-full h-[1px] bg-white"></span>
    </>
  );
};

export default NavTag;
