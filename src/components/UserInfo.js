import React, { useState, useEffect } from 'react'
import Pdf from "react-to-pdf";
import { Link } from 'react-router-dom'
import UserService from '../services/UserData.js'
import image from '../logo.png'

const ref = React.createRef();

// This component displays User profile infomation 
const UserInfo = ({ user }) => {
    const [userData, setMyData] = useState(null)
    useEffect(() => {
        UserService.getUserData({ user })
            .then(data => {
                setMyData(data)
            })
            .catch(error => {
                console.log("Error:", error.response.data)
            })
    })
    console.log(userData)
    if (user != null) {
        if (userData != null) {
            return (
                <div className="profile-logged-in col-12">
                    <div className="App">

                        <Pdf targetRef={ref} filename="Vaccine-Cert.pdf">
                            {({ toPdf }) => <button className="profile-download-pdf" onClick={toPdf}>Download Your Digital Certificate</button>}
                        </Pdf>
                        <div className="profile-userdata" ref={ref}>
                            <div>
                                <img src={image} alt="" className="logo"/>
                                <h3>Government of Macquarie University</h3>
                                <h6>Covid 19 Digital Certificate</h6>
                            </div>
                            <table className="customers">
                                <tr>
                                    <td><strong>Full Name</strong></td>
                                    <td>{userData.name}</td>
                                </tr>
                                <tr>
                                    <td><strong>Territory Name</strong></td>
                                    <td>{userData.territoryName} </td>
                                </tr>
                                <tr>
                                    <td><strong>Vaccine name</strong></td>
                                    <td>{userData.vaccineName} </td>
                                </tr>
                                <tr>
                                    <td><strong>Vaccination status</strong></td>
                                    <td>{userData.status} </td>
                                </tr>
                                <tr>
                                    <td><strong>Date of First Dose</strong></td>
                                    <td>{userData.FirstDose} </td>
                                </tr>
                                <tr>
                                    <td><strong>Date of Second Dose</strong></td>
                                    <td>{userData.SecondDose} </td>
                                </tr>
                                <tr>
                                    <td><strong>Accessed At</strong></td>
                                    <td>{new Date().toLocaleString() + ''}</td>
                                </tr>
                            </table>
                            <br></br><br></br><br></br>
                            <div style={{ textAlign: 'left', fontSize: 15, bottom: 0 }}>
                                <h2>Disclaimer:</h2>
                                <p>This certificate shows your COVID-19 vaccination details as reported to the Australian Immunisation Register by
                                    your vaccination provider. It is available because you have received all required COVID-19 vaccinations or you
                                    have a medical contraindication to COVID-19 vaccines.</p>

                                <p>Every effort is made to ensure that the information contained on the Australian Immunisation Register is correct.
                                    The data is based on information provided by vaccination providers and the accuracy of data is dependent on the
                                    quality and timeliness of information provided.</p>

                                <p>If any of the vaccination details shown on the certificate are not correct, please ask your vaccination provider to
                                    provide the correct details. They can call us on 1234 567 890 (call charges may apply).
                                    If you have any questions about this certificate please call the Australian Immunisation Register on 1234 567 890
                                </p>
                            </div>
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
