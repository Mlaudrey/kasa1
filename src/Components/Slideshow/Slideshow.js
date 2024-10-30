import React, { useState } from 'react';
import './Slideshow.scss';
import arrowRight from '../../Images/arrow_forward_ios-24px 1.png';
import arrowLeft from '../../Images/arrow_back_ios-24px 1.png';

const Slideshow = ({ pictures }) => {
  const [ImageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevImage = () => {
    setImageIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="slideshow-container">
      {pictures.length > 1 && (
        <button className="prev" onClick={prevImage} aria-label="Image précédente">
          <img src={arrowLeft} alt="Précédent" />
        </button>
      )}

      <img src={pictures[ImageIndex]} alt={`Image ${ImageIndex + 1}`} className="slideshow-image" />

      {pictures.length > 1 && (
        <button className="next" onClick={nextImage} aria-label="Image suivante">
          <img src={arrowRight} alt="Suivant" />
        </button>
      )}

      {pictures.length > 1 && (
        <div className="image-number">
          {ImageIndex + 1} / {pictures.length}
        </div>
      )}
    </div>
  );
};

export default Slideshow;
