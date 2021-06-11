import React from "react";
import { useGlobalContext } from "./context";
const SearchForm = () => {
  const { inputValue, setInputValue, handleSubmit } = useGlobalContext();

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h2>Search Movies</h2>
      <input
        type="text"
        className="form-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
