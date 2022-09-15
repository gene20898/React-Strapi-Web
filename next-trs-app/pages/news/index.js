import React from 'react';
import { useState } from 'react';

import Metatags from '@components/Metatags';
import Banner from '@components/Banner';
import BlogList from '@components/news/BlogList';
import { fetchAPI } from '@lib/api';

const PAGE_SIZE = 9;

export default function News({ articles }) {
  return (
    <main>
      <Metatags title="Home Page" description="Get the latest posts on our site" />
      {console.log(articles)}
      <Banner />
      <BlogList articles={articles}/>
    </main>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const articlesRes = await fetchAPI("/articles", { 
    pagination: {
      page: 1,
      pageSize: PAGE_SIZE,
    },
    sort: ['createdAt', 'updatedAt'],
    populate: "thumbnail" 
  });

  return {
    props: {
      articles: articlesRes.data,
    }
  };
}

