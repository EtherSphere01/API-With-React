import React from "react";
import "./Cart.css";
const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div className="cart">
      {cart.map((bottle) => (
        <div className="cart-container" key={bottle.id}>
          <img src={bottle.img} alt="" className="cart-img" />
          <button
            onClick={() => {
              handleRemoveFromCart(bottle.id);
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
