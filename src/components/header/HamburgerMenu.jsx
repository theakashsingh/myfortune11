/* eslint-disable react/prop-types */
import "./headerAnimation.css";

const HamburgerMenu = ({ isActive, handleToggle }) => {
  return (
    <div
      onClick={handleToggle}
      className={`btn ${isActive ? 'active' : 'not-active'}  cursor-pointer bg-white min-h-[40px] text-[1.25rem] px-[0.75rem] py-[0.25rem] rounded-md leading-none`}
    >
      <span className="block leading-none w-[2rem] h-[2px] bg-black rounded-[3px] transition-all duration-300 ease-in-out relative mt-[5px]"></span>
      <span className="block leading-none w-[2rem] h-[2px] bg-black rounded-[3px] transition-all duration-300 ease-in-out relative mt-[8px]"></span>
      <span className="block leading-none w-[2rem] h-[2px] bg-black rounded-[3px] transition-all duration-300 ease-in-out relative mt-[8px]"></span>
    </div>
  
  );
};

export default HamburgerMenu;
