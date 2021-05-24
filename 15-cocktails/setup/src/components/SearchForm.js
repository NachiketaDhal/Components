import React, { useEffect } from "react";
import { useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { inputValue, setInputValue } = useGlobalContext();
  const inputRef = useRef();

  const searchCocktails = () => {
    setInputValue(inputRef.current.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <section className="search section">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="name">Search Your Favorite Cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={inputRef}
            onChange={searchCocktails}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
