import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { alpha } from '@material-ui/core/styles/colorManipulator';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';

import {getStrapiMedia} from '../../lib/media';

const useStyles = makeStyles((theme) => ({
  media: {
    height: '256px'
  },
  mediaLarge: {
    minHeight: '256px',
    height: '100%'
  },
  fullHeight: {
    height: '100%',
    width: '100%'
  },
  emptyCardContainer: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block'
    }
  },
  emptyCard: {
    [theme.breakpoints.up('md')]: {
      backgroundColor: alpha(theme.palette.background.emphasis, 0.4),
      height: 64,
    }
  },
  imagesColumn: {
    order: 12,
    [theme.breakpoints.up('md')]: {
      order: 0
    }
  }
}
));

export default function Component({ content }) {
  const classes = useStyles();
  const theme = useTheme();
  return (
<section style={{backgroundColor: theme.palette.background.emphasis}}>
  <Container maxWidth="lg">
    <Box py={12}>
      <Grid container spacing={8}>
        <Grid item xs={12} md={6} className={classes.imagesColumn}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Box display="flex" height="100%">
                <Card className={classes.fullHeight}>
                  <CardMedia className={classes.mediaLarge} image={getStrapiMedia(content?.image1)} />
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container spacing={2}>
                <Grid item xs={12} className={classes.emptyCardContainer}>
                  <Card className={classes.emptyCard}>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardMedia className={classes.media} image={getStrapiMedia(content?.image2)} />
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Card>
                    <CardMedia className={classes.media} image={getStrapiMedia(content?.image3)} />
                  </Card>
                </Grid>
                <Grid item xs={12} className={classes.emptyCardContainer}>
                  <Card className={classes.emptyCard}>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box display="flex" height="100%">
                <Card className={classes.fullHeight}>
                  <CardMedia className={classes.mediaLarge} image={getStrapiMedia(content?.image4)} />
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" height="100%">
            <Box my="auto">
              <Typography variant="h3" component="h3" gutterBottom={true}>
                <Typography color="primary" variant="h3" component="span">{content?.title || ""}</Typography>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{content?.description || ""}</Typography>
              <Box mt={3}>
                <Button variant="contained" color="secondary">{content?.buttonText?.text || "Action"}</Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Container>
</section>
  );
}