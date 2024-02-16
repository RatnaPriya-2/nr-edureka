import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Home from "./Components/Home";
import ListingApi from "./Components/Listing/ListingApi";
import Details from "./Components/Details/Details";
import { PlaceOrder } from "./Components/Booking/PlaceOrder";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import { ViewBooking } from "./Components/Booking/ViewBooking";
import PaymentForm from "./Components/Booking/PaymentForm";
import SuccessForm from "./Components/Booking/SuccessForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/listing/:mealId" component={ListingApi} />
        <Route path="/details" component={Details} />
        <Route path="/placeOrder/:restName" component={PlaceOrder} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/viewBooking" component={ViewBooking} />
        <Route path="/paymentForm" component={PaymentForm} />
        <Route path="/successForm" component={SuccessForm} />
      </div>
    </Router>
  );
}
export default App;
