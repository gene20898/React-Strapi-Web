import React from 'react';

import Metatags from '@components/Metatags';
import Banner from '@components/Banner';
import ContactDetail from '@components/contact/ContactDetail';
import Contacts from '@components/Contacts';

import { fetchAPI } from '@lib/api';

const meta = {};

export default function Contact({ contact }) {
  return (
    <main>
      <Metatags title="Home Page" description="Get the latest posts on our site" />

      <Banner />

      <ContactDetail />

      { contact && <Contacts contact={contact}/> }

    </main>
  );
}

export async function getStaticProps({ params }) {
  const contactRes = await fetchAPI("/contact-form",{
    populate: ["formImage","mapImage"]
  });
  if (!contactRes) {
    return {
      props: { contact: null },
    };
  } else {
    return {
      props: { contact: contactRes.data },
    };
  }
}
