import React, { useState } from 'react'
import SectionInfo from '../../Components/SectionInfo'
import { Navbar } from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import { ServicesItems } from './ServicesItems'
import SectionTitle from '../../Components/SectionTitle'
import { servicesdata } from '../Services_info/services_data'
import { Grid, Box } from '@chakra-ui/react'
import './services.css'
import { Services_Content } from './Services_Content'

const Services = () => {
  const [current, setCurrent] = useState()

  return (
    <>
      <SectionInfo />
      <Navbar />
      <SectionTitle title="Services" />
      <section className="services_section">
        <h4 className="subtitle_services">SERVICES</h4>
        <h2 className="title_services">Clinic Services</h2>
        <p className="parrafo_services">
          Information pertaining to the high quality services offered by our
          clinic
        </p>
        <div className="GridContainer">
          <div className='serviceItems'>Service 1</div>
          <div className='serviceItems'>Service 2</div>
          <div className='serviceItems'>Service 3</div>
          <div className='serviceItems'>Service 4</div>
          <div className='serviceItems'>Service 5</div>
          <div className='serviceItems'>Service 6</div>
          <div className='serviceItems'>Service 7</div>
          <div className='serviceItems'>Service 8</div>
          <div className='serviceItems'>Service 9</div>
          <div className='serviceItems'>Service 10</div>
          <div className='serviceItems'>Service 11</div>
          <div className='serviceItems'>Service 12</div>
          <div className='serviceItems'>Service 13</div>
          <div className='serviceItems'>Service 14</div>
          <div className='serviceItems'>Service 15</div>
          <div className='serviceItems'>Service 16</div>
          <div className='serviceItems'>Service 17</div>
        </div>
      </section>
      {/* <div>
        <Grid
          className="grid_services"
          templateColumns="repeat(5, 1fr)"
          gap={6}
          mt={2}
        >
          {servicesdata.map((item) => (
            <ServicesItems key={item.id} item={item} setCurrent={setCurrent} />
          ))}
        </Grid>
      </div> */}
      
      {/* <div>
        <Box>
          {current &&
            servicesdata.map(
              (item) =>
                item.id === current && (
                  <Services_Content key={item.id} {...item} />
                )
            )}
        </Box>
      </div> */}

      <Footer />
    </>
  )
}

export default Services
