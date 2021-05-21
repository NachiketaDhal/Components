import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "./context";

const CartContainer = () => {
  const { newState, clearItems } = useGlobalContext();
  if (newState.cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {newState.cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${newState.total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={clearItems}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
