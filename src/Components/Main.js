import React, { Component } from "react";
import { Link } from "react-router-dom";

const url = "http://localhost:7000/auth/userInfo";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      userData: "",
    };
  }

  handleLogout = () => {
    sessionStorage.setItem("loginStatus", "LoggedOut");
    sessionStorage.setItem("userInfo", "");
    sessionStorage.removeItem("Itk");
    this.setState({ userData: [] });
    // this.props.history.push("/login")
  };

  conditionalHeader = () => {
    if (this.state.userData && this.state.userData.name) {
      let data = this.state.userData;

      sessionStorage.setItem("loginStatus", "LoggedIn");
      sessionStorage.setItem("userInfo", JSON.stringify(data));
      console.log(data);
      return (
        <>
          {/* <div className="nav">
            <Link to="/login">Hi {data.name}</Link>
            <Link to="/login" className="account" onClick={this.handleLogout}>
              Logout
            </Link>
          </div> */}

          <div className="nav-bar">
            <ul className="nav justify-content-end ps-3 pt-4 pe-5">
              <li className="nav-item">
                <Link className="login pe-4 opacity-80" >
                  Hi {data.name}
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="createacc p-2 opacity-80 rounded-1"
                  to="/login"
                  onClick={this.handleLogout}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="nav-bar">
            <ul className="nav justify-content-end ps-3 pt-4 pe-5">
              <li className="nav-item">
                <Link className="login pe-4 opacity-80" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="createacc p-2 opacity-80 rounded-1"
                  to="/register"
                >
                  Create an account
                </Link>
              </li>
            </ul>
          </div>
          
        </>
      );
    }
  };

  render() {
    return (
      <div>
        {this.conditionalHeader()}
      </div>
    );
  }

  componentDidMount() {
    fetch(url, {
      method: "GET",
      headers: {
        "x-access-token": sessionStorage.getItem("Itk"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ userData: data });
      });
  }
}

export default Main;
