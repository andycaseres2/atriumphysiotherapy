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
          <a className="icon" href="">
            <BsTwitter />
          </a>
        </li>
        <li className="container-icons">
          <a className="icon" href="">
            <FaFacebookF />
          </a>
        </li>
        <li className="container-icons">
          <a className="icon" href="">
            <BsInstagram />
          </a>
        </li>
        <li className="container-icons">
          <a className="icon" href="">
            <FaMapMarkedAlt />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
