import React from 'react';
import './services.css';
import { Navbar } from "../../Components/Navbar";
import SectionInfo from '../../Components/SectionInfo';
import SectionTitle from '../../Components/SectionTitle';
import Footer from '../../Components/Footer';



const Physiotherapy = () => {
  return (
    <div>
    <SectionInfo />
    <Navbar />
    <SectionTitle title='Our Services' />
    <section className="Services">
      <h1 className="servicetitle">Physiotherapy</h1>
      <img src='../../assets/images/servicesimg/physiotherapy.jpg'></img>
      <div className='servicecontent'>
      <p>
        Our physiotherapists are highly-educated experts in physical function, movement and mobility. They have advanced knowledge of how the human body moves and what stops it moving and use specialized hands-on treatment to restore, maintain and maximize optimal function and quality of life.
      </p>
      <p>
        Our physiotherapists assists, diagnose and treat physical symptoms and limited movement caused by injury, aging, disability, or medical condition. They help patients understand what’s causing their condition, and work with them to restore, maintain and maximize movement, flexibility and physical independence.
      </p>
      <p>
        Our physiotherapists develop customized treatment plans that help patients take back control. They teach patients how to restore, maintain and/or maximize movement, reduce pain, and manage any chronic symptoms.
      </p>
      <p>
        Our physiotherapists excel in the treatment of many conditions: back pain/injury, whiplash, pregnancy-related muscle/joint issues, urinary incontinence and vertigo to name a few. They also help patients manage symptoms of chronic conditions like arthritis and chronic pain.
      </p>
      <p>
        Our physiotherapists help patients who may have otherwise tried temporary (e.g., prescription drugs) or more invasive methods (e.g., surgery) to manage their condition. They use individualized therapeutic exercise, manual therapy and other treatment techniques.
      </p>
      <p>
        Through physiotherapy, many patients are able to recover unrestricted movement which promotes the kind of physical independence necessary for a normal lifestyle and work. When it comes to assessing and treating people with movement problems, the services of a physiotherapist are often essential.
      </p>
      </div>
    </section>
    <Footer />
    </div>
  )
}


export default Physiotherapy;


