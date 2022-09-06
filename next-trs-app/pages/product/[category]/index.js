import React from 'react';

import Metatags from '@components/Metatags';
import Banner from '@components/Banner';
import ProductLists from '@components/product/ProductLists';

const meta = {};

export default function ProductList() {
  return (
    <main>
      <Metatags title="Home Page" description="Get the latest posts on our site" />

      <Banner />

      <ProductLists />
    </main>
  );
}

