import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  emphasize,
  fade,
  darken,
  lighten,
} from "@material-ui/core/styles/colorManipulator";

import clsx from "clsx";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { useTheme } from "@material-ui/core/styles";

import { getStrapiMedia } from "@lib/media";
import { formatDate } from "@lib/utils";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  post: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      marginBottom: 0,
    },
  },
  img: {
    maxWidth: "100%",
    borderRadius: theme.shape.borderRadius,
  },
  bullet: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: theme.palette.text.hint,
  },
  name: {
    lineHeight: 1,
  },
  hideOnSmallScreen: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  }
}));  

export default function Component({ articles }) {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();

  const previewArticles = articles?.articles?.data.slice(0, 3);
  return (
    <section style={{ backgroundColor: theme.palette.background.emphasis }} className={classes.hideOnSmallScreen}>
      <Container maxWidth="lg">
        <Box py={10}>
          <Grid container spacing={3} justifyContent="space-around">
            {previewArticles.map((article) => (
              <Grid
                item
                xs={12}
                md={4}
                className={classes.post}
                key={`preview-article-${article.id}`}
              >
                <Link
                  href={`/news/${article?.attributes?.slug}`}
                  color="inherit"
                  underline="none"
                >
                  <img
                    src={getStrapiMedia(article?.attributes?.thumbnail)}
                    alt=""
                    className={classes.img}
                  />
                  <Box mt={2} mb={2}>
                    <Box mb={1}>
                      <Typography
                        variant="overline"
                        component="span"
                        color="textSecondary"
                      >
                        {formatDate(article?.attributes?.updatedAt)}
                      </Typography>
                    </Box>
                    <Typography variant="h5" component="h2">
                      {article?.attributes?.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="subtitle1"
                    paragraph={true}
                    color="textSecondary"
                  >
                    {article?.attributes?.description}
                  </Typography>
                </Link>
              </Grid>
            ))}
          </Grid>
          <Box mt={6} textAlign="center">
            <Button variant="outlined" color="secondary" onClick={() => router.push('/news')}>
              {articles?.seeMoreButton}
            </Button>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
