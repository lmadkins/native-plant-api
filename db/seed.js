const mongoose = require('./connection')

// Models
const Plant = require('./models/Plant')

// Seed Data
const fernsData = require('./ferns.json')
const grassesData = require('./grasses.json')
const herbaceousData = require('./herbaceous.json')
const shrubsData = require('./shrubs.json')
const treesData =  require('./trees.json')


// Plant.insertMany(fernsData)
// .then(function () {
//   console.log(fernsData);
// })
// .catch(function (err) {
//   console.log(err);
// });


// Plant.insertMany(grassesData)
//   .then(function () {
//     console.log(grassesData)
//   })
//   .catch(function (err) {
//     console.log(err)
//   })

// Plant.insertMany(herbaceousData)
//   .then(function () {
//     console.log(herbaceousData)
//   })
//   .catch(function (err) {
//     console.log(err)
//   })

// Plant.insertMany(shrubsData)
//   .then(function () {
//     console.log(shrubsData)
//   })
//   .catch(function (err) {
//     console.log(err)
//   })

//   Plant.insertMany(treesData)
//   .then(function () {
//     console.log(treesData)
//   })
//   .catch(function (err) {
//     console.log(err)
//   })