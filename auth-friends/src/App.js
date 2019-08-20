import React from "react"
import Login from "./Components/Login"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// import PrivateRoute from "./components/PrivateRoute"

function App() {
  return (
    <Router>
      <div>
        <Link to="/login">Login</Link>
        {/* <Link to="/protected">Protected Page</Link> */}
      </div>
      <div>
        <Route path="/login" component={Login} />
        {/* <PrivateRoute exact path="/protected" component={} /> */}
      </div>
    </Router>
  )
}

export default App
