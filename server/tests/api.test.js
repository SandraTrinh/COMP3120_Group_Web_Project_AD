/**
 * @jest-environment node
 */

const mongoose = require('mongoose') 
const supertest = require('supertest')
const fs = require('fs')
const app = require('../app')
const Vaccine = require("../models/vaccine")

const api = supertest(app)

/**
 * Load sample data into the database for testing
 * 
 * @param {String} / JSON data users
 */
const sampleData =  async (fileName) => {
    const rawData = fs.readFileSync(fileName)
    const data = JSON.parse(rawData)

for(let i=0; i<data.vaccination.length; i++) {
    const record = data.vaccination[i]
    const l = new Vaccine(record)
    await l.save() 
}
}

describe('api', () => {

    beforeEach(async () => {
        sampleData("server/vaccine.json")
    })

    test('get request returns JSON', async () => {
        await api.get('/api/vaccinations')
                .expect(200)
                .expect('Content-Type', /application\/json/)
    })

    test('there are twenty-eight vaccination records', async () => {
        const response = await api.get('/api/vaccinations')
        expect(response.body).toHaveLength(28)
    })

    afterEach(async () => {
        await Vaccine.deleteMany({})
    })

    afterAll(() => {
        mongoose.connection.close()
    })
})