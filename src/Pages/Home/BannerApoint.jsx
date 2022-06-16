import React from "react";
import "./bannerappoint.css";

export const BannerApoint = () => {
  return (
    <div className="banner-container">
      <div className="bannerappoint">
        <div className="text-banner">
          <h2 className="banner-h2">We Provide High Quality Services</h2>
          <p className="banner-p">
            We believe that in order to maintain a pain free body it is
            necessary to understand a person's specific injury and prevent
            situations that might exacerbate or aggravate a condition.
          </p>
        </div>
        <div>
          <button className="btn appointment btn-banner">
            Book Appoinment
          </button>
        </div>
      </div>
    </div>
  );
};
