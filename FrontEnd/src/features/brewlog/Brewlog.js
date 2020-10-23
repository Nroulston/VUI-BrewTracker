import React, { useState } from 'react';
import { useDispatch} from 'react-redux'
import {brewlogAdded} from './brewlogSlice'
import axios from 'axios'


//MUI imports
import Dictaphone from '../dictaphone/Dictaphone'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


const localHost = 'http://localhost:3001'

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

export const Brewlog = ({recipe}) => {
  const [brewLog, setBrewLog] = useState({
    recipe_id: recipe.id, 
    og: '0',
    strikeVolume: '0',
    strikeTemp: '0',
    mashPH: '0'
  
  })
  const dispatch = useDispatch()


  const classes = useStyles()
  const onBrewLogChanged = e => {
   
    const tempBrewLog = {...brewLog}
    tempBrewLog[e.target.name] = e.target.value
    setBrewLog(tempBrewLog)
  
  }

  const submitBrewLog = async() => {
    const response = await axios.post(`${localHost}/brewlog`, {brewLog}, {withCredentials:true})
    
    dispatch(brewlogAdded(response.data.brew_log))

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
                InputLabelProps={{ shrink: true }}
                margin="normal"
                label="Strike Volume"
                name="strikeVolume" 
                id='strikeVolume'
                onChange={onBrewLogChanged}
                value={brewLog.strikeVolume}
              />
            </Grid>  
            <Grid item xs={12} sm={3}>
              <TextField
                InputLabelProps={{ shrink: true }}
                margin="normal"
                label="Strike Temp"
                name="strikeTemp" 
                id='strikeTemp'
                onChange={onBrewLogChanged}
                value={brewLog.strikeTemp}
              />
            </Grid>  
            <Grid item xs={12} sm={3}>
              <TextField
                InputLabelProps={{ shrink: true }}
                margin="normal"
                label="Mash PH"
                name="mashPH" 
                id='mashPH'
                onChange={onBrewLogChanged}
                value={brewLog.mashPH}
              />
            </Grid>  
            <Grid item xs={12} sm={3}>
              <TextField
                InputLabelProps={{ shrink: true }}
                margin="normal"
                label="Original Gravity"
                name="og" 
                id='OG'
                onChange={onBrewLogChanged}
                value={brewLog.og}
                
                
              />
            </Grid>
          </Grid>  
              <div className={classes.buttons}>
                <Button
                  type='button'
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={submitBrewLog}
                >
                  Submit
                </Button>
              </div>  
        </Paper>
      </main>
    </React.Fragment> 
  
  )
}