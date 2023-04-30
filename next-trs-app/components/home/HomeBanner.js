import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { getStrapiMedia } from "@lib/media";

const useStyles = makeStyles((theme) => {
  return {
    section: {
      backgroundImage: (props) => {
        console.log(props);
        return `url("${
          props.background
            ? props.background
            : "/nereus-assets/img/bg/pattern2.png"
        }")`;
      },
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundColor: theme.palette.primary.dark,
      paddingTop: theme.spacing(12),
      paddingBottom: theme.spacing(12),
      [theme.breakpoints.up("md")]: {
        paddingTop: theme.spacing(30),
        paddingBottom: theme.spacing(30),
      },
    },
    description: {
      color: theme.palette.background.secondary,
    },
    primaryAction: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        marginRight: theme.spacing(0),
        marginBottom: theme.spacing(2),
      },
    },
    secondaryAction: {
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
    },
  };
});

export default function Component({ content }) {
  const background = getStrapiMedia(content.bannerImage);
  const classes = useStyles({ background });
  return (
    <section className={classes.section}>
      <Container maxWidth="md">
        <Box textAlign="center" color="common.white">
          <Typography variant="h2" component="h2" gutterBottom={true}>
            <Typography color="secondary" variant="h2" component="span">
              {content?.Title?.Text1 + " "}
            </Typography>
            <Typography variant="h2" component="span">
              {content?.Title?.Text2}
            </Typography>
          </Typography>
          <Container maxWidth="sm">
            <Typography variant="subtitle1" paragraph={true}>
              {content?.Description}
            </Typography>
          </Container>
          <Box mt={3}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.primaryAction}
            >
              {content?.contactButton?.text}
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.secondaryAction}
            >
              {content?.actionButton?.text}
            </Button>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
