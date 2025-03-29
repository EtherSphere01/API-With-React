import React, { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import {
  addStoredCart,
  getStoredCart,
  removeStoredCart,
} from "../utilities/localstorage";
import Cart from "../Cart/Cart";

const Bottles = ({ bottleData }) => {
  const data = use(bottleData);

  const [cart, setCart] = useState([]);

  // useEffect
  useEffect(() => {
    const storedCardIds = getStoredCart();
    const storedCart = [];
    // console.log(storedCardIds,data);
    for (const id of storedCardIds) {
      const cartBottle = data.find((bottle) => bottle.id === id);
      if (cartBottle) {
        storedCart.push(cartBottle);
      }
    }
    setCart(storedCart);
  }, [data]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    console.log(bottle);

    //   save the bottle id to the store date;
    addStoredCart(bottle.id);
  };

  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((bottle) => bottle.id !== id);
    setCart(remaining);
    removeStoredCart(id);
  };

  return (
    <div>
      <h2>Cart Count: {cart.length} </h2>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      <div className="grid">
        {data.map((bottle_data) => {
          return (
            <Bottle
              key={bottle_data.id}
              bottle_data={bottle_data}
              handleAddToCart={handleAddToCart}
            ></Bottle>
          );
        })}
      </div>
    </div>
  );
};

export default Bottles;
