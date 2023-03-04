import React from "react";

import Banner from "@components/Banner";
import AboutSection from "@components/aboutus/About";
import AboutContent from "@components/aboutus/AboutContent";
import AboutTeam from "@components/aboutus/AboutTeam";
import Contacts from "@components/Contacts";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { fetchAPI } from "@lib/api";
import { getStrapiMedia } from '@lib/media';


const meta = {};

export default function About({ about, contact }) {
  return (
    <main>  
      <Banner
        text1={about?.attributes.Banner.text.Text1}
        text2={about?.attributes.Banner.text.Text2}
        path="home/news"
        background={getStrapiMedia(about?.attributes.Banner.image)}
      />

      { about?.attributes?.about &&  <AboutSection about={about.attributes.about} /> }

      { about?.attributes?.content && <AboutContent content={about?.attributes?.content}/> }

      { about?.attributes?.team && <AboutTeam team={about?.attributes?.team}/> }

      { contact && <Contacts contact={contact}/> }
    </main>
  );
}

export async function getStaticProps({ locale }) {
  const aboutRes = await fetchAPI("/about", {
    locale: locale,
    populate: {
      Banner: { populate: "*" },
      about: { populate: "*" },
      content: { populate: "*" },
      team: {
        populate: {
          teamMember: { populate: "*" },
        },
      },
    },
  });

  const contactRes = await fetchAPI("/contact-form",{
    locale: locale,
    populate: ["formImage","mapImage"]
  });

  if (!aboutRes || !contactRes) {
    return {
      props: {
        about: null,
        contact: null,
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  } else {
    return {
      props: {
        about: aboutRes.data,
        contact: contactRes.data,
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  }
}
