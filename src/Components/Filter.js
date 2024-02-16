import React, { Component } from "react";
import "../Styles/Filter.css"

class Filter extends Component {
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
        <h1>Breakfast places in Mumbai</h1>
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
            <section className="filter-group">
              <p className="filter-type">Cuisine</p>
              <form>
                <div className="input-align">
                  <input
                    type="checkbox"
                    id="foodtype1"
                    name="foodtype1"
                    defaultValue="North Indian"
                  />
                  <label htmlFor="foodtype1">North Indian</label>
                </div>
                <div className="input-align">
                  <input
                    type="checkbox"
                    id="foodType2"
                    name="foodType2"
                    defaultValue="South Indian"
                    defaultChecked=""
                  />
                  <label htmlFor="foodType2">South Indian</label>
                </div>
                <div className="input-align">
                  <input
                    type="checkbox"
                    id="foodType3"
                    name="foodType3"
                    defaultValue="Chinese"
                    defaultChecked=""
                  />
                  <label htmlFor="foodType3">Chinese</label>
                </div>
                <div className="input-align">
                  <input
                    type="checkbox"
                    id="foodType4"
                    name="foodType4"
                    defaultValue="Fast Food"
                  />
                  <label htmlFor="foodType4">Fast Food</label>
                </div>
                <div className="input-align">
                  <input
                    type="checkbox"
                    id="foodType5"
                    name="foodType5"
                    defaultValue="Street Food"
                  />
                  <label htmlFor="foodType5">Street Food</label>
                  <br />
                </div>
              </form>
            </section>
            <section className="filter-group">
              <p className="filter-type">Cost for Two</p>
              <div className="input-align">
                <input type="radio" id="cost1" name="cost" defaultValue={500} />
                <label htmlFor="cost1">Less than `500</label>
              </div>
              <div className="input-align">
                <input
                  type="radio"
                  id="cost2"
                  name="cost"
                  defaultValue={1000}
                />
                <label htmlFor="cost2">`500 - `1000</label>
              </div>
              <div className="input-align">
                <input
                  type="radio"
                  id="cost3"
                  name="cost"
                  defaultValue={1500}
                />
                <label htmlFor="cost3">`1000 - `1500</label>
              </div>
              <div className="input-align">
                <input
                  type="radio"
                  id="cost4"
                  name="cost"
                  defaultValue={2000}
                />
                <label htmlFor="cost4">`1500 - `2000</label>
              </div>
              <div className="input-align">
                <input
                  type="radio"
                  id="cost5"
                  name="cost"
                  defaultValue="2000+"
                />
                <label htmlFor="cost5">`2000 +</label>
              </div>
            </section>
            <section className="filter-group">
              <p className="filter-sorting">Sort</p>
              <div className="input-align">
                <input
                  type="radio"
                  id="sort1"
                  name="priceRange"
                  defaultValue="low to high"
                />
                <label htmlFor="cost1">Price low to high</label>
              </div>
              <div className="input-align">
                <input
                  type="radio"
                  id="sort2"
                  name="priceRange"
                  defaultValue="high to low"
                />
                <label htmlFor="cost2">Price high to low</label>
              </div>
            </section>
          </article>
          <article className="restaurants-group">
            <section className="restaurant-detail">
              <div className="details">
                <img
                  className="food-img"
                  src={require("../Assets/item1.png")}
                  alt="idli"
                />
                <div className="restaurant-name">
                  <h1>The Big Chill Cakery</h1>
                  <h3>FORT</h3>
                  <p>Shop 1, Plot D, Samruddhi Complex, Chincholi ...</p>
                </div>
              </div>
              <hr className="hr-line" />
              <div className="details">
                <div className="cuisine">
                  <p>CUISINES:</p>
                  <p>COST FOR TWO:</p>
                </div>
                <div className="cuisine-details">
                  <p>Bakery</p>
                  <p>₹ 700</p>
                </div>
              </div>
            </section>
            <section className="restaurant-detail">
              <div className="details">
                <img
                  className="food-img"
                  src={require("../Assets/item1.png")}
                  alt="idli"
                />
                <div className="restaurant-name">
                  <h1>The Bake Shop</h1>
                  <h3>FORT</h3>
                  <p>Shop 1, Plot D, Samruddhi Complex, Chincholi ...</p>
                </div>
              </div>
              <hr className="hr-line" />
              <div className="details">
                <div className="cuisine">
                  <p>CUISINES:</p>
                  <p>COST FOR TWO:</p>
                </div>
                <div className="cuisine-details">
                  <p>Bakery</p>
                  <p>₹ 700</p>
                </div>
              </div>
            </section>
          </article>
        </main>
        <footer>
          <button className="page-button">&lt;</button>
          <button className="page-button" id="one">
            1
          </button>
          <button className="page-button">2</button>
          <button className="page-button">3</button>
          <button className="page-button">4</button>
          <button className="page-button">5</button>
          <button className="page-button">&gt;</button>
        </footer>
      </div>
    );
  }
}

export default Filter;
