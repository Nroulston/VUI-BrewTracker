import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'
import {brewlogAdded} from './brewlogSlice'
import Dictaphone from '../dictaphone/Dictaphone'
import axios from 'axios'
import SpeechRecognition from 'react-speech-recognition'


//MUI imports
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
  const currentUser = useSelector( state => state.users.currentUser)

  const [brewlog, setBrewlog] = useState({
    recipe_id: recipe.id, 
    og: '0',
    strikeVolume: '0',
    strikeTemp: '0',
    mashPH: '0',
    currentUser
  })
  const brew_log = {
    recipe_id: recipe.id,
    original_gravity: brewlog.og,
    strike_volume: brewlog.strikeVolume,
    strike_temp: brewlog.strikeTemp,
    mash_pH: brewlog.mashPH,
    user_id: currentUser.id
  }
  const dispatch = useDispatch()
  const classes = useStyles()
  const history = useHistory()

  const onBrewlogChanged = e => { 
    const tempBrewlog = {...brewlog}
    tempBrewlog[e.target.name] = e.target.value
    setBrewlog(tempBrewlog)
  }

  const onBrewLogChangedWithVoice = (key, value) => {
    
    const tempBrewlog = {...brewlog, [key]:value}
    setBrewlog(tempBrewlog)

  }

  const submitBrewlog = async() => {
    const response = await axios.post(`${localHost}/brewlogs`, {brew_log}, {withCredentials:true})
   
    dispatch(brewlogAdded(response.data.brewlog))
    SpeechRecognition.stopListening()
    history.push(`/recipes/${response.data.brewlog.recipe_id}/brewlogs/${response.data.brewlog.id}`)
  }

  return(
     <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
           BrewLog
          </Typography>
          <Dictaphone onBrewLogChangedWithVoice={onBrewLogChangedWithVoice} />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <TextField
                InputLabelProps={{ shrink: true }}
                margin="normal"
                label="Strike Volume"
                name="strikeVolume" 
                id='strikeVolume'
                onChange={onBrewlogChanged}
                value={brewlog.strikeVolume}
              />
            </Grid>  
            <Grid item xs={12} sm={3}>
              <TextField
                InputLabelProps={{ shrink: true }}
                margin="normal"
                label="Strike Temp"
                name="strikeTemp" 
                id='strikeTemp'
                onChange={onBrewlogChanged}
                value={brewlog.strikeTemp}
              />
            </Grid>  
            <Grid item xs={12} sm={3}>
              <TextField
                InputLabelProps={{ shrink: true }}
                margin="normal"
                label="Mash PH"
                name="mashPH" 
                id='mashPH'
                onChange={onBrewlogChanged}
                value={brewlog.mashPH}
              />
            </Grid>  
            <Grid item xs={12} sm={3}>
              <TextField
                InputLabelProps={{ shrink: true }}
                margin="normal"
                label="Original Gravity"
                name="og" 
                id='OG'
                onChange={onBrewlogChanged}
                value={brewlog.og}
                
                
              />
            </Grid>
          </Grid>  
              <div className={classes.buttons}>
                <Button
                  type='button'
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={submitBrewlog}
                >
                  Submit
                </Button>
              </div>  
        </Paper>
      </main>
    </React.Fragment> 
  
  )
}