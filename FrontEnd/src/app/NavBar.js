import React from 'react';
import { useSelector} from 'react-redux'

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

function LoginButton() {
  const classes =useStyles()
  return (
    <Button href="http://localhost:3000/login" color="primary" variant="outlined" className={classes.link}>
       Login
    </Button>
  );
}

function LogoutButton() {
  const classes =useStyles()
  return (
    <Button href="http://localhost:3000/logout" color="primary" variant="outlined" className={classes.link}>
      Logout
    </Button>
  );
}

export default function NavBar() {
  const classes = useStyles();
  
  const isLoggedIn = useSelector( state => state.users.isLoggedIn)
  let button;
  if (isLoggedIn) {
    button = <LogoutButton  />;
  } else {
    button = <LoginButton />;
  }


  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Company name
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="http://localhost:3000/recipes" className={classes.link}>
              Recipes
            </Link>
            <Link variant="button" color="textPrimary" href="http://localhost:3000/recipes/new" className={classes.link}>
              New Recipe
            </Link>
          </nav>
          {button}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}