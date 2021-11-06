require("dotenv").config()
const mongoose = require("mongoose")
const Vaccination = require("./models/vaccine")
const Users = require("./models/users")
const Feedback = require("./models/feedback")
const fs = require("fs")

const rawData = fs.readFileSync("server/vaccine.json")
const data = JSON.parse(rawData)
const rawUsersData = fs.readFileSync("server/userVaccinationData.json")
const usersData = JSON.parse(rawUsersData)
const rawFeedbackData = fs.readFileSync("server/feedback.json")
const feedbackData = JSON.parse(rawFeedbackData)

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
        username: record.username,
        password: record.password,
        territoryName: record.territoryName,
        vaccineName: record.vaccineName,
        status: record.status,
        FirstDose: record.FirstDose,
        SecondDose: record.SecondDose
    })
    newUsers.save().then(result => {
        console.log("Users record saved")
    })
})

feedbackData.userfeedback.map(record => {
    console.log(record)
    const newFeedback = new Feedback({
        verySatisfied : record.verySatisfied,
        satisfied : record.satisfied,
        neutral: record.neutral,
        unsatisfied : record.unsatisfied,
        veryUnsatisfied: record.veryUnsatisfied
    })
    newFeedback.save().then(result => {
        console.log("Feedback record saved")
    })
})
