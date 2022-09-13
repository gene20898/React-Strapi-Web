import React from 'react';

import Banner from '@components/Banner';
import Blog from '@collections/blogs/Blog';

const meta = {};

export default function BlogPage() {
  return (
    <React.Fragment>

      <Banner />

      <Blog content={null} />

    </React.Fragment>
  );
}

