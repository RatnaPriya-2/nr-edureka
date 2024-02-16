import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Home from "./Components/Home";
import ListingApi from "./Components/Listing/ListingApi";
import Details from "./Components/Details/Details";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/listing/:mealId" component={ListingApi} />
        <Route path="/details" component={Details} />
        <Route path="/details/:restId" component={Details} />
      </div>
    </Router>
  );
}
 export default App;