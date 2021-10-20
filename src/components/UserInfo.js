import React, { useState, useEffect } from 'react'
import Pdf from "react-to-pdf";
import { Link } from 'react-router-dom'
import UserService from '../services/UserData.js'

const ref = React.createRef();

const UserInfo = ({ user }) => {
    const [userData, setMyData] = useState(null)
    useEffect(() => {
        UserService.getUserData({ user })
            .then(data => {
                setMyData(data)
                //console.log("data is", data)
            })
            .catch(error => {
                console.log("Error:", error.response.data)
            })
    }, [])
       console.log(userData)
    if (user != null) {
        if (userData != null) {
            return (
                <div className="profile-logged-in col-12">
                    <div className="App">
                        <h3>Profile</h3>
                        <Pdf targetRef={ref} filename="Vaccine-Cert.pdf">
                            {({ toPdf }) => <button className="profile-download-pdf" onClick={toPdf}>Download Your Digital Certificate</button>}
                        </Pdf>
                        <div className="profile-userdata" style={{ height: 1200, width: 1000}} ref={ref}>
                            <ul className="vaccination-list">
                                <li> Full Name: {userData.name}     </li>
                                <li> Territory Name: {userData.territoryName}     </li>
                                <li> Vaccine name: {userData.vaccineName}     </li>
                                <li> Vaccination status: {userData.status}     </li>
                                <li> First Dose Date: {userData.FirstDose}     </li>
                                <li> Second Dose Date: {userData.SecondDose}     </li>
                            </ul>
                        </div>
                    </div>
                </div>

            )
        } else {
            return (
                <div>
                    <h3>Profile</h3>
                    <p> Loading ...</p>
                </div>
            )
        }

    } else {

        return (
            <div className="profile-log-in col-12">
                <h3>Profile</h3>
                <Link className="App-link" to="/login">Click me to log in</Link>
            </div>
        )

    }
}

export default UserInfo
