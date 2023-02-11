import React from 'react';
import { useContext } from "react";

import Banner from '@components/Banner';
import ProductDetail from '@collections/products/ProductDetail';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { fetchAPI } from '@lib/api';
import { getStrapiMedia } from '@lib/media';
import { GlobalContext } from "@pages/_app";

export default function ProductInfo(props) {
  const banner = props.banner;
  const product = props.product[0]?.attributes;
  const category = product?.product_category.data.attributes

  const { socialMedia } = useContext(GlobalContext) || {};
  return (
    <React.Fragment>

      <Banner text1={banner.text.Text1} text2={banner.text.Text2}  path={`home/product/${category?.slug}/${product?.slug}`} background={getStrapiMedia(banner.image)}/>

      <ProductDetail product={product} socialMedia={socialMedia}/>

    </React.Fragment>
  );
}

export async function getStaticPaths() {
  const productRes = await fetchAPI("/products", {
    fields: ["slug"],
    populate: {
      product_category: {
        fields: ["slug"],
      },
    }
  });
  return {
    paths: productRes.data.map((product) => ({
      params: {
        category: product.attributes.slug,
        slug: product.attributes.product_category.data.attributes.slug,
      },
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params, locale }) {
  // Run API calls in parallel
  const productRes = await fetchAPI("/products", {
    locale: locale,
    filters: {
      slug: params.slug,
    },
    populate: {
      image: "*",
      product_category: {
        fields: ["slug"],
      },
    }
  });

  const productPageRes = await fetchAPI("/product-page", {
    locale: locale,
    populate: {
      Banner: {
        populate: "*",
      }
    }
  });  

  if(!productPageRes || !productRes) {
    return {
      notFound: true,
      ...await serverSideTranslations(locale, ['common']),
    }
  }
  else{
    return {
      props: {
        product: productRes.data,
        banner: productPageRes.data.attributes.Banner,
        meta: productRes.meta,
        ...await serverSideTranslations(locale, ['common']),
      }
    };
  }
}

