import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  box: {
    paddingTop: theme.spacing(8),
    paddingBottom:  theme.spacing(8),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(8),
      paddingBottom:  theme.spacing(8),
    }
  },
  img: {
    height: 500
  },
  imgPreview: {
    height: 100
  },
  halfLg: {
    [theme.breakpoints.up('lg')]: {
      maxWidth: theme.breakpoints.values['lg'] / 2
    }
  },
  icons: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacing: {
    [theme.breakpoints.up('md')]: {
      marginTop: '32px !important',
      marginBottom: '32px !important',
    }
  }
}
));

export default function Component(props) {
  const classes = useStyles();
  const theme = useTheme();
  return (
<section className={classes.section}>
  <Container>
    <Box className={classes.box}>
      <Grid container spacing={10}>
        <Grid pt={0} item xs={12} md={6}>
          <CardMedia image="https://shuffle.dev/placeholders/pictures/office.jpg" className={classes.img}></CardMedia>
          <Box className={classes.spacing}></Box>
          <Hidden smDown>
            <Grid container spacing={2}>
              <Grid item  md={3}>
                <CardMedia image="https://shuffle.dev/placeholders/pictures/office.jpg" className={classes.imgPreview}></CardMedia>
              </Grid>
              <Grid item  md={3}>
                <CardMedia image="https://shuffle.dev/placeholders/pictures/office.jpg" className={classes.imgPreview}></CardMedia>
              </Grid>
              <Grid item  md={3}>
                <CardMedia image="https://shuffle.dev/placeholders/pictures/office.jpg" className={classes.imgPreview}></CardMedia>
              </Grid>
              <Grid item  md={3}>
                <CardMedia image="https://shuffle.dev/placeholders/pictures/office.jpg" className={classes.imgPreview}></CardMedia>
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
        <Grid item xs={12} md={6} >
          <Box pb={8} display="flex" className={classes.halfLg}>
            <Container>
              <Box mb={0}>
                <Typography variant="overline" color="textSecondary" paragraph={true}>Category</Typography>
                <Typography variant="h2" component="h2" gutterBottom={true}>Product name</Typography>
                <Box className="Styled-my-4"></Box>
                <Typography variant="subtitle1" paragraph={true} color="textSecondary">We're here to answer your questions and discuss the decentralized future of the internet. We're here to answer your questions and discuss the decentralized future of the internet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi suscipit nisi obcaecati quia pariatur enim. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi suscipit nisi obcaecati quia pariatur enim.</Typography>  
                <hr />
                <Typography variant="h5" color="textPrimary" paragraph={true}> $ xxx</Typography>
              </Box>
            </Container>
          </Box> 
          <Box display="flex" className={classes.halfLg} alignSelf="flex-end">
            <Container>
              <Typography variant="h5" component="h5" style={{color: theme.palette.primary.light}} >Share now</Typography>
              <Box ml="-13px" className={classes.icons}>
                <IconButton color="secondary" aria-label="Facebook">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="secondary" aria-label="Twitter">
                  <TwitterIcon />
                </IconButton>
                <IconButton color="secondary" aria-label="Instagram">
                  <InstagramIcon />
                </IconButton>
                <IconButton color="secondary" aria-label="LinkedIn">
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Container>
          </Box>

        </Grid>
      </Grid>
    </Box>
  </Container>
</section>
  );
}