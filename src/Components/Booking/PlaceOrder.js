import React, { useState } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";

const url = "http://localhost:5000/placeOrder";

export const PlaceOrder = (props) => {
  const [values, setValues] = useState({
    id: Math.floor(Math.random() * 100000),
    rest_Name: props.match.params.restName,
    name: "",
    email: "",
    phone: "",
    address: "plot 35, delhi",
    cost: sessionStorage.getItem("totalPrice") || 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const checkout = () => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to place order");
        }
        return response.json();
      })
      .then((data) => {
        props.history.push("/viewBooking");
      })
      .catch((error) => {
        console.error("Error placing order:", error);
        // Handle error here, e.g., show error message to user
      });
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h4 className="pt-5 register">
              Order for {props.match.params.restName}
            </h4>
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-md-6 form-group">
                <label
                  htmlFor="fname"
                  className="control-label register-label ps-0"
                >
                  Name
                </label>
                <input
                  className="form-control input-form-text"
                  id="fname"
                  name="name"
                  value={values.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6 form-group">
                <label
                  htmlFor="email"
                  className="control-label register-label ps-0"
                >
                  Email
                </label>
                <input
                  className="form-control input-form-text"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6 form-group">
                <label
                  htmlFor="phone"
                  className="control-label register-label ps-0"
                >
                  Phone
                </label>
                <input
                  className="form-control input-form-text"
                  id="phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6 form-group">
                <label
                  htmlFor="address"
                  className="control-label register-label ps-0"
                >
                  Address
                </label>
                <input
                  className="form-control input-form-text"
                  id="address"
                  name="address"
                  value={values.address}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h5 className="pt-5 register">
                  <b>Total Price is Rs. {values.cost}/-</b>
                </h5>
              </div>
            </div>
            <Link to="/paymentForm">
              <button
                className="btn btn-danger register-btn mt-4"
                // onClick={checkout}
              >
                Place Order
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
