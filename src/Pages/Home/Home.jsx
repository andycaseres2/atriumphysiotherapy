import React from 'react'
import SectionInfo from '../../Components/SectionInfo'
import { Navbar } from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import { SliderHome } from './SliderHome'
import { CardsHome } from './CardsHome'

const Home = () => {
  return (
    <div>
      <SectionInfo />
      <Navbar />
      <SliderHome />
      <CardsHome />
      <Footer />
    </div>
  )
}

export default Home
