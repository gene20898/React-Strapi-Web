import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import clsx from "clsx";
import {
  blue,
  yellow,
  green,
  purple,
  pink,
  deepOrange,
} from "@material-ui/core/colors";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

import ApartmentIcon from "@material-ui/icons/Apartment";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundImage: 'url("/nereus-assets/img/bg/pattern1.png")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  iconWrapper: {
    backgroundColor: theme.palette.primary.light,
  },
  icon1: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  icon2: {
    backgroundColor: yellow[100],
    color: yellow[800],
  },
  icon3: {
    backgroundColor: green[100],
    color: green[600],
  },
  icon4: {
    backgroundColor: purple[100],
    color: purple[600],
  },
  icon5: {
    backgroundColor: pink[100],
    color: pink[600],
  },
  icon6: {
    backgroundColor: deepOrange[100],
    color: deepOrange[600],
  },
}));

export default function Component({details}) {
  const classes = useStyles();
  const icons = [
    clsx(classes.iconWrapper, classes.icon1),
    clsx(classes.iconWrapper, classes.icon2),
    clsx(classes.iconWrapper, classes.icon3),
    clsx(classes.iconWrapper, classes.icon4),
    clsx(classes.iconWrapper, classes.icon5),
    clsx(classes.iconWrapper, classes.icon6),
  ];
  const points = [
    details?.point1,
    details?.point2,
    details?.point3,
    details?.point4,
    details?.point5,
    details?.point6
  ]

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box py={6}>
          <Box textAlign="center" mb={9}>
            <Container maxWidth="sm">
              <Typography variant="overline" color="textSecondary">
                {details?.badge}
              </Typography>
              <Typography variant="h3" component="h2" gutterBottom={true}>
                <Typography variant="h3" component="span" color="primary">
                  {details?.title}
                </Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                paragraph={true}
              >
                {details?.description}
              </Typography>
            </Container>
          </Box>
          <Grid container spacing={6}>
            {points?.map((point, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box display="flex">
                  <Box pr={5}>
                    <Avatar
                      variant="rounded"
                      className={icons[index]}
                    >
                      <ApartmentIcon />
                    </Avatar>
                  </Box>
                  <div>
                    <Typography variant="h6" component="h3" gutterBottom={true}>
                      {point?.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      color="textSecondary"
                    >
                      {point?.description}
                    </Typography>
                  </div>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
