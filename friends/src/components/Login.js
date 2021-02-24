import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";


class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        },
        error: "",
        isLoading: ""
    }
    
    handleChange = (e) => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value,
          },
          error: "",
        });
      };

    handleLogin = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/api/login", this.state.credentials)
            .then((res) => {
                console.log(res)
                localStorage.setItem("token", JSON.stringify(res.data.payload))
                this.props.history.push("/friends")
            })
            .catch((err) => this.setState({ error: err }));

    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleLogin}>
                    <label /> Username
                    <input 
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <label /> Password
                    <input 
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;