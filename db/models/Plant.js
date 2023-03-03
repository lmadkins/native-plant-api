const mongoose = require('../connection')

// Makes schema and assigns it to a variable
const PlantSchema = new mongoose.Schema({
  scientificName: String,
  commonNames: [String],
  type: String,
  lightNeeds: [String],
  waterNeeds: [String],
  flowerColor:  {
    type: [String],
    default: null
  },
  wildlifeSupport:  {
    type: [String],
    default: null
  },
  foodUse:  {
    type: [String],
    default: null
  },
  otherUse: {
    type: [String],
    default: null
  },
  image: {
    medium: String,
    original: String
  },
  toxic:  {
    type: [String],
    default: null
  },
  spreadsVigorously:  {
    type: [String],
    default: "No"
  },
  otherWarnings:  {
    type: [String],
    default: null
  },
  evergreen:  {
    type: [String],
    default: null
  },
  propagationNeeds:  {
    type: [String],
    default: null
  },
})

// instantiate the model, calling it "Bookmark" and with the schema just made
const Plant = mongoose.model('Plant', PlantSchema)

// export the newly created model
module.exports = Plant