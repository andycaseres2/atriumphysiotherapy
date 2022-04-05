import React from "react";
import AliceCarousel from "react-alice-carousel";
import clinic1 from "../../assets/images/clinic1.jpg";
import clinic2 from "../../assets/images/clinic2.jpg";
import clinic3 from "../../assets/images/clinic4.jpg";
import clinic4 from "../../assets/images/clinic5.png";
import clinic5 from "../../assets/images/clinic6.png";
import clinic6 from "../../assets/images/clinic7.png";
import "carouselimg.css";

const CarruselImg = () => {
  return (
    <div className="carousel">
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <img src={clinic1} className="sliderimg" />
        <img src={clinic2} className="sliderimg" />
        <img src={clinic3} className="sliderimg" />
        <img src={clinic4} className="sliderimg" />
        <img src={clinic5} className="sliderimg" />
        <img src={clinic6} className="sliderimg" />
      </AliceCarousel>
    </div>
  );
};

export default CarruselImg;
