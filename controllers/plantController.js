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
  catch(err) {
    next(err)
  }
})

// router.get('/plants', (req, res, next) => {
// 	Plant.find()
// 		.then((plants) => res.json(plants))
// 		.catch(next);
// });


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

// DESTROY
// DELETE a plant after locating it by id
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