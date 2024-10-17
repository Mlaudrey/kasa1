import React from "react";
import logokasa from '../../Images/Logo_header.png';
import { Link } from 'react-router-dom';
import './Header.scss';


const Header = () => (
    <header>
      <Link to="/" className="logokasa">
        <img src={logokasa} alt="logo Kasa" />
      </Link>
      <nav className="nav">
        <Link to="/" className="nav-link">
          Accueil
        </Link>
        <Link to="/About" className="nav-link">
          A Propos
        </Link>
      </nav>
    </header>
  );
  
  export default Header;
  