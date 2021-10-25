  
const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const fs = require("fs")
const rawUsersData = fs.readFileSync("server/userVaccinationData.json")
const rawVaccineData = fs.readFileSync("server/vaccine.json")
const rawFeedbackData = fs.readFileSync("server/feedback.json")
const Vaccination = require("../models/vaccine")
const Users = require("../models/users")
const Feedback = require("../models/feedback")
const dotenv = require("dotenv")

dotenv.config()
const SECRET = process.env.SECRET

//get raw data dummy DB
const usersData = JSON.parse(rawUsersData)
let users = usersData.users
const vaccineData = JSON.parse(rawVaccineData)
const feedbackData = JSON.parse(rawFeedbackData)



//get user token
const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if(authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
}

const apiRouter = express.Router()

apiRouter.get('/api/vaccinations/feedback',(request, response) => {
 
    //response.json(units)
    console.log('GET user vaccine status') 
    //response.json(vaccinations)   
    Feedback.find({}).then(result => {
        console.log("feedback data is on")
        response.json(result)

    })
})






//GET home
apiRouter.get('/', (request, response) => {
    response.send('<p>Hello World</p>')
})

//GET all regions of NSW vaccine status
apiRouter.get('/api/vaccinations',(request, response) => {
    console.log('GET user vaccine status') 
    //response.json(vaccinations)   
    Vaccination.find({}).then(result => {
        response.json(result)
    })
})



//GET one vaccination region with id 
apiRouter.get('/api/vaccinations/:id', (request, response) => {
    Unit.findById(request.params.id)
        .then(result => {
            response.json(result)
        })
        .catch(err => {
            response.status(404).json({error: "Not found"})
        })
})


//This verifies the user's token and sends back the user's vaccination data
apiRouter.post('/api/user/vaccines-data', (request, response) => {
    const token = getTokenFrom(request)
    let decodedToken = null
    try {
        decodedToken = jwt.verify(token, SECRET)
    }
    catch {
        decodedToken = {id: null}
    }

    if(!token || !decodedToken.id ) {
        if(decodedToken.id !== 0){
            return response.status(401).json({error: "invalid token"})
        }
    }

    let userData
    let user
    Users.findById(decodedToken.id)
    .then(result => {
        //console.log("get users data: "+ JSON.stringify(result))
        user = JSON.parse(JSON.stringify(result));
        if (user === null || user === {}) {
            return response.status(400).json({error: "invalid user"})
        }
        const data = user
        userData = {
            name: data.name,
            territoryName: data.territoryName,
            vaccineName: data.vaccineName,
            status: data.status,
            FirstDose: data.FirstDose,
            SecondDose: data.SecondDose
        }
        //console.log("here is data: ",userData)
        response.status(200).json(userData)
        console.log("POST send user vaccine data back to frontend!")
    })   
})


//log user in. verifies the password and send back a user token
apiRouter.post('/api/login', async (request, response) => {

    const {username, password} = request.body
    let user 
    //const user = await getUser(name)
    await Users.find({username:username})
    .then(result => {
        console.log("get users: "+ JSON.stringify(result))
        user = JSON.parse(JSON.stringify(result))[0];
        console.log(user);
     
    })
  
    if (user == [] || !user) {
        return response.status(401).json({error: "invalid name or password"})
    } else if (await bcrypt.compare(password, user.password)){
        console.log("Password is good!")
        bcrypt.compare(password, user.password)

        const userForToken = {
            id: user.id,
            name: user.name            
        }
        
        const token = jwt.sign(userForToken, SECRET)

        return response.status(200).json({token, name: user.name})
        } else {
        return response.status(401).json({error: "invalid name or password"})
        }

   
 
})

//verify user to logout
apiRouter.post('/api/logout', (request, response) => {
    const token = getTokenFrom(request)
    let decodedToken = null
    try {
        decodedToken = jwt.verify(token, SECRET)
    }
    catch {
        decodedToken = {id: null}
    }

    //console.log("Token: ", decodedToken)

    if(!token || !decodedToken.id ) {
        if(decodedToken.id !== 0){
            return response.status(401).json({error: "invalid token"})
        }
    }
    console.log("user is verifyed, user can logout now!")
    response.status(200).json({name:decodedToken.name})
})

module.exports = apiRouter