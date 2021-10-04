import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm'
import productService from './services/products'
import {
  BrowserRouter as Router,
  Switch, Route, Link, Redirect
} from "react-router-dom"
const padding = {
  padding: 20,
  margin: 20,
  color: 'black',
  fontSize: 20
}
function App() {

  const [user, setUser] = useState(null)
  const [vaccines, setVaccines] = useState([])

  useEffect(() => {
    console.log('effect')
    productService
      .getAll()
      .then (initialProducts => {
        console.log('promoise fulfilled')
        setVaccines(initialProducts)
      })
  }, [])





  return (
    <div className="App">
   <Router>
 
      <div className="u-pull-right">
        <Link style={padding} to="/">home</Link>
        <Link style={padding} to="/vaccines">vaccines</Link>
        <Link style={padding} to="/login">login</Link>
        <Link style={padding} to="/profile">profile</Link>
      </div>

      <Switch>
            {/* <Route path="/products/:id">
              <Product products={products} />
            </Route> */}
            <Route path="/vaccines">
              {/* <Products products={products} user={user} updateProductHandler={updateProductHandler} /> */}
            </Route>
            <Route path="/login">
              {/* <LoginForm user={user} userLoginHandler={userLoginHandler}/> */}
              <LoginForm user={user} setUser={setUser}/>
            </Route>
            {/* <Route path="/users">
              {user ? <Users /> : <Redirect to="/login" />}
            </Route> */}
            {/* <Route path="/">
              <Home user={user}/>
            </Route> */}
        </Switch>







      </Router>
   


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
