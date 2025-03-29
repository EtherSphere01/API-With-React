import React, { use, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = ({ bottleData }) => {
  const data = use(bottleData);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    console.log(bottle);
  };

  return (
    <div>
      <h2>Cart Count: {cart.length} </h2>
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
