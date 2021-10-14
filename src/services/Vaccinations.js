import axios from 'axios'
const baseUrl = '/api/vaccinations'


// const setToken = (newToken) => {
//     token = `bearer ${newToken}`
// }

//get all home page nsw vaccination data
const getAll = () => {
    const request = axios.get(baseUrl
        
        )
    return request.then(response => response.data)
}

// const createProduct = async (newProduct) => {
//     const config = {
//       headers: { Authorization: token },
//     }
//     const response = await axios.post(baseUrl, newProduct, config)
//     return response.data
// }

// const updateProduct = (id, changedProduct) => {
//     const request = axios.put(`${baseUrl}/${id}`, changedProduct)
//     return request.then(response => response.data)
// }

// const deleteProduct = async (id) => {
//     const response =  await axios.delete(`${baseUrl}/${id}`)
//     return response.data
// }

export default {getAll}
    
    // createProduct, updateProduct, deleteProduct, setToken}
