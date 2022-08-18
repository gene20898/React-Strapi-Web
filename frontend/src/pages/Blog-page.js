import React from 'react';

import HorizontalNav from '../components/HorizontalNav';
import Banner from '../components/Banner';
import Blog from '../collections/blogs/Blog';
import Footers from '../components/Footers';

const meta = {};

export default function BlogPage() {
  return (
    <React.Fragment>
      <HorizontalNav />

      <Banner />

      <Blog content={null} />

      <Footers />
    </React.Fragment>
  );
}

