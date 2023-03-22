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
    default: 'None'
  },
  wildlifeSupport:  {
    type: [String],
    default: 'None listed'
  },
  foodUses:  {
    type: [String],
    default: 'None listed'
  },
  otherUses: {
    type: [String],
    default: 'None listed'
  },
  images: {
    small: String,
    original: String
  },
  toxic:  {
    type: Boolean,
    default: false
  },
  spreadsVigorously:  {
    type: Boolean,
    default: false
  },
  otherWarnings:  {
    type: [String],
    default: 'None listed'
  },
  evergreen:  {
    type: Boolean,
    default: false
  },
  propagationNeeds:  {
    type: [String],
    default: 'Not listed'
  },
  plantingSeason:  {
    type: [String],
    default: 'Not listed'
  }
},
{ timestamps: true })

// instantiate the model, calling it "Bookmark" and with the schema just made
const Plant = mongoose.model('Plant', PlantSchema)

// export the newly created model
module.exports = Plant