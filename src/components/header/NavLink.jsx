/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom"
import { useScroll } from "../../pages/scrollContext"

const NavTag = ({to,scroll,title}) => {
    const {scrollTo} = useScroll()
  return (
    <div>
        <NavLink
        to={to}
        onClick={() => scrollTo(scroll)}
        className="relative py-[1.2rem] px-[1rem] after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-[0.4rem] after:h-[0.4rem] after:bg-current after:rounded-full after:opacity-0 hover:after:opacity-100 transition-opacity duration-300"
      >{title}</NavLink>
    </div>
  )
}

export default NavTag