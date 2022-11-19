import React from 'react';
import { useState } from 'react';

import Metatags from '@components/Metatags';
import Banner from '@components/Banner';
import ProductCategory from '@components/product/ProductCategory';

import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next'

import { fetchAPI } from '@lib/api';
import { getStrapiMedia } from '@lib/media';

const PAGE_SIZE = 9;

export default function Product(props) {
  const productPage = props.productPage;

  let currentPage = props.meta.pagination.page;
  const pageCount = props.meta.pagination.pageCount;
  const [categories, setCategories] = useState(props.categories);
  const [categoriesEnd, setCategoriesEnd] = useState(currentPage >= pageCount);

  const { t } = useTranslation('common')

  const getMoreCategories = async () => {
    currentPage++;
    const categoriesRes = await fetchAPI("/products", { 
      pagination: {
        page: currentPage,
        pageSize: PAGE_SIZE,
      },
      sort: ['createdAt', 'updatedAt'],
      populate: "thumbnail" 
    });

    const newCategories = categoriesRes.data;
    setCategories(articles.concat(newCategories));

    if (currentPage >= pageCount) {
      setCategoriesEnd(true);
    }
  }
  return (
    <main>
      <Metatags title="Home Page" description="Get the latest posts on our site" />

      <Banner text1={productPage.attributes.Banner.text.Text1} text2={productPage.attributes.Banner.text.Text2}  path="home/product" background={getStrapiMedia(productPage.attributes.Banner.image)} />

      <ProductCategory productPage={productPage} categories={categories}/>
      { !categoriesEnd && (
        <>
          <Box pb={10} display="flex" justifyContent="center" alignItems="center">
            <Button variant="outlined" color="primary" onClick={getMoreCategories}>
              See more
            </Button>
          </Box>
        </>
      )}
    </main>
  );
}

export async function getStaticProps({ locale }) {
  const categoriesRes = await fetchAPI(`/product-categories`, { 
    locale: locale,
    pagination: {
      page: 1,
      pageSize: PAGE_SIZE,
    },
    sort: ['createdAt', 'updatedAt'],
    populate: "thumbnail" 
  });

  const productPageRes = await fetchAPI(`/product-page`, {
    locale: locale,
    populate: {
      Banner: {
        populate: "*",
      }
    }
  });

  if(!categoriesRes || !productPageRes) {
    return {
      notFound: true,
    }
  }
  else{
    return {
      props: {
        categories: categoriesRes.data,
        productPage: productPageRes.data,
        meta: categoriesRes.meta,
        ...await serverSideTranslations(locale, ['common']),
      }
    };
  }
}
