/* eslint-disable react/prop-types */
import React, {useState} from 'react'
import loginService from './Action.js'
// this file was taken from https://github.com/MQCOMP3120-2020/likes/tree/master/src/components


const LoginForm = ({user, setUser}) => {

    const [username, setusername] = useState('')
    const [password, setPassword] = useState('')

    const formHandler = (event) => {
      event.preventDefault()

      loginService.login({username, password})
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

        loginService.logout({username, password})
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
            <div className="login-container">
                <p>Logged in {user.username}</p>
                <form onSubmit = {logoutHandler}>
                    <div className="logout-button">
                        <input type="submit" value="Log Out"/>
                    </div>
                </form>
            </div>
        )
    } else {
        return (
            <div className="login-container">
                <form onSubmit={formHandler}>
                    <div >
                        <div className="loginform-name">
                            <label htmlFor="username">UserName </label>
                            <input id="username" type="text" name="username" placeholder="Your username..." onChange={e => setusername(e.target.value)} />
                        </div>
                        <div className="loginform-password">
                            <label htmlFor="password">Password </label>
                            <input id="password" name="password" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="loginform-submit">
                            <input type="submit" value="Login"/>
                        </div>
                    </div>
                </form> 
            </div>
            )
    }
}

  export default LoginForm