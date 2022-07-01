import React from "react";
import SectionInfo from "../../Components/SectionInfo";
import { Navbar } from "../../Components/Navbar";
import SectionTitle from "../../Components/SectionTitle";
import Footer from "../../Components/Footer";
import "../../../src/style.css";

export default function Blog() {
  return (
    <> 
      <SectionInfo />
      <Navbar />
      <SectionTitle title="Blog" />
      <div className="container-blogs">

      </div>
      <Footer />
    </>
  );
};


