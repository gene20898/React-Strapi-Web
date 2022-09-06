import React from 'react';

import Metatags from '@components/Metatags';
import Banner from '@components/Banner';
import ProductCategory from '@components/product/ProductCategory';

const meta = {};

export default function Product() {
  return (
    <main>
      <Metatags title="Home Page" description="Get the latest posts on our site" />

      <Banner />

      <ProductCategory />
    </main>
  );
}

