import React from 'react';

import HorizontalNav from '../components/HorizontalNav';
import Banner from '../components/Banner';
import BusinessDetail from '../components/business/BusinessDetail';
import BusinessPortfolio from '../components/business/BusinessPortfolio';
import Footers from '../components/Footers';

const meta = {};

export default function OurBusiness() {
  return (
    <React.Fragment>
      <HorizontalNav />

      <Banner />

      <BusinessDetail />

      <BusinessPortfolio />

      <Footers />
    </React.Fragment>
  );
}

