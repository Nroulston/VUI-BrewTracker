import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux'
import {recipeAdded} from './recipesSlice'
import Button from '@material-ui/core/Button'

import axios from 'axios'

const _defaultHops = [
  {
    name: '',
    form: '',
    alpha_acid: ''
  },
  {
    name: '',
    form: '',
    alpha_acid: ''
  }
]

export const AddRecipeForm = (props) => {
  //TODO refactor recipe state into an object with one setter, and one onchange
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
  const [fermentables, setFermentable] = useState([{name: ''}])
  const [yeasts, setYeasts] = useState([{name: ''}])
  const [adjuncts, setAdjuncts] = useState([{name: ''}])

  const dispatch = useDispatch()
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
  
  const onFermentableChanged = e => {
    const tempFermentable = [...fermentables]
    tempFermentable[e.target.id[e.target.id.length - 1]][e.target.name] = e.target.value
    setFermentable(tempFermentable)
  }

  const addNewFermentable = () => {
    const newFermentable = [...fermentables, {name: ''}]
    setFermentable(newFermentable)
  }

  const onHopChanged = e => {
    const tempHops = [...hops]
    tempHops[e.target.id[e.target.id.length - 1]][e.target.name] = e.target.value
    setHops(tempHops)
  }

  const addNewHop = (e) => {
    const tempHops= [...hops, {name: '', form: '', alpha_acid: ''}]
    setHops(tempHops)
  }

  const onYeastChanged = (e) => {
    const tempYeasts = [...yeasts]
    tempYeasts[e.target.id[e.target.id.length - 1]][e.target.name] = e.target.value
    setYeasts(tempYeasts)
  }

  const addNewYeast = () => {
    const tempYeasts = [...yeasts, {name: ''}]
    setYeasts(tempYeasts)
  }

  const onAdjunctChanged = (e) => {
    const tempAdjuncts = [...adjuncts]
    tempAdjuncts[e.target.id[e.target.id.length - 1]][e.target.name] = e.target.value
    setAdjuncts(tempAdjuncts)
  }

  const addNewAdjunct = () => {
    const tempAdjuncts = [...adjuncts, {name: ''}]
    setAdjuncts(tempAdjuncts)
  }



  const onSaveRecipeClicked = async () => {
    const history = useHistory()

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
      fermentables_attributes: fermentables,
      yeasts_attributes: yeasts,
      other_ingredients_attributes: adjuncts
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
    history.push(`/recipes/${response.data.recipe}`)
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Recipe Specs
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Name"
            fullWidth
            name="recipeName" 
            id="recipeName"
            value={name}
            onChange={onNameChanged}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="recipeBeerStyle" 
          id="recipeBeerStyle"
          value={beerStyle}
          onChange={onBeerStyleChanged}
            label="Style"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="recipeMethod" 
            id="recipeMethod"
            value={method}
            onChange={onMethodChanged}
            label="Method"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="recipeBoilTime" 
            id="recipeBoilTime"
            value={boilTime}
            onChange={onBoilTimeChanged}
            label="Boil Time"
            fullWidth
         
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="recipeBatchSize" 
            id="recipeBatchSize"
            value={batchSize}
            onChange={onBatchSizeChanged}
            label="Batch Size"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="recipePreBoilSize" 
            id="recipePreBoilSize"
            value={preBoilSize}
            onChange={onPreBoilSizeChanged}
            label="Preboil Size"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="recipePreBoilGravity" 
            id="recipePreBoilGravity"
            value={preBoilGravity}
            onChange={onPreBoilGravityChanged}
            label="Preboil Gravity"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="recipeTargetFG" 
            id="recipeTargetFG"
            value={targetFG}
            onChange={onTargetFGChanged}
            label="Target Final Gravity"
            fullWidth
      
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="recipeTargetOG" 
            id="recipeTargetOG"
            value={targetOG}
            onChange={onTargetOGChanged}
            label="Target Original Gravity"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="recipeIbu" 
          id="recipeIbu"
          value={ibu}
          onChange={onIbuChanged}
            label="IBU's"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="recipeSRM" 
          id="recipeSRM"
          value={srm}
          onChange={onSrmChanged}
            label="SRM"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="recipeMashPH" 
          id="recipeMashPH"
          value={mashPH}
          onChange={onMashPHChanged}
            label="Mash PH"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            placeholder="Type as much as you need"
            multiline
            rows={4}
            rowsMax={4}
            fullWidth
            name="recipeMashSchedule" 
            id="recipeMashSchedule"
            value={mashSchedule}
            onChange={onMashScheduleChanged}
            label='Mash Schedule'
          />
        </Grid>
        <Grid container
          direction="row"
          justify="space-between"
          alignItems="center">
          <Typography variant="h6" gutterBottom>
            Hops
          </Typography>

          <Button variant="contained" color="primary"  onClick={addNewHop}>
            Add Hops
          </Button>
        </Grid>
        {hops.map((hop,index) => (
          <div key={index}>
            <Grid>
              <TextField
                required
                name='name'
                id={'hop' +index}
                value={hop.name}
                onChange={onHopChanged}
                label="Name"
              />
              <TextField
                required
                name='form'
                id={'hopForm' + index}
                value={hop.form}
                onChange={onHopChanged}
                label="Form"
              />
              <TextField
                required
                name='alpha_acid'
                id={'hopFormAlphaAcid' + index}
                value={hop.alpha_acid}
                onChange={onHopChanged}
                label="Alpha Acid"
              />
            </Grid>
          </div>
        ))},
        <Grid container
          direction="row"
          justify="space-between"
          alignItems="center">
          <Typography variant="h6" gutterBottom>
            Fermentables
          </Typography>
          <Button variant="contained" color="primary" onClick={addNewFermentable} >
            Add Fermentable
          </Button>
        </Grid>
        {fermentables.map((fermentable,index) => (
          <div key={index}>
            <Grid >
              <TextField
                required
                name='name'
                id={'fermentable' +index}
                value={fermentable.name}
                onChange={onFermentableChanged}
                label="Name"
                fullWidth
              />
            </Grid>
          </div>
        ))},
        <Grid container
        direction="row"
        justify="space-between"
        alignItems="center">
          <Typography variant="h6" gutterBottom>
            Yeast
          </Typography>

          <Button variant="contained" color="primary" onClick={addNewYeast} >
            Add Yeast
          </Button>
        </Grid>
        {yeasts.map((yeast,index) => (
          <div key={index}>
            <Grid>
              <TextField
                required
                name='name'
                id={'yeast' +index}
                value={yeast.name}
                onChange={onYeastChanged}
                label="Name"
              />
            </Grid>
          </div>
        ))},
        <Grid container
          direction="row"
          justify="space-between"
          alignItems="center">
          <Typography variant="h6" gutterBottom>
            Adjunct
          </Typography>

          <Button className={props.classes.buttons} variant="contained" color="primary" onClick={addNewAdjunct} >
            Add Adjunct
          </Button>
        </Grid>
        {adjuncts.map((adjunct,index) => (
          <div key={index}>
            <Grid>
              <TextField
                required
                name='name'
                id={'adjunct' +index}
                value={adjunct.name}
                onChange={onAdjunctChanged}
                label="Name"
              />
            </Grid>
          </div>
        ))},
      </Grid>
      <div className={props.classes.buttons}>
        <Button
          type='button'
          variant="contained"
          color="primary"
          className={props.classes.button}
          onClick={onSaveRecipeClicked}
        >
          Submit
        </Button>
      </div>
    </React.Fragment>
  )
}