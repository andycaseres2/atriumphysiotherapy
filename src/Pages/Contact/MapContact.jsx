import React from "react";
import Iframe from "react-iframe";
import "./mapcontact.css";

const MapContact = () => {
  return (
    <div>
      <div className="container-mapcontact">
        <div className="map">
          map
          <div className="iframe">
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.8289688861764!2d-114.0651180846487!3d50.90838067954116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537176876b320175%3A0x33fad0328ed93e75!2sATRIUM%20PHYSIOTHERAPY%20CLINIC%20(%20Formerly%20Health%20Plus%20Physiotherapy)!5e0!3m2!1ses!2sco!4v1651957226240!5m2!1ses!2sco"
              width="600"
              height="450"
            />
          </div>
        </div>
        <div className="contact">contact</div>
      </div>
    </div>
  );
};

export default MapContact;
