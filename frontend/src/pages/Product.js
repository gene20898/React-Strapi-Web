import React from 'react';

import HorizontalNav from '../components/HorizontalNav';
import Banner from '../components/Banner';
import ProductCategory from '../components/product/ProductCategory';
import Footers from '../components/Footers';

const meta = {};

export default function Product() {
  return (
    <React.Fragment>
      <HorizontalNav />

      <Banner />

      <ProductCategory />

      <Footers />
    </React.Fragment>
  );
}

