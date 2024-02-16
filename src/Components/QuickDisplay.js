import React from "react";
import "../Styles/Home.css";
import { Link } from "react-router-dom";

export const QuickDisplay = (props) => {
  const listMeal = ({ mealData }) => {
    console.log(mealData);
    if (mealData) {
      return mealData.map((item) => {
        return (
          <Link
            key={item._id}
            to={`/listing/${item.mealtype_id}`}
            style={{ maxWidth: 400 , textDecoration:"none", marginBottom:"10px"}}
          >
            <div
              className="card  rounded-0  tile-item border-0 p-0 me-4"
              style={{ maxWidth: 360 }}
            >
              <div className="row g-0">
                <div className="col-6">
                  <img
                    className="tile-img"
                    src={item.meal_image}
                    alt={item.mealtype}
                  />
                </div>
                <div className=" tile-description pt-4 mt-1 ps-2 col-5">
                  <p className="card-heading mb-2">{item.mealtype}</p>
                  <p className="card-description p-0">{item.content}</p>
                </div>
              </div>
            </div>
          </Link>
        );
      });
    }
  };
  return (
    <>
      <div className="tile-container mb-5">
        <div className="row ms-1 g-4">{listMeal(props)}</div>
      </div>
    </>
  );
};
