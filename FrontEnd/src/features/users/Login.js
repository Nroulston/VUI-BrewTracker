import React, { useState } from 'react';
import { useDispatch} from 'react-redux'
import {userLoggedIn} from './usersSlice'
import NavBar from '../../app/NavBar'
import { Link as RouterLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';






import axios from 'axios'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export const Login = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] =useState('')
  const [errors, setErrors] = useState('')

  const dispatch = useDispatch()
  const classes = useStyles();
  const history = useHistory()
  
  const handleSubmit = async() => {
  setErrors([])
    const user = {
      username,
      email,
      password
    }
  
   const response = await axios.post(`http://localhost:3001/login`, {user}, {withCredentials:true})
   if(response.data.errors) {
      setErrors(response.data.errors)
   } else { 
     dispatch(userLoggedIn(response.data.user))
     setPassword('')
     setUsername('')
     setEmail('')
     history.push(`/recipes`)
   }
  }

  return(
    <>
      <CssBaseline />
      <NavBar/>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="UserName"
                  variant="outlined"
                  required
                  fullWidth
                  id="UserName"
                  label="UserName"
                  autoFocus
                  value={username}
                  onChange={ e => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={ e => setEmail(e.target.value)}  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
            onChange={ e => setPassword(e.target.value)}    
                />
              </Grid>
        
            </Grid>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
            <Button
              onClick={handleSubmit}
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link component={RouterLink}to="/signup" variant="body2">
                  Already have an account? Sign up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </>
  )
}