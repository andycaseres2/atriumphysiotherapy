import React , {useState , useEffect} from "react";
import SectionInfo from "../../Components/SectionInfo";
import { Navbar } from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { ServicesItems } from "./ServicesItems";
import SectionTitle from "../../Components/SectionTitle"
import {servicesdata} from "../Services_info/services_data"
import {Grid , Box} from "@chakra-ui/react"
import "./services.css";
import {Services_Content} from "./Services_Content"

const Services = () => {

  const [current , setCurrent] = useState()

  useEffect(() => {
    setCurrent(servicesdata)
  }, []);


  return (
    <>
      <SectionInfo />
      <Navbar />
      <SectionTitle title="Services"/>
      <section className="services_section">
      <h4 className="subtitle_services">SERVICES</h4>
      <h2 className="title_services">Clinic Services</h2>
      <p className="parrafo_services">Information pertaining to the high quality services offered by our clinic</p>
      </section>
      <div className="grid_services">
        <Grid className="grid_services" templateColumns='repeat(5, 1fr)' gap={6} mt={2}>
      {servicesdata.map(item =>
      <ServicesItems setCurrent={setCurrent} key={item.id} {...item} />
      )}
      </Grid>
      </div>
    <div>
   <Box>
        {servicesdata.map(item => item.id === current && (<Services_Content key={item.id} {...item}/>))}
   </Box>
    </div>
      <Footer />
    </>
  );
};

export default Services;
