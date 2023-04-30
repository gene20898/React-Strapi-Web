import Metatags from "@components/Metatags";
import React, { useState } from "react";

import HomeBanner from "@components/home/HomeBanner";
import HomeBlog from "@components/home/HomeBlog";
import HighlightedBlog from "@components/home/HighlightedBlog";
import HomeService from "@components/home/HomeService";
import HomePortfolio from "@components/home/HomePortfolio";
import HomeCustomer from "@components/home/HomeCustomer";
import Contacts from "@components/Contacts";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { fetchAPI } from "@lib/api";

export default function Home({ homePageRes, contact }) {
  return (
    <React.Fragment>
      {homePageRes?.attributes?.Banner && (
        <HomeBanner content={homePageRes?.attributes.Banner} />
      )}
      {homePageRes?.attributes?.previewArticles && (
        <HomeBlog blog={homePageRes?.attributes.previewArticles} />
      )}
      {homePageRes?.attributes?.highlightedArticle && (
        <HighlightedBlog blog={homePageRes?.attributes.highlightedArticle} />
      )}
      {homePageRes?.attributes?.services && (
        <HomeService service={homePageRes?.attributes.services} />
      )}
      {homePageRes?.attributes?.imageBanner && (
        <HomePortfolio portfolio={homePageRes?.attributes.imageBanner} />
      )}
      {homePageRes?.attributes?.customers && (
        <HomeCustomer customer={homePageRes?.attributes.customers} />
      )}
      {contact && <Contacts contact={contact} />}
    </React.Fragment>
  );
}

export async function getStaticProps({ locale }) {
  const homePageRes = await fetchAPI("/home", {
    locale: locale,
    populate: {
      Banner: { populate: "*" },
      previewArticles: {
        populate: {
          articles: { populate: "*" },
        },
      },
      highlightedArticle: {
        populate: {
          article: { populate: "*" },
        },
      },
      services: { populate: "*" },
      imageBanner: { populate: "*" },
      customers: {
        populate: {
          logo: { populate: "*" },
        },
      },
    },
  });

  const contactRes = await fetchAPI("/contact-form", {
    populate: ["formImage", "mapImage"],
  });

  if (!homePageRes || !contactRes) {
    return {
      props: {
        contact: null,
        homePageRes: null,
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  } else {
    return {
      props: {
        contact: contactRes.data,
        homePageRes: homePageRes.data,
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  }
}
