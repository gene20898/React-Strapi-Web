import React from "react";

import Metatags from "@components/Metatags";
import Banner from "@components/Banner";
import BusinessDetail from "@components/business/BusinessDetail";
import BusinessPortfolio from "@components/business/BusinessPortfolio";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { fetchAPI } from "@lib/api";
import { getStrapiMedia } from "@lib/media";

export default function Business({ business }) {
  return (
    <main>
      <Banner
        text1={business?.attributes.Banner.text.Text1}
        text2={business?.attributes.Banner.text.Text2}
        path="home/business"
        background={getStrapiMedia(business?.attributes.Banner.image)}
      />

      { business?.attributes?.Detail && <BusinessDetail details={business?.attributes?.Detail} /> }

      { business?.attributes?.SlideShow && <BusinessPortfolio slideShow={business?.attributes?.SlideShow}/> }
    </main>
  );
}

export async function getStaticProps({ locale }) {
  const businessRes = await fetchAPI("/business-page", {
    locale: locale,
    populate: {
      Banner: { populate: "*" },
      Detail: { populate: "*" },
      SlideShow: {
        populate: {
          Slideshow: { populate: "*" },
        },
      },
    },
  });

  if (!businessRes) {
    return {
      props: {
        about: null,
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  } else {
    return {
      props: {
        business: businessRes.data,
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  }
}
