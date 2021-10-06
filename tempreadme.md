# back end

- '/server'
    This is the location for our backend server code. We are using express server. 
- '/server/server.js' 
    This file imports the '/server/app.js' file. This also tells the server to use port 3001.
- '/server/app.js' 
    This file import the '/controllers/api.js' files. This sets up the express, cors, api routers, and in the future the tests.
- '/controllers/api.js'
    This is where all the API routers are controlled: 
        - GET : at the moment we are geting vaccination rates in nsw from our own mongoDB
        In the future we will include: POST, PUT, DELETE
- '/models/vaccine.js'
    This connects to the mongoDB with mongoose. We are currently geting the vaccination data in NSW from our own data clutch in our MongoDB.
- 'server/ingestdb.js'
    This helps us populate the static data from userVaccinationData.json and the vaccine.json in to our mongoDB.

# front end

- '/src/componets/'
    - '/product.js' this file name will be changed in the future. 
    We have not used this in the react app yet.
    - '/products.js' this file name will be changed in the future to something like NSWvaccinations
    We use this to display the top ten highest vaccination regions in NSW on the home page.
- '/src/services'
    - '/vaccinations.js'
        This is where we manage the data request to the backend server. We use Axios to GET, POST, PUT, DELETE.
            - GET: this at the moment get the vaccination rates in NSWs
- '/src/App.css'
    This is the file that manages the CSS for the front end
- '/src/App.js'
    Gets data from server and returns the rounter links to different pages, switches between the links.
- '/src/LoginForm.js'
    This manages the user login form.
- 'src/setupTest.js'
    we will set up test and manage for the front end here.