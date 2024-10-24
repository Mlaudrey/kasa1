import React, { useState } from 'react';
import './Collapse.scss';
import arrowUp from '../../Images/arrowUp.png';
import arrowDown from '../../Images/arrowDown.png';
import PropTypes from 'prop-types';

const Collapse = ({ type, title, description = '', equipments = [] }) => {
    const [isOpen, setIsOpen] = useState(false);  // c'est l'état d'ouverture
  
    // clic pour ouvrir ou fermer
    const toggleCollapse = () => {
      setIsOpen(!isOpen);
    };

    return (
    <div className={`collapse ${type}`}>
    <div className="collapse-header" onClick={toggleCollapse}>
      <h2>{title}</h2>
      <img 
        src={isOpen ? arrowUp : arrowDown} 
        alt="Toggle arrow" 
        className="collapse-arrow"
      />
    </div>
     {/* Contenu affiché ou caché en fonction de l'état */}
     <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        {/* cela affiche la description  */}
        {description && <p>{description}</p>}
        {/* cela affiche la liste des équipements */}
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
    equipments: PropTypes.arrayOf(PropTypes.string) // un tableau de chaînes de caractères
  };

  Collapse.defaultProps = {
    description: '',      
    equipments: []        
  };

export default Collapse;