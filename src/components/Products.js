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
              <li key={vaccine.id}>
                <Link to={`/vaccines/${vaccine.id}`}>{vaccine.NameOfTheState}, {vaccine.NameOfTheTerritory}, {vaccine.TotalPopulation},
                 First Dose: {vaccine.FirstDoseVaccinationPercentage} and Second Does: {vaccine.SecondDoseVaccinationPercentage}
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