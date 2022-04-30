import React from "react";
import "./socialicons.css";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="socialicons">
      <ul className="icons-redes">
        <li className="container-icons">
          <a
            className="icon"
            href="https://twitter.com/HealthPlusPhysio"
            target="__blank"
          >
            <BsTwitter />
          </a>
        </li>
        <li className="container-icons">
          <a
            className="icon"
            href="https://www.facebook.com/Atriumphysio/"
            target="__blank"
          >
            <FaFacebookF />
          </a>
        </li>
        <li className="container-icons">
          <a 
          className="icon" 
          href="https://www.instagram.com/atriumphysiotherapy/" 
          target="__blank">
            <BsInstagram />
          </a>
        </li>
        <li className="container-icons">
          <a
            className="icon"
            href="https://www.google.com/maps/place/ATRIUM+PHYSIOTHERAPY+CLINIC+(+Formerly+Health+Plus+Physiotherapy)/@50.9083807,-114.0651181,17z/data=!3m1!4b1!4m5!3m4!1s0x537176876b320175:0x33fad0328ed93e75!8m2!3d50.9083807!4d-114.0629294"
            target="__blank"
          >
            <FaMapMarkedAlt />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
