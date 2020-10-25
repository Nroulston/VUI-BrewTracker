import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {userSignedUp} from './usersSlice'
import { Link as RouterLink } from 'react-router-dom';
import NavBar from '../../app/NavBar'
import axios from 'axios'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



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

export const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] =useState('')
  const [errors, setErrors] = useState([])
  
  const history = useHistory()
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleSubmit = async() => {
    setErrors([])
    const user = {
      username,
      email,
      password
    }
    
   const response = await axios.post(`http://localhost:3001/users`, {user}, {withCredentials:true})
   if(response.data.errors) {
      setErrors(response.data.errors)
   } else {
     dispatch(userSignedUp(response.data.user))
     setPassword('')
     setUsername('')
     setEmail('')
     //Todo Redirect to main page
   }
  }



  return(
      <>
        <NavBar />
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
          {errors.length > 0 &&
            <h2>
              {errors[0]}
            </h2>  
            }
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="fname"
                  name="userName"
                  variant="outlined"
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  value={username}
                  onChange={ e => setUsername(e.target.value)}
                  autoFocus
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
            <Button
              onClick={handleSubmit}
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link component={RouterLink} to="/login" variant="body2">
                  Already have an account? Sign in
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