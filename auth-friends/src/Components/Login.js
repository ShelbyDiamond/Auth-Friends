import React from "react"

class Login extends React.Component {
    state = {
        isLoading: {
          username: '',
          password: ''
        }
      };

      handleChange = error => {
        this.setState({
            isLoading: {
            ...this.state.isLoading,
            [error.target.name]: error.target.value
          }
        });
      };
    
      login = error => {
        error.preventDefault();
        axios
          .post('http://localhost:5000/api/login', this.state.isLoading)
          .then(response => {
            localStorage.setItem('token', response.data.payload);
          })
          .catch(error => console.log(error.response));
      };
    
      render() {
        return (
          <div>
            <form onSubmit={this.login}>
              <input
                type="text"
                name="username"
                value={this.state.isLoading.username}
                onChange={this.handleChange}
              />
              <input
                type="password"
                name="password"
                value={this.state.isLoading.password}
                onChange={this.handleChange}
              />
              <button>Log in</button>
            </form>
          </div>
        );
      }
    }
    
    export default Login;
    
    return <div />
}

export default Login
