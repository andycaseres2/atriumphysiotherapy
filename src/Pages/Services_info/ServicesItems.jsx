import React, { useState } from "react";
import "./servicesitems.css";
import "./services.css";

export const ServicesItems = ({ item, setCurrent }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    setCurrent(item.id);
  };

  return (
    <div
      onClick={handleClick}
      className={active ? "servicesitems active" : "servicesitems"}
    >
      <div>
        <h4 className="servicesitems-title">{item.title}</h4>
      </div>
    </div>
  );
};
