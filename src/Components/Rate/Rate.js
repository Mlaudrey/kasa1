import React from "react";
import './Rate.scss';
import starActive from '../../Images/star-active 1.png';
import starInactive from '../../Images/star-inactive 2.png';

const Rating = ({ rating }) => {
    // je crée un tableau de 5 éléments, chaque élément est une étoile active ou inactive
    const stars = Array(5).fill(0).map((_, index) => (
      <img
        key={index}
        src={index < rating ? starActive : starInactive}
        alt={index < rating ? "Active star" : "Inactive star"}
        className="star"
      />
    ));
  
    return (
      <div className="rating-container">
        {stars} {/* affiche le tableau d'étoiles */}
      </div>
    );
  };
  
  export default Rating;