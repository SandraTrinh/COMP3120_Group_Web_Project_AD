/* eslint-disable react/prop-types */
import React, {useState} from 'react'
import axios from 'axios'

// this file was taken from https://github.com/MQCOMP3120-2020/likes/tree/master/src/components


const LoginForm = ({user, setUser}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const formHandler = (event) => {
      event.preventDefault()
      const login = ({username, password}) => {

        return axios.post('/auth/login', {username, password})
                    .then(response => response.data)
    }


    login({username, password})
        .then(data => {
            console.log("Success:", data)
            setUser(data)
        }
        )
        .catch(error => {
            console.log("Error:", error)
        })
    }

    if (user) {
        return (
            <div className="row">
                <p>Logged in {user.name}</p>
            </div>
        )
    } else {
        return (
            <form onSubmit={formHandler}>
                    <div className="row">
                        <div className="four columns">
                            <label htmlFor="username">Username</label>
                            <input id="username" type="text" name="username" onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div className="four columns">
                            <label htmlFor="password">Password</label>
                            <input id="password" name="password" type="password" onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="three columns">
                            <input type="submit" value="Login"/>
                        </div>
                    </div>
            </form> 
            )
    }
}

  export default LoginForm