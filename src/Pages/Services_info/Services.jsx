import React, {useState} from "react";
import Card from "./Card";
import Data from "./Data";
import "./services.css";

export default function Services() {
  const [active, setActive] = useState("FirstCard");

  return (
    <div className="Services">
      <nav>
       <button onClick={() => setActive("FirstCard")}>Two</button>
       <button onClick={() => setActive("SecondCard")}>One</button>
       <button onClick={() => setActive("ThirdCard")}>Three</button>
      </nav>
      <div>
        {active === "FirstCard" && <Card data={Data} cardIndex={0} />}
        {active === "SecondCard" && <Card data={Data} cardIndex={1} />}
        {active === "ThirdCard" && <Card data={Data} cardIndex={2} />}
      </div>
    </div>
  );
}


// All that follows was coded by Andy

// import React, { useState, useEffect } from "react";
// import SectionInfo from "../../Components/SectionInfo";
// import { Navbar } from "../../Components/Navbar";
// // import Footer from "../../Components/Footer";
// import { ServicesItems } from "./ServicesItems";
// import SectionTitle from "../../Components/SectionTitle";
// import { servicesdata } from "../Services_info/services_data";
// import { Grid, Box } from "@chakra-ui/react";
// import "./services.css";
// import { Services_Content } from "./Services_Content";

// const Services = () => {
//   const [current, setCurrent] = useState();

//   return (
//     <>
//       <SectionInfo />
//       <Navbar />
//       <SectionTitle title="Services" />
//       <section className="services_section">
//         <h1 className="subtitle_services">Services</h1>
//         <h2 className="title_services">Clinic Services</h2>
//         <p className="parrafo_services">
//           Information pertaining to the high quality services offered by our
//           clinic
//         </p>
//       </section>
//       <div className="grid_services">
//         <Grid
//           className="grid_services"
//           templateColumns="repeat(5, 1fr)"
//           gap={6}
//           mt={2}
//         >
//           {servicesdata.map((item) => (
//             <ServicesItems key={item.id} item={item} setCurrent={setCurrent} />
//           ))}
//         </Grid>
//       </div>
//       <div>
//         <Box>
//           {current &&
//             servicesdata.map(
//               (item) =>
//                 item.id === current && (
//                   <Services_Content key={item.id} {...item} />
//                 )
//             )}
//         </Box>
//       </div>
//       {/* <Footer /> */}
//     </>
//   );
// };

// export default Services;
