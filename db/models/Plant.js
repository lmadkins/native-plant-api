const mongoose = require('../connection')

// Makes schema and assigns it to a variable
const PlantSchema = new mongoose.Schema({
  scientificName: String,
  commonNames: [String],
  type: String,
  lightNeeds: [String],
  waterNeeds: [String],
  flowerColor: [String],
  wildlifeSupport: [String],
  foodUse: [String],
  medicinalUse: [String],
  otherUse: [String],
  image: {
    medium: String,
    original: String
  },
  toxic: "String",
  spreadsVigorously: "String",
  evergreen: "String"
})

// instantiate the model, calling it "Bookmark" and with the schema just made
const Plant = mongoose.model('Plant', PlantSchema)

// export the newly created model
module.exports = Plant