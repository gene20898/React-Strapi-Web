import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import RoomIcon from '@material-ui/icons/Room';
import EmailIcon from '@material-ui/icons/Email';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme) => ({
  iconWrapper: {
    backgroundColor: theme.palette.background.emphasis,
  },
  midColumn: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(4)
    }
  }
}
));

export default function Component({ contactPage }) {
  console.log(contactPage)
  const classes = useStyles();
  return (
<section>
  <Container maxWidth="lg">
    <Box py={10}>
      <Box pb={8} textAlign="center">
        <Container maxWidth="sm">
          <Typography variant="overline" color="textSecondary" paragraph={true}>{contactPage.badge}</Typography>
          <Typography variant="h3" component="h2" gutterBottom={true}>
            <Typography variant="h3" component="span" color="primary">{contactPage.title} </Typography>
            </Typography>
          <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{contactPage.description}</Typography>
        </Container>
      </Box>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Box px={3}>
            <Typography variant="h6" component="h2" gutterBottom={true}>{contactPage?.contactDescription?.title}</Typography>
            <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{contactPage?.contactDescription?.description}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box px={3} className={classes.midColumn}>
            <Box display="flex" mb={3}>
              <div>
                <Avatar className={classes.iconWrapper}>
                  <RoomIcon color="primary" fontSize="small" />
                </Avatar>
              </div>
              <Box ml={2}>
                <Typography variant="h6" gutterBottom={true}>{contactPage?.address?.title}</Typography>
                <Typography variant="body2" color="textSecondary">{contactPage?.address?.description}</Typography>
              </Box>
            </Box>
            <Box display="flex">
              <div>
                <Avatar className={classes.iconWrapper}>
                  <EmailIcon color="primary" fontSize="small" />
                </Avatar>
              </div>
              <Box ml={2}>
                <Typography variant="h6" gutterBottom={true}>{contactPage?.email?.title}</Typography>
                <Typography variant="body2" color="textSecondary">{contactPage?.email?.description}</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Box px={3}>
          <Box display="flex" mb={3}>
            <div>
              <Avatar className={classes.iconWrapper}>
                <WebAssetIcon color="primary" fontSize="small" />
              </Avatar>
            </div>
            <Box ml={2}>
              <Typography variant="h6" gutterBottom={true}>{contactPage?.socialMediaTitle}</Typography>
              <IconButton href="#" color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton href="#" color="inherit">
                <TwitterIcon />
              </IconButton>
              <IconButton href="#" color="inherit">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Box>
          <Box display="flex">
            <div>
              <Avatar className={classes.iconWrapper}>
                <PhoneIcon color="primary" fontSize="small" />
              </Avatar>
            </div>
            <Box ml={2}>
              <Typography variant="h6" gutterBottom={true}>{contactPage?.phone?.title}</Typography>
              <Typography variant="body2" color="textSecondary">{contactPage?.phone?.description}</Typography>
            </Box>
          </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Container>
</section>
  );
}