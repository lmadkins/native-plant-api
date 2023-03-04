const mongoose = require('./connection')

// Models
const Plant = require('./models/Plant')

// Seed Data
const vinesData = require('./vines.json')
const fernsData = require('./ferns.json')

// Plant.insertMany(vinesData, (err, vine) => {
//   if (err) {
//     console.log(err)
//   }
//   console.log('Added vines data', vine)
//   mongoose.connection.close()
// })

// Plant.insertMany(vinesData)
//       .then(function () {
//         console.log(vinesData);
//       })
//       .catch(function (err) {
//         console.log(err);
//       });

Plant.insertMany(fernsData)
.then(function () {
  console.log(vinesData);
})
.catch(function (err) {
  console.log(err);
});