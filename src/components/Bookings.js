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
    const { register} = useForm();
    const onSubmit =  function (e) {
      e.preventDefault();
      alert('It has been successfully submitted');  
  }

  
  
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
      //<div className="home-page col-12">
        <div className="bookingform" >
          <div className="title">
            <h3>Book your COVID-19 Vaccination</h3>
          </div>
          <div className="question">
            <p>Please Select a Booking Date:</p>
            <DatePicker selected={myDate} onChange={(date) => setMyDate(date)} />
          </div>
         <div className="question">
           <p>Select the vaccine:</p>
            <Select  styles={customStyles}  options={choices}/>
         </div>
                  
          <form onSubmit={onSubmit}>
              <div className="question"> 
              <input type="checkbox" />
                <label htmlFor="3"> Have you had COVID-19 before? pros do a check with user data.</label>
                <p> </p>
              </div>
              <div className="question"> 
              <label htmlFor="1"> Have you had an allergic reaction to a previous dose of a COVID-19 vaccine?</label>
                <select id="allergic" name="allergic" placeholder="Select...">
                  <option value="select">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                
                <p> </p>
              </div>
              <div className="question"> 
                <label htmlFor="2"> Have you had anaphylaxis to another vaccine or medication?</label>
                <select id="anaphylaxis" name="anaphylaxis" placeholder="Select...">
                  <option value="select">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                {/* <input type="text"></input> */}
                <p> </p>
              </div>
              
              <div className="question"> 
                <label htmlFor="4"> Do you have a bleeding disorder?</label>
                <select id="bleedingDis" name="bleedingDis" placeholder="Select...">
                  <option value="select">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <p> </p>
              </div>
              <div className="question"> 
                <label htmlFor="5"> Do you take any medicine to thin your blood (an anticoagulant therapy)?</label>
                <select id="thinBlood" name="thinBlood" placeholder="Select...">
                  <option value="select">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <p> </p>
              </div>
              <div className="question"> 
                <label htmlFor="6"> Do you have a weakened immune system (immunocompromised)?</label>
                <select id="immuneSys" name="immuneSys" placeholder="Select...">
                  <option value="select">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <p> </p>
              </div>
              <div className="question"> 
                <label htmlFor="7"> Are you pregnant? *</label>
                <select id="pregnant" name="pregnant" placeholder="Select..." required>
                  <option value="select">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <p> </p>
              </div>
              <div className="question fluSym"> 
              <div className = "fluSym">
                <label htmlFor="8"> Have you been sick with any of the following flu like symptoms? </label>
                <div>
                  <input type="checkbox" id="cough" name="cough"/>
                  <label htmlFor="cough">Cough</label>
                </div>
                <div>
                  <input type="checkbox" id="soreThroat" name="soreThroat"/>
                  <label htmlFor="soreThroat">Sore Throat</label>
                </div>
                <div>
                  <input type="checkbox" id="fever" name="fever"/>
                  <label htmlFor="fever">Fever</label>
                </div>
                <div>
                  <input type="checkbox" id="otherFluSym" name="otherFluSym"/>
                  <label htmlFor="otherFluSym">Other Flu like symptoms</label>
                </div>
                <div className="clearfix"></div>
                <p> </p>
                </div>
              </div>
              <div className="question"> 
                <label htmlFor="10">Have you received any other vaccination in the last 7 days?</label>
                <select id="otherVac" name="otherVac" placeholder="Select...">
                  <option value="select">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <p> </p>
              </div>
              <div className="question"> 
                <label htmlFor="11"> Have you ever been diagnosed with capillary leak syndrome?</label>
                <select id="capillary" name="capillary" placeholder="Select...">
                  <option value="select">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <p> </p>
              </div>
              <div className="question">
                <label htmlFor="13"> Have you ever had cerebral venous sinus thrombosis? *</label>
                <select id="cerebral" name="cerebral" placeholder="Select..." required>
                  <option value="select">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <p> </p>
              </div>
              <div className="question">
                <label htmlFor="14">Have you ever had heparin-induced thrombocytopenia? *</label>
                <select id="thrombocytopenia" name="thrombocytopenia" placeholder="Select..." required>
                  <option value="select">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <p> </p>
              </div>
              <div className="question"> 
                <label htmlFor="15"> Have you ever had blood clots in the abdominal veins (splanchnic veins)? *</label>
                <select id="clots" name="clots" placeholder="Select..." required>
                  <option value="select">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <p> </p>
              </div>
              <div className="question"> 
                <label htmlFor="16"> Have you ever had antiphospholipid syndrome associated with blood clots? *</label>
                <select id="antiphospholipid" name="antiphospholipid" placeholder="Select..." required>
                  <option value="select">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <p> </p>
              </div>
              <div className="question">
                <label htmlFor="17"> Are you under 60 years of age? *</label>
                <select id="under60" name="under60" placeholder="Select..." required>
                  <option value="select">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <p> </p>
              </div>
              <div className="question otherHealth"> 
                <p>Other health conditions</p>
                <textarea type="text" rows="10" cols="100" {...register("Health Conditions")} />
                {/* 
                
                function showPreview()
                  {
                    var value = $('#writer').val().trim();
                    value = value.replace("<", "&lt;");
                    value = value.replace(">", "&gt;");
                    $('#preview').html(value);
                  }
                  // or
                  function sanitize(text){
                      var sanitized = text.replace("<script>", "");
                      sanitized = sanitized.replace("</script>", "");
                      return sanitized;
                      }
                                  
                */}
              </div> 
              <div className="submit">
                <input type="submit" value="Submit"/>
              </div>

          </form>
          <p> </p>
          <p> </p>

        </div>
      //</div>
      
    );
       

            
    }


  export default Bookings