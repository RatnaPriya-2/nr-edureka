import React, { Component } from "react";
import Header from "../Header";
import "../../Styles/Register.css";

const url = "http://localhost:7000/auth/register";

class Register extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json("resgistration successful");
      })
      .then((data) => {
        this.props.history.push("/login");
      })
      .catch((error) => {
        console.error("Error during fetch:", error);
        // Handle error here, e.g., show error message to user
      });
  };

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <div className="panel panel-info">
            <div className="panel-heading">
              <h4 className="pt-5 register">Register</h4>
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="form-group col-md-6">
                  <label
                    for="fname"
                    className="control-label  register-label ps-0"
                  >
                    FirstName
                  </label>
                  <input
                    className="form-control input-form-text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label
                    for="email"
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
                    for="phone"
                    className="control-label register-label ps-0"
                  >
                    Phone
                  </label>
                  <input
                    className="form-control input-form-text"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label
                    for="password"
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
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
