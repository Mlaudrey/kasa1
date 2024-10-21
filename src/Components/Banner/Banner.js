import React from "react";
import './Banner.scss';

const Banner = ({ img, title }) => {
  return (
    <div className="banner">
      <img src={img} alt="Rochers au bord de l'océan" className="banner-img" />
      <div className="banner-title">
        {title}
      </div>
    </div>
  );
};
export default Banner;