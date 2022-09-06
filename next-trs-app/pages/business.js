import React from 'react';

import Metatags from '@components/Metatags';
import Banner from '@components/Banner';
import BusinessDetail from '@components/business/BusinessDetail';
import BusinessPortfolio from '@components/business/BusinessPortfolio';


export default function Business() {
  return (
    <main>
      <Metatags title="Home Page" description="Get the latest posts on our site" />

      <Banner />

      <BusinessDetail />

      <BusinessPortfolio />
    </main>
  );
}

