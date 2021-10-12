require("dotenv").config()
const mongoose = require("mongoose")
const Vaccination = require("./models/vaccine")
const Users = require("./models/users")
const fs = require("fs")

const rawData = fs.readFileSync("server/vaccine.json")
const data = JSON.parse(rawData)
const rawUsersData = fs.readFileSync("server/userVaccinationData.json")
const usersData = JSON.parse(rawUsersData)

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
        console.log("Vaccination record saved")
    })
})

usersData.users.map(record => {
    console.log(record)
    const newUsers = new Users({
        name: record.name,
        password: record.password,
        territoryName: record.territoryName,
        vaccineName: record.vaccineName,
        status: record.status,
        dose: record.dose
    })
    newUsers.save().then(result => {
        console.log("Users record saved")
    })
})

// mongoose.connection.close()