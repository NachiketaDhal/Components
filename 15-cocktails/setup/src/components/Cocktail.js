import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ drink }) => {
  const { strDrinkThumb, strDrink, strGlass, strAlcoholic, idDrink } = drink;

  return (
    <div className="cocktail">
      <img src={strDrinkThumb} alt={strDrink} />
      <div className="cocktail-footer">
        <h3>{strDrink}</h3>
        <h4>{strGlass}</h4>
        <p>{strAlcoholic}</p>
        <Link
          to={`/cocktail/${idDrink}`}
          className="btn btn-primary btn-details"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default Cocktail;
