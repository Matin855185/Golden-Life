'use client';

import { useState } from 'react';
import LazyImage from './LazyImage';

export default function PropertyImageSlider({ images, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);

  const handleSliderMouseEnter = () => {
    setShowArrows(true);
  };

  const handleSliderMouseLeave = () => {
    setShowArrows(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  if (!images || images.length === 0) {
    return <div className="property-image-placeholder">تصویر موجود نیست</div>;
  }

  return (
    <div 
      className="property-image-slider"
      onMouseEnter={handleSliderMouseEnter}
      onMouseLeave={handleSliderMouseLeave}
    >
      <div className="slider-container">
        <div 
          className="slider-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="slide">
              <LazyImage 
                src={image} 
                alt={`${alt} - تصویر ${index + 1}`}
                className="property-img"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && showArrows && (
          <>
            <button 
              className="slider-arrow slider-arrow-prev"
              onClick={goToPrevious}
              aria-label="تصویر قبلی"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
            <button 
              className="slider-arrow slider-arrow-next"
              onClick={goToNext}
              aria-label="تصویر بعدی"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="image-counter">
            <span>{currentIndex + 1} / {images.length}</span>
          </div>
        )}
      </div>

    </div>
  );
}
