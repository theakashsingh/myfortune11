/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const LinkButton = ({ text, to }) => {
  return (
    <Link
      to={to}
      className="relative inline-block text-white hover:text-[#FFE800] text-[1.25rem] group"
    >
      {text}
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FFE800] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
    </Link>
  );
};

export default LinkButton;
