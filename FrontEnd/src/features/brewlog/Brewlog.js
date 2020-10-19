import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


export const Brewlog = () => {
  const [brewLog, setBrewLog] = useState([{ og: '' }])

  const onBrewLogChanged = e => {
    const tempBrewLog = [...brewLog]
    tempBrewLog[e.target.id[e.target.id.length - 1]][e.target.name] = e.target.value
    setBrewLog(tempBrewLog)
  }
  return(
   <> 
    <h3>Brewlog</h3>
   
          <label htmlFor='og' >Original gravity:</label>
          <input 
            type="text" 
            name='Original gravity'
            id='og' 
            value={brewLog.og}
            onChange={onBrewLogChanged}
          />
    <button type="button" onClick={''} >
      Save Recipe
    </button>
  </>
  )
}