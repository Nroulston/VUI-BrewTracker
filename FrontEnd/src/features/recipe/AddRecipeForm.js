import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {recipeAdded} from './recipesSlice'

import axios from 'axios'
const _defaultHops = [
  {
    name: 'cascade',
    form: 'pellet',
    alpha_acid: '3.3'
  },
  {
    name: 'cascade',
    form: 'pellet',
    alpha_acid: '3.3'
  }
]
export const AddRecipeForm = () => {
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
  const [hops, setHops] = useState(_defaultHops)


  const [fermentableName, setFermentableName] = useState("")

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
  
  const onFermentableNameChanged = e => setFermentableName(e.target.value)

  const onHopChanged = e => {
    const tempHops = [...hops]
    tempHops[e.target.id[e.target.id.length - 1]][e.target.name] = e.target.value
    setHops(tempHops)
    
  }
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
      style: beerStyle,
      hops_attributes: hops,
      fermentables_attributes: [ 
        {
        name: fermentableName
        }
      ]
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
        <h3>Hops</h3>
        {hops.map((hop,index) => (
        <div key={index}>
          <label htmlFor={'hop' +index} >Name:</label>
          <input 
            type="text" 
            name='name'
            id={'hop' +index}
            value={hop.name}
            onChange={onHopChanged}
          />
          <label htmlFor={'hopForm' + index} > Form:</label>
          <input 
            type="text" 
            name='form'
            id={'hopForm' + index}
            value={hop.form}
            onChange={onHopChanged}
          />
          <label htmlFor={'hopAlphaAcid' + index} > Alpha Acid:</label>
          <input 
            type="text" 
            name='alpha_acid'
            id={'hopFormAlphaAcid' + index}
            value={hop.alpha_acid}
            onChange={onHopChanged}
          />
        </div>
      ))}
        <h3>Fermentable</h3>
        <label htmlFor="fermentableName">Fermentable:</label>
        <input 
          type="text" 
          name="fermentableName" 
          id="fermentableName"
          value={fermentableName}
          onChange={onFermentableNameChanged}
        />
        <button type="button" onClick={onSaveRecipeClicked} >
          Save Recipe
        </button>
      </form>
    </section>
  )
  
}