import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { useMediaQuery } from "@material-ui/core";

import { getStrapiMedia } from "@lib/media";

const useStyles = makeStyles((theme) => ({
  media: {
    height: "512px",
    transition: "opacity 0.2s ease-out",
  },
  mediaHidden: {
    opacity: 0,
  },
  noPadding: {
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  nav: {
    backgroundColor: "transparent",
    paddingLeft: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      padding: theme.spacing(0)
    },
  },
  desc: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  mediaContainer: {
    paddingRight: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(10),
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
  },
}));

export default function Component(probs) {
  const slideShow = probs.slideShow?.Slideshow;
  const [activeSlide, setActiveSlide] = useState(slideShow[0]);
  const [mediaOpacity, setMediaOpacity] = useState(1);
  const classes = useStyles();

  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("xs"));

  const handleSlide = (item) => {
    if(item === activeSlide) return;
    setMediaOpacity(0);
    setTimeout(() => {
      setActiveSlide(item);
      setMediaOpacity(1);
    }, 200); // Wait for the transition to finish before updating the active slide
  };

  return (
    <section>
      <Box py={isSmallScreen? 6:8}>
        <Grid container spacing={isSmallScreen? 2:4}>
          <Grid item xs={12} md={3} className={classes.noPadding}>
            <Card className={classes.nav}>
              <CardContent>
                {slideShow?.map((item, index) => (
                  <Box key={index}>
                    <Button key={index} onClick={() => handleSlide(item)}>
                      <Typography variant="h5" color="textSecondary">
                        {item.title}
                      </Typography>
                    </Button>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={9}>
            <Box className={classes.mediaContainer}>
              <Card>
                <CardMedia
                  className={`${classes.media} ${
                    mediaOpacity === 0 ? classes.mediaHidden : ""
                  }`}
                  image={getStrapiMedia(activeSlide?.image)}
                />
              </Card>
              <Box mt={4} className={classes.desc}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={9}>
                    <Typography variant="h6" component="h3" gutterBottom={true}>
                      {activeSlide?.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {activeSlide?.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
