import React from 'react';

import HorizontalNav from '@components/HorizontalNav';
import Banner from '@components/Banner';
import ProductDetail from '@components/products/ProductDetail';
import Footers from '@components/Footers';

const meta = {};

export default function ProductInfo() {
  return (
    <React.Fragment>
      <HorizontalNav />

      <Banner />

      <ProductDetail />

      <Footers />
    </React.Fragment>
  );
}

