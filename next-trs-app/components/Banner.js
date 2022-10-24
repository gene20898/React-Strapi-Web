import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  section: {
    backgroundImage: props => `url("${props.background ? props.background : '/nereus-assets/img/bg/pattern2.png'}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: theme.palette.primary.dark,
  },
  breadcrumb: {
    color: theme.palette.common.white,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    },
    justifyContent: 'center'
  },
}
));

export default function Component(props) {
  const {text1, text2, path} = props;
  const paths = path.split('/');

  const classes = useStyles(props);
  const theme = useTheme();
  return (
<section className={classes.section}>
  <Container maxWidth="sm">
    <Box py={10} textAlign="center" color="common.white">
      <Typography variant="h3" component="h3" gutterBottom={true}>
        <Typography color="secondary" variant="h3" component="span">{text1}</Typography>
        <Typography variant="h3" component="span">{text2}</Typography>
      </Typography>
      <Container maxWidth="sm">
        <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumb}>
        { 
          paths.map((item, index) => {
            if(index < paths.length - 1) {
              return (
                <Link underline="hover" color="inherit" href={'/' + paths.slice(0, index + 1).join('/')}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              )
            }
            else {
              return(
              <Typography>{item.charAt(0).toUpperCase() + item.slice(1)}</Typography> 
              )
            }
          })
        }
        </Breadcrumbs>
      </Container>
    </Box>
  </Container>
</section>
  );
}