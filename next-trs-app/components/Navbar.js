import React from "react";
import { useContext } from "react";
import { useRouter } from 'next/router'
import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link as MUILink } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

import MenuIcon from "@material-ui/icons/Menu";
import LayersIcon from "@material-ui/icons/Layers";
import FilterHdrIcon from "@material-ui/icons/FilterHdr";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";

import { useTranslation } from "next-i18next";

import { GlobalContext } from "@pages/_app";
import { getStrapiMedia } from "@lib/media";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: 70,
  },
  brand: {
    lineHeight: 1,
    marginRight: "auto",
  },
  link: {
    marginRight: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  language: {
    marginRight: "20px",
    "& span": {
      fontWeight: "500",
    },
  },
  primaryAction: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuButton: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  iconWrapper: {
    minWidth: 40,
  },
  icon: {
    color: theme.palette.text.hint,
  },
  drawerContainer: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(3),
    width: 300,
  },
}));

export default function Navbar(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({ open: false });
  const { logo, pageLinksText, actionButtonText } = useContext(GlobalContext) || {};

  const router = useRouter()
  const { t } = useTranslation("common");

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, open });
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar className={classes.toolbar}>
        <Link href="/" passHref>
          <a className={classes.brand}>
            <img
              src={getStrapiMedia(logo?.logo)}
              alt=""
              height="50"
              style={{
                filter:
                  "invert(99%) sepia(98%) saturate(3978%) hue-rotate(189deg) brightness(120%) contrast(99%)",
              }}
            />
          </a>
        </Link>
        {pageLinksText?.aboutPage && (
          <>
            <Link href="/about" passHref>
              <MUILink color="inherit" variant="body2" className={classes.link}>
                {pageLinksText.aboutPage}
              </MUILink>
            </Link>
          </>
        )}
        {pageLinksText?.businessPage && (
          <>
            <Link href="/business" passHref>
              <MUILink color="inherit" variant="body2" className={classes.link}>
                {pageLinksText.businessPage}
              </MUILink>
            </Link>
          </>
        )}
        {pageLinksText?.productPage && (
          <>
            <Link href="/product" passHref>
              <MUILink color="inherit" variant="body2" className={classes.link}>
                {pageLinksText.productPage}
              </MUILink>
            </Link>
          </>
        )}
        {pageLinksText?.newsPage && (
          <>
            <Link href="/news" passHref>
              <MUILink color="inherit" variant="body2" className={classes.link}>
                {pageLinksText.newsPage}
              </MUILink>
            </Link>
          </>
        )}
        {pageLinksText?.contactPage && (
          <>
            <Link href="/contact" passHref>
              <MUILink color="inherit" variant="body2" className={classes.link}>
                {pageLinksText.contactPage}
              </MUILink>
            </Link>
          </>
        )}

        <Link color="inherit"  locale={router.locale === 'en' ? 'th' : 'en'} href='/'>
          <Button color="inherit" className={classes.language}>
            <Typography component="span">{t("current_locale")}</Typography>/
            {t("other_locale")}
          </Button>
        </Link>

        {actionButtonText && (
          <>
            <Button
              variant="contained"
              color="secondary"
              className={classes.primaryAction}
            >
              {actionButtonText}
            </Button>
          </>
        )}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer anchor="left" open={state.open} onClose={toggleDrawer(false)}>
        <div className={classes.drawerContainer}>
          <Box
            mb={1}
            ml={2}
            pb={2}
            border={1}
            borderTop={0}
            borderLeft={0}
            borderRight={0}
            borderColor="background.emphasis"
          >
            <Link href="/" passHref>
              <MUILink
                color="primary"
                underline="none"
                variant="h5"
                className={classes.linkBrand}
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <img src={getStrapiMedia(logo?.logo)} alt="" width="110" />
              </MUILink>
            </Link>
          </Box>
          <List>
            {pageLinksText?.aboutPage && (
              <>
                <Link href="/about" passHref>
                  <ListItem
                    button
                    key={pageLinksText.aboutPage}
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                  >
                    <ListItemIcon className={classes.iconWrapper}>
                      <LayersIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary={pageLinksText.aboutPage} />
                  </ListItem>
                </Link>
              </>
            )}
            {pageLinksText?.businessPage && (
              <>
                <Link href="/business" passHref>
                  <ListItem
                    button
                    key={pageLinksText.businessPage}
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                  >
                    <ListItemIcon className={classes.iconWrapper}>
                      <FilterHdrIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary={pageLinksText.businessPage} />
                  </ListItem>
                </Link>
              </>
            )}
            {pageLinksText?.productPage && (
              <>
                <Link href="/product" passHref>
                  <ListItem
                    button
                    key={pageLinksText.productPage}
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                  >
                    <ListItemIcon className={classes.iconWrapper}>
                      <DirectionsBusIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary={pageLinksText.productPage} />
                  </ListItem>
                </Link>
              </>
            )}
            {pageLinksText?.newsPage && (
              <>
                <Link href="/news" passHref>
                  <ListItem
                    button
                    key={pageLinksText.newsPage}
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                  >
                    <ListItemIcon className={classes.iconWrapper}>
                      <NotificationImportantIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary={pageLinksText.newsPage} />
                  </ListItem>
                </Link>
              </>
            )}
            {pageLinksText?.contactPage && (
              <>
                <Link href="/contact" passHref>
                  <ListItem
                    button
                    key={pageLinksText.contactPage}
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                  >
                    <ListItemIcon className={classes.iconWrapper}>
                      <NotificationImportantIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary={pageLinksText.contactPage} />
                  </ListItem>
                </Link>
              </>
            )}
          </List>
          <Box
            mt={1}
            ml={2}
            pt={3}
            border={1}
            borderBottom={0}
            borderLeft={0}
            borderRight={0}
            borderColor="background.emphasis"
          >
            {actionButtonText && (
              <>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  {actionButtonText}
                </Button>
              </>
            )}
          </Box>
        </div>
      </Drawer>
    </AppBar>
  );
}
