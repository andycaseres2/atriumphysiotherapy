import React from "react";
import SectionInfo from "../../Components/SectionInfo";
import { Navbar } from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import MapContact from "./MapContact";
import SectionTitle from "../../Components/SectionTitle";

const Contact = () => {
  return (
    <div>
      <SectionInfo />
      <Navbar />
      <SectionTitle title="Contact" />
      <MapContact />
      <Footer />
    </div>
  );
};

export default Contact;
