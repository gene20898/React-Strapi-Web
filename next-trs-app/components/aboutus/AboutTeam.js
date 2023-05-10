import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import { getStrapiMedia } from "../../lib/media";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: "100%",
    height: "256px",
    marginBottom: theme.spacing(2),
  },
}));

const TeamMember = ({ member }) => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} sm={6} md={3}>
        <Avatar
          alt=""
          variant="rounded"
          src={getStrapiMedia(member.Avatar)}
          className={classes.avatar}
        />
        <Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6" component="h6" gutterBottom={true}>
            {member.title}
          </Typography>
          {/* <ArrowRightAltIcon /> */}
        </Box>
        <Typography
          variant="body1"
          color="textSecondary"
          component="span"
          textAlign="center"
        >
          {member.description}
        </Typography>
        </Box>

      </Grid>
    </>
  );
};

export default function AboutTeam({ team }) {
  return (
    <section>
      <Container maxWidth="lg">
        <Box py={8}>
          <Box mb={9} textAlign="center">
            <Container maxWidth="sm">
              <Typography
                variant="overline"
                color="textSecondary"
                paragraph={true}
              >
                {team.badge}
              </Typography>
              <Typography variant="h3" component="h2" gutterBottom={true}>
                <Typography variant="h3" component="span" color="primary">
                  {team.title}
                </Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                paragraph={true}
              >
                {team.desscription}
              </Typography>
            </Container>
          </Box>
          <Grid container spacing={6} justifyContent="center">
            {team.teamMember.map((member, index) => {
              return <TeamMember key={index} member={member} />;
            })}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
