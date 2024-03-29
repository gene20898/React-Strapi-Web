import React from "react";
import Link from "next/link";
import { useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Link as MUILink } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { useTheme } from "@material-ui/core/styles";

import { GlobalContext } from "@pages/_app";
import { getStrapiMedia } from "@lib/media";

const useStyles = makeStyles((theme) => ({
  rootBox: {
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  footerNav: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: theme.spacing(0),
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: theme.spacing(3),
    },
  },
  footerLink: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(2),
    },
    color: theme.palette.common.white,
  },
  footerCopy: {
    borderTopWidth: 1,
    borderTopStyle: "solid",
    borderTopColor: theme.palette.background.emphasis,
  },
  copy: {
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  icons: {
    [theme.breakpoints.down("md")]: {
      marginRight: "auto",
    },
  },
  logo: {
    backgroundImage:
      'url("https://www.nicepng.com/png/full/221-2219473_imperial-machine-logo-machine-company-logo.png")',
    heigth: "500 px",
  },
}));

export default function Component(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { logo, pageLinksText, socialMedia, copyright } = useContext(GlobalContext) || {};
  return (
    <footer
      style={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
      }}
    >
      <Container maxWidth="lg">
        <Box
          pt={6}
          pb={2}
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          className={classes.rootBox}
        >
          <Link href="/" passHref>
            <MUILink color="inherit" underline="none">
              <img
                style={{
                  filter:
                    "invert(99%) sepia(98%) saturate(3978%) hue-rotate(189deg) brightness(120%) contrast(99%)",
                }}
                src={getStrapiMedia(logo?.logo)}
                alt=""
                height="50"
              />
            </MUILink>
          </Link>
          <Box component="nav" ml="auto" className={classes.footerNav}>
            {pageLinksText?.aboutPage && (
              <>
                <Link href="/about" passHref>
                  <MUILink variant="body1" className={classes.footerLink}>
                    {pageLinksText.aboutPage}
                  </MUILink>
                </Link>
              </>
            )}
            {pageLinksText?.businessPage && (
              <>
                <Link href="/business" passHref>
                  <MUILink variant="body1" className={classes.footerLink}>
                    {pageLinksText.businessPage}
                  </MUILink>
                </Link>
              </>
            )}
            {pageLinksText?.productPage && (
              <>
                <Link href="/product" passHref>
                  <MUILink variant="body1" className={classes.footerLink}>
                    {pageLinksText.productPage}
                  </MUILink>
                </Link>
              </>
            )}
            {pageLinksText?.newsPage && (
              <>
                <Link href="/news" passHref>
                  <MUILink variant="body1" className={classes.footerLink}>
                    {pageLinksText.newsPage}
                  </MUILink>
                </Link>
              </>
            )}
            {pageLinksText?.contactPage && (
              <>
                <Link href="/contact" passHref>
                  <MUILink variant="body1" className={classes.footerLink}>
                    {pageLinksText.contactPage}
                  </MUILink>
                </Link>
              </>
            )}
          </Box>
        </Box>
        <Box
          pt={1}
          pb={6}
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          className={classes.footerCopy}
        >
          <Typography
            component="p"
            variant="caption"
            gutterBottom={false}
            className={classes.copy}
          >
            {copyright}
          </Typography>
          <Box ml="auto" className={classes.icons}>
            {socialMedia?.facebookUrl && (
              <>
                <a href={socialMedia.facebookUrl} target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                  <IconButton color="inherit" aria-label="Facebook">
                    <FacebookIcon />
                  </IconButton>
                </a>
              </>
            )}
            {socialMedia?.lineUrl && (
              <>
                <a href={socialMedia.lineUrl} target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                  <IconButton color="inherit" aria-label="Line">
                    <img src="/LINE_logo_white.svg" />
                  </IconButton>
                </a>
              </>
            )}
            {socialMedia?.instagramUrl && (
              <>
                <a href={socialMedia.instagramUrl} target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                  <IconButton color="inherit" aria-label="Instagram">
                    <InstagramIcon />
                  </IconButton>
                </a>
              </>
            )}
            {socialMedia?.linkedInUrl && (
              <>
                <a href={socialMedia.linkedInUrl} target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                  <IconButton color="inherit" aria-label="LinkedIn">
                    <LinkedInIcon />
                  </IconButton>
                </a>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </footer>
  );
}
