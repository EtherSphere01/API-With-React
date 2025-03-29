import React from "react";
import "./Bottle.css";

const Bottle = ({ bottle_data, handleAddToCart }) => {
  const handleClick = () => {
    handleAddToCart(bottle_data);
  };
  return (
    <div className="bottle-container">
      <img src={bottle_data.img} alt="Bottle" className="bottle" />
      <h3>Bottle Name: {bottle_data.name} </h3>
      <p>Price: $ {bottle_data.price} </p>
      <p>Remaining: {bottle_data.stock} </p>
      <p>Ratings: {bottle_data.ratings}</p>
      <button onClick={handleClick}>Add to cart</button>
    </div>
  );
};

export default Bottle;
