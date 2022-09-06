import React from 'react';

import Metatags from '@components/Metatags';
import Banner from '@components/Banner';
import BlogList from '@components/news/BlogList';
const meta = {}; 

export default function News() {
  return (
    <main>
      <Metatags title="Home Page" description="Get the latest posts on our site" />

      <Banner />

      <BlogList />
      <BlogList />
      <BlogList />
    </main>
  );
}

