import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  const { drinks } = cocktails;

  if (loading) {
    return <Loading />;
  }

  if (!drinks || !cocktails) {
    return (
      <h2 className="section" style={{ textAlign: "center" }}>
        No cocktails to display
      </h2>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {drinks.map((drink) => {
          return <Cocktail key={drink.idDrink} drink={drink} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
