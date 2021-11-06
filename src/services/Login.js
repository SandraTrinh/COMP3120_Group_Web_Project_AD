import axios from 'axios'
const baseURL = "/api/"

/**
 * Send a login request
 * @param {Object} param0 {username, password} 
 * @returns {Promise} Promise that will resolve to the response data
 */
 const login = ({username, password}) => {

    return axios.post(baseURL + "login", {username, password})
                .then(response => response.data)
}

/**
 * Send a logout request
 * @param {Object} param0 {user} this is a user object with user name and token
 * @returns {Promise} Promise that will resolve to the response data
 */
const logout = ({user}) => {
    if(!user) {
        return new Promise(() => null)
    }
    const config = {headers: {Authorization: "Bearer " + user.token}}
    return axios.post(baseURL + "logout", user, config)
                .then(response => response.data)
}

const exportObject = {login, logout}

export default exportObject