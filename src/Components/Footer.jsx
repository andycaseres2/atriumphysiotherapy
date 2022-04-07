import React from 'react'
import './footer.css'
import logo from '../assets/images/atriumLogo.png'
import { ImLocation2 } from 'react-icons/im'
import { GrMail } from 'react-icons/gr'
import { BsFillTelephoneFill } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer'>
      <div class='footer-container'>
        <div className='left'>
          <img className='footer-logo' src={logo} alt='logo' />
          <div>
            <div className='address'>
              <div className='icon'>
                <ImLocation2 />
              </div>
              <p>Address: #140 - 340 Midpark Way SE, T2X 1P1</p>
            </div>
            <div className='email'>
              <div className='icon'>
                <GrMail />
              </div>
              <p>Email: admin@atriumphysiotherapy.com</p>
            </div>
            <div className='phone'>
              <div className='icon'>
                <BsFillTelephoneFill />
              </div>
              <p>Phone: 403.255.4461</p>
            </div>
          </div>
        </div>
        <div class='mid'>
          <h3 className='mid-title'>Services</h3>
          <ul className='mid-list'>
            <a href=''>Physiotherapy</a>

            <a href=''>Massage Therapy</a>

            <a href=''>Laser Therapy</a>

            <a href=''>Motor Vehicle Accident (MVA)</a>

            <a href=''>Workplace Injures Progam (WCB)</a>

            <a href=''>Custom Crafted Orthotics</a>
          </ul>
        </div>
        <div class='right'>
          <h3 className='right-title'>Operating Hours</h3>
          <li>Monday: 8:00am-7:00pm</li>
          <li>Tuesday: 8:00am-5:00pm</li>
          <li>Wednesday: 8:00am-7:00pm</li>
          <li>Thursday: 8:00am-3:00pm</li>
          <li>Friday: 8:00am-7:00pm</li>
          <li>Saturday: Closed</li>
          <li>Sunday: Closed</li>
        </div>
      </div>
      <div copy-container>
        <h2 className='copy'>Copyright ©2022 All rights reserved</h2>
      </div>
    </div>
  )
}

export default Footer