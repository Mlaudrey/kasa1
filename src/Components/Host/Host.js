import React from "react";
import './Host.scss';


const Host = ({ name, picture }) => {
  return (
    <div className="host-info">
      <p className="host-name">{name}</p>
      <img 
        src={picture} 
        alt={`Hôte : ${name}`} 
        className="host-picture"
      />
    </div>
  );
};

export default Host;

