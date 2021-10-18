import React, { useState, useEffect } from 'react'


const Feedback = ({Feedback}) => {
  

if(Feedback!=null) {

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
        } 
    }

export default Feedback
