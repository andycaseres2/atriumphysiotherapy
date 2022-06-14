import React from "react";
import "./servicesitems.css";
import "./services.css";

export const ServicesItems = ({ item, setCurrent }) => {
  return (
    <div onClick={() => setCurrent(item.id)} className="services">
      <div className="servicesitems active">
        <h4 className="servicesitems-title">{item.title}</h4>
      </div>
    </div>
  );
};
