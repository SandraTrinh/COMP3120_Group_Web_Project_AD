import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import productService from '../services/Vaccinations.js'


const Feedback = ({Feedback, setFeedBack}) => {
  
    useEffect(() => {
        console.log('effect')
        productService
          .getFeedback()
          .then (initialProducts => {
            
            setFeedBack(initialProducts)
            console.log(initialProducts)
          })
          .catch(error => {
            console.log("Error:", error.response.data)
            })
      }, [])

if(Feedback.length != 0) {

            return (
                <div className="vaccination col-12">
                    <div className="App">

                        <div style={{ height: 1200, width: 1000, background: 'black' }} >
                            <ul className="vaccination-list">
                            
                                <li>  I am very satisfied: {Feedback[0].verySatisfied} <button> Vote</button> </li>
                                <li> I am satisfied: {Feedback[0].satisfied} <button> Vote</button></li>
                                <li> I am indifferent: {Feedback[0].neutral} <button> Vote</button></li>
                                <li> I am not happy: {Feedback[0].unsatisfied} <button> Vote</button></li>
                                <li> I hate this website: {Feedback[0].veryUnsatisfied} <button> Vote</button> </li>


                            </ul>
                        </div>
                    </div>
                </div>

            )
        } else {
            return (
                <div className="profile-log-in col-12">
                <h3>Website Feedback</h3>
                <Link className="App-link" to="/login">Click me to log in</Link>
            </div>
            )
        }
    }

export default Feedback
