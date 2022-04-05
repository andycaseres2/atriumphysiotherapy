import React from "react";
import { Link } from "wouter";
import "./sectiontitle.css";

const SectionTitle = () => {
  return (
    <section className="About">
      <h1 className="about-title">About</h1>
      <Link href="/">
        <a className="link-home">Home{" >"}</a>
      </Link>
    </section>
  );
};

export default SectionTitle;
