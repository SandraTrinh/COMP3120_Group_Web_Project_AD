import React, { useState, useEffect } from 'react'
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

if(Feedback[0] != null || Feedback!=null) {

            return (
                <div className="vaccination col-12">
                    <div className="App">

                        <div style={{ height: 1200, width: 1000, background: 'black' }} >
                            <ul className="vaccination-list">
                            
                                <li>  I am very satisfied: {Feedback.verySatisfied} <button> Vote</button> </li>
                                <li> I am satisfied: {Feedback.satisfied} <button> Vote</button></li>
                                <li> I am indifferent: {Feedback.neutral} <button> Vote</button></li>
                                <li> I am not happy: {Feedback.unsatisfied} <button> Vote</button></li>
                                <li> I hate this website: {Feedback.veryUnsatisfied} <button> Vote</button> </li>


                            </ul>
                        </div>
                    </div>
                </div>

            )
        } 
    }

export default Feedback
