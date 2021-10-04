import React, {useState, useEffect} from 'react'
import './App.css';
import LoginForm from './LoginForm'
import productService from './services/vaccinations.js'
import Products from './components/Products.js'
import {
  BrowserRouter as Router,
  Switch, Route, Link, Redirect
} from "react-router-dom"

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
        console.log(vaccines)
      })
  }, [])

console.log(vaccines)



  return (
    <div className="App">
      
       <Router>
        <header className="col-12">
          <div className="Navbar col-12">
            <Link className="App-link" to="/">home</Link>
            <Link className="App-link" to="/vaccines">vaccines</Link>
            <Link className="App-link" to="/login">login</Link>
            <Link className="App-link" to="/profile">profile</Link>
          </div>
        </header>
    
        <body className="App-body">
            <Switch>
                {/* <Route path="/products/:id">
                  <Product products={products} />
                </Route> */}
                <Route path="/vaccines">
                  {/* <Products vaccines={vaccines} /> */}
                </Route>
                <Route path="/login">
                  {/* <LoginForm user={user} userLoginHandler={userLoginHandler}/> */}
                  <LoginForm user={user} setUser={setUser}/>
                </Route>
                {/* <Route path="/users">
                  {user ? <Users /> : <Redirect to="/login" />}
                </Route> */}
                <Route path="/">
                <Products vaccines={vaccines} />
                </Route>
            </Switch>
          </body> 
        </Router>
    </div>
  );
}

export default App;
