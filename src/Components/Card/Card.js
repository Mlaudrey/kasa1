import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss'; 

const Card = ({ id, title, pictures }) => {
    return (
        <div className="cards">
            <Link to={`/Fiche-Logement/${id}`} className="card-link">
                <img src={pictures && pictures.length > 0 ? pictures[0] : 'chemin/vers/image/default.jpg'} alt={title} className="cards-img" />
                <h3 className="card-title">{title}</h3>
            </Link>
        </div>
    );
};

export default Card;
