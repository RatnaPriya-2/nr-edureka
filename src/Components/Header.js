import React, { Component } from 'react'
import "../Styles/Filter.css"

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div>
            <p className="main-logo">e!</p>
          </div>
          <div className="nav">
            <a href="#">Login</a>
            <a className="account" href="#">
              Create an account
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default Header
