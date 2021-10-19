import React, {useState, useEffect} from 'react'
import './App.css';
import LoginForm from './LoginForm'
import productService from './services/Vaccinations.js'
import Products from './components/Products.js'
import UserInfo from './components/UserInfo.js'
import Feedback from './components/Feedback'
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
      
      })
  }, [])
  const [feedBack, setFeedBack] = useState([])



vaccines.sort((a, b) => (a.FirstDoseVaccinationPercentage < b.FirstDoseVaccinationPercentage) ? 1 : -1)
var vaccinesToShow=[];
vaccinesToShow = vaccines.slice(0,10)


  return (
    <div className="App">
      
       <Router>
        <header className="col-12">
          <div className="Navbar col-12">
            <Link className="App-link" to="/">Home</Link>
            <Link className="App-link" to="/vaccines">Profile</Link>
            <Link className="App-link" to="/login">Login</Link>
            <Link className="App-link" to="/feedback">Reviews</Link>
            {/* <Link className="App-link" to="/profile">Profile</Link> */}
          </div>
        </header>
    
        <div className="App-body">
            <Switch>
                {/* <Route path="/products/:id">
                  <Product products={products} />
                </Route> */}
                <Route path="/vaccines">
                 
                <UserInfo  user={user} />
                  
                </Route>
                <Route path="/login">
                  {/* <LoginForm user={user} userLoginHandler={userLoginHandler}/> */}
                  <LoginForm user={user} setUser={setUser}/>
                </Route>
                <Route path="/feedback">
                <Feedback Feedback={feedBack} setFeedBack={setFeedBack} />
                </Route>


                <Route path="/">
                <Products vaccines={vaccinesToShow} />
                </Route>
                {/* <Route path="/profile">
                    {}
                </Route> */}
            </Switch>
          </div> 
        </Router>
    </div>
  );
}

export default App;
