import React from "react";

import Banner from "@components/Banner";
import ContactDetail from "@components/contact/ContactDetail";
import Contacts from "@components/Contacts";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { fetchAPI } from "@lib/api";
import { getStrapiMedia } from "@lib/media";

export default function Contact({ contact, contactPage }) {
  console.log(contactPage)
  return (
    <main>
      <Banner
        text1={contactPage?.attributes.Banner.text.Text1}
        text2={contactPage?.attributes.Banner.text.Text2}
        path="home/contact"
        background={getStrapiMedia(contactPage?.attributes.Banner.image)}
      />

      {contactPage?.attributes && (
        <ContactDetail contactPage={contactPage?.attributes} />
      )}

      {contact && <Contacts contact={contact} />}
    </main>
  );
}

export async function getStaticProps({ locale }) {
  const contactPageRes = await fetchAPI("/contact", {
    locale: locale,
    populate: {
      Banner: { populate: "*" },
      contactDescription: { populate: "*" },
      address: { populate: "*" },
      email: { populate: "*" },
      phone: { populate: "*" },
    },
  });

  const contactRes = await fetchAPI("/contact-form", {
    locale: locale,
    populate: ["formImage", "mapImage"],
  });

  if (!contactPageRes && !contactRes) {
    return {
      props: {
        contact: null,
        contactPage: null,
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  } else {
    return {
      props: {
        contact: contactRes.data,
        contactPage: contactPageRes.data,
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  }
}
