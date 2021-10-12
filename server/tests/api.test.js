/**
 * @jest-environment node
 */

 const mongoose = require('mongoose') 
 const supertest = require('supertest')
 const fs = require('fs')
 const app = require('../app')
 const User = require("../models/users")
 const Vaccine = require("../models/vaccine")
 
 const api = supertest(app)
 
 /**
  * Load sample data into the database for testing
  * 
  * @param {String} / JSON data users
  */
 const sampleData =  (users) => {
     const rawData = fs.readFileSync(users)
     const data = JSON.parse(rawData)
 
     data.users.map(async record => { 
         const l = new User(record)
         await l.save() 
     })
 }
 
 describe('api', () => {
 
     beforeEach(async () => {
        sampleData("server/userVaccinationData.json")
     })
 
     test('get request returns JSON', async () => {
         await api.get('/api/users')
                 .expect(200)
                 .expect('Content-Type', /application\/json/)
     })
 
     test('there are twenty users records', async () => {
         const response = await api.get('/api/users')
         expect(response.body).toHaveLength(5)
     })
 
 
 
     afterAll(() => {
         mongoose.connection.close()
     })
 })