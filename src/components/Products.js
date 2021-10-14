import React from 'react'

import {Link} from 'react-router-dom'

import productService from '../services/Vaccinations'

const Products = ({vaccines}) => {

  var averageVaccines = vaccines;
  var sum1 =0 ;
  var sum2 =0 ;
  
  for (var i =0; i<vaccines.length; i++) {


      if(!isNaN(vaccines[i].FirstDoseVaccinationPercentage)){
       sum1+= parseFloat(vaccines[i].FirstDoseVaccinationPercentage)
      }
      if(!isNaN(vaccines[i].SecondDoseVaccinationPercentage!=null)){
       sum2+=parseFloat(vaccines[i].SecondDoseVaccinationPercentage)
      }
      
      
  }


  var averageFirstDose = sum1/vaccines.length + "%"
  var averageSecondDose = sum2/vaccines.length + "%"

  
    return(
      <div className="vaccination col-12">
        <h1> Top 10 Regions in NSW in terms of 1st Dose of Vaccinations </h1>
         <h3> Average First Dose </h3>
        <p> {averageFirstDose} </p>
        <h3> Average Second Dose </h3>
        <p> {averageSecondDose} </p>
        <ul className="vaccination-list">
            {vaccines.map(vaccine => 
              <li key={vaccine.id} className="vaccine-region">
                <Link to={`/vaccines/${vaccine.id}`}>
                  <ul>
                    <li className="NameOfTheState">{vaccine.NameOfTheState}, {vaccine.NameOfTheTerritory}</li>
                    <li>Population: {vaccine.TotalPopulation}</li>
                  </ul>
                  <ul>
                    <li>First Dose: {vaccine.FirstDoseVaccinationPercentage}</li>
                    <li>Second Does: {vaccine.SecondDoseVaccinationPercentage}</li>
                  </ul>                
                </Link>
                {/* {
                  user !== null
                  ? <Button text="Delete" eventHandler={() => deleteProduct(product.id)}/> 
                  : null
                } */}
              </li>
            )}
        </ul>
        {/* {user !== null
          ?<ProductForm products={products} updateProductHandler={updateProductHandler}/>
          :null
        } */}
      </div> 
    )
}

export default Products