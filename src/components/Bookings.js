/* eslint-disable react/prop-types */

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'
import { useForm } from "react-hook-form";
//https://react-hook-form.com/get-started
// Datepicker from https://www.npmjs.com/package/react-datepicker
// https://react-select.com/styles
// https://react-select.com/home
//https://react-hook-form.com/get-started
//https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_checkbox


const Bookings = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

  
  
    const [myDate, setMyDate] = useState(new Date());
    const choices = [
        { value: 'Pfizer', label: 'Pfizer' },
        { value: 'AstraZeneca', label: 'AstraZeneca' }
      ]
         
      const customStyles = stateValue => ({
        control: base => ({
          ...base,
          height: 35,
          minHeight: 35
        }),
        option: provided => ({
            ...provided,
            color: 'black'
          }),
          
      });
      
    return (
        <div className="bookingform" >
          <div className="question">
            <DatePicker selected={myDate} onChange={(date) => setMyDate(date)} />
          </div>
         <div className="question">
            <Select  styles={customStyles}  options={choices}/>
         </div>
                  
          <form onSubmit={handleSubmit(onSubmit)}>
              
              <div className="question"> 
                <input type="checkbox" />
                <label htmlFor="1"> Have you had an allergic reaction to a previous dose of a COVID-19 vaccine?</label>
                <p> </p>
              </div>
              <div className="question"> 
              <input type="checkbox" />
                <label htmlFor="2"> Have you had anaphylaxis to another vaccine or medication?</label>
                <p> </p>
              </div>
              <div className="question"> 
              <input type="checkbox" />
                <label htmlFor="3"> Have you had COVID-19 before?</label>
                <p> </p>
              </div>
              <div className="question"> 
              <input type="checkbox" />
                <label htmlFor="4"> Do you have a bleeding disorder?</label>
                <p> </p>
              </div>
              <div className="question"> 
              <input type="checkbox" />
                <label htmlFor="5"> Do you take any medicine to thin your blood (an anticoagulant therapy)?</label>
                <p> </p>
              </div>
              <div className="question"> 
              <input type="checkbox" />
                <label htmlFor="6"> Do you have a weakened immune system (immunocompromised)?</label>
                <p> </p>
              </div>
              <div className="question"> 
              <input type="checkbox" />
                <label htmlFor="7"> Are you pregnant? *</label>
                <p> </p>
              </div>
              <div className="question"> 
              <input type="checkbox" />
                <label htmlFor="8"> Have you been sick with a cough, sore throat, fever or are feeling sick in another way? </label>
                <p> </p>
              </div>
              <div className="question"> 
              <input type="checkbox" />
                <label htmlFor="9"> Have you had a COVID-19 vaccination before?</label>
                <p> </p>
              </div>
              <div className="question"> 
              <input type="checkbox" />
                <label htmlFor="10">Have you received any other vaccination in the last 7 days?</label>
                <p> </p>
              </div>
              <div className="question"> 
              <input type="checkbox" />
                <label htmlFor="11"> Have you ever been diagnosed with capillary leak syndrome?</label>
                <p> </p>
              </div>
              <div className="question"> 
              <input type="checkbox" />
                <label htmlFor="13"> Have you ever had cerebral venous sinus thrombosis? *</label>
                <p> </p>
              </div>
              <div className="question"> 
              <input type="checkbox" />
                <label htmlFor="14">Have you ever had heparin-induced thrombocytopenia? *</label>
                <p> </p>
              </div>
              <div className="question"> 
              <input type="checkbox" />
                <label htmlFor="15"> Have you ever had blood clots in the abdominal veins (splanchnic veins)? *</label>
                <p> </p>
              </div>
              <div className="question"> 
              <input type="checkbox" />
                <label htmlFor="16"> Have you ever had antiphospholipid syndrome associated with blood clots? *</label>
                <p> </p>
              </div>
              <div className="question"> 
              <input type="checkbox" />
                <label htmlFor="17"> Are you under 60 years of age? *</label>
                <p> </p>
              </div>
              <div className="question"> 
                <p>Other health conditions</p>
                <input {...register("Health Conditions")} />
              </div> 
              <div className="submit">
                <input type="submit" value="Submit"/>
              </div>

          </form>
          <p> </p>
          <p> </p>

        </div>

    );
       

            
    }


  export default Bookings