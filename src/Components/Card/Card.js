import React from "react";
import './Card.scss'; 

const Card = ({ id, title, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <h3>{title}</h3>
      <p>ID: {id}</p>
    </div>
  );
};

export default Card;
