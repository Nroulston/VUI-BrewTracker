import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const Dictaphone = ( props ) => {
  const [message, setMessage] = useState('')
  
  
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
    <div>
      <button type='button' onClick={listeningFlag}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      
      <p>{transcript}</p>
      <p>{message}</p>
    </div>
  )
}
export default Dictaphone