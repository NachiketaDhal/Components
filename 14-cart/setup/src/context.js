import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [newState, dispatch] = useReducer(reducer, initialState);

  const clearItems = () => {
    dispatch({ type: "CLEAR_ITEMS" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const increaseAmount = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decreaseAmount = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "TOTAL_PRICE" });
    dispatch({ type: "TOTAL_AMOUNT" });
  }, [newState.cart]);

  const fetchItems = async () => {
    dispatch({ type: "LOADING" });
    const fetchedItems = await fetch(url);
    const fetchedItemsJSON = await fetchedItems.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: fetchedItemsJSON });
  };

  const toggleAmount = (id, type) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <AppContext.Provider
      value={{
        newState,
        clearItems,
        removeItem,
        increaseAmount,
        decreaseAmount,
        toggleAmount,
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
