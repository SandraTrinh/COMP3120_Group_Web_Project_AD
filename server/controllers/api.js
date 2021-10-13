const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const fs = require("fs")
const rawUsersData = fs.readFileSync("server/userVaccinationData.json")
const rawVaccineData = fs.readFileSync("server/vaccine.json")
const Vaccination = require("../models/vaccine")
const Users = require("../models/users")
const dotenv = require("dotenv")

dotenv.config()
// const SECRET = process.env.SECRET

//get raw data dummy DB
const usersData = JSON.parse(rawUsersData)
let users = usersData.users
const vaccineData = JSON.parse(rawVaccineData)
//let vaccinations = vaccineData.vaccination


//get user
const getUser = (username) => {
return users.filter(u => u.username === username)[0]
}


//get user token
const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if(authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
}

const apiRouter = express.Router()

//GET home
apiRouter.get('/', (request, response) => {
    response.send('<p>Hello World</p>')
})

//GET user vaccine status
apiRouter.get('/api/vaccinations',(request, response) => {
    //response.json(units)
    console.log('GET user vaccine status') 
    //response.json(vaccinations)   
    Vaccination.find({}).then(result => {
        console.log(result)
        response.json(result)
    })
})

//GET one user vaccine status 
apiRouter.get('/api/vaccinations/:id', (request, response) => {
    vaccineData.findById(request.params.id)
        .then(result => {
            response.json(result)
        })
        .catch(err => {
            response.status(404).json({error: "Not found"})
        })
})



apiRouter.post('/login', async (req, res) => {

    const {username, password} = req.body
  
    const user = getUser(username)
  
    if (!user) {
        return res.status(401).json({error: "invalid username or password"})
    }
  
    if (await bcrypt.compare(password, user.password)) {
        
        const userForToken = {
            id: user.id,
            username: user.username            
        }
        
        const token = jwt.sign(userForToken, "secret")
  
        return res.status(200).json({token, username: user.username})
        
    } else {
        return res.status(401).json({error: "invalid username or password"})
    }
  })



module.exports = apiRouter