import React, { useState } from 'react';
import './Slideshow.scss';

const Slideshow = ({pictures}) =>{
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
            <button className="prev" onClick={prevImage}>&#10094;</button>
          )}
          <img src={pictures[ImageIndex]} alt={`Image ${ImageIndex + 1}`} className="slideshow-image" />
          {pictures.length > 1 && (
            <button className="next" onClick={nextImage}>&#10095;</button>
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