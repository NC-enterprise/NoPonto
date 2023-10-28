import React from 'react';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import Section2 from '../../components/Section2';
import PartnerCarrossel from '../../components/PartnerCarrossel';

function Home() {
  return (
    <div>
      <Hero />
      <Section />
      {/* <Section2 /> */}
      <PartnerCarrossel />
    </div>
  );
}

export default Home;
