import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm'
import productService from './services/products'

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

    <div className="row">
      <div className="u-pull-right">
        <LoginForm user={user} setUser={setUser}/>
      </div>
    </div>


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
