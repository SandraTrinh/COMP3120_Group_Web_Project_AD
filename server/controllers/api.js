  
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
const SECRET = process.env.SECRET

//get raw data dummy DB
const usersData = JSON.parse(rawUsersData)
let users = usersData.users
const vaccineData = JSON.parse(rawVaccineData)
//let vaccinations = vaccineData.vaccination


//get user
// const getUser = (name) => {
//     //return users.filter(u => u.name === name)[0]
//     Users.find({name:name})
//     .then(result => {
//         console.log("get users: "+result)
//         return result
//     })
// }

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
    Unit.findById(request.params.id)
        .then(result => {
            response.json(result)
        })
        .catch(err => {
            response.status(404).json({error: "Not found"})
        })
})

//generated a new ID
const generatedId = () => {
    const maxId = units.length > 0
    ? Math.max(...units.map(p => p.id))
    : 0
    return maxId + 1
}

apiRouter.post('/api/login', async (request, response) => {

    const {username, password} = request.body
    let user 
    //const user = await getUser(name)
    Users.find({username:username})
    .then(result => {
        console.log("get users: "+ JSON.stringify(result))
        user = JSON.parse(JSON.stringify(result))[0];
        console.log(user);
        if (user == [] || !user) {
            return response.status(401).json({error: "invalid name or password"})
        }
    })
    .then(result => {
        bcrypt.compare(password, user.password)
            .then(result =>{
                const userForToken = {
                    id: user.id,
                    name: user.name            
                }
                
                const token = jwt.sign(userForToken, SECRET)
        
                return response.status(200).json({token, name: user.name})
            })
            .catch((error) => {
                return response.status(401).json({error: "invalid name or password"})
            })   
     })
 
})

apiRouter.post('/api/logout', async (request, response) => {
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