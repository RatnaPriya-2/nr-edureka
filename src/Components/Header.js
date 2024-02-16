import React, { Component } from "react";
import { Link } from "react-router-dom";

const url = "http://localhost:7000/auth/userInfo";

class Header extends Component {
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
          <div className="nav">
            <Link>Hi {data.name}</Link>
            <Link to="/login" className="account" onClick={this.handleLogout}>
              Logout
            </Link>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="nav">
            <Link to="/login">Login</Link>
            <Link to="/register" className="account">
              Create an account
            </Link>
          </div>
        </>
      );
    }
  };

  render() {
    return (
      <div>
        <header>
          <div className="logo-home-section">
            <p className="main-logo">e!</p>
            <Link to="/">
              <button className="home-btn">Home</button>
            </Link>
          </div>
          {this.conditionalHeader()}
        </header>
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

export default Header;
