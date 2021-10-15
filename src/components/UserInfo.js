import React, {useState, useEffect} from 'react'

import {Link} from 'react-router-dom'

import UserService from '../services/UserData.js'

const UserInfo = ({user}) => {
    const [userData, setMyData] = useState(null)

    useEffect(() => {
        UserService.getUserData({user})
        .then(data => {
            setMyData(data)
            //console.log("data is", data)
        })
        .catch(error => {
            console.log("Error:", error.response.data)
        })
    }, [])

    if(user!=null) {
        if(userData !=null) {
            return(
                <div className="vaccination col-12">
        
                    <ul className="vaccination-list">
                    <li> Full Name: {userData.name}     </li>
                    <li> Territory Name: {userData.territoryName}     </li>
                    <li> Vaccine name: {userData.vaccineName}     </li>
                    <li> Vaccination status: {userData.status}     </li>
                    <li> First Dose Date: {userData.FirstDose}     </li>
                    <li> Second Dose Date: {userData.SecondDose}     </li>
        
                    
                    </ul>
        
                </div> 
                )
        } else {
            return(
                <div> 
                <p> Loading ...</p>
                </div>
            )
        }
       
    } else {
       
        return(
            <div> 
                 <Link className="App-link" to="/login">Click me to log in</Link>
            </div>
        )

    }

}
export default UserInfo