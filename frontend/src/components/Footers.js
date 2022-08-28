import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  rootBox: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  footerNav: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: theme.spacing(0),
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginTop: theme.spacing(3),
    }
  },
  footerLink: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2),
    },
    color: theme.palette.common.white
  },
  footerCopy: {
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopColor: theme.palette.background.emphasis,
  },
  copy: {
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  },
  icons: {
    [theme.breakpoints.down('md')]: {
      marginRight: 'auto',
    }
  },
  logo: {
    backgroundImage: 'url("https://www.nicepng.com/png/full/221-2219473_imperial-machine-logo-machine-company-logo.png")',
    heigth: '500 px'
  }
}
));

export default function Component(props) {
  const classes = useStyles();
  const theme = useTheme();
  return (
<footer style={{backgroundColor: theme.palette.primary.main, color:theme.palette.common.white}}>
  <Container maxWidth="lg">
    <Box pt={6} pb={2} display="flex" flexWrap="wrap" alignItems="center" className={classes.rootBox}>
      <Link href="/" color="inherit" underline="none">
        <img style={{filter: 'invert(99%) sepia(98%) saturate(3978%) hue-rotate(189deg) brightness(120%) contrast(99%)'}} src="https://www.nicepng.com/png/full/221-2219473_imperial-machine-logo-machine-company-logo.png" alt="" width="150" />
      </Link>
      <Box component="nav" ml="auto" className={classes.footerNav}>
        <Link href="/about" variant="body1"  className={classes.footerLink}>About</Link>
        <Link href="/business" variant="body1"  className={classes.footerLink}>Business</Link>
        <Link href="/product" variant="body1"  className={classes.footerLink}>Product</Link>
        <Link href="/news" variant="body1"  className={classes.footerLink}>News</Link>
        <Link href="/contact" variant="body1"  className={classes.footerLink}>Contact</Link>
      </Box>
    </Box>
    <Box pt={1} pb={6} display="flex" flexWrap="wrap" alignItems="center" className={classes.footerCopy}>
      <Typography color="white" component="p" variant="caption" gutterBottom={false} className={classes.copy}>© 2020 Nereus. All rights reserved.</Typography>
      <Box ml="auto" className={classes.icons}>
        <IconButton color="inherit" aria-label="Facebook">
          <FacebookIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="Line">
          <img src="LINE_logo.svg"/>
        </IconButton>
        <IconButton color="inherit" aria-label="Instagram">
          <InstagramIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="LinkedIn">
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  </Container>
</footer>
  );
}