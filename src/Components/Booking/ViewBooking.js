import React, { useState, useEffect } from "react";
import Header from "../Header";
import { DisplayOrder } from "./DisplayOrder";
import axios from "axios";

const url = "http://localhost:5000/orders";

export const ViewBooking = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const sessionData = sessionStorage.getItem("userInfo");
    if (sessionData) {
      const data = JSON.parse(sessionData);
      axios
        .get(`${url}?email=${data.email}`)
        .then((res) => {
          console.log(res.data);
          setOrders(res.data);
        })
        .catch((error) => {
          console.error("Error fetching orders:", error);
          // Handle error here, e.g., show error message to user
        });
    }
  }, []); // Call only once

  return (
    <>
      <Header />
      <DisplayOrder orderData={orders} />
    </>
  );
};
