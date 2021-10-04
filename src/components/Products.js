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
        <h3> NSW </h3>
        <ul>
            {vaccines.map(vaccine => 
              <li key={vaccine.id} className="vaccine-region">
                <Link to={`/vaccines/${vaccine.id}`}>
                  <ul>
                    <li>{vaccine.NameOfTheState}, {vaccine.NameOfTheTerritory}</li>
                    <li>Population: {vaccine.TotalPopulation}</li>
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