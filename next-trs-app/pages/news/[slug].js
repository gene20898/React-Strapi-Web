import React from "react";
import ReactMarkdown from "react-markdown";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

import { fetchAPI } from "@lib/api";
import { getStrapiMedia } from "@lib/media";
import ErrorPage from "next/error"

const useStyles = makeStyles((theme) => ({
  name: {
    lineHeight: 1,
  },
  content: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
    },
  },
  paragraph: {
    marginBottom: theme.spacing(3),
  },
  image: {
    maxWidth: "100%",
    borderRadius: theme.shape.borderRadius,
  },
  markDown: {
    fontSize: "1rem",
    lineHeight: "1.75",
    letterSpacing: "0.00938em",
    color: "#333333",
  },
}));

function Section({ data, classes }) {
  switch (data.__component) {
    case "shared.rich-text":
      return (
        <Box mb={3} className={classes.markDown}>
          <ReactMarkdown children={data.body} />
        </Box>
      );
    case "shared.media":
      return (
        <Box my={4}>
          <img
            src={getStrapiMedia(data.file)}
            alt={data.file.data.attributes.alternativeText}
            style={{ maxWidth: "100%" }}
          />
        </Box>
      );
    default:
      return <div>This is null</div>;
  }
}

export default function Article({ article }) {
  const classes = useStyles();
  if(!article) return <ErrorPage statusCode={404} />
  return (
    <section>
      <Container maxWidth="md">
        <Box py={10}>
          <Box textAlign="center" mb={5}>
            <Container maxWidth="sm">
              <Chip color="primary" label="Jan 16, 2020" />
              <Box my={4}>
                <Typography variant="h3" component="h2">
                  <Typography variant="h3" component="span" color="primary">
                    {article.attributes.title}
                  </Typography>
                </Typography>
              </Box>
            </Container>
          </Box>
          <Box className={classes.content}>
            {article.attributes.contents.map((section) => (
              <Section
                data={section}
                key={`${section.__component.shared}${section.id}`}
                classes={classes}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </section>
  );
}

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] });
  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: {
      contents: {
        populate: "*",
      },
    },
  });

  if (!articlesRes.data[0]) {
    return {
      props: {article: null },
    };
  } else {
    return {
      props: { article: articlesRes.data[0] },
    };
  }
}
