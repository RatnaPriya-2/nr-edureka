import React, { Component } from "react";
import { Link } from "react-router-dom";

export const ListingDisplay = (props) => {
  const renderData = ({ listData }) => {
    console.log(listData);
    if (listData) {
      if (listData.length > 0) {
        return listData.map((item) => {
          return (
            <div>
              <article className="restaurants-group">
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/details?restId=${item.restaurant_id}`}
                >
                  <section className="restaurant-detail">
                    <div className="details">
                      <img
                        className="food-img"
                        src={item.restaurant_thumb}
                        alt="idli"
                      />
                      <div className="restaurant-name">
                        <h1>{item.restaurant_name}</h1>
                        <p>{item.address}</p>
                        <p>
                          Cuisine types : {item.cuisines[0].cuisine_name},{" "}
                          {item.cuisines[1].cuisine_name}
                        </p>
                        <p>Rating : {item.average_rating}</p>
                      </div>
                    </div>
                    <hr className="hr-line" />
                    <div className="details">
                      <div className="cuisine">
                        <p>CUISINES:</p>
                        <p>COST FOR TWO:</p>
                      </div>
                      <div className="cuisine-details">
                        <p>
                          {item.mealTypes[0].mealtype_name} ,{" "}
                          {item.mealTypes[1].mealtype_name}
                        </p>
                        <p>₹ {item.cost}</p>
                      </div>
                    </div>
                  </section>
                </Link>
              </article>
            </div>
          );
        });
      }
    }
  };

  return <div>{renderData(props)}</div>;
};
