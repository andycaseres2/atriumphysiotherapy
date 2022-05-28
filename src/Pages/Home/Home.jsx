import React from "react";
import SectionInfo from "../../Components/SectionInfo";
import { Navbar } from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { SliderHome } from "./SliderHome";
import { CardsHome } from "./CardsHome";
import { AboutHome } from "./AboutHome";

const Home = () => {
  return (
    <div>
      <SectionInfo />
      <Navbar />
      <SliderHome />
      <CardsHome />
      <AboutHome />
      <Footer />
    </div>
  );
};

export default Home;
