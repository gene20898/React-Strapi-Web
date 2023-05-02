import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import { getStrapiMedia } from "@lib/media";

const useStyles = makeStyles((theme) => ({
  logoWrapper: {
    backgroundColor: theme.palette.background.emphasis,
  },
  logo: {
    height: 48,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));

export default function Component({ customer }) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <section>
      <div
        style={{
          backgroundColor: theme.palette.common.white,
          paddingBottom: theme.spacing(4),
        }}
      >
        <Container maxWidth="lg">
          <Box py={3}>
            <Box mb={2}>
              <Typography
                variant="h3"
                component="h3"
                align="center"
                gutterBottom={true}
                color="primary"
              >
                {customer?.title}
              </Typography>
              <Typography
                variant="overline"
                component="h3"
                align="center"
                color="primary"
              >
                {customer?.description}
              </Typography>
            </Box>
            <Grid container spacing={2} justifyContent="center">
              {customer?.logo.map((logo) => (
                <Grid item xs={6} sm={3}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    className={classes.logoWrapper}
                  >
                    <img
                      src={getStrapiMedia(logo.logo)}
                      alt=""
                      className={classes.logo}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </div>
    </section>
  );
}
