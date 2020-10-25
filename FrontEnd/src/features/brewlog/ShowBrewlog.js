import React from 'react';
import { useSelector } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import {selectRecipeById} from '../recipe/recipesSlice'
import {selectBrewlogById} from './brewlogSlice'
import RecipeStatsShow from '../recipe/ingredients/RecipeStatsShow'
import RecipeGrainsShow from '../recipe/ingredients/RecipeGrainsShow'
import RecipeHopsShow from '../recipe/ingredients/RecipeHopsShow'
import RecipeYeastsShow from '../recipe/ingredients/RecipeYeastsShow'
import RecipeAdjunctsShow from '../recipe/ingredients/RecipeAdjunctsShow'
import BrewlogShowStats from './BrewlogShowStats'
import NavBar from '../../app/NavBar'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
 
  title: {
    flexGrow: 1,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    overflow: 'auto',
  },
  fixedHeight: {
    height: 240,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));


export const ShowBrewlog = ({match}) => {
  const { recipeId, brewlogId } = match.params
  
  const classes = useStyles();
  const brewlog = useSelector( state => selectBrewlogById(state, brewlogId))
  const recipe = useSelector( state => selectRecipeById(state, recipeId))
  
  if(!brewlog) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }
  return(
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
 
      <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>
          <Typography component="h1" variant="h4" align="center">
              {recipe.name} 
          </Typography>
          <Typography component="h1" variant="h4" align="center">
              Brewed on: {brewlog.created_at.slice(0,10)}
          </Typography>
            {/* //TODO Create edit functionality */}
          <div className={classes.buttons}>
            {/* <Button
              type='button'
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={""}
            >
              Edit
            </Button> */}
          </div>
          <Grid container spacing={3}>
            <Grid item xs={12} >
              <Paper className={classes.paper} >
                <BrewlogShowStats recipe={recipe} brewlog={brewlog} />
              </Paper>
            </Grid> 
            <Grid item xs={12} >
              <Paper className={classes.paper} >
                <RecipeStatsShow recipe={recipe} />
              </Paper>
            </Grid> 
            <Grid item xs>
              <Paper>
                <RecipeGrainsShow recipe={recipe} />
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper >
                <RecipeHopsShow recipe={recipe}/>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper >
                <RecipeYeastsShow recipe={recipe}/>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper >
                <RecipeAdjunctsShow recipe={recipe}/>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  )
}