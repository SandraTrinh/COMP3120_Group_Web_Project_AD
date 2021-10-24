/**
 * @jest-environment node
 */

const mongoose = require('mongoose') 
const supertest = require('supertest')
const fs = require('fs')
const app = require('../app')
const Users = require('../models/users')

const api = supertest(app)

/**
 * Load sample data into the database for testing
 * 
 * @param {String} fileName JSON data filename
 */
const sampleData =  async (fileName) => {
    const rawData = fs.readFileSync(fileName)
    const data = JSON.parse(rawData)

    // use a for loop rather than map because we want await
    for(let i=0; i<data.users.length; i++) {
        const record = data.users[i]
        const l = new Users(record)
        await l.save() 
    }
}

describe('api', () => {

    beforeEach(async () => {
        sampleData("server/userVaccinationData.json")
    })

    test('login works with correct username/password', async () => {

        const data = {
            username: 'SamSmith',
            password: 'sam123'
        }

        await api.post('/api/login')
                .send(data)
                .expect(200)
                .expect('Content-Type', /application\/json/)
                .expect('Set-Cookie', /.*/)
                .then((res) => {
                    expect(res.body.username).toBe(data.username)
                    expect(res.body.name).toBe('Sam Smith')
                })
    })

    test('login fails with incorrect password', async () => {

        const data = {
            username: 'Sam',
            password: 'notsam'
        }

        await api.post('/api/login')
                .send(data)
                .expect(401)

    })

    afterEach(async () => {
        await Users.deleteMany({})
    })

    afterAll(() => {
        mongoose.connection.close()
    })
})