import React from "react";
import SectionInfo from "../../Components/SectionInfo";
import { Navbar } from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { ServicesItems } from "./ServicesItems";

const Services = () => {
  return (
    <>
      <SectionInfo />
      <Navbar />
      <ServicesItems />
      <Footer />
    </>
  );
};

export default Services;
