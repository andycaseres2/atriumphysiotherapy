import React from "react";
import reactDom from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import service1 from '../../assets/images/stretching.jpg'
import service2 from '../../assets/images/stretching.jpg'
import service3 from '../../assets/images/stretching.jpg'
import service4 from '../../assets/images/stretching.jpg'
import service5 from '../../assets/images/stretching.jpg'
import service6 from '../../assets/images/stretching.jpg'
import service7 from '../../assets/images/stretching.jpg'
import service8 from '../../assets/images/stretching.jpg'
import service9 from '../../assets/images/stretching.jpg'
import service10 from '../../assets/images/stretching.jpg'
import service11 from '../../assets/images/stretching.jpg'
import service12 from '../../assets/images/stretching.jpg'
import service13 from '../../assets/images/stretching.jpg'
import service14 from '../../assets/images/stretching.jpg'
import service15 from '../../assets/images/stretching.jpg'
import service16 from '../../assets/images/stretching.jpg'
import service17 from '../../assets/images/stretching.jpg'

const ServicesCarrousel = () => {
  return (
      <div className="services-carousel">
        <h1 className="title-carousel">Our Services</h1>
        <div className="carousel-contaiener">
          <Carousel className="car">
            <div>
              <img src={service1} alt="" />
              <p className="legend">Physiotherapy</p>
            </div>
            <div>
              <img src={service2} alt="" />
              <p className="legend">Physiotherapy</p>
            </div>
            <div>
              <img src={service3} alt="" />
              <p className="legend">Physiotherapy</p>
            </div>
            <div>
              <img src={service4} alt="" />
              <p className="legend">Physiotherapy</p>
            </div>
            <div>
              <img src={service5} alt="" />
              <p className="legend">Physiotherapy</p>
            </div>
            <div>
              <img src={service6} alt="" />
              <p className="legend">Physiotherapy</p>
            </div>
            <div>
              <img src={service7} alt="" />
              <p className="legend">Physiotherapy</p>
            </div>
            <div>
              <img src={service8} alt="" />
              <p className="legend">Physiotherapy</p>
            </div>
            <div>
              <img src={service9} alt="" />
              <p className="legend">Physiotherapy</p>
            </div>
            <div>
              <img src={service10} alt="" />
              <p className="legend">Physiotherapy</p>
            </div>
            <div>
              <img src={service11} alt="" />
              <p className="legend">Physiotherapy</p>
            </div>
            <div>
              <img src={service12} alt="" />
              <p className="legend">Physiotherapy</p>
            </div>
            <div>
              <img src={service13} alt="" />
              <p className="legend">Physiotherapy</p>
            </div>
            <div>
              <img src={service14} alt="" />
              <p className="legend">Physiotherapy</p>
            </div>
            <div>
              <img src={service15} alt="" />
              <p className="legend">Physiotherapy</p>
            </div>
            <div>
              <img src={service16} alt="" />
              <p className="legend">Physiotherapy</p>
            </div>
            <div>
              <img src={service17} alt="" />
              <p className="legend">Physiotherapy</p>
            </div>
          <Carousel />
        </div>
        <div className="firstappointment">
          <h1 className="servicetitle">What Can I Expect During My First Appointment?</h1>
          <p className="servicecontent">
            On arrival, you may be asked to fill out paperwork or complete medical history forms. Your physiotherapist will then conduct a detailed assessment of your problem or condition. This takes about 30-45 minutes and normally involves:
          </p>
          <ul className="servicelist">           
          <li>Where you are having the problem</li>
          <li>How the problem started</li>
          <li>How the problem is affecting your ability to do daily activities</li>
          <li>Your past medical history</li>
          <li>Any medications you are taking</li>
          <li>Your physiotherapist may also need to ask additional questions depending on your problem or condition.</li>
          </ul>
          <p>A detailed physical examination includes: </p>
          <ul>
            <li>Checking your posture</li>
            <li>Examining range of motion</li>
            <li>Testing muscle strength, ligaments, tendons, and nerves</li>
          </ul>
          <p>
            Your physiotherapist may also check your balance, walking or how much you can lift or carry. Once the assessment is complete, your physiotherapist will explain what is causing the problem and discuss a physiotherapy treatment program.
          </p>
          <p>
            You will then be asked to give consent to the treatment program. Before giving consent, make sure you fully understand the treatment plan. Ask if you need clarification. Your physiotherapist will explain the treatment plan in more detail. 
          </p>
        </div>
      </div>
  ); 
};

export default ServicesCarrousel;
