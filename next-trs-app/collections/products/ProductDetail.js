import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { getStrapiMedia } from '@lib/media';

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

import SwipeableViews from 'react-swipeable-views';

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
    height: 100,
    cursor: 'pointer'
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

export default function ProductDetail({product, socialMedia}) {
  const classes = useStyles();
  const theme = useTheme();
  const images = product?.image?.data;
  return (
<section className={classes.section}>
  <Container>
    <Box className={classes.box}>
      <Grid container spacing={10}>
        <Grid pt={0} item xs={12} md={6}>
        {imageCarousel(images,classes)}
        </Grid>
        <Grid item xs={12} md={6} >
          <Box pb={8} display="flex" className={classes.halfLg}>
            <Container>
              <Box mb={0}>
                <Typography variant="overline" color="textSecondary" paragraph={true}>{product?.product_category.data?.attributes.slug}</Typography>
                <Typography variant="h2" component="h2" gutterBottom={true}>{product?.title}</Typography>
                <Box className="Styled-my-4"></Box>
                <Typography variant="subtitle1" paragraph={true} color="textSecondary">{product?.description}</Typography>  
                <hr />
                <Typography variant="h5" color="textPrimary" paragraph={true}>฿ {product?.price}</Typography>
              </Box>
            </Container>
          </Box> 
          {/* <Box display="flex" className={classes.halfLg} alignSelf="flex-end">
            <Container>
              <Typography variant="h5" component="h5" style={{color: theme.palette.primary.light}} >Share now</Typography>
              <Box ml="-13px" className={classes.icons}>
                {socialMedia?.facebookUrl && (
                <>
                  <a href={socialMedia.facebookUrl} target="_blank" rel="noopener noreferrer">
                    <IconButton color="secondary" aria-label="Facebook">
                      <FacebookIcon />
                    </IconButton>
                  </a>
                </>
                )}
              {socialMedia?.lineUrl && (
                <>
                  <a href={socialMedia.lineUrl} target="_blank" rel="noopener noreferrer">
                    <IconButton color="secondary" aria-label="Line">
                      <img src="/LINE_logo_color.svg" />
                    </IconButton>
                  </a>
                </>
              )}
              {socialMedia?.instagramUrl && (
                <>
                  <a href={socialMedia.instagramUrl} target="_blank" rel="noopener noreferrer">
                    <IconButton color="secondary" aria-label="Instagram">
                      <InstagramIcon />
                    </IconButton>
                  </a>
                </>
              )}
              {socialMedia?.linkedInUrl && (
                <>
                  <a href={socialMedia.linkedInUrl.toString()} target="_blank" rel="noopener noreferrer">
                    <IconButton color="secondary" aria-label="LinkedIn">
                      <LinkedInIcon />
                    </IconButton>
                  </a>
                </>
              )}
              </Box>
            </Container>
          </Box> */}

        </Grid>
      </Grid>
    </Box>
  </Container>
</section>
  );
}

function imageCarousel(images, classes){
  const [activeStep, setActiveStep] = React.useState(0);
  return (
  <>
    <SwipeableViews index={activeStep} enableMouseEvents>
      {images?.map((image) => (
          <CardMedia image={getStrapiMedia({data: image})} className={classes.img}></CardMedia>
        ))
      }
    </SwipeableViews>
    <Box className={classes.spacing}></Box>
    <Hidden smDown>
      <Grid container spacing={2}>
      {images?.map((image,index) => (
          <Grid item md={3} key={image.id}>
            <CardMedia image={getStrapiMedia({data: image})} className={classes.imgPreview} onClick={()=>{setActiveStep(index)}}></CardMedia>
          </Grid>
        ))
      }
      </Grid>
    </Hidden>
  </>
  )
}