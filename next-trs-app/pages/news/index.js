import React from 'react';
import { useState } from 'react';

import Metatags from '@components/Metatags';
import Banner from '@components/Banner';
import ArticleList from '@components/news/ArticleList';

import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { fetchAPI } from '@lib/api';
import { getStrapiMedia } from '@lib/media';

const PAGE_SIZE = 9;

export default function News(props) {
  const articlePage = props.articlePage;

  let currentPage = props.meta.pagination.page;
  const pageCount = props.meta.pagination.pageCount;
  const [articles, setArticles] = useState(props.articles);
  const [articlesEnd, setArticlesEnd] = useState(currentPage >= pageCount);

  const { t } = useTranslation("common");

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
      <Banner
        text1={articlePage?.attributes.Banner.text.Text1}
        text2={articlePage?.attributes.Banner.text.Text2}
        path="home/news"
        background={getStrapiMedia(articlePage?.attributes.Banner.image)}
      />

      
      <ArticleList articles={articles}/>
      { !articlesEnd && (
        <>
          <Box pb={10} display="flex" justifyContent="center" alignItems="center">
            <Button variant="outlined" color="primary" onClick={getMorePosts}>
              {t("see_more")}
            </Button>
          </Box>
        </>
      )}
    </main>
  );
}

export async function getStaticProps({ locale }) {
  // Run API calls in parallel

  const articlePageRes = await fetchAPI(`/article-page`, {
    locale: locale,
    populate: {
      Banner: {
        populate: "*",
      },
    },
  });

  const articlesRes = await fetchAPI("/articles", { 
    locale: locale,
    pagination: {
      page: 1,
      pageSize: PAGE_SIZE,
    },
    sort: ['createdAt', 'updatedAt'],
    populate: "thumbnail" 
  });

  if(!articlesRes || !articlePageRes) {
    return {
      notFound: true,
      ...await serverSideTranslations(locale, ['common']),
    }
  }
  else{
    return {
      props: {
        articles: articlesRes.data,
        articlePage: articlePageRes.data,
        meta: articlesRes.meta,
        ...(await serverSideTranslations(locale, ['common'])),
      }
    };
  }
}

