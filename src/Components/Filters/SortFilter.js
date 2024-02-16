import React, { Component } from 'react'
import "../../Styles/Filter.css";

 class SortFilter extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default SortFilter
