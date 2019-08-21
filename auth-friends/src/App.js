import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Login from "./Components/Login.js"
import PrivateRoute from "./Components/PrivateRoute.js"
import MyFriends from "./Components/MyFriends"

function App() {
  return (
    <Router>
      <div className="App">
        <p> The begining of my app </p>
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
        <Link to="/protected"> Friends </Link>
        <div>
          <Route exact path="/login" component={Login} />
          <Route path="/logout" component={Login} />
          <PrivateRoute exact path="/protected" component={MyFriends} />
        </div>
      </div>
    </Router>
  )
}

export default App
