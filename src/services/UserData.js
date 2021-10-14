import axios from 'axios'
const baseURL = "/api/user/"

const getUserData = ({user}) => {
    if(!user) {
        return new Promise(() => null)
    }
    const config = {headers: {Authorization: "Bearer " + user.token}}
    return axios.post("/api/user/vaccines-data", user, config)
                .then(response => response.data)
}

export default {getUserData}