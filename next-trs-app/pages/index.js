import Metatags from '@components/Metatags';
import React, { useState } from 'react';

import HomeBanner from '@components/home/HomeBanner';
import HomeBlog from '@components/home/HomeBlog';
import HighlightedBlog from '@components/home/HighlightedBlog';
import HomeService from '@components/home/HomeService';
import HomePortfolio from '@components/home/HomePortfolio';
import HomeCustomer from '@components/home/HomeCustomer';
import Contacts from '@components/Contacts';

import { fetchAPI } from '@lib/api';

export default function Home({ contact }) {
  return (
    <React.Fragment>
      <Metatags title="Home Page" description="Get the latest posts on our site" />

      <HomeBanner />

      <HomeBlog />

      <HighlightedBlog content={null} />

      <HomeService />

      <HomePortfolio />

      <HomeCustomer />

      <Contacts contact={contact}/>
    </React.Fragment>
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