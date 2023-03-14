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

// 


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

// CREATE
// POST a new plant
// localhost:4000/api/plants/
router.post('/', async (req, res, next) => {
  try {
    const newPlant = await Plant.create(req.body)
    res.status(201).json(newPlant)
  } catch (err) {
    next(err)
  }
})

// UPDATE
// PATCH update a plant, after locating it by id
// localhost:4000/api/plants/:id
router.patch('/:id', async(req, res, next) => {
  try {
    const updatedPlant = await Plant.findOneAndUpdate(
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

// DESTROY
// DELETE a plant, after locating it by id
// localhost:4000/api/plants/:id

router.delete('/:id', async (req, res, next) => {
  try {
    const deletedPlant = await Plant.findByIdAndDelete(req.params.id)
    res.status(204).json(deletedPlant)
  } catch(err) {
    next(err)
  }
})


module.exports = router