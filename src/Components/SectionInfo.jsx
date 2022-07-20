import React from "react";
import logo from "../assets/images/atriumLogo.png";
import "./components.css";
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
          <div className="address-navbar">
            <div className="info-icon-navbar">
              <div className="img-info-icon">
                <img
                  className="img-info-icon-na"
                  src="https://cdn-icons-png.flaticon.com/512/484/484167.png"
                  width={18}
                  alt=""
                />
              </div>
              <p>Address: #140 - 340 Midpark Way SE, T2X 1P1</p>
            </div>
          </div>
          <div className="email-navbar">
            <div className="info-icon-navbar">
              <div className="img-info-icon">
                <img
                  className="img-info-icon-na"
                  src="https://cdn-icons-png.flaticon.com/512/1633/1633686.png"
                  width={18}
                  alt=""
                />
              </div>
              <p>Email: admin@atriumphysiotherapy.com</p>
            </div>
          </div>
          <div className="phone-navbar">
            <div className="info-icon-navbar">
              <div className="img-info-icon">
                <img
                  className="img-info-icon-na"
                  src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
                  width={16}
                  alt=""
                />
              </div>
              <p>Phone: 403.255.4461</p>
            </div>
          </div>
          <div className="fax-navbar">
            <div className="info-icon-navbar">
              <div className="img-info-icon">
                <img
                  className="img-info-icon-na"
                  src="https://cdn-icons.flaticon.com/png/512/5735/premium/5735235.png?token=exp=1655584501~hmac=42e0a21d1bc3ef73438fc18e87276935"
                  width={18}
                  alt=""
                />
              </div>
              <p>Fax: 403.259.8776 </p>
            </div>
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
