import React from 'react'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import {
  BrowserRouter as Router,
  Redirect, 
  Switch, 
  Route} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact path="/" to="/login" ></Redirect>
          <Route path="/login" component={Login}></Route>
          <Route path="/home" component={Home}></Route>
        </Switch>
      </Router>
    )
  }
}
export default App