'use client';

import { useState, useRef, useEffect } from 'react';

export default function LazyImage({ 
  src, 
  alt, 
  className = '', 
  placeholder = '/placeholder.jpg',
  ...props 
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div 
      ref={imgRef}
      className={`lazy-image-container ${className}`}
      {...props}
    >
      {/* Placeholder */}
      <div 
        className={`lazy-placeholder ${isLoaded ? 'hidden' : ''}`}
        style={{
          background: 'linear-gradient(45deg, #f0f0f0, #e0e0e0)',
          animation: 'shimmer 1.5s infinite'
        }}
      />
      
      {/* Actual Image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          className={`lazy-image ${isLoaded ? 'loaded' : 'loading'}`}
          loading="lazy"
        />
      )}
      
      <style jsx>{`
        .lazy-image-container {
          position: relative;
          overflow: hidden;
          background: #f5f5f5;
        }
        
        .lazy-placeholder {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #f0f0f0, #e0e0e0);
          transition: opacity 0.3s ease;
        }
        
        .lazy-placeholder.hidden {
          opacity: 0;
        }
        
        .lazy-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.5s ease;
          opacity: 0;
        }
        
        .lazy-image.loaded {
          opacity: 1;
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: calc(200px + 100%) 0;
          }
        }
      `}</style>
    </div>
  );
}
