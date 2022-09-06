import Metatags from '@components/Metatags';
import React, { useState } from 'react';

import HomeBanner from '@components/home/HomeBanner';
import HomeBlog from '@components/home/HomeBlog';
import HighlightedBlog from '@components/home/HighlightedBlog';
import HomeService from '@components/home/HomeService';
import HomePortfolio from '@components/home/HomePortfolio';
import HomeCustomer from '@components/home/HomeCustomer';
import Contacts from '@components/Contacts';

export default function Home(props) {
  return (
    <React.Fragment>
      <Metatags title="Home Page" description="Get the latest posts on our site" />

      <HomeBanner />

      <HomeBlog />

      <HighlightedBlog content={null} />

      <HomeService />

      <HomePortfolio />

      <HomeCustomer />

      <Contacts />
    </React.Fragment>
  );
}
