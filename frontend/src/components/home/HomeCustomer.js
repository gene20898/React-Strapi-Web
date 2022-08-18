import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  logoWrapper: {
    backgroundColor: theme.palette.background.emphasis,
  },
  logo: {
    height: 48,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
}
));

export default function Component(props) {
  const classes = useStyles();
  const theme = useTheme();
  return (
<section>
  <div style={{backgroundColor:theme.palette.common.white, paddingBottom: theme.spacing(4)}}>
    <Container maxWidth="lg">
      <Box py={3}>
        <Box mb={2}>
          <Typography variant="h3" component="h3" align="center" gutterBottom={true} color="primary" >Our customers</Typography> 
          <Typography variant="overline" component="h3" align="center" color="primary">LOREM IPSUM DOLOR SIT AMET CONSECTUTAR</Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={3}>
            <Box display="flex" justifyContent="center" className={classes.logoWrapper}>
              <img src="nereus-assets/img/logos/apple.svg" alt="" className={classes.logo} />
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box display="flex" justifyContent="center" className={classes.logoWrapper}>
              <img src="nereus-assets/img/logos/facebook.svg" alt="" className={classes.logo} />
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box display="flex" justifyContent="center" className={classes.logoWrapper}>
              <img src="nereus-assets/img/logos/marvel.svg" alt="" className={classes.logo} />
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box display="flex" justifyContent="center" className={classes.logoWrapper}>
              <img src="nereus-assets/img/logos/react.svg" alt="" className={classes.logo} />
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box display="flex" justifyContent="center" className={classes.logoWrapper}>
              <img src="nereus-assets/img/logos/nike.svg" alt="" className={classes.logo} />
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box display="flex" justifyContent="center" className={classes.logoWrapper}>
              <img src="nereus-assets/img/logos/airbnb.svg" alt="" className={classes.logo} />
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box display="flex" justifyContent="center" className={classes.logoWrapper}>
              <img src="nereus-assets/img/logos/php.svg" alt="" className={classes.logo} />
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box display="flex" justifyContent="center" className={classes.logoWrapper}>
              <img src="nereus-assets/img/logos/tesla.svg" alt="" className={classes.logo} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  </div>
</section>
  );
}