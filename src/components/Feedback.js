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
                        <div style={{ height: 500, width: 800, background: 'white', textAlign: 'center', color: 'black' }} >
                            <ul className="vaccination-list">
                                <li> Very Satisfied: {Feedback.verySatisfied} <button> 5</button> </li>
                                <br></br>
                                <li> Satisfied: {Feedback.satisfied} <button> 4 </button></li>
                                <br></br>
                                <li> Neutral: {Feedback.neutral} <button> 3 </button></li>
                                <br></br>
                                <li> Unsatisfied: {Feedback.unsatisfied} <button> 2 </button></li>
                                <br></br>
                                <li> Very Unsatisfied: {Feedback.veryUnsatisfied} <button> 1 </button> </li>
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
