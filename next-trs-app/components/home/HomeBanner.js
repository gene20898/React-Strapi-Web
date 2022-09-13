import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: theme.palette.primary.dark,
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(30),
      paddingBottom: theme.spacing(30),
    }
  },
  description: {
    color: theme.palette.background.secondary
  },
  primaryAction: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    }
  },
  secondaryAction: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    }
  }
}
));

export default function Component(props) {
  const classes = useStyles();
  return (
<section className={classes.section} style={{ backgroundImage: 'url("nereus-assets/img/bg/pattern2.png")' }}>
  <Container maxWidth="md">
    <Box textAlign="center" color="common.white">
      <Typography variant="h2" component="h2" gutterBottom={true}>
        <Typography color="secondary" variant="h2" component="span">Lorem ipsum dolor </Typography>
        <Typography variant="h2" component="span">sit amet, consectetur adipiscing elit.</Typography>
      </Typography>
      <Container maxWidth="sm">
        <Typography variant="subtitle1" paragraph={true} >Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus.</Typography>
      </Container>
      <Box mt={3}>
        <Button variant="contained" color="secondary" className={classes.primaryAction}>CONTACT us</Button>
        <Button variant="outlined" color="secondary" className={classes.secondaryAction}>CALL now</Button>
      </Box>
    </Box>
  </Container>
</section>
  );
}