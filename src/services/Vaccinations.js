import axios from 'axios'
const baseUrl = '/api/vaccinations'

//get all home page nsw vaccination data
const getAll = () => {
    const request = axios.get(baseUrl 
        )
    return request.then(response => response.data)
}
const getFeedback = () => {
    const request = axios.get(baseUrl+"/feedback"  
        )
    return request.then(response => response.data)
}

const exportObject = {getAll, getFeedback}

export default exportObject
