import React from "react";
import { useContext } from "react";
import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";

import clsx from "clsx";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { useTheme } from "@material-ui/core/styles";

import { getStrapiMedia } from "@lib/media";
import { getStaticProps } from "@pages/news";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: theme.palette.background.emphasis,
  },
  box: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  header: {
    [theme.breakpoints.up("md")]: {
      marginLeft: 0,
    },
  },
  primaryAction: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    },
  },
  img: {
    height: 768,
  },
  halfLg: {
    [theme.breakpoints.up("lg")]: {
      maxWidth: theme.breakpoints.values["lg"] / 2,
    },
  },
  firstBox: {
    [theme.breakpoints.up("lg")]: {
      marginLeft: "auto",
      paddingRight: theme.spacing(6),
    },
  },
  secondBox: {
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(6),
    },
  },
}));

export default function Component({ contact }) {
  const classes = useStyles();
  const theme = useTheme();
  console.log(contact);
  return (
    <section
      className={classes.section}
      style={{ backgroundColor: theme.palette.primary.emphasis }}
    >
      <Container maxWidth="lg">
        <Box className={classes.box}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box
                pt={10}
                pb={8}
                display="flex"
                className={`${classes.halfLg} ${classes.firstBox}`}
              >
                <Container>
                  <Box mb={4}>
                    <Typography variant="h4" component="h2" gutterBottom={true}>
                      {contact?.attributes?.title}
                    </Typography>
                    <Typography variant="subtitle1" paragraph={true}>
                      {contact?.attributes?.description}
                    </Typography>
                  </Box>
                  <form noValidate>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          autoComplete="fname"
                          name="firstName"
                          id="firstName"
                          label="First name"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="lastName"
                          id="lastName"
                          label="Last name"
                          autoComplete="lname"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="email"
                          id="email"
                          label="Email address"
                          autoComplete="email"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="company"
                          id="company"
                          label="Company"
                          autoComplete="company"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          multiline
                          minRows={5}
                          fullWidth
                          autoComplete="message"
                          name="message"
                          id="message"
                          label="Message"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="terms"
                              value="1"
                              color="secondary"
                            />
                          }
                          label={contact?.attributes?.termsAndPolicy}
                        />
                      </Grid>
                    </Grid>
                    <Box mt={2}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                      >
                        {contact?.attributes?.submitButtonText}
                      </Button>
                    </Box>
                  </form>
                </Container>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  image={getStrapiMedia(contact?.attributes?.formImage)}
                  className={classes.img}
                ></CardMedia>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <div>
      <img
        style={{
          height: "650px",
          width: "100%",
          objectFit: "cover",
          margin: "0 !important",
          padding: "0 !important",
          display: "block"
        }}
        src={getStrapiMedia(contact?.attributes?.mapImage)}
        alt=""
      />
      </div>
    </section>
  );
}
