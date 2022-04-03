import React from 'react'
import logo from "../assets/images/atriumLogo.png"
import "./sectioninfo.css"
import { GoLocation } from 'react-icons/go';
import { HiOutlineMail } from 'react-icons/hi';

const SectionInfo = () => {
  return (
    //Add logo img inside the following div
    <div className='sectioninfo'>
        <div className="logo-container">
            <img className='logo' src={logo} alt="logo" />
        </div>
        <div className="contact-info">
            <div className="address">
            <div className="icon">
            <GoLocation/>
            </div>
            <p>Address: #140 - 340 Midpark Way SE, T2X 1P1</p>
            </div>
            <div className="email">
                <div className="icon">
                <HiOutlineMail/>
                </div>
                <p>Email: admin@atriumphysiotherapy.com</p>
            </div>
            <div className="phone">
            <div className="icon">
                <BsFillTelephoneFill/>
                </div>
                <p>Phone: 403.255.4461</p>
            </div>
            <div className="fax">
            <div className="icon">
                <FaFax/>
                </div>
                <p>Fax: 403.259.8776 </p>
            </div>
        </div>
        <div className="covidbtn"></div>
    </div>
  )
}

export default SectionInfo