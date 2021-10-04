const express = require("express")
//const bcrypt = require("bcrypt")
//const jwt = require("jsonwebtoken")
const fs = require("fs")
const rawData = fs.readFileSync("server/vaccine.json");
const dotenv = require("dotenv")

dotenv.config()
const SECRET = process.env.SECRET

//get raw data from sample.js
// let rawData = fs.readFileSync('./server/vaccine.json')
let data = JSON.parse(rawData)
let vaccine = data.VaccineStatus;

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
apiRouter.get('/api/vaccines',(request, response) => {
    //response.json(units)
    console.log('GET user vaccine status')
    console.log(vaccine)
    response.json(vaccine);
    
    //this is get data from mongoDB
    // Unit.find({}).then(result => {
    //     console.log(result)
    //     response.json(result)
    // })
})

//GET one user vaccine status 
apiRouter.get('/api/vaccines/:id', (request, response) => {
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


// //POST unit
// apiRouter.post('/api/units', (request, response) => {
//     const token = getTokenFrom(request)
//     let decodedToken = null
//     try {
//         decodedToken = jwt.verify(token, SECRET)
//     }
//     catch {
//         decodedToken = {id: null}
//     }
    
//     console.log("Token: ", decodedToken)
//     if(!token || !decodedToken.id ) {
//         if(decodedToken.id !== 0){
//             return response.status(401).json({error: "invalid token"})
//         }
//     }


//     const body = request.body

//     if (!body.code || !body.title || !body.offering){
//         return response.status(400).json({
//             error: 'code, title or offering is missing'
//         })
//     }

//     const newUnit = new Unit({
//         code: body.code,
//         title: body.title,
//         offering: body.offering,
//         user: decodedToken.id
//     })
//     newUnit.save().then(result => {
//         response.json(result)
//     })
//     console.log('POST: Unit Added is ',newUnit)
// })

// //handle post request for login with {username, password}
// apiRouter.post('/api/login', async (req, res) => {
//     //this does not do any error handling. it is not good to do it this way.
//     const {username, password} = req.body

//     const user = getUser(username)
//     console.log(user)

//     if(!user) {
//         return res.status(401).json({error: "invalid username or password"})
//     }

//     if (await bcrypt.compare(password, user.password)){
//         console.log("Password is good!")

//         const userForToken = {
//             id: user.id,
//             username: user.username
//         }

//         const token = jwt.sign(userForToken, SECRET)

//         return res.status(200).json({token, username: user.username, name: user.name})
//     } else {
//         return res.status(401).json({error: "invalid username or password"})
//     }

// })

// //PUT unit
// apiRouter.put('/api/units/:id', (request, response) => {
//     const id = request.params.id
//     const body = request.body
//     console.log('PUT id is', id);
//     //const unit = units.find(unit => unit.id === id)
//     console.log("body: ", body)

//     //if(unit){
//         // if (!body.code || !body.title || body.offering.length === 0){
//         //     return response.status(400).json({
//         //         error: 'code, title or offering is missing'
//         //     })
//         // }

//         // if(body === undefined) {
//         //     return response.status(400).json({
//         //                 error: 'code, title or offering is missing'
//         //             })
//         // }
    
//         // const unit = {
//         //     id: id,
//         //     code: body.code,
//         //     title: body.title,
//         //     offering: body.offering
//         // }

//         const newUnit = {
//             id: id,
//             code: body.code,
//             title: body.title,
//             offering: body.offering,
//             user: body.user
//         }
        
//         Unit.findByIdAndUpdate(id, newUnit, {new: true})
//         .then(result => {
//             response.json(result)
//         })
    
//         //units = units.map(u => u.id !== id ? u : unit)
//         console.log('PUT unit is: ', newUnit)
//         //response.json(unit)
//     // } else {
//     //     console.log("PUT: Unit not found! It is not in the list.")
//     //     response.status(404).end()
//     // }
  
// })

//DELETE unit
// apiRouter.delete('/api/vaccines/:id', (request, response) => {
//     const id = Number(request.params.id)
//     const unit = units.find(unit => unit.id === id)

//     if(unit){
//         units = units.filter(unit => unit.id !== id)
//         console.log(`Unit ${id} has been DELETED`)
//         response.status(204).end()
//     } else {
//         console.log("DELETE: Unit not found! It is not in the list.")
//         response.status(404).end()
//     }
// })

module.exports = apiRouter