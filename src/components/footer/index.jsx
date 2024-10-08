import Connect from "../connect";
import LinkButton from "../linkButton";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { connectViaWhatsApp } from "../../connect";
import { Link } from "react-router-dom";
import { useScroll } from "../../pages/scrollContext";

const Footer = () => {
  const { scrollTo } = useScroll();
  const phoneNumber = "+917499111213";
  const message = "I want More Information About My Fortune 11";
  const handleConnect = () => {
    connectViaWhatsApp(phoneNumber, message);
  };
  return (
    <div className="w-full py-12 bg-howToPlay bg-[#0000004a] bg-blend-color bg-cover">
      <div className="w-full mx-auto flex justify-center">
        <div className="max-w-full">
          <ul className="px-4 pt-12 text-center flex justify-center flex-col md:flex-row list-none">
            <li className="outline-none px-4 leading-10">
              <LinkButton to={"/home"} text={"Home"} />
            </li>
            <li className="outline-none px-4 leading-10">
              <LinkButton to={"/privacy-policy"} text={"Privacy Policy"} />
            </li>
            <li className="outline-none px-4 leading-10">
              <LinkButton
                to={"/terms&conditions"}
                text={"Terms & Conditions"}
              />
            </li>
            <li className="outline-none px-4 leading-10">
              <LinkButton to={"/how-to-play"} text={"How To Play"} />
            </li>
            <li className="outline-none px-4 leading-10">
              <LinkButton to={"/legality"} text={"Legality"} />
            </li>
            <li className="outline-none px-4 leading-10">
              <LinkButton to={"/fair-play"} text={"Fair Play"} />
            </li>
            <li className="outline-none px-4 leading-10">
              <LinkButton
                to={"/fantasy-point-system"}
                text={"Fantasy Point System"}
              />
            </li>
          </ul>
          <h3 className="text-[#FFE800] font-medium mb-6 mt-12 text-center text-[1.25rem]">
            Connect with us
          </h3>
          <div className="flex justify-center gap-2 mt-4">
            <Connect
              icon={<FaFacebook />}
              connectlink={
                "https://www.facebook.com/myfortune11l?mibextid=ZbWKwL"
              }
            />
            <Connect
              icon={<FaYoutube />}
              connectlink={"https://www.youtube.com/@myfortune11official"}
            />
            <Connect
              icon={
                <FaLinkedin
                  connectlink={"https://www.linkedin.com/company/myfortune11"}
                />
              }
            />
            <Connect
              icon={<FaInstagram />}
              connectlink={
                "https://www.instagram.com/myfortune11?igsh=MWxsdWFlYnBsZmdkZw%3D%3D"
              }
            />
          </div>
          <p className="leading-4 text-[0.875rem] text-white text-center mt-8">
            {" "}
            © Copyright 2024 by{" "}
            <Link
              to={"/"}
              onClick={() => scrollTo(scroll(""))}
              className="text-[#FFE800] hover:text-[#4611A7]"
            >
              MY FORTUNE 11
            </Link>
            , All rights reserved.
          </p>
          <span
            onClick={handleConnect}
            className="hover:cursor-pointer fixed bottom-3 right-1 text-[15px] text-white font-bold flex items-center justify-center bg-[#FFA500] px-[13px] py-[3px] rounded-full"
          >
            <img
              src={
                "https://www.myfortune11.com/assets/images/icons/WhatsApp.svg.webp"
              }
              alt="connect to start"
              className="w-7"
            />
            Get Started Now
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
