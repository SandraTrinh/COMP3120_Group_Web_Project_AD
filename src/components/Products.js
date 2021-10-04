import React from 'react'

import {Link} from 'react-router-dom'

import productService from '../services/vaccinations'

const Products = ({vaccines}) => {

    // const deleteProduct = (id) => {
    //    productService.deleteProduct(id).then(
    //     returnedData => {
    //       console.log('the returned product is: ', returnedData)
    //       const updatedProducts = products.filter(product => product.id !== id)
    //       updateProductHandler(updatedProducts)
    //     }
    //    )
    // }
  
    return(
      <div className="vaccination col-12">
        <h3> Top 10 Regions in NSW in terms of 1st Dose of Vaccinations </h3>
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