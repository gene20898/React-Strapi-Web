import React from 'react';
import { useState } from 'react';

import Metatags from '@components/Metatags';
import Banner from '@components/Banner';
import ArticleList from '@components/news/ArticleList';

import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';

import { fetchAPI } from '@lib/api';

const PAGE_SIZE = 9;

export default function News(props) {
  let currentPage = props.meta.pagination.page;
  const pageCount = props.meta.pagination.pageCount;
  const [articles, setArticles] = useState(props.articles);
  const [articlesEnd, setArticlesEnd] = useState(false);

  const getMorePosts = async () => {
    currentPage++;
    const articlesRes = await fetchAPI("/articles", { 
      pagination: {
        page: currentPage,
        pageSize: PAGE_SIZE,
      },
      sort: ['createdAt', 'updatedAt'],
      populate: "thumbnail" 
    });

    const newArticles = articlesRes.data;

    setArticles(articles.concat(newArticles));

    if (currentPage >= pageCount) {
      setArticlesEnd(true);
    }
  }
  return (
    <main>
      <Metatags title="Home Page" description="Get the latest posts on our site" />
      <Banner />
      <ArticleList articles={articles}/>
      {!articlesEnd && (
        <>
          <Box pb={10} display="flex" justifyContent="center" alignItems="center">
            <Button variant="outlined" color="primary" onClick={getMorePosts}>
              See more
            </Button>
          </Box>
        </>
      )}
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

  if(!articlesRes) {
    return {
      notFound: true,
    }
  }
  else{
    return {
      props: {
        articles: articlesRes.data,
        meta: articlesRes.meta,
      }
    };
  }
}

