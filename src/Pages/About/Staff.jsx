import React from "react";
import "./staff.css";
import StaffCards from "./StaffCards";
import carolynh from "../../assets/images/carolynh.jpg";

const staffinfo = [
  {
    id: 1,
    name: "Carolyn Hackenberg",
    info: "Carolyn started her career in the business world, attending university in both Nova Scotia and in California where she",
    image: carolynh,
    load: "OFFICE MANAGER",
  },
  {
    id: 1,
    name: "Carolyn Hackenberg",
    info: "Carolyn started her career in the business world, attending university in both Nova Scotia and in California where she",
    image: carolynh,
    load: "OFFICE MANAGER",
  },
];

const Staff = () => {
  return (
    <div className="staff">
      <div className="staf">
        {staffinfo.map((staf) => {
          <div className="staff-container" key={staf.id}>
            <StaffCards
              id={staf.id}
              name={staf.name}
              info={staf.info}
              image={staf.image}
              load={staf.load}
            />
          </div>;
        })}
      </div>
    </div>
  );
};

export default Staff;
