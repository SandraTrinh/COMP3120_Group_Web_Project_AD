# back end

- '/server'
This is the location for our backend server code. We are using express server. 
- '/server/server.js' 
This file imports the '/server/app.js' file. This also tells the server to use port 3001.
- '/server/app.js' 
This file import the '/controllers/api.js' files. This sets up the express, cors, api routers, and in the future the tests.
- '/controllers/api.js'
This is where all the API routers are controlled: 
    -  GET : at the moment we are geting vaccination rates in nsw from our own mongoDB
 In the future we will include: POST, PUT, DELETE
- '/models/vaccine.js'
This connects to the mongoDB with mongoose. We are currently geting the vaccination data in NSW from our own data clutch in our MongoDB.
- 'server/ingestdb.js'
This helps us populate the static data from userVaccinationData.json and the vaccine.json in to our mongoDB.