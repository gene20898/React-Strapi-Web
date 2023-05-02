import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  emphasize,
  fade,
  darken,
  lighten,
} from "@material-ui/core/styles/colorManipulator";

import clsx from "clsx";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import { getStrapiMedia } from "@lib/media";

const useStyles = makeStyles((theme) => ({
  media: {
    height: "512px",
  },
}));

export default function Component({ portfolio }) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <section style={{ backgroundColor: theme.palette.background.emphasis }}>
      <Box pt={8} pb={10} textAlign="center">
        <Grid container spacing={4}>
          <Grid item xs={2} md={3}>
            <Card>
              <CardMedia
                className={classes.media}
                image={getStrapiMedia(portfolio?.image1)}
              />
            </Card>
          </Grid>
          <Grid item xs={8} md={6}>
            <Card>
              <CardMedia
                className={classes.media}
                image={getStrapiMedia(portfolio?.image2)}
              />
            </Card>
          </Grid>
          <Grid item xs={2} md={3}>
            <Card>
              <CardMedia
                className={classes.media}
                image={getStrapiMedia(portfolio?.image3)}
              />
            </Card>
          </Grid>
        </Grid>
        <Container maxWidth="sm">
          <Box mt={4}>
            <Typography variant="h6" component="h3" gutterBottom={true}>
              {portfolio?.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {portfolio?.description}
            </Typography>
          </Box>
        </Container>
      </Box>
    </section>
  );
}
