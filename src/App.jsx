import React from 'react'
import Home from './components/Home.jsx'
import {BrowserRouter, Route ,Link} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/home">首页</Link>
            </li>
          </ul>
        </div>
        <Route path="/home" component={Home}></Route>
      </BrowserRouter>
    )
  }
}
export default App