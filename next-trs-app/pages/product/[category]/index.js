import React from 'react';
import { useState } from 'react';

import Banner from '@components/Banner';
import ProductLists from '@components/product/ProductLists';

import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { fetchAPI } from '@lib/api';
import { getStrapiMedia } from '@lib/media';

const PAGE_SIZE = 9;

export default function ProductList(props) {
  const banner = props.banner;
  const category = props.category?.attributes;

  let currentPage = props.meta.pagination.page;
  const pageCount = props.meta.pagination.pageCount;
  const [products, setProducts] = useState(props.products);
  const [productsEnd, setProductsEnd] = useState(currentPage >= pageCount);

  const getMorePosts = async () => {
    currentPage++;
    const productsRes = await fetchAPI("/products", { 
      pagination: {
        page: currentPage,
        pageSize: PAGE_SIZE,
      },
      sort: ['createdAt', 'updatedAt'],
      populate: "thumbnail" 
    });

    const newProducts = productsRes.data;
    setProducts(products.concat(newProducts));

    if (currentPage >= pageCount) {
      setProductsEnd(true);
    }
  }
  return (
    <main>
      <Banner text1={banner.text.Text1} text2={banner.text.Text2}  path={`home/product/${category?.slug}`} background={getStrapiMedia(banner.image)}/>

      <ProductLists category={category} products={products}/>

      { !productsEnd && (
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

export async function getStaticPaths() {
  const categoriesRes = await fetchAPI("/product-categories", { fields: ["slug"] });
  return {
    paths: categoriesRes.data.map((category) => ({
      params: {
        category: category.attributes.slug,
      },
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params, locale }) {
  // Run API calls in parallel
  const categoryRes = await fetchAPI("/product-categories", { 
    filters:{
      slug: params.category
    },
    populate: ["thumbnail","products","products.thumbnail"]
  });


  const productPageRes = await fetchAPI("/product-page", {
    populate: {
      Banner: {
        populate: "*",
      }
    }
  });  

  if(!productPageRes || !categoryRes) {
    return {
      notFound: true,
      ...await serverSideTranslations(locale, ['common']),
    }
  }
  else{
    return {
      props: {
        category: categoryRes.data[0],
        products: categoryRes.data[0]?.attributes.products.data,
        banner: productPageRes.data.attributes.Banner,
        meta: categoryRes.meta,
        ...await serverSideTranslations(locale, ['common']),
      }
    };
  }
}

