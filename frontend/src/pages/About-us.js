import React from 'react';

import HorizontalNav from '../components/HorizontalNav';
import Banner from '../components/Banner';
import About from '../components/aboutus/About';
import AboutContent from '../components/aboutus/AboutContent';
import AboutTeam from '../components/aboutus/AboutTeam';
import Contacts from '../components/Contacts';
import Footers from '../components/Footers';

const meta = {};

export default function AboutUs() {
  return (
    <React.Fragment>
      <HorizontalNav />

      <Banner />

      <About
        content={{
          badge: 'About us',
          'header-p1': 'This ',
          'header-p2': 'is what we do.',
          'col1-header': 'Lorem ipsum',
        }}
      />

      <AboutContent />

      <AboutTeam />

      <Contacts />

      <Footers />
    </React.Fragment>
  );
}

