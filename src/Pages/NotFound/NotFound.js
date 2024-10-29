import React from "react";
import './NotFound.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {

return (
    <div className="notfound">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">Oups! La page que vous demandez n'hexiste pas</p>
        <Link to="/" className="notfound-link">Retourner sur la page d'accueil</Link>
    </div>

);
};

export default NotFound;
