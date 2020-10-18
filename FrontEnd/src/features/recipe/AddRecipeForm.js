import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {recipeAdded} from './recipesSlice'

import axios from 'axios'

export const AddRecipeForm = () => {
  const [recipe, setRecipe] = useState("")
  const [name, setName] = useState("")
  const [method, setMethod] = useState("")
  const [boilTime, setBoilTime] = useState("")
  const [batchSize, setBatchSize] = useState("")
  const [preBoilSize, setPreBoilSize] = useState("")
  const [preBoilGravity, setPreBoilGravity] = useState("")
  const [targetFG, setTargetFG] = useState("")
  const [targetOG, setTargetOG] = useState("")
  const [ibu, setIbu] = useState("")
  const [srm, setSrm] = useState("")
  const [mashPH, setMashPH] = useState("")
  const [mashSchedule, setMashSchedule] = useState("")
  const [beerStyle, setBeerStyle] = useState("")
  
  const dispatch = useDispatch()
  
  const users = useSelector(state => state.users.users)
  const currentUser = useSelector( state => state.users.currentUser)
  
  const onNameChanged = e => setName(e.target.value)
  const onMethodChanged = e => setMethod(e.target.value)
  const onBoilTimeChanged = e => setBoilTime(e.target.value)
  const onBatchSizeChanged = e => setBatchSize(e.target.value)
  const onPreBoilSizeChanged = e => setPreBoilSize(e.target.value)
  const onPreBoilGravityChanged = e => setPreBoilGravity(e.target.value)
  const onTargetFGChanged = e => setTargetFG(e.target.value)
  const onTargetOGChanged = e => setTargetOG(e.target.value)
  const onIbuChanged = e => setIbu(e.target.value)
  const onSrmChanged = e => setSrm(e.target.value)
  const onMashPHChanged = e => setMashPH(e.target.value)
  const onMashScheduleChanged = e => setMashSchedule(e.target.value)
  const onBeerStyleChanged = e => setBeerStyle(e.target.value)
  
  const onSaveRecipeClicked = async () => {
    const recipe = {
      user_id: currentUser.id,
      name,
      method,
      boil_time: boilTime,
      batch_size: batchSize,
      pre_boil_size: preBoilSize,
      pre_boil_gravity: preBoilGravity,
      target_fg: targetFG,
      target_og: targetOG,
      ibu,
      srm,
      mash_ph: mashPH,
      mash_schedule: mashSchedule,
      beerStyle
    }
    

    const response = await axios.post('http://localhost:3001/recipes', {recipe}, {withCredentials:true})
    dispatch(recipeAdded(response.data.recipe))
    setName('')
    setMethod('')
    setBoilTime('')
    setBatchSize('')
    setPreBoilSize('')
    setPreBoilGravity('')
    setTargetFG('')
    setTargetOG('')
    setIbu('')
    setSrm('')
    setMashPH('')
    setMashSchedule('')
    setBeerStyle('')
  }

  return (
    <section>
      <h2>Add a New Recipe</h2>
      <form >
        <label htmlFor="recipeName">Recipe name:</label>
        <input 
          type="text" 
          name="recipeName" 
          id="recipeName"
          value={name}
          onChange={onNameChanged}
        />
        <label htmlFor="recipeMethod">method:</label>
        <input
          name="recipeMethod" 
          id="recipeMethod"
          value={method}
          onChange={onMethodChanged}
        />
        <label htmlFor="recipeBoilTime">Boil Time:</label>
        <input 
          type="text" 
          name="recipeBoilTime" 
          id="recipeBoilTime"
          value={boilTime}
          onChange={onBoilTimeChanged}
        />
        <label htmlFor="recipeBatchSize">Batch Size:</label>
        <input 
          type="text" 
          name="recipeBatchSize" 
          id="recipeBatchSize"
          value={batchSize}
          onChange={onBatchSizeChanged}
        />
        <label htmlFor="recipePreBoilSize">Pre-Boil size:</label>
        <input 
          type="text" 
          name="recipePreBoilSize" 
          id="recipePreBoilSize"
          value={preBoilSize}
          onChange={onPreBoilSizeChanged}
        />
        <label htmlFor="recipePreBoilGravity">Pre-Boil Gravity:</label>
        <input 
          type="text" 
          name="recipePreBoilGravity" 
          id="recipePreBoilGravity"
          value={preBoilGravity}
          onChange={onPreBoilGravityChanged}
        />
        <label htmlFor="recipeTargetFG"> Target FG:</label>
        <input 
          type="text" 
          name="recipeTargetFG" 
          id="recipeTargetFG"
          value={targetFG}
          onChange={onTargetFGChanged}
        />
        <label htmlFor="recipeTargetOG">Target OG:</label>
        <input 
          type="text" 
          name="recipeTargetOG" 
          id="recipeTargetOG"
          value={targetOG}
          onChange={onTargetOGChanged}
        />
        <label htmlFor="recipeIbu">IBU's:</label>
        <input 
          type="text" 
          name="recipeIbu" 
          id="recipeIbu"
          value={ibu}
          onChange={onIbuChanged}
        />
        <label htmlFor="recipeSRM">SRM:</label>
        <input 
          type="text" 
          name="recipeSRM" 
          id="recipeSRM"
          value={srm}
          onChange={onSrmChanged}
        />
        <label htmlFor="recipeMashPH">Mash PH:</label>
        <input 
          type="text" 
          name="recipeMashPH" 
          id="recipeMashPH"
          value={mashPH}
          onChange={onMashPHChanged}
        />
        <label htmlFor="recipeMashSchedule">Mash Schedule:</label>
        <input 
          type="text" 
          name="recipeMashSchedule" 
          id="recipeMashSchedule"
          value={mashSchedule}
          onChange={onMashScheduleChanged}
        />
        <label htmlFor="recipeBeerStyle">Beer Style:</label>
        <input 
          type="text" 
          name="recipeBeerStyle" 
          id="recipeBeerStyle"
          value={beerStyle}
          onChange={onBeerStyleChanged}
        />

        <button type="button" onClick={onSaveRecipeClicked} >
          Save Recipe
        </button>
      </form>
    </section>
  )
  
}