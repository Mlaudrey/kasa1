import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss'; 

const Card = ({ id, title, image }) => {
  return (
    <div className="cards">
      <Link to={`/Fiche-Logement/${id}`} className="cards-link">
        <img src={image} alt={title} className="cards-img" />
        <h3 className="cards-title">{title}</h3>
      </Link>
      <p>ID: {id}</p>
    </div>
  );
};

export default Card;
