import React, { Component } from "react";
import Header from "../Header"; // Correct import path
import "../../Styles/Register.css";

const url = "http://localhost:7000/auth/login";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "hans@gmail.com",
      password: "1128",
      message: ""
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }); // Correctly set state based on input name
  };

  handleSubmit = () => {
    // method: POST
    // body: data
    // headers: json
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }), // Correctly send email and password in the request body
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.token);
        if (data.auth === false) {
          this.setState({ message: data.token });
        } else {
          sessionStorage.setItem("Itk", data.token);
          this.props.history.push("/");
        }
      });
  };

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <div className="panel panel-warning">
            <div className="panel-heading">
              <h4 className="pt-5 register">Login</h4>
            </div>
            <div className="panel-body">
              <h2 style={{ color: "red", fontSize: "16px" }}>
                {this.state.message}
              </h2>
              <div className="row">
                <div className="form-group col-md-6">
                  <label
                    htmlFor="email"
                    className="control-label register-label ps-0"
                  >
                    Email
                  </label>
                  <input
                    className="form-control input-form-text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label
                    htmlFor="password"
                    className="control-label register-label ps-0"
                  >
                    Password
                  </label>
                  <input
                    className="form-control input-form-text"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <button
                className="btn btn-danger register-btn mt-4"
                onClick={this.handleSubmit}
                // onClick={e => {e.preventDefault(); this.handleSubmit()}}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
