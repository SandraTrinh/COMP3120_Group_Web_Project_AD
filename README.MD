# COMP3120 Group AD
https://github.com/MQCOMP3120-2021/group-web-project-group-ad
# COVID-19 Vaccination in NSW

# Project Members
    -   Hemanth Kumar Vejandla 45531536
    -   Zhi Jie Chair 45707650
    -   Sandra Trinh 45915881
    -   Minh Son Do 44751494

There are four members in our team each specialising in specific roles. Sandra is looking after the backend code using express and will be taking care of the app’s aesthetics with CSS, a framework may be used for this. Minh Son will be our frontend specialist using React and will also help Sandra with Backend functionality. Zhi Jie will look after authentication in our application. He will also help Hemanth with managing the database and testing both front and backend. Hemanth is also managing the APIs that we will be using in our web application. 

# COMMUNICATIONS
    Throughout our project we made sure every week before the milestone meeting we all have completed our tasks. We comunicate when we are changing the code and/or need to merge code into main as well as when code errors come up.
    -   We mainly used messenger chat functions to communicate.
    -   Zoom calls used for sharing screen and meetings


# Heroku Link
https://fast-atoll-92750.herokuapp.com
# Project Introduction
    This is a react-based application that is intended to encourage NSW residents to get vaccinated. 
    This Application will allow the users to see the percentage of the vaccination status across different LGA's diveded into 1st dose and 2nd dose of the vaccine.
    The initial landing page displays the TOP 10 LGA's in terms of their first dose of vaccination.
    The page also shows the averages of the first and second doses across NSW.

# Application outline 
- An outline on our aims, target audience and data source.
    
    ## What we Aimed for but had no time:
    -   First of all, we cannot validate the vaccination status of our clients as we do not have government approval and time to implement this particular feature. 
    -   Secondly, we wanted to make sure user’s will also be able to book for a vaccination and also input for doctors administering the jab, but due to time complexity it might not be achievable by the end of the semester. 
    -   Thirdly, we will not allow users to post comments to minimize the risks of SQL injection attacks and similar. 
    -   Finally, we want to implement where users can find local vaccination centers by searching by post code but we don’t have time to manage another database and create extra methods and scripts to handle this. If we have time in our scope we hope to add this feature in.
        Other features we would like to include: 
    -   If the vaccine is not administered already, the information for the current booking will be displayed.
    -   Users would be able to change the date of the booking for their vaccination appointment and will also be able to delete (cancel) the booking.
    -   The backend tests are not working due to MongoDB databases get deleted everytime the tests run.
        
    ## Target Users
    -   NSW residence and citizens 

    ## Data source
    - COVID - 19 data by LGA has been obtained directly from NSW Health on 2nd October 2021. 
      Source: https://www.health.nsw.gov.au/Infectious/covid-19/Pages/stats-nsw.aspx?fbclid=IwAR0xj5WRy8G3MaI_jIjUqULDdGXtoJpGwgC5Z71zrxseOF4Yt3QEzradgc8#vaccine
    - User Data: Due to restrained access from NSW Health to protect the confidentiality of the residents, their personal data cannot be disclosed. The user data used in this         project is manually generated using the list of Top 20 Names in Australia, and LGA has been assigned to individual User randomly.

# MVP 
What we have implemented so far: 
-   Login: User Authentication into the database to display the personal information and vaccination status
-   Live interaction with MongoDB database to display the changes requested by the user in real time. 
-   Be able to submit a booking for vacination in our application. Only when user is logged in.  
-   Get the information of Vaccination administered, eg: the brand, date of 1st dose etc. only when user is logged in. Able to download PDF of their user vaccination information.
-   Users will be able to provide the website administrator with feedback about their website experience in the form of reactions.
-   Coordination between front end and back end in the realtime for status update.
-   Home page displays top ten NSW vaccination status. 

# Our Next Step
For our next step we would need to connect the booking form to send requests to the backend server. In the frontend the booking form will need to be able to send the form data to the server. We will need to be able to track how many vaccination the user had so far and change the booking form title to, "first dose", "second does'', "booster shots", etc. and add some conditions to only allow the second shot booking to only be able to pick the same vaccine they used in the first dose. We may like to better display the home page data for better user experience, using CSS or some form of graphs. Most of the ideas mentioned above in "What we Aimed for but had no time" we would like to complete. However, just for the next step we would like to tackle the booking and homepage CSS first. For the next step of the tests if we got time, we will fix the backend tests to make it work normally, same as our application does. On top of that, we will fix the problem of width and height of the download as PDF function.

# Frontend Information
- A custom designed CSS will be used throughout the project for better integration and functionality.

    ## Project Script Files
        - '/src/components/'
            - '/bookings.js'
                User booking form, to book vacination.
            - '/products.js' this file name will be changed in the future to something like NSWvaccinations
                We use this to display the top ten highest vaccination regions in NSW on the home page.
            - '/Feedback.js' 
                We use this to show all the feedbacks we get from our users. To prevent injection attacks, we have decided to only allow users to choose an option that best describes their thoughts of our website.
            -  '/LoginForm.js'
                This manages the user login form.
            -  '/UserInfo.js' 
                We use this to display the user's vaccination status. This includes name, location, vaccine name, vaccination status, first and second dose data.
        - '/src/services'
             This is where we manage the data request to the backend server. We use Axios to GET, POST, PUT, DELETE.
            - '/Vaccinations.js'
                - GET: this at the moment get the vaccination rates in NSWs
            - '/Login.js'
                - POST: login post, send login request
                - POST: logout post, verify the user is the user before logout
            - '/UserData'
                - POST: POST to verify the user and get the user's vaccination data
        - '/src/App.css'
            This is the file that manages the CSS for the front end
        - '/src/App.js'
            Gets data from server and returns the router links to different pages, switches between the links.
        - 'src/setupTest.js'
            we will set up test and manage for the front end here.
        - 'src/logo.png'
            This is Macquarie University logo. This logo is used in '/components/UsersInfo.js'


# Backend Information
- Mongo DB will be primarily used as our database for the information on vaccine status for users as well as for the Vaccination percentage across NSW
- Custom designed Mongo DB API has been immplemented (vaccine.js) to help us in establishing the initial database
- .env file is used to authenticate to MongoDB database
- ingestdb.js has been implemented to load the data into the MongoDB database.

    ## Project Script Files 
        -   '/server' This is the location for our backend server code. We are using express server.
        -   '/server/server.js' This file imports the '/server/app.js' file. This also tells the server to use port 3001.
        -   '/server/app.js' This file imports the '/controllers/api.js' file. This sets up the express, cors, api routers, and in the future the tests.
        -   '/controllers/api.js' This is where all the API routers are controlled:
            -   GET : at the moment we are geting vaccination rates in nsw from our own mongoDB
            -   POST : handles user login
            -   POST : handles user authentication for login and geting user vaccination data.
        -   '/models/vaccine.js' This connects to the mongoDB with mongoose. We are currently geting the vaccination data in NSW from our own data clutch in our MongoDB.
        -   'server/ingestdb.js' This helps us populate the static data from userVaccinationData.json and the vaccine.json in to our mongoDB.

# SCREENSHOTS 
We have created a video about our web application and put it in the '/SCREENSHOTS' folder. 



