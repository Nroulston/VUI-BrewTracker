import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
 
}));

export function RecipeIndex() {
  const classes = useStyles();
  const recipes = useSelector(state => state.recipes.recipes)

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Your Company
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Recipes
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {recipes.map((recipe) => (
              <Grid item key={recipe} xs={12} sm={6} md={4}>
               
                <Card className={classes.root} variant="outlined">
      <CardContent>
      <Typography gutterBottom variant="h3" component="h1">
                      {recipe.name}
                    </Typography>
     
      </CardContent>
      <CardActions>
        <Link href={`http://localhost:3000/recipes/${recipe.id}`}size="small" color='primary'>See More </Link>
      </CardActions>
    </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
