import React from 'react';

import Banner from '@components/Banner';
import AboutSection from '@components/aboutus/About';
import AboutContent from '@components/aboutus/AboutContent';
import AboutTeam from '@components/aboutus/AboutTeam';
import Contacts from '@components/Contacts';

const meta = {};

export default function About() {
  return (
    <main>
      <Banner text1="text1" text2="text2" path="home/about" background="/nereus-assets/img/bg/pattern2.png"/>

      <AboutSection
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
    </main>
  );
}

