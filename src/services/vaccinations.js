import axios from 'axios'
const baseUrl = 'http://localhost:3001/api'

// let token = null 

// const setToken = (newToken) => {
//     token = `bearer ${newToken}`
// }

const getAll = () => {
    const request = axios.get(baseUrl + '/vaccinations')
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

export default {getAll,}
    
    // createProduct, updateProduct, deleteProduct, setToken}