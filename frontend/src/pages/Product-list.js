import React from 'react';

import HorizontalNav from '../components/HorizontalNav';
import Banner from '../components/Banner';
import ProductLists from '../components/product/ProductLists';
import Footers from '../components/Footers';

const meta = {};

export default function ProductList() {
  return (
    <React.Fragment>
      <HorizontalNav />

      <Banner />

      <ProductLists />

      <Footers />
    </React.Fragment>
  );
}

