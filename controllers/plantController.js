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


module.exports = router