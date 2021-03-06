import axios from 'axios'
const baseURL = "/api/"

// to be DELETED we are not using this JS

/**
 * Get a list of all liked things from the api
 * @return {Promise}    Promise that will resolve to the response data
 */
 const getAll = () => {
    return axios.get(baseURL + "vaccine")
                .then(response => response.data)
}

/**
 * 
 * @param {Object} newObject 
 * @param {Object} user - the current logged in user
 * @returns {Promise} Promise that will resolve to the response data
 */
const create = (newObject, user) => {

    if (!user) {
        return new Promise((res) => res(null))
    }
    const config = {headers: {Authorization: "Bearer " + user.token}  }
    
    return axios.post(baseURL + "vaccine", newObject, config)
                .then(response => response.data)
}

/**
 * Update an existing liked thing via the API
 * @param {Object} thing An modified thing {id, content, votes}
 * @returns {Promise} Promise that will resolve to the response data
 */
const update = (thing) => {
    return axios.put(baseURL + "vaccine/" + thing.id, thing)
                .then(response => response.data)
}

export default {login, update, create, getAll, logout}