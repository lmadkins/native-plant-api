const mongoose = require('../connection')

// Makes schema and assigns it to a variable
const PlantSchema = new mongoose.Schema({
  scientificNames: [String],
  commonNames: [String],
  type: String,
  lightNeeds: [String],
  waterNeeds: [String],
  flowerColors:  {
    type: [String],
    default: null
  },
  wildlifeSupport:  {
    type: [String],
    default: null
  },
  foodUses:  {
    type: [String],
  },
  otherUses: {
    type: [String],
    default: null
  },
  images: {
    small: String,
    original: String
  },
  toxic:  {
    type: String,
    default: null
  },
  spreadsVigorously:  {
    type: String,
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
  plantingSeason:  {
    type: [String],
    default: null
  },
})

// instantiate the model, calling it "Bookmark" and with the schema just made
const Plant = mongoose.model('Plant', PlantSchema)

// export the newly created model
module.exports = Plant