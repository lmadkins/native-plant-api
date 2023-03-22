const express = require('express')
const { model } = require('mongoose')
const router = express.Router()
const Plant = require('../db/models/Plant')

// INDEX
// GET all plants
// localhost:4000/api/plants
router.get('/plants', async(req, res, next) => {
  try {
    const plants = await Plant.find({})
    res.status(200).json(plants)
  } 
  catch (err) {
    next(err)
  }
})

// SHOW
// GET one of the plants by its id
// localhost:4000/api/plants/:id
router.get('/:id', async (req, res, next) => {
  try {
    const foundPlant = await Plant.findById(req.params.id)
    res.status(200).json(foundPlant)
  } catch (err) {
    next(err)
  }
})

// SHOW
// GET one of the plants by type of plant
// localhost:4000/api/plants/:type

router.get('/plants/:type', async (req, res, next) => {
  try {
    let foundPlants = await Plant.findOne({
      type: req.params.type
    })
    res.status(200).json(foundPlants)
  } catch(err) {
    next(err)
  }
})

// Filter plants by toxicity/ if toxic is true or false whether toxic is true or false

router.get('/plants/toxic/:bool', async (req, res, next) => {
  try {
    let foundPlants = await Plant.find({
      toxic: req.params.bool
    })
    res.status(200).json(foundPlants)
  } catch(err) {
    next(err)
  }
})

router.get('/plants/spreads/:bool', async (req, res, next) => {
  try {
    let foundPlants = await Plant.find({
      spreadsVigorously: req.params.bool
    })
    res.status(200).json(foundPlants)
  } catch(err) {
    next(err)
  }
})

// ADMIN ROUTES

router.post('/new', async (req, res, next) => {
  try {
    const newPlant = await Plant.create(req.body)
    res.status(201).json(newPlant)
  } catch (err) {
    next(err)
  }
})

router.patch('/:id', async(req, res, next) => {
  try {
    const updatedPlant = await Plant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    if (updatedPlant) {
      res.status(200).json(updatedPlant)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const deletedPlant = await Plant.findByIdAndDelete(req.params.id)
    res.status(204).json(deletedPlant)
  } catch(err) {
    next(err)
  }
})

module.exports = router