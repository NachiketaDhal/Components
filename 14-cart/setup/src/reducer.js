const reducer = (currentState, action) => {
  if (action.type === "INCREASE") {
    const tempCart = currentState.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...currentState, cart: tempCart };
  }
  if (action.type === "DECREASE") {
    let tempCart = currentState.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount > 0);
    return { ...currentState, cart: tempCart };
  }
  if (action.type === "REMOVE_ITEM") {
    const tempCart = currentState.cart.filter(
      (item) => item.id !== action.payload
    );
    return {
      ...currentState,
      cart: tempCart,
    };
  }
  if (action.type === "CLEAR_ITEMS") {
    return {
      ...currentState,
      cart: [],
    };
  }
  if (action.type === "TOTAL_PRICE") {
    const totalPrice = currentState.cart
      .map((cartItem) => cartItem.price * cartItem.amount)
      .reduce((curValue, acc) => curValue + acc, 0);
    return { ...currentState, total: parseFloat(totalPrice.toFixed(2)) };
  }
  if (action.type === "TOTAL_AMOUNT") {
    const totalAmount = currentState.cart
      .map((cartItem) => cartItem.amount)
      .reduce((curValue, acc) => curValue + acc, 0);
    return { ...currentState, amount: totalAmount };
  }
  if (action.type === "LOADING") {
    return {
      ...currentState,
      loading: true,
    };
  }
  if (action.type === "DISPLAY_ITEMS") {
    return {
      ...currentState,
      cart: action.payload,
      loading: false,
    };
  }

  if (action.type === "TOGGLE_AMOUNT") {
    const tempCart = currentState.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.type === "inc") {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }
          if (action.payload.type === "dec") {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount > 0);
    return { ...currentState, cart: tempCart };
  }
  throw new Error("No dispatch found for action type");
};

export default reducer;
