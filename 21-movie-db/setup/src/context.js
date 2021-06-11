import React, { useState, useContext, useEffect } from "react";

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("batman");

  const fetchMovies = async () => {
    setLoading(true);
    let url;
    const pageUrl = "&page=1";
    const titleUrl = `&s=${inputValue}`;
    url = `${API_ENDPOINT}${pageUrl}${titleUrl}`;
    try {
      const fetchedMovies = await fetch(url);
      const fetchedMoviesJSON = await fetchedMovies.json();
      // console.log(fetchedMoviesJSON.Search);
      setMovies(fetchedMoviesJSON.Search);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [inputValue]);

  return (
    <AppContext.Provider
      value={{ movies, loading, inputValue, setInputValue, handleSubmit }}
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
