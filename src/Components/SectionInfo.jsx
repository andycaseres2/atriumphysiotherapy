import React from "react";
import logo from "../assets/images/atriumLogo.png";
import "./sectioninfo.css";
import { ImLocation2 } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFax } from "react-icons/fa";
import { GoAlert } from "react-icons/go";
import { Link } from "wouter";

const SectionInfo = () => {
  return (
    //Add logo img inside the following div
    <div id="inicio" className="sectioninfo">
      <div className="logo-container">
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
      </div>
      <div className="containerinfo">
        <div className="contact-info">
          <div className="address">
            <div className="icon">
              <ImLocation2 />
            </div>
            <p>Address: #140 - 340 Midpark Way SE, T2X 1P1</p>
          </div>
          <div className="email">
            <div className="icon">
              <GrMail />
            </div>
            <p>Email: admin@atriumphysiotherapy.com</p>
          </div>
          <div className="phone">
            <div className="icon">
              <BsFillTelephoneFill />
            </div>
            <p>Phone: 403.255.4461</p>
          </div>
          <div className="fax">
            <div className="icon">
              <FaFax />
            </div>
            <p>Fax: 403.259.8776 </p>
          </div>
        </div>
      </div>
      <div className="covidbtn">
        <Link href="/Covid19">
          <button className="btn">
            <span>
              <GoAlert />
            </span>
            COVID-19 Alert
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SectionInfo;
