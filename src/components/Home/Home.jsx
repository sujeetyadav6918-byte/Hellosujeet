import React from 'react';
import Navbar from '../Navbar/Navbar';
import Herosection from '../Herosection/Herosection';
import Section1 from '../Section1/Section1';
import TherapeuticAreas from '../TherapeuticAreas/TherapeuticAreas';

import ContactSection from '../Contactus/Contactus';
import FooterSection from '../Footersection/Footersection';
import ImportantDrugs from '../Medicineslide/Medicineslide';
import LeadershipSection from '../Leadership/Leadership';
import AboutPage from '../Navbarupper/Aboutus';






const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Herosection />
      <Section1 />
      <AboutPage/>
      <TherapeuticAreas />
      <ImportantDrugs/>
      <LeadershipSection/>
      
      
      <ContactSection/>
      {/* <FooterSection/> */}
     
    </div>
  );
};

export default Home;
