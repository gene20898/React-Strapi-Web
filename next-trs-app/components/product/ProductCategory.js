import React from 'react';
import Link from "next/link";

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { Link as MUILink } from "@material-ui/core";
import { getStrapiMedia } from "@lib/media";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: '100%',
    height: '256px',
    marginBottom: theme.spacing(2)
  },
}
));

export default function ProductCategory({ productPage, categories }) {
  const classes = useStyles();
  return (
<section>
  <Container maxWidth="lg">
    <Box py={8}>
      <Box mb={9} textAlign="center">
        <Container maxWidth="sm">
          <Typography variant="h3" component="h2" gutterBottom={true}>
            <Typography variant="h3" component="span" color="primary">{productPage.attributes.title}</Typography>
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{productPage.attributes.description}</Typography>
        </Container>
      </Box>
      <Grid container spacing={6}>
        {categories?.map((category) => (
          <CategoryItem
            classes={classes}
            category={category}
            key={category.attributes.slug}
          />
        ))}
      </Grid>
    </Box>
  </Container>
</section>
  );
}
function CategoryItem({ category, classes }){
  return(
    <Grid item xs={12} sm={6} md={3}>
      <Link href={`/product/${category.attributes.slug}`} passHref>
        <MUILink color="inherit" underline="none">
            <Avatar alt="" variant="rounded" src={getStrapiMedia(category.attributes.thumbnail)} className={classes.avatar} />
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6" component="h6" gutterBottom={true}>{category.attributes.title}</Typography>
          </Box>
          <Typography variant="body1" color="textSecondary" component="span" >{category.attributes.description}</Typography>
        </MUILink>
      </Link>
    </Grid>
  )
}