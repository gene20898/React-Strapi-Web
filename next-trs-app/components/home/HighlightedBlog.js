import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { useTheme } from '@material-ui/core/styles';

import { getStrapiMedia } from '@lib/media';

const useStyles = makeStyles((theme) => ({
  paragraph: {
    marginBottom: theme.spacing(3),
  },
  halfLg: {
    [theme.breakpoints.up('lg')]: {
      maxWidth: theme.breakpoints.values['lg'] / 2
    }
  },
  firstBox: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.up('lg')]: {
      marginLeft: 'auto',
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(0),
      paddingRight: theme.spacing(6)
    }
  },
  fullHeightImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    objectFit: 'cover',
    height: '100%',
    width: '100%'
  }
}));

export default function Content({article}) {
  const classes = useStyles();
  const theme = useTheme();

  const markdown = article?.article?.data?.attributes?.contents[0]?.body
  const match = markdown.match(/^(?!#).+$/gm)


  const content = {
    'header-p1': article?.article?.data?.attributes?.title,
    '02_paragraph1': match?.[0]? match[0] : "",
    '02_paragraph2': match?.[1]? match[1] : "" ,
    '02_paragraph3': match?.[2]? match[2] : "",
    '02_image': getStrapiMedia(article?.article?.data?.attributes?.thumbnail),
    'primary-action': article?.seeMoreButton || 'Learn more',
  };

  return (
    <section>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <Box className={`${classes.halfLg} ${classes.firstBox}`}>
            <Container>
              <Box mb={4}>
                <Typography variant="h3" component="h2" paragraph={true}>
                  <Typography variant="h3" component="span" color="primary">{content['header-p1']} </Typography>
                  <Typography variant="h3" component="span">{content['header-p2']}</Typography>
                </Typography>
              </Box>

              <Typography variant="subtitle1" color="textSecondary" paragraph={true} className={classes.paragraph}>{content['02_paragraph1']}</Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph={true} className={classes.paragraph}>{content['02_paragraph2']}</Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph={true} className={classes.paragraph}>{content['02_paragraph3']}</Typography>

              <div>
                <Button variant="text" color="secondary" endIcon={<ArrowRightAltIcon />} className={classes.primaryAction}>{content['primary-action']}</Button>
              </div>
            </Container>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box position="relative" height={768}>
            <img className={classes.fullHeightImage} src={content['02_image']} alt="" />
          </Box>
        </Grid>
      </Grid>
    </section>
  );
}