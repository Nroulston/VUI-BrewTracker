import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Dictaphone from '../dictaphone/Dictaphone'
import { useEffect } from 'react';

export const Brewlog = () => {
  const [brewLog, setBrewLog] = useState({ og: '' })

  const onBrewLogChanged = e => {
    const tempBrewLog = {...brewLog}
    
    tempBrewLog[e.target.name] = e.target.value
    setBrewLog(tempBrewLog)
  }

  const setOGValue = () => {

  }

  useEffect(() => {
    console.log(brewLog)
    setBrewLog(brewLog)
  })
  return(
   <> 
    <h3>Brewlog</h3>
    <Dictaphone setBrewLog={setBrewLog} />
          <label htmlFor='og'>Original gravity:</label>
          <input 
            type="text" 
            name='og'
            id='og0'
            placeholder={brewLog.og} 
            value={brewLog.og}
            onChange={onBrewLogChanged}
          />
    <button type="button" onClick={''} >
      Save Recipe
    </button>
  </>
  )
}