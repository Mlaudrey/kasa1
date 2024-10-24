import React from 'react';
import './About.scss';
import Banner from '../../Components/Banner/Banner';
import AboutBanner from '../../Images/bannerAbout.png';
import Collapse from '../../Components/Collapse/Collapse';

const About = () => {
  return (
    <>
      <Banner img={AboutBanner} />
      
      <Collapse
        type=""
        title="Fiabilité"
        description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
      />
    </>
  );
};

export default About;
