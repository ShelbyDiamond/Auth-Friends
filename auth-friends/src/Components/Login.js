import React from "react"
import axios from "axios"
import Friends from "./MyFriends"

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  }

  handleChange = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    })
  }

  loginCall = event => {
    event.preventDefault()
    axios
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.payload)
      })
      .catch(error => {
        console.log("ERROR", error)
      })
  }

  render() {
    if (this.state.token !== "") {
      return <Friends />
    } else {
      return (
        <div>
          <p> User Login </p>
          <form onSubmit={this.loginCall}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button> Login In </button>
          </form>
        </div>
      )
    }
  }
}

export default Login
