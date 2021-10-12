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
            <div className="login-container">
                <p>Logged in {user.name}</p>
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
                            <label htmlFor="name">Name </label>
                            <input id="name" type="text" name="name" placeholder="Your name..." onChange={e => setName(e.target.value)} />
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