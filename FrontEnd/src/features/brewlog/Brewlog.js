import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Dictaphone from '../dictaphone/Dictaphone'
import { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({

  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export const Brewlog = () => {
  const [brewLog, setBrewLog] = useState({
     og: '',
    strikeVolume: '',
    strikeTemp: '',
    mashPH: ''
  })
  const classes = useStyles()
  const onBrewLogChanged = e => {
    
    const tempBrewLog = {...brewLog}
    tempBrewLog[e.target.name] = e.target.value
    setBrewLog(tempBrewLog)
  }

  return(
     <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
           BrewLog
          </Typography>
          <Dictaphone setBrewLog={setBrewLog} />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Strike Volume"
                name="strikeVolume" 
                id='strikeVolume0'
                onChange={onBrewLogChanged}
                value={brewLog.strikeVolume}
              />
            </Grid>  
            <Grid item xs={12} sm={3}>
              <TextField
                label="Strike Temp"
                name="strikeTemp" 
                id='strikeTemp'
                onChange={onBrewLogChanged}
                value={brewLog.strikeTemp}
              />
            </Grid>  
            <Grid item xs={12} sm={3}>
              <TextField
                label="Mash PH"
                name="mashPH" 
                id='mashPH'
                onChange={onBrewLogChanged}
                value={brewLog.mashPH}
              />
            </Grid>  
            <Grid item xs={12} sm={3}>
              <TextField
                label="Original Gravity"
                name="og" 
                id='OG'
                onChange={onBrewLogChanged}
                value={brewLog.og}
              />
            </Grid>  
          </Grid>  
        </Paper>
      </main>
    </React.Fragment> 
  
  )
}