import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: '100%',
    height: '256px',
    marginBottom: theme.spacing(2)
  },
}
));

export default function Component(props) {
  const classes = useStyles();
  const theme = useTheme();
  return (
<section >
  <Container maxWidth="lg">
    <Box py={8}>
      <Box mb={9} textAlign="center">
        <Container maxWidth="sm">
          <Typography variant="overline" color="textSecondary" paragraph={true}>LOREM IPSUM</Typography>
          <Typography variant="h3" component="h2" gutterBottom={true}>
            <Typography variant="h3" component="span" color="primary">Donec lacinia </Typography>
            <Typography variant="h3" component="span">turpis non sapien lobortis pretium</Typography>
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" paragraph={true}>Integer feugiat massa sapien, vitae tristique metus suscipit nec.</Typography>
        </Container>
      </Box>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6} md={3}>
          <Link href="#" color="inherit" underline="none">
            <Avatar alt="" variant="rounded" src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd91&w=500&ah=500&q=80" className={classes.avatar} />
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6" component="h6" gutterBottom={true}>Danny Bailey</Typography>
              <ArrowRightAltIcon />
            </Box>
            <Typography variant="body1" color="textSecondary" component="span">CEO & Founder</Typography>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Link href="#" color="inherit" underline="none">
            <Avatar alt="" variant="rounded" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&w=500&ah=500&q=80" className={classes.avatar} />
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6" component="h6" gutterBottom={true}>Alice Bradley</Typography>
              <ArrowRightAltIcon />
            </Box>
            <Typography variant="body1" color="textSecondary" component="span">Head of Operations</Typography>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Link href="#" color="inherit" underline="none">
            <Avatar alt="" variant="rounded" src="https://images.unsplash.com/photo-1560298803-1d998f6b5249?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd91&w=500&ah=500&q=80" className={classes.avatar} />
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6" component="h6" gutterBottom={true}>Ian Brown</Typography>
              <ArrowRightAltIcon />
            </Box>
            <Typography variant="body1" color="textSecondary" component="span">Head of Development</Typography>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Link href="#" color="inherit" underline="none">                
            <Avatar alt="" variant="rounded" src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd91&w=500&ah=500&q=80" className={classes.avatar} />
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6" component="h6" gutterBottom={true}>Daisy Carter</Typography>
              <ArrowRightAltIcon />
            </Box>
            <Typography variant="body1" color="textSecondary" component="span">Sales Director</Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  </Container>
</section>
  );
}