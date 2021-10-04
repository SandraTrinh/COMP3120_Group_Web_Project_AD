require("dotenv").config()
const mongoose = require("mongoose")
const Vaccination = require("./models/vaccination")
const fs = require("fs")

const rawData = fs.readFileSync("server/vaccination.json")
const data = JSON.parse(rawData)

data.vaccination.map(record => {
    console.log(record)
    const newVaccination = new Vaccination({
        NameOfTheState: record.NameOfTheState,
        NameOfTheTerritory: record.NameOfTheTerritory,
        TotalPopulation: record.TotalPopulation,
        FirstDoseVaccinationPercentage: record.FirstDoseVaccinationPercentage,
        SecondDoseVaccinationPercentage: record.SecondDoseVaccinationPercentage
    })
    newVaccination.save().then(result => {
        console.log("Unit record saved")
    })
})

// mongoose.connection.close()