import React, { Component } from 'react'
import "../../Styles/PaymentForm.css"
import { Link } from 'react-router-dom'


 class PaymentForm extends Component {
  render() {
    return (
      <div>
        <div className="payment-container">
          <div className="payment-methods">
            <h3>Choose a Payment Method</h3>
            <ul>
              <li>Credit/Debit Cards</li>
              <li>Wallets</li>
              <li id="paytm">Paytm</li>
              <li>Netbanking</li>
              <li>Food Cards</li>
            </ul>
          </div>
          <div className="payment-details">
            <div className="paytm-logo">
              <img
                src={require("../../Assets/paytmlogo.png")}
                alt="paytm-logo"
              />
            </div>
            <h3>Add New Card</h3>
            <div className="card-details">
              <div className="form-group">
                <label htmlFor="card-number">Card Number</label>
                <input
                  type="text"
                  id="card-number"
                  name="card-number"
                  required=""
                />
              </div>
              <div className="dates-cvv">
                <div className="form-group">
                  <label htmlFor="valid-through">Valid Through</label>
                  <input
                    type="month"
                    id="valid-through"
                    name="valid-through"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input type="text" id="cvv" name="cvv" required="" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name-on-card">Name on Card</label>
                <input
                  type="text"
                  id="name-on-card"
                  name="name-on-card"
                  required=""
                />
              </div>
              <Link to="/successForm" style={{ textDecoration: "none"}}>
                <div className="pay-button">
                  <button id="pay-btn" onclick="makePayment()">
                    Pay
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentForm
