import React, { Component } from "react";
import "../../Styles/Filter.css";
import axios from "axios";

const url = "http://localhost:5000/filter";

class CostFilter extends Component {

  filterCost = (event) => {
    let mealId = this.props.mealId;
    let cost = event.target.value.split("-");
    console.log(cost);
    let costUrl;
    let lcost = cost[0]
    let hcost= cost[1]

    if(event.target.value === ""){
      costUrl = `${url}/${mealId}`
    }else{
      costUrl = `${url}/${mealId}?lcost=${lcost}&hcost=${hcost}`;
    }

   axios.get(costUrl).then((res) => {
     console.log(res.data);
     this.props.restPerCost(res.data);
   });
  };
  render() {
    return (
      <div>
        <section className="filter-group" onChange={this.filterCost}>
          <p className="filter-type">Cost for Two</p>
          <div className="input-align">
            <input type="radio" id="cost1" name="cost" defaultValue="100-500" />
            <label htmlFor="cost1">100-500</label>
          </div>
          <div className="input-align">
            <input
              type="radio"
              id="cost2"
              name="cost"
              defaultValue="500-1000"
            />
            <label htmlFor="cost2">500-1000</label>
          </div>
          <div className="input-align">
            <input
              type="radio"
              id="cost3"
              name="cost"
              defaultValue="1000-1500"
            />
            <label htmlFor="cost3">1000-1500</label>
          </div>
          <div className="input-align">
            <input
              type="radio"
              id="cost4"
              name="cost"
              defaultValue="1500-2000"
            />
            <label htmlFor="cost4">1500-2000</label>
          </div>
          <div className="input-align">
            <input
              type="radio"
              id="cost5"
              name="cost"
              defaultValue="2000-2500"
            />
            <label htmlFor="cost4">2000-2500</label>
          </div>
        </section>
      </div>
    );
  }
}

export default CostFilter;
