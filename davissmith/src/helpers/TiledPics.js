import React, { useState } from 'react';

const TiledPictures = ({ images }) => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleImageClick = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="tiled-pictures">
      {images.map((image, index) => (
        <div key={index} className="image-tile">
          <img
            src={image}
            alt={`Image ${index}`}
            onClick={() => handleImageClick(image)}
          />
        </div>
      ))}
      {fullscreenImage && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <img src={fullscreenImage} alt="Fullscreen" />
        </div>
      )}
    </div>
  );
};

export default TiledPictures;
