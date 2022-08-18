import React from 'react';

import HorizontalNav from '../components/HorizontalNav';
import Banner from '../components/Banner';
import ContactDetail from '../components/contact/ContactDetail';
import Contacts from '../components/Contacts';
import Footers from '../components/Footers';

const meta = {};

export default function Contact() {
  return (
    <React.Fragment>
      <HorizontalNav />

      <Banner />

      <ContactDetail />

      <Contacts />

      <Footers />
    </React.Fragment>
  );
}

