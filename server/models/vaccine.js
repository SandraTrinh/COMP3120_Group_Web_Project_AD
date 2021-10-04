const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const vaccinationSchema = new mongoose.Schema({
    NameOfTheState: String,
    NameOfTheTerritory: String,
    TotalPopulation: String,
    FirstDoseVaccinationPercentage: String,
    SecondDoseVaccinationPercentage: String
})

vaccinationSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Vaccination = mongoose.model("vaccination", vaccinationSchema)

module.exports = Vaccination
