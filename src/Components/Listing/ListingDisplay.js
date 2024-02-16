import React, { useState } from "react";
import { Link } from "react-router-dom";
import"../../Styles/Filter.css"

export const ListingDisplay = ({ listData }) => {
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(listData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const renderItems = () => {
    if (!listData || listData.length === 0) {
      return (
        <div className="no-item-message">
          <p>No items to display.</p>
        </div>
      );
    }

    return listData.slice(startIndex, endIndex).map((item) => (
      <div key={item.id}>
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
                  alt="Restaurant Thumbnail"
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
    ));
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pageNumbers = Array.from(
      { length: totalPages },
      (_, index) => index + 1
    );

    return (
      <div className="pagination">
        {currentPage === 1 && (
          <button
            className="pagination-button"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            &lt;
          </button>
        )}
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={number === currentPage ? "active" : ""}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        ))}
        {currentPage < totalPages && (
          <button
            className="pagination-button"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            &gt;
          </button>
        )}
      </div>
    );
  };


  return (
    <div>
      <div className="items">{renderItems()}</div>
      <div className="pagination-container">{renderPagination()}</div>
    </div>
  );
};
