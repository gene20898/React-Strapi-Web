import React from 'react';

import HorizontalNav from '../components/HorizontalNav';
import HomeBanner from '../components/home/HomeBanner';
import HomeBlog from '../components/home/HomeBlog';
import HighlightedBlog from '../components/home/HighlightedBlog';
import HomeService from '../components/home/HomeService';
import HomePortfolio from '../components/home/HomePortfolio';
import HomeCustomer from '../components/home/HomeCustomer';
import Contacts from '../components/Contacts';
import Footers from '../components/Footers';

const meta = {};

export default function Index() {
  return (
    <React.Fragment>
      <HorizontalNav />

      <HomeBanner />

      <HomeBlog />

      <HighlightedBlog content={null} />

      <HomeService />

      <HomePortfolio />

      <HomeCustomer />

      <Contacts />

      <Footers />
    </React.Fragment>
  );
}

