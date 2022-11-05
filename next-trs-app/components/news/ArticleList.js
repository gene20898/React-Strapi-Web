import React from "react";
import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link as MUILink } from "@material-ui/core";
import { getStrapiMedia } from "@lib/media";

const useStyles = makeStyles((theme) => ({
  post: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      marginBottom: 0,
    },
  },
  thumbnail: {
    maxWidth: "100%",
    height: "40%",
    display: "inline-block",
    objectFit: "cover",
    backgroundPosition: "center center",
    borderRadius: theme.shape.borderRadius,
  },
  img: {
    borderRadius: theme.shape.borderRadius,
    maxWidth: "100%",
  },
  bullet: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: theme.palette.text.hint,
  },
  name: {
    lineHeight: 1,
  },
}));

export default function BlogList({ articles }) {
  const classes = useStyles();
  return (
    <section>
      <Container maxWidth="lg">
        <Box py={10}>
          <Grid container spacing={3}>
            {articles?.map((article) => (
              <ArticleItem
                classes={classes}
                article={article}
                key={article.attributes.slug}
              />
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}

function ArticleItem({ article, classes }) {
  return (
    <Grid item xs={12} md={4} className={classes.post}>
      <Link href={`/news/${article.attributes.slug}`} passHref>
      <MUILink color="inherit" underline="none">
          <img
            src={getStrapiMedia(article.attributes.thumbnail)}
            alt=""
            className={classes.img}
          />
      <Box mt={2} mb={2}>
        <Box mb={1}>
          <Typography variant="overline" component="span" color="textSecondary">
            24 Jan, 2020
          </Typography>
        </Box>
            <Typography variant="h5" component="h2">
              {article.attributes.title}
            </Typography>
      </Box>
      <Typography variant="subtitle1" paragraph={true} color="textSecondary">
        {article.attributes.description}
      </Typography>
      </MUILink>
        </Link>

    </Grid>
  );
}
