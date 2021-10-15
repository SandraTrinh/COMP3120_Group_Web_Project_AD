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

    if (user != null) {
        if (userData != null) {
            return (
                <div className="vaccination col-12">
                    <div className="App">
                        <Pdf targetRef={ref} filename="Vaccine-Cert.pdf">
                            {({ toPdf }) => <button onClick={toPdf}>Download Your Digital Certificate</button>}
                        </Pdf>
                        
                    </div>
                </div>

            )
        } else {
            return (
                <div>
                    <p> Loading ...</p>
                </div>
            )
        }

    } else {

        return (
            <div>
                <Link className="App-link" to="/login">Click me to log in</Link>
            </div>
        )

    }
}

export default UserInfo
