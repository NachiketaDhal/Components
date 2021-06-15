import React, { useContext, useEffect, useReducer } from "react";

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";
import reducer from "./reducer";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  loading: false,
  inputValue: "react",
  page: 0,
  news: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [newState, dispatch] = useReducer(reducer, initialState);

  const fetchNews = async () => {
    let url;
    const queryUrl = `query=${newState.inputValue}`;
    const pageUrl = `&page=${newState.page}`;
    url = `${API_ENDPOINT}${queryUrl}${pageUrl}`;
    dispatch({ type: SET_LOADING, payload: true });
    const fetchedNews = await fetch(url);
    const fetchedNewsJSON = await fetchedNews.json();
    dispatch({ type: SET_STORIES, payload: fetchedNewsJSON.hits });
    dispatch({ type: SET_LOADING, payload: false });
  };

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line
  }, [newState.page, newState.inputValue]);

  const handleInputChange = (e) => {
    dispatch({ type: HANDLE_SEARCH, payload: e.target.value });
  };

  const onPrevButtonClick = () => {
    dispatch({ type: HANDLE_PAGE, payload: { p: newState.page, t: "prev" } });
  };

  const onNextButtonClick = () => {
    dispatch({ type: HANDLE_PAGE, payload: { p: newState.page, t: "next" } });
  };

  const onRemoveButtonClick = (item) => {
    dispatch({ type: REMOVE_STORY, payload: item });
  };

  return (
    <AppContext.Provider
      value={{
        newState,
        onPrevButtonClick,
        onNextButtonClick,
        onRemoveButtonClick,
        handleInputChange,
      }}
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
