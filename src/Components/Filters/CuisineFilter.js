import React, { Component } from "react";
import "../../Styles/Filter.css";
import axios from "axios";

const url = "http://localhost:5000/filter";

class CuisineFilter extends Component {
  filterCuisine = (event) => {
    console.log(event.target.value);
    let cuisineId = event.target.value;
    let mealId = this.props.mealId;
    console.log(mealId);
    let cuisineUrl;
    if (cuisineUrl === "") {
      cuisineUrl = `${url}/${mealId}`;
    } else {
      cuisineUrl = `${url}/${mealId}?cuisineId=${cuisineId}`;
    }
    axios.get(cuisineUrl).then((res) => {
      console.log(res.data);
      this.props.restPerCuisine(res.data);
    });
  };
  render() {
    return (
      <div>
        <section className="filter-group">
          <p className="filter-type">Cuisine</p>
          <form>
            <div onChange={this.filterCuisine}>
              <div className="input-align">
                <input
                  type="radio"
                  id="foodtype1"
                  name="food"
                  defaultValue=""
                />
                <label htmlFor="foodtype1">All</label>
              </div>
              <div className="input-align">
                <input
                  type="radio"
                  id="foodtype1"
                  name="food"
                  defaultValue="1"
                />
                <label htmlFor="foodtype1">North Indian</label>
              </div>
              <div className="input-align">
                <input
                  type="radio"
                  id="foodType2"
                  name="food"
                  defaultValue="2"
                  defaultChecked=""
                />
                <label htmlFor="foodType2">South Indian</label>
              </div>
              <div className="input-align">
                <input
                  type="radio"
                  id="foodType3"
                  name="food"
                  defaultValue="3"
                  defaultChecked=""
                />
                <label htmlFor="foodType3">Chinese</label>
              </div>
              <div className="input-align">
                <input
                  type="radio"
                  id="foodType4"
                  name="food"
                  defaultValue="4"
                />
                <label htmlFor="foodType4">Fast Food</label>
              </div>
              <div className="input-align">
                <input
                  type="radio"
                  id="foodType5"
                  name="food"
                  defaultValue="5"
                />
                <label htmlFor="foodType5">Street Food</label>
                <br />
              </div>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default CuisineFilter;
