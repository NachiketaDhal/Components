import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const [cocktail, setCocktail] = useState({ drinks: [] });
  const [loading, setLoading] = useState(true);
  const { drinks } = cocktail;
  const { id } = useParams();

  const fetchCocktail = async () => {
    setLoading(true);
    try {
      const fetchedCocktail = await fetch(`${url}${id}`);
      const fetchedCocktailJSON = await fetchedCocktail.json();
      if (fetchedCocktailJSON.drinks) {
        setCocktail(fetchedCocktailJSON);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!drinks || !cocktail) {
    return (
      <h2 className="section" style={{ textAlign: "center" }}>
        No cocktails to display
      </h2>
    );
  }

  const {
    strDrinkThumb: pic,
    strDrink,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
    strIngredient1,
    idDrink,
  } = drinks[0];

  let ingredientString = "";
  for (let i = 1; i <= 15; i++) {
    const key = "strIngredient" + i;
    if (drinks[0][key]) ingredientString += `${drinks[0][key]} `;
    // console.log(ingredientString);
  }

  return (
    <section className="cocktail-section section">
      <Link to="/" className="btn btn-primary">
        Back Home
      </Link>
      <h2 className="section-title">{strDrink}</h2>
      <div className="drink">
        <img src={pic} alt={strDrink} />
        <div className="drink-info">
          <p>
            <span className="drink-data">Name :</span> {strDrink}
          </p>
          <p>
            <span className="drink-data">Category :</span> {strCategory}
          </p>
          <p>
            <span className="drink-data">Info :</span> {strAlcoholic}
          </p>
          <p>
            <span className="drink-data">Glass :</span> {strGlass}
          </p>
          <p>
            <span className="drink-data">Instruction :</span> {strInstructions}
          </p>
          <p>
            <span className="drink-data">Ingredients :</span> {ingredientString}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
