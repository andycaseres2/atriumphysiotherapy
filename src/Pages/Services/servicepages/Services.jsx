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
          </Carousel>
        </div>
      </div>
  ); 
};

export default ServicesCarrousel;
