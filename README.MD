# COMP3120 Group AD
# COVID-19 Vaccination in NSW

# Project Members
    -   Hemanth Vejandla
    -   Zhi Jie Chair   
    -   Sandra Trinh 45915881
    -   Minh Son Do
    



# Project Introduction
    This is a react based application that is intended to encourage NSW residents to get vaccinated. 
    This Application will allow the users to see the percentage of the vaccination status across different LGA's diveded into 1st dose and 2nd dose of the vaccine.
    The initial landing page displays the TOP 10 LGA's in terms of their first dose of vaccination.
    The page also shows the averages of the first and second doses across NSW.

# Basic Scripts
- npm start will initialiase the project,
- npm run dev will initialiase the connection to database designed using MongoDB


# Frontend Information
- A custom designed CSS will be used throughout the project for better integration and functionality.

    ## Project Script Files
        - '/src/components/'
            - '/product.js' this file name will be changed in the future. 
            We have not used this in the react app yet.
            - '/products.js' this file name will be changed in the future to something like NSW vaccinations
            We use this to display the top ten highest vaccination regions in NSW on the home page sorted in descending order.
            - '/UserInfo.js' 
            We use this to display the vaccination status of each user.
        - '/src/services'
            - '/vaccinations.js'
                This is where we manage the data request to the backend server. We use Axios to GET, POST, PUT, DELETE.
                    - GET: this at the moment get the vaccination rates in NSWs
        - '/src/App.css'
            This is the file that manages the CSS for the front end
        - '/src/App.js'
            Gets data from server and returns the router links to different pages, switches between the links.
        - '/src/LoginForm.js'
            This manages the user login form.
        - 'src/setupTest.js'
            we will set up test and manage for the front end here.


# Backend Information
- Mongo DB will be primiraly be used as our database for the information on vaccine status for users and as well as for the Vaccinantion percentage across NSW
- Custom designed Mongo DB API has been immplemented (vaccine.js) to help us in establishing the initial database
- .env file is used to authenticate to MongoDB database
- ingestdb.js has been implemented to load the data into the MongoDB database.

    ## Project Script Files 
        -   '/server' This is the location for our backend server code. We are using express server.
        -   '/server/server.js' This file imports the '/server/app.js' file. This also tells the server to use port 3001.
        -   '/server/app.js' This file import the '/controllers/api.js' files. This sets up the express, cors, api routers, and in the future the tests.
        -   '/controllers/api.js' This is where all the API routers are controlled:
            -   GET : at the moment we are geting vaccination rates in nsw from our own mongoDB In the future we will include: POST, PUT, DELETE
        -   '/models/vaccine.js' This connects to the mongoDB with mongoose. We are currently geting the vaccination data in NSW from our own data clutch in our MongoDB.
        -   'server/ingestdb.js' This helps us populate the static data from userVaccinationData.json and the vaccine.json in to our mongoDB.

# External API's used
- 

