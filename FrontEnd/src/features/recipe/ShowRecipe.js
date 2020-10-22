import React, {useState} from 'react';
import { useSelector } from 'react-redux'
import {selectRecipeById} from './recipesSlice'

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';

import RecipeStatsShow from './ingredients/RecipeStatsShow'
import RecipeGrainsShow from './ingredients/RecipeGrainsShow'
import RecipeHopsShow from './ingredients/RecipeHopsShow'
import RecipeYeastsShow from './ingredients/RecipeYeastsShow'
import RecipeAdjunctsShow from './ingredients/RecipeAdjunctsShow'
import {Brewlog} from '../brewlog/Brewlog'

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


export const ShowRecipe = ({match}) => {
  const [BrewlogFlag, SetBrewlogFlag] = useState(false)
  const { recipeId } = match.params
  const classes = useStyles();
  const recipe = useSelector( state => selectRecipeById(state, recipeId))
  
  const startBrewlog = () => {
    SetBrewlogFlag(true)
  }
  
 
  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  
  
  if(!recipe) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }
  return(
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Your Company
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>
          <Typography component="h1" variant="h4" align="center">
              {recipe.name}
          </Typography>
          <div className={classes.buttons}>
            <Button
              type='button'
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={""}
            >
              Edit
            </Button>
            <Button
              type='button'
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={startBrewlog}
            >
              Start BrewLog
            </Button>
          </div>
          <Grid container spacing={3}>
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
          <Grid> 
            <Paper>
              {BrewlogFlag && <Brewlog />}
            
            </Paper>
          </Grid>
        </Container>
      </main>
    </div>
  )
}