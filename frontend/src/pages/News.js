import React from 'react';

import HorizontalNav from '../components/HorizontalNav';
import Banner from '../components/Banner';
import BlogList from '../components/news/BlogList';
import Footers from '../components/Footers';
const meta = {}; 

export default function News() {
  return (
    <React.Fragment>
      <HorizontalNav />

      <Banner />

      <BlogList />
      <BlogList />
      <BlogList />

      <Footers/>
    </React.Fragment>
  );
}

