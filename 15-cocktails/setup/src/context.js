import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [cocktails, setCocktails] = useState({ drinks: [] });

  const fetchCocktails = useCallback(async () => {
    setLoading(true);
    try {
      const fetchedCocktails = await fetch(`${url}${inputValue}`);
      const fetchedCocktailsJSON = await fetchedCocktails.json();
      setCocktails(fetchedCocktailsJSON);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, [inputValue]);

  useEffect(() => {
    fetchCocktails();
  }, [inputValue]);

  if (!cocktails) {
    return (
      <h2 className="section" style={{ textAlign: "center" }}>
        No cocktails to display
      </h2>
    );
  }

  return (
    <AppContext.Provider
      value={{ loading, cocktails, setInputValue, inputValue }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
