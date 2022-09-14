import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import { useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  post: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      marginBottom: 0
    }
  },
  img: {
    maxWidth: '100%',
    borderRadius: theme.shape.borderRadius
  },
  bullet: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: theme.palette.text.hint
  },
  name: {
    lineHeight: 1,
  },
}
));

export default function Component(props) {
  const classes = useStyles();
  const theme = useTheme();
  return (
<section style={{backgroundColor: theme.palette.background.emphasis}}>
  <Container maxWidth="lg">
    <Box py={10}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} className={classes.post}>
          <img src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=960&q=80" alt="" className={classes.img} />
          <Box mt={2} mb={2}>
            <Box mb={1}>
              <Typography variant="overline" component="span" color="primary">Category</Typography>
              <span className={classes.bullet}>•</span>
              <Typography variant="overline" component="span" color="textSecondary">24 Jan, 2020</Typography>
            </Box>
            <Link href="#" color="inherit">
              <Typography variant="h5" component="h2">Lorem ipsum dolor sit amet consectetur.</Typography>
            </Link>
          </Box>
          <Typography variant="subtitle1" paragraph={true} color="textSecondary">Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus. Aenean et ornare erat.</Typography>
          <Box mt={3} display="flex" alignItems="center">
            <Avatar alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" />
            <Box ml={2} textAlign="left">
              <Typography variant="subtitle1" component="h2" className={classes.name}>Linda Williams</Typography>
              <Typography variant="subtitle1" component="h3" color="textSecondary">Founder and CEO</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} className={classes.post}>
          <img src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&q=80" alt="" className={classes.img} />
          <Box mt={2} mb={2}>
            <Box mb={1}>
              <Typography variant="overline" component="span" color="primary">Category</Typography>
              <span className={classes.bullet}>•</span>
              <Typography variant="overline" component="span" color="textSecondary">24 Jan, 2020</Typography>
            </Box>
            <Link href="#" color="inherit">
              <Typography variant="h5" component="h2">Lorem ipsum dolor sit amet consectetur.</Typography>
            </Link>
          </Box>
          <Typography variant="subtitle1" paragraph={true} color="textSecondary">Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus. Aenean et ornare erat.</Typography>
          <Box mt={3} display="flex" alignItems="center">
            <Avatar alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" />
            <Box ml={2} textAlign="left">
              <Typography variant="subtitle1" component="h2" className={classes.name}>Linda Williams</Typography>
              <Typography variant="subtitle1" component="h3" color="textSecondary">Founder and CEO</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} className={classes.post}>
          <img src="https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&q=80" alt="" className={classes.img} />
          <Box mt={2} mb={2}>
            <Box mb={1}>
              <Typography variant="overline" component="span" color="primary">Category</Typography>
              <span className={classes.bullet}>•</span>
              <Typography variant="overline" component="span" color="textSecondary">24 Jan, 2020</Typography>
            </Box>
            <Link href="#" color="inherit">
              <Typography variant="h5" component="h2">Lorem ipsum dolor sit amet consectetur.</Typography>
            </Link>                
          </Box>
          <Typography variant="subtitle1" paragraph={true} color="textSecondary">Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus. Aenean et ornare erat.</Typography>
          <Box mt={3} display="flex" alignItems="center">
            <Avatar alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" />
            <Box ml={2} textAlign="left">
              <Typography variant="subtitle1" component="h2" className={classes.name}>Linda Williams</Typography>
              <Typography variant="subtitle1" component="h3" color="textSecondary">Founder and CEO</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box mt={6} textAlign="center">
        <Button variant="outlined" color="secondary">See all articles</Button>
      </Box>
    </Box>
  </Container>
</section>
  );
}