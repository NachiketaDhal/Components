import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { handleInputChange, newState } = useGlobalContext();

  return (
    <form className="search-form">
      <h2>Search Hacker News</h2>
      <input
        type="text"
        className="form-input"
        value={newState.inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default SearchForm;
