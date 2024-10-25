import React, { useState } from 'react';
import './Collapse.scss';
import arrowUp from '../../Images/arrowUp.png';
import arrowDown from '../../Images/arrowDown.png';
import PropTypes from 'prop-types';

const Collapse = ({ type, title, description = '', equipments = [] }) => {
  const [isOpen, setIsOpen] = useState(false);  // État d'ouverture

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${type}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <img 
          src={isOpen ? arrowDown : arrowUp}  // Flèche bas quand ouvert, haut quand fermé
          alt="Toggle arrow" 
          className="collapse-arrow"
        />
      </div>
      
      {/* Contenu affiché en fonction de `isOpen` */}
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        {description && <p>{description}</p>}
        {equipments.length > 0 && (
          <ul>
            {equipments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  type: PropTypes.string.isRequired,    
  title: PropTypes.string.isRequired,      
  description: PropTypes.string,          
  equipments: PropTypes.arrayOf(PropTypes.string)
};

Collapse.defaultProps = {
  description: '',      
  equipments: []        
};

export default Collapse;
