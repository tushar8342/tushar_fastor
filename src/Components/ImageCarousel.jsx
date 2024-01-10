import React, { useState } from 'react';

const ImageCarousel = () => {
  const images = [
    'https://via.placeholder.com/400x200/ff0000/ffffff',
    'https://via.placeholder.com/400x200/00ff00/ffffff',
    'https://via.placeholder.com/400x200/0000ff/ffffff',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div
      style={{
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          transition: 'transform 0.5s ease',
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Slide ${index}`}
            style={{
              minWidth: '100%',
              objectFit: 'cover',
            }}
          />
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '10px',
        }}
      >
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              height: '10px',
              width: '10px',
              borderRadius: '50%',
              background: currentSlide === index ? '#333' : '#ccc',
              margin: '0 5px',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
