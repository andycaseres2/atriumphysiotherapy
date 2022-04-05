import SectionInfo from "../../Components/SectionInfo";
import { Navbar } from "../../Components/Navbar";
import SectionTitle from "../../Components/SectionTitle";
import CarouselImg from "./CarouselImg";
import Staff from "./Staff";

const About = () => {
  return (
    <div>
      <SectionInfo />
      <Navbar />
      <SectionTitle />
      <CarouselImg />
      <Staff />
    </div>
  );
};

export default About;
