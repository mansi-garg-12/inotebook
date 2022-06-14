import React from 'react'


import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
      <>
          <Router>
              <Navbar/>
              <Switch>
                  <Route exact path="/"><Home /></Route>
                  <Route exact path="/about"><About /></Route>
                  <Route exact path="/Login"><Login/></Route>
              </Switch>
          </Router>



      </>
  )
}

export default App