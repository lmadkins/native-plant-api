const mongoose = require('./connection')

// Models
const Plant = require('./models/Plant')

// Seed Data
const vinesData = require('./vines.json')
const fernsData = require('./ferns.json')
const grassesData = require('./grasses.json')
const herbaceousData = require('./herbaceous.json')
const shrubsData = require('./shrubs.json')
const treesData =  require('./trees.json')

// Plant.insertMany(vinesData)
//       .then(function () {
//         console.log(vinesData);
//       })
//       .catch(function (err) {
//         console.log(err);
//       });

// Plant.insertMany(fernsData)
// .then(function () {
//   console.log(vinesData);
// })
// .catch(function (err) {
//   console.log(err);
// });

// Plant.insertMany(grassesData)
//   .then(function () {
//     console.log('Success!')
//   })
//   .catch(function (err) {
//     console.log(err)
//   })

// Plant.insertMany(grassesData)
//   .then(function () {
//     console.log('Success!')
//   })
//   .catch(function (err) {
//     console.log(err)
//   })