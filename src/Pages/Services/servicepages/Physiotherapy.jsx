import React from 'react'
import './services.css'
import Navbar from '../../../Components/Navbar'
import SectionInfo from '../../../Components/SectionInfo'
import SectionTitle from '../../../Components/SectionTitle'
import Footer from '../../../Components/Footer'
import SectionTitle from '../../../Components/SectionTitle'


const Physiotherapy = () => {
  return (
    <div>
    <SectionInfo />
    <Navbar />
    <SectionTitle title='Our Services' />
    <div className='Services'>
    </div>
    <Footer />
    </div>
  )
}


export default Physiotherapy;


