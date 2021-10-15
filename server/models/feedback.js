const mongoose = require('mongoose')
const dotenv = require("dotenv")

dotenv.config()
const url = process.env.MONGODB_URI

console.log('connecting to', url)

const doConnect = async (url) => {
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
      console.log('connected to MongoDB')
    })
    .catch((error) => {
      console.log('error connecting to MongoDB:', error.message)
    })
}
doConnect(url)

const feedbackSchema = new mongoose.Schema({
    verySatisfied : Number,
    satisfied : Number,
    neutral: Number,
    unsatisfied : Number,
    veryUnsatisfied: Number
})

feedbackSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Feedback = mongoose.model("Feedback", feedbackSchema)

module.exports = Feedback