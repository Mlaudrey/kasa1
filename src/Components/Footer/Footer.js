import React from "react";
import footer from '../../Images/Logo_Footer.png';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => (
    <footer>
      <Link to="/" className="footer">
        <img src={footer} alt="Bande noire avec le logo kasa en blanc au milieu" />
      </Link>
    </footer>
  );
  
  export default Footer;
  