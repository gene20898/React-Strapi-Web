import React from 'react';

import Banner from '@components/Banner';
import ProductDetail from '@collections/products/ProductDetail';

const meta = {};

export default function ProductInfo() {
  return (
    <React.Fragment>

      <Banner />

      <ProductDetail />

    </React.Fragment>
  );
}

