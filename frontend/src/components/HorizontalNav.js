import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import MenuIcon from '@material-ui/icons/Menu';
import LayersIcon from '@material-ui/icons/Layers';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: 70
  },
  brand: {
    lineHeight: 1,
    marginRight: 'auto'
  },
  link: {
    marginRight: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  language: {
    fontWeight: '400',
    marginRight:"20px",
    '& span': {
      fontWeight: '600'
    }
  },
  primaryAction: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  menuButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  iconWrapper: {
    minWidth: 40,
  },
  icon: {
    color: theme.palette.text.hint
  },
  drawerContainer: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(3),
    width: 300,
  }
}
));

export default function Component(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({ open: false });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, open });
  };

  return (
<AppBar position="static" color="primary">
  <Toolbar className={classes.toolbar}>
    <Link href="/" color="primary" underline="none" variant="h5" className={classes.brand}>
      <img src="https://www.nicepng.com/png/full/221-2219473_imperial-machine-logo-machine-company-logo.png"  alt="" width="150" style={{filter: 'invert(99%) sepia(98%) saturate(3978%) hue-rotate(189deg) brightness(120%) contrast(99%)'}}/>
    </Link>
    <Link href="/about" color='inherit' className={classes.link}> 
      About
    </Link>
    <Link href="/business" color='inherit' variant="body2" className={classes.link}>
      Business
    </Link>
    <Link href="/product" color='inherit' variant="body2" className={classes.link}>
      Product
    </Link>
    <Link href="/news" color='inherit' variant="body2" className={classes.link}>
      News
    </Link>
    <Link href="/contact" color='inherit' variant="body2" className={classes.link}>
      Contact
    </Link>
    <Link href="#" color='inherit' className={classes.language}>
      <Typography variant="button" component="span">TH</Typography>/EN</Link> 
    <Button variant="contained" color="secondary" className={classes.primaryAction}>Action</Button>
    <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton} onClick={toggleDrawer(true)}>
      <MenuIcon />
    </IconButton>
  </Toolbar>
  <Drawer anchor="left" open={state.open} onClose={toggleDrawer(false)}>
    <div className={classes.drawerContainer}>
      <Box mb={1} ml={2} pb={2} border={1} borderTop={0} borderLeft={0} borderRight={0} borderColor="background.emphasis">
        <Link href="#" color="primary" underline="none" variant="h5" className={classes.linkBrand}>
          <img src="nereus-assets/img/nereus-light.png" alt="" width="110" />
        </Link>
      </Box>
      <List>
        <ListItem button key="Section One">
          <ListItemIcon className={classes.iconWrapper}>
            <LayersIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Section One" />
        </ListItem>
        <ListItem button key="Section Two">
          <ListItemIcon className={classes.iconWrapper}>
            <FilterHdrIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Section Two" />
        </ListItem>
        <ListItem button key="Section Three">
          <ListItemIcon className={classes.iconWrapper}>
            <DirectionsBusIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Section Three" />
        </ListItem>
        <ListItem button key="Section Four">
          <ListItemIcon className={classes.iconWrapper}>
            <NotificationImportantIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Section Four" />
        </ListItem>
      </List>
      <Box mt={1} ml={2} pt={3} border={1} borderBottom={0} borderLeft={0} borderRight={0} borderColor="background.emphasis">
        <Button variant="contained" color="secondary" fullWidth>Action</Button>
      </Box>
    </div>
  </Drawer>
</AppBar>
  );
}