/**
 * @jest-environment node
 */

 const mongoose = require('mongoose') 
 const supertest = require('supertest')
 const fs = require('fs')
 const app = require('../app')
 const Unit = require("../models/units")
 
 const api = supertest(app)
 
 /**
  * Load sample data into the database for testing
  * 
  * @param {String} / JSON data units
  */
 const sampleData =  (units) => {
     const rawData = fs.readFileSync(units)
     const data = JSON.parse(rawData)
 
     data.units.map(async record => { 
         const l = new Unit(record)
         await l.save() 
     })
 }
 
 describe('api', () => {
 
     beforeEach(async () => {
        sampleData("server/units.json")
     })
 
     test('get request returns JSON', async () => {
         await api.get('/api/units')
                 .expect(200)
                 .expect('Content-Type', /application\/json/)
     })
 
     test('there are five units records', async () => {
         const response = await api.get('/api/units')
         expect(response.body).toHaveLength(5)
     })
 
 
 
     test('post request adds a record', async () => {
         const newUnit = {
             content: "test content",
         }
 
         await api.post('/api/units')
                  .send(newUnit)
                  .expect(200)
                  .expect('Content-Type', /application\/json/)
 
         const response = await api.get('/api/units')
         expect(response.body).toHaveLength(4)
 
     })
 
     test('post request does not add a record if the token is invalid', async () => {
         const newunit = {
             content: "test content",
         }
 
         await api.post('/api/units')
                  .send(newunit)
                  .expect(401)
                  .expect('Content-Type', /application\/json/)
 
         const response = await api.get('/api/units')
         expect(response.body).toHaveLength(3)
 
     })
 
 
     
 
     afterEach(async () => {
         await Unit.deleteMany({})
     })
 
     afterAll(() => {
         mongoose.connection.close()
     })
 })