import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: theme.palette.background.emphasis,
  },
  box: {
    paddingTop: theme.spacing(8),
    paddingBottom:  theme.spacing(8),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(2),
      paddingBottom:  theme.spacing(2),
    }
  },
  header: {
    [theme.breakpoints.up('md')]: {
      marginLeft: 0
    }
  },
  primaryAction: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    }
  },
  img: {
    height: 768
  },
  halfLg: {
    [theme.breakpoints.up('lg')]: {
      maxWidth: theme.breakpoints.values['lg'] / 2
    }
  },
  firstBox: {
    [theme.breakpoints.up('lg')]: {
      marginLeft: 'auto',
      paddingRight: theme.spacing(6)
    }
  },
  secondBox: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(6)
    }
  },
}
));

export default function Component(props) {
  const classes = useStyles();
  const theme = useTheme();
  return (
<section className={classes.section} style={{backgroundColor: theme.palette.primary.emphasis}}>
  <Container maxWidth="lg">
    <Box className={classes.box}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box pt={10} pb={8} display="flex" className={[classes.halfLg, classes.firstBox]}>
            <Container>
              <Box mb={4}>
                <Typography variant="h4" component="h2" gutterBottom={true}>Let's talk about the future</Typography>
                <Typography variant="subtitle1" paragraph={true}>We're here to answer your questions and discuss the decentralized future of the internet.</Typography>
              </Box>
              <form noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField variant="outlined" required fullWidth autoComplete="fname" name="firstName" id="firstName" label="First name" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField variant="outlined" required fullWidth name="lastName" id="lastName" label="Last name" autoComplete="lname" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField variant="outlined" required fullWidth name="email" id="email" label="Email address" autoComplete="email" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField variant="outlined" required fullWidth name="company" id="company" label="Company" autoComplete="company" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField variant="outlined" required multiline rows={5} fullWidth autoComplete="message" name="message" id="message" label="Message" />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel control={<Checkbox name="terms" value="1" color="secondary" />} label="I agree to the terms of use and privacy policy." />
                  </Grid>
                </Grid>
                <Box mt={2}>
                  <Button type="submit" fullWidth variant="contained" color="secondary">
                    Submit
                  </Button>
                </Box>
              </form>
            </Container>
          </Box> 
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia image="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className={classes.img}></CardMedia>
          </Card>
        </Grid>
      </Grid>
    </Box>
  </Container>
  <img style={{height: "650px", width: "100%", objectFit: "cover", margin: '0 !important', padding: '0 !important'}} src="https://i.imgur.com/RzvAzwR.png" alt=""/>

</section>
  );
}