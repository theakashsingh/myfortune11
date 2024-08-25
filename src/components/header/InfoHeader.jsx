// import { NavLink } from "react-router-dom";
import Header from ".";
import NavTag from "./NavLink";

const InfoHeader = () => {
    
  return (
    <>
      <Header>
      <NavTag to={"/home"} scroll={"home"} title={"Home"}/>
      <NavTag to={"/faq"} scroll={"faq"} title={"Contact"}/>
      <NavTag to={"/faq"} scroll={"faq"} title={"+91-6390010019"}/>
      </Header>
    </>
  );
};

export default InfoHeader;
