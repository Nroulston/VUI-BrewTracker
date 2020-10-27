import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const Dictaphone = ( props ) => {
  
  const classes = useStyles();
   //TODO use Node Package to convert words to numbers so you don't have to say number to make sure it is recorded as a number
  const commands = [
    {
      command: 'record strike temperature number *',
      callback: (temp) => { 
      props.onBrewLogChangedWithVoice( "strikeTemp", temp)
      }
    },
    {
      command: 'record strike volume number *',
      callback: (vol) => { 
      props.onBrewLogChangedWithVoice( "strikeVolume", vol)
      }
    },
    {
      command: 'record Mash pH number *',
      callback: (ph) => { 
      props.onBrewLogChangedWithVoice( "mashPH", ph)
      }
    },
    {
      command: 'record Original Gravity number *',
      callback: (og) => { 
      props.onBrewLogChangedWithVoice( "og", og)
      }
    },
    {
      command: 'clear',
      callback: ({ resetTranscript }) => resetTranscript()
    }
  ]
  const { transcript } = useSpeechRecognition({ commands })
  
  const listeningFlag = (e) => { SpeechRecognition.startListening({ continuous: true })}
  
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }
  
  
  return (
    <Grid container spaceing={3} className={classes.buttons}>
      <Button
              type='button'
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={listeningFlag}
      >
        Start Recording
      </Button>
      <Button
              type='button'
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={SpeechRecognition.stopListening}
      >
        Stop Recording
      </Button>
      <p>{transcript}</p>
    </Grid>
  )
}
export default Dictaphone