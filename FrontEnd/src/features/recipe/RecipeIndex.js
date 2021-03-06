import React from 'react';
import { useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom';
import NavBar from '../../app/NavBar'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
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
      <NavBar />
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
        <Link component={RouterLink} to={`/recipes/${recipe.id}`}size="small" color='primary'>See More </Link>
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
