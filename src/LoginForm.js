/* eslint-disable react/prop-types */
import React, {useState} from 'react'
import loginService from './Action.js'
// this file was taken from https://github.com/MQCOMP3120-2020/likes/tree/master/src/components


const LoginForm = ({user, setUser}) => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const formHandler = (event) => {
      event.preventDefault()

      loginService.login({name, password})
        .then(data => {
            console.log("Success:", data)
            setUser(data)
        }
        )
        .catch(error => {
            console.log("Error:", error)
        })
    }

    const logoutHandler = (event) => {
        event.preventDefault()

        loginService.logout({name, password})
            .then(data => {
                console.log("Log Out:", data)
                setUser(null)
            })
            .catch(error => {
                console.log("Error:", error)
            })
    }

    if (user) {
        return (
            <div className="row">
                <p>Logged in {user.name}</p>
                <form onSubmit = {logoutHandler}>
                    <div>
                        <input type="submit" value="Log Out"/>
                    </div>
                </form>
            </div>
        )
    } else {
        return (
            <form onSubmit={formHandler}>
                    <div className="row">
                        <div className="four columns">
                            <label htmlFor="name">Name</label>
                            <input id="name" type="text" name="name" onChange={e => setName(e.target.value)} />
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