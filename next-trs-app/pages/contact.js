import React from 'react';

import Metatags from '@components/Metatags';
import Banner from '@components/Banner';
import ContactDetail from '@components/contact/ContactDetail';
import Contacts from '@components/Contacts';

const meta = {};

export default function Contact() {
  return (
    <main>
      <Metatags title="Home Page" description="Get the latest posts on our site" />

      <Banner />

      <ContactDetail />

      <Contacts />

    </main>
  );
}

