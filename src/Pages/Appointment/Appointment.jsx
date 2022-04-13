import React from "react";
import SectionInfo from "../../Components/SectionInfo";
import { Navbar } from "../../Components/Navbar";
import SectionTitle from "../../Components/SectionTitle";
import Footer from "../../Components/Footer";
import { Input, Stack } from "@chakra-ui/react";

const Appointment = () => {
  return (
    <div>
      <SectionInfo />
      <Navbar />
      <SectionTitle title="Appointment" />
      <div className="Appointment">
        <div className="left">
          <span>APPOINTMENTS</span>
          <h2>Appointment Request</h2>
          <p>
            If you have any further questions, please feel free to contact our
            staff.
          </p>
          <form>
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="email" placeholder="Email" />
            <select name="service" id="" class="form-control">
              <option>Select Your Services</option>
              <option>Health Insurance &amp; Cash </option>
              <option>Motor Vehicle Accident</option>
              <option>Workers Compensation </option>
              <option>Other Services</option>
            </select>
            <input type="number" name="phone" placeholder="Phone" />
            <input type="text" name="message" placeholder="Message" />
            <input type="date" name="date" placeholder="Date" />
            <button>enviar</button>
          </form>
        </div>
        <div className="right"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Appointment;
