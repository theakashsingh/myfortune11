// import { NavLink } from "react-router-dom";
import Header from ".";
import NavTag from "./NavLink";

const InfoHeader = () => {
    
  return (
    <>
      <Header>
      <NavTag to={"/home"} scroll={"home"} title={"Home"}/>
      <NavTag to={"/"} scroll={""} title={"Contact"}/>
      <NavTag to={"/"} scroll={""} title={"+91-6390010019"}/>
      </Header>
    </>
  );
};

export default InfoHeader;
