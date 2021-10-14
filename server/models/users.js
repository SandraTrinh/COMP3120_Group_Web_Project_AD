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

const usersSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    territoryName: String,
    vaccineName: String,
    status: String,
    FirstDose: String,
    SecondDose: String
})

usersSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Users = mongoose.model("Users", usersSchema)

module.exports = Users