import React from "react";

const Categories = ({ categories, filterFoods }) => {
  // categories --> Array of each category (["all", "breakfast", "lunch", "shakes"])
  return (
    <React.Fragment>
      <div className="btn-container">
        {categories.map((category, i) => {
          return (
            <button
              key={i}
              className="filter-btn"
              onClick={() => filterFoods(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Categories;
