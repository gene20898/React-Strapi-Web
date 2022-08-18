import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import { useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
}
));

export default function Component(props) {
  const classes = useStyles();
  const theme = useTheme();
  return (
<Container>
  
</Container>
  );
}