require('dotenv').config()
const express = require('express') 
const cors = require('cors')
const apiRouter = require("./controllers/api")
const middleware = require("./utils/middleware")
var session = require('express-session')


const app = express() 

app.use(session({
  secret: 'comp3120Assignment',
  resave: false,
  saveUninitialized: true,
  httpOnly: true,
  cookie: {
      path: '/api', 
      sameSite: 'strict'
  }
}))
app.use(cors())
app.use(express.json())

app.use(middleware.requestLogger)
app.use(express.static('build'))
app.use(apiRouter)
app.use(middleware.errorMiddleware)


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})