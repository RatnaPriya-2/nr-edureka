import React, { Component } from "react";
import Filter from "../Filter";
import { ListingDisplay } from "./ListingDisplay";
import Header from "../Header";
import CuisineFilter from "../Filters/CuisineFilter";
import CostFilter from "../Filters/CostFilter";
import SortFilter from "../Filters/SortFilter";
import "../../Styles/Filter.css";

const murl = "http://localhost:5000/restaurants?mealId=";

class ListingApi extends Component {
  constructor() {
    super();
    this.state = {
      restaurantList: "",
    };
  }

  setDataFilter = (data) => {
    this.setState({ restaurantList: data });
  };

  render() {
    return (
      <div>
        <Header />
        <div>
          <main>
            <article className="side-form">
              <p className="filter-sorting">Filters</p>
              <section className="filter-group">
                <p className="filter-type">Select Location</p>
                <select name="location" id="location">
                  <option className="location-option" value="">
                    Select Location
                  </option>
                </select>
              </section>
              <CuisineFilter
                mealId={this.props.match.params.mealId}
                restPerCuisine={(data) => {
                  this.setDataFilter(data);
                }}
              />
              <CostFilter
                mealId={this.props.match.params.mealId}
                restPerCost={(data) => {
                  this.setDataFilter(data);
                }}
              />
              <SortFilter />
            </article>
            <ListingDisplay listData={this.state.restaurantList} />
          </main>
        </div>
      </div>
    );
  }

  componentDidMount() {
    let mealId = this.props.match.params.mealId;
    console.log(mealId);
    fetch(`${murl}${mealId}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ restaurantList: data });
        console.log(data);
      });
  }
}

export default ListingApi;
