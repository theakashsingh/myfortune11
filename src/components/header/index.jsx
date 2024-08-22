import { NavLink } from "react-router-dom"
import { useScroll } from "../../pages/scrollContext"

const Header = () => {
  const {scrollTo} = useScroll()
  return (
    <div className="w-full h-20 border-2 border-red"><nav>
    <NavLink to="/" onClick={() => scrollTo('home')}>Home</NavLink>
    <NavLink to="/overview" onClick={() => scrollTo('overview')}>Overview</NavLink>
    <NavLink to="/myfortune11" onClick={() => scrollTo('myfortune11')}>My Fortune 11</NavLink>
  </nav></div>
  )
}

export default Header




