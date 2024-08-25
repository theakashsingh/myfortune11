// import { NavLink } from "react-router-dom";
import Header from ".";
import NavTag from "./NavLink";

const MainHeader = () => {
    
  return (
    <>
      <Header>
      <NavTag to={"/home"} scroll={"home"} title={"Home"}/>
      <NavTag to={"/overview"} scroll={"overview"} title={"Overview"}/>
      <NavTag to={"/myfortune11"} scroll={"myfortune11"} title={"My Fortune 11"}/>
      <NavTag to={"/"} scroll={""} title={"FAQ"}/>
      <NavTag to={"/"} scroll={""} title={"Contact"}/>
      <NavTag to={"/"} scroll={""} title={"+91-6390010019"}/>
      </Header>
    </>
  );
};

export default MainHeader;
