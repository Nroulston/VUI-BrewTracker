import React, { useState } from 'react'
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
  const [message, setMessage] = useState('')
  const classes = useStyles();
  
  const commands = [
    {
      command: 'record *',
      callback: (food) => {
      props.setBrewLog({ og: `${food}` })
      setMessage(`Your order is for: ${food}`)
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
      <p>{message}</p>
    </Grid>
  )
}
export default Dictaphone