/* Inspired by the following sources */
/* https://stackoverflow.com/questions/5703552/how-can-i-center-text-horizontally-and-vertically-inside-a-div-block */
/* https://stackoverflow.com/questions/62158078/css-animation-keyframe-percentage-issue */
import React from 'react'

import {Link} from 'react-router-dom'

const Products = ({vaccines}) => {

  //var averageVaccines = vaccines;
  var sum1 =0 ;
  var sum2 =0 ;
  
  for (var i =0; i<vaccines.length; i++) {
      if(!isNaN(vaccines[i].FirstDoseVaccinationPercentage)){
       sum1+=parseFloat(vaccines[i].FirstDoseVaccinationPercentage)
      }
      if(!isNaN(vaccines[i].SecondDoseVaccinationPercentage!=null)){
       sum2+=parseFloat(vaccines[i].SecondDoseVaccinationPercentage)
      }
  }


  var averageFirstDose = Math.round(sum1/vaccines.length) + "%"
  var averageSecondDose = Math.round(sum2/vaccines.length) + "%"

  
    return(
      <div className="home-page col-12">
        <div className="vaccination-average col-6 ">
          <div className="flex-buttons vaccination-average col-6">
       
            <button> <h2> Total Second Dose : {averageSecondDose}  </h2> </button>
        
            <button> <h2>  Total First Dose : {averageFirstDose} </h2> </button>
            <div className="imgs">
              <div className="temp"></div>
            </div>
            <div className="clearfix"></div>
            </div>
            <div className="clearfix"></div>
          </div>
        <div className="vaccination col-6">
          <h1> Top 10 Regions in NSW in terms of 1st Dose of Vaccinations </h1>
          <ul className="vaccination-list">
              {vaccines.map(vaccine => 
                <li key={vaccine.id} className="vaccine-region">
                  <Link to={`/vaccines/${vaccine.id}`}>
                    <ul>
                      <li className="NameOfTheState">{vaccine.NameOfTheState}, {vaccine.NameOfTheTerritory}</li>
                      <li>Population: {vaccine.TotalPopulation}</li>
                    </ul>
                    <ul>
                      <li>First Dose: {Math.round(vaccine.FirstDoseVaccinationPercentage)}%</li>
                      <li>Second Does: {Math.round(vaccine.SecondDoseVaccinationPercentage)}%</li>
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
        <div className="clearfix"></div>
      </div>
      
    )
}

export default Products