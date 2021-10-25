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


const Bookings = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); // watch input value by passing the name of it
  
  
    const [myDate, setMyDate] = useState(new Date());
    const choices = [
        { value: 'Pfizer', label: 'Pfizer' },
        { value: 'AstraZeneca', label: 'AstraZeneca' }
      ]
         
      const customStyles = stateValue => ({
        control: (provided, state) => ({
          ...provided,
          backgroundColor: stateValue ? "gray" : "white",
          boxShadow: "none"
        }),
        option: provided => ({
            ...provided,
            color: 'black'
          }),
          
      });
      
    return (
        <div >
      <DatePicker selected={myDate} onChange={(date) => setMyDate(date)} />
      <Select  styles={customStyles}  options={choices}      
      />
     

     <form onSubmit={handleSubmit(onSubmit)}>
         <p>Comments</p>
      <input {...register("firstName")} />

      <input type="submit" />
    </form>
    </div>

    );
       

            
    }


  export default Bookings