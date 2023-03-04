const mongoose = require('./connection')

// Seed Data
const vinesData = require('./vines.json')

// Models
const Plant = require('./models/Plant')

// Plant.insertMany(vinesData, (err, vine) => {
//   if (err) {
//     console.log(err)
//   }
//   console.log('Added vines data', vine)
//   mongoose.connection.close()
// })