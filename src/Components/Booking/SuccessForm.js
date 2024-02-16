import React, { Component } from 'react'
import "../../Styles/SuccessForm.css"


 class SuccessForm extends Component {
  render() {
    return (
      <div>
        <div className="container payment-body">
          <div className="logo-paytm">
            <img src={require("../../Assets/paytmlogo.png")} alt="paytm-logo" />
          </div>
          <div className="success-main">
            <div className="success-image">
              <img
                src={require("../../Assets/tickmark.jpg")}
                alt="Tick Mark"
              />
            </div>
            <div className="message">
              <p>Paid Successfully</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SuccessForm
