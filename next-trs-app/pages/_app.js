import '@styles/globals.css';
import React from 'react';
import PropTypes from 'prop-types';
import App from "next/app";
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '@styles/theme';
import { appWithTranslation } from 'next-i18next';

import { createContext } from "react";
import { fetchAPI } from "@lib/api";
import { getStrapiMedia } from "@lib/media";

import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

// Store Strapi Global object in context
export const GlobalContext = createContext({});


function MyApp(props) {
  const { Component, pageProps, global } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global?.attributes?.favicon) || "/favicon.ico"}
        />
      </Head>
      <GlobalContext.Provider value={global?.attributes}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </GlobalContext.Provider>
    </React.Fragment>
  );
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  try{
    const globalRes = await fetchAPI("/global", {
      locale: ctx.router.locale,
      populate: {
        favicon: "*",
        logo: {
          populate: "*",
        },
        pageLinksText: {
          populate: "*",
        },
        socialMedia: {
          populate: "*",
        }
      },
    });
    // Pass the data to our page via props
    return { ...appProps, global: globalRes.data};
  } catch (err) {
    return { ...appProps, global: null};
  }
}

  MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
  };

  export default appWithTranslation(MyApp);

  
  