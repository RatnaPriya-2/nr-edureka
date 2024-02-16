import React, { Component } from "react";
import "../../Styles/Details.css";
import Header from "../Header";
import axios from "axios";

const url = "http://localhost:5000";

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      toggle: 1,
      details: "",
    };
  }

  updateToggle = (id) => {
    this.setState({ toggle: id });
  };

  render() {
    let { details } = this.state;
    console.log(details.restaurant_thumb);
    console.log(details.mealTypes && details.mealTypes[0].mealtype_name);

    return (
      <div>
        <div>
          <Header />
          <div className="main">
            <div className="poster">
              <img
                src={details.restaurant_thumb}
                alt={details.restaurant_name}
              />
              <div>
                <button className="gallery">Click to see Image Gallery</button>
              </div>
            </div>

            <div className="m-rest-title">
              <img
                className="m-rest-img"
                src={details.restaurant_thumb}
                alt={details.restaurant_name}
              />
              <p className="rest-title">{details.restaurant_name}</p>
            </div>
            <div className="tabs">
              <div className="display-tabs">
                <li onClick={() => this.updateToggle(1)}>
                  <a href>Overview</a>
                </li>
                <li onClick={() => this.updateToggle(2)}>
                  <a href>Contact</a>
                </li>
              </div>

              <button className="order-btn">Place Online Order </button>
            </div>

            <hr />
            <div
              className={
                this.state.toggle === 1 ? "display-content" : "content"
              }
            >
              <p className="about">About this place</p>
              <p className="cuisine-cost">Cuisine</p>
              <p className="cuisine-cost-desc">
                {details.mealTypes && details.mealTypes[0].mealtype_name} ,{" "}
                {details.mealTypes && details.mealTypes[1].mealtype_name}
              </p>
              <p className="cuisine-cost">Average Cost</p>
              <p className="cuisine-cost-desc">
                ₹ {details.cost} for two people (approx.)
              </p>
            </div>
            <div
              className={
                this.state.toggle === 2 ? "display-content" : "content"
              }
            >
              <h3 className="ph-number">Phone Number</h3>
              <p className="contact-num">{details.contact_number}</p>
              <p className="rest-detail-title">{details.restaurant_name}</p>
              <p className="rest-address">{details.address}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  async componentDidMount() {
    console.log(this.props);
    let restId = this.props.location.search.split("=")[1];
    console.log(restId);
    let response = await axios.get(`${url}/details/${restId}`, {
      method: "GET",
    });
    console.log(response.data[0]);
    this.setState({ details: response.data[0] });
  }
}

export default Detail;
