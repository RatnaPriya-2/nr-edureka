import React, { Component } from "react";
import "../Styles/Home.css";
import {QuickDisplay}from "./QuickDisplay"

const qurl = "http://localhost:5000/quickSearch";

class QuickSearches extends Component {
  constructor() {
    super()
    this.state = {
      mealType: ""
    };
  }
  render() {
    return (
      <div>
        <div className=" text-start  pt-5 pb-3">
          <p className="search-heading ">Quick Searches</p>
          <p className="search-description ">
            Discover restaurants by type of meal
          </p>
        </div>
        <QuickDisplay mealData={this.state.mealType} />
      </div>
    );
  }

  componentDidMount() {
    fetch(`${qurl}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => this.setState({ mealType: data }));
  }
}

export default QuickSearches;
