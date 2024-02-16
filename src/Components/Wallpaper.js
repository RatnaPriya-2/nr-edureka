import React, { Component } from "react";
import "../Styles/Home.css";

const lurl = "http://localhost:5000/locations";
const rurl = "http://localhost:5000/restaurants?state_id=";

class Wallpaper extends Component {
  constructor() {
    super();
    this.state = {
      locations: "",
      restaurants: "",
    };
  }

  renderCity = (data) => {
    console.log(data);
    if (data) {
      return data.map((item) => {
        return (
          <option key={item._id} value={item.state_id}>
            {item.state}
          </option>
        );
      });
    }
  };

  renderRest = (data) => {
    console.log(data);
    if (data) {
      return data.map((item) => {
        return (
          <option key={item._id} value={item.restaurant_id}>
            {item.restaurant_name}
          </option>
        );
      });
    }
  };

  handleCity = (event) => {
    const state_Id = event.target.value;
    console.log(state_Id);
    fetch(`${rurl}${state_Id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ restaurants: data });
        console.log(data);
      });
  };

  render() {
    return (
      <div>
        <div className="container-fluid  background-img">
          <div className="nav-bar">
            <ul className="nav justify-content-end ps-3 pt-4 pe-5">
              <li className="nav-item">
                <a className="login pe-4 opacity-80" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item ">
                <a className="createacc p-2 opacity-80 rounded-1" href="#">
                  Create an account
                </a>
              </li>
            </ul>
          </div>
          <div className="row" />
          <div className="text-center mt-5 d-flex align-items-center justify-content-center mx-auto rounded-circle brand-logo">
            <p className="my-0">e!</p>
          </div>
          <div>
            <p className="text-center mt-4 mb-4 text-white description">
              Find the best restaurants, cafés, and bars
            </p>
          </div>
          <div className="input-search">
            <div className="col-sm-2 col-md-1 col-lg-2 col-xl-2 col-xxl-2" />
            <div className=" row col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3 ms-4 mb-4">
              <select
                className=" rounded-0 tile-item border-0 p-3 me-2"
                placeholder="Please type a location"
                onChange={this.handleCity}
              >
                <option>SELECT LOCATION</option>
                {this.renderCity(this.state.locations)}
              </select>
            </div>
            <div className="search row col-10  col-sm-10 col-md-5 col-lg-4 col-xl-4 ms-4 mb-4">
              <select
                placeholder="search for restaurants"
                className="pt-3 pe-3 pb-3 me-2 border border-0"
              >
                <option>SELECT RESTAURANTS</option>
                {this.renderRest(this.state.restaurants)}
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    fetch(`${lurl}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => this.setState({ locations: data }));
  }
}

export default Wallpaper;
