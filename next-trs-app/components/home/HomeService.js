import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import ApartmentIcon from '@material-ui/icons/Apartment';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import { useTheme } from '@material-ui/core/styles';
import { getStrapiMedia } from '@lib/media';

const useStyles = makeStyles((theme) => ({
  detail: {
    color: theme.palette.primary.contrastText,
  },
  bg: {
    backgroundImage: props => `url("${props?.bg ? props?.bg : "https://www.rubicon.com/wp-content/uploads/2021/12/trash-collection-compressed-1.jpg"}")`,
    backgroundColor: theme.palette.background.secondary,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color:theme.palette.common.white,
  }
}
));

export default function Component({service}) {
  const background = getStrapiMedia(service?.background)
  const classes = useStyles({bg: background});
  const theme = useTheme();
  return (
<section className={classes.bg}>
  <div style={{backgroundColor: theme.palette.background.secondary}}>
    <Container maxWidth="lg">
      <Box py={6}>
        <Box textAlign="center" mb={8}>
          <Container maxWidth="sm">
            <Typography variant="overline" style={{color:theme.palette.primary.contrastText}}>{service?.badge}</Typography>
            <Typography variant="h3" component="h2" gutterBottom={true}>{service?.Title}</Typography>
            <Typography variant="subtitle1" style={{color:theme.palette.primary.contrastText}} paragraph={true}>{service?.description}</Typography> 
          </Container>
        </Box>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} md={3}>
            <Box textAlign="center">
              <Box mb={2}>
                <ApartmentIcon fontSize="large" />
              </Box>
              <Typography variant="subtitle1" className={classes.detail} component="p">{service?.keyPoints?.keyPoint1}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box textAlign="center">
              <Box mb={2}>
                <DevicesOtherIcon fontSize="large" />
              </Box>
              <Typography variant="subtitle1" className={classes.detail} component="p">{service?.keyPoints?.keyPoint2}</Typography> 
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box textAlign="center">
              <Box mb={2}>
                <FolderSharedIcon fontSize="large" />
              </Box>
              <Typography variant="subtitle1" className={classes.detail} component="p">{service?.keyPoints?.keyPoint3}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box textAlign="center">
              <Box mb={2}>
                <BusinessCenterIcon fontSize="large" />
              </Box>
              <Typography variant="subtitle1" className={classes.detail} component="p">{service?.keyPoints?.keyPoint4}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  </div>
</section>
  );
}