import React, { Component } from "react";
import "../../Styles/MenuList.css"

class menuList extends Component {
  orderId = [];
  placeOrder = (id) => {
    this.orderId.push(id);
    this.props.finalOrder(this.orderId);
    console.log(this.props.finalOrder);
  };

  removeOrder = (id) => {
    if(this.orderId.indexOf(id) > -1){
      this.orderId.splice(this.orderId.indexOf(id), 1)
    }
    this.props.finalOrder(this.orderId)
    console.log(this.props.finalOrder(this.orderId));
  };

  renderCart = (orders) => {
    if (orders) {
      return orders.map((item, index) => {
        return <i key={index}>{item} , </i>;
      });
    }
  };
  renderMenu = ({ menuData }) => {
    if (menuData) {
      return menuData.map((item) => {
        return (
          <>
            <div className="menu-data-main">
              <div className="menu-item-img">
                <img src={item.menu_image} alt={item.menu_name} />
              </div>
              <div className="menu-item-desc">
                <p className="menu-item-id">
                  Menu ID : <span>{item.menu_id}</span>{" "}
                </p>
                <p className="menu-item-price">
                  {item.menu_name} - <span>Rs {item.menu_price}/-</span>
                </p>
                <button
                  className="add-menu-item"
                  onClick={() => {
                    this.placeOrder(item.menu_id);
                  }}
                >
                  <span>
                    <svg
                      width="26px"
                      height="26px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#192f60"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M6 12H18M12 6V18"
                          stroke="#192f60"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                </button>
                <button
                  className="delete-menu-item"
                  onClick={() => {
                    this.removeOrder(item.menu_id);
                  }}
                >
                  <span>
                    <svg
                      width="26px"
                      height="26px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M6 12L18 12"
                          stroke="#192f60"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </>
        );
      });
    }
  };
  render() {
    return (
      <div>
        <div className="item">
          <hr />
          <p>Item added</p>
          <p>Item number added = {this.renderCart(this.orderId)}</p>
          <hr className="item-hr" />
        </div>
        <div>{this.renderMenu(this.props)}</div>
      </div>
    );
  }
}

export default menuList;
