import React from "react";
import logoFooter from '../../Images/LOGO.png';
import './Footer.scss';


const Footer = () => (
    <footer className="footer">
      <div className="footer-content">
          <img src={logoFooter} alt="Logo Kasa" classeName="footer-logo"/>
          <p className="footer-text">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
  
  export default Footer;
  