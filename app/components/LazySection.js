'use client';

import { useState, useRef, useEffect } from 'react';

export default function LazySection({ 
  children, 
  className = '', 
  threshold = 0.1,
  rootMargin = '100px',
  animationType = 'fadeInUp',
  delay = 0,
  ...props 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, delay, hasAnimated]);

  const getAnimationClass = () => {
    switch (animationType) {
      case 'fadeIn':
        return isVisible ? 'animate-fadeIn' : 'opacity-0';
      case 'fadeInUp':
        return isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8';
      case 'fadeInDown':
        return isVisible ? 'animate-fadeInDown' : 'opacity-0 -translate-y-8';
      case 'fadeInLeft':
        return isVisible ? 'animate-fadeInLeft' : 'opacity-0 translate-x-8';
      case 'fadeInRight':
        return isVisible ? 'animate-fadeInRight' : 'opacity-0 -translate-x-8';
      case 'scaleIn':
        return isVisible ? 'animate-scaleIn' : 'opacity-0 scale-95';
      default:
        return isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8';
    }
  };

  return (
    <div 
      ref={sectionRef}
      className={`lazy-section transition-all duration-700 ease-out ${getAnimationClass()} ${className}`}
      {...props}
    >
      {children}
      
      <style jsx>{`
        .lazy-section {
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        
        .animate-fadeIn {
          opacity: 1;
        }
        
        .animate-fadeInUp {
          opacity: 1;
          transform: translateY(0);
        }
        
        .animate-fadeInDown {
          opacity: 1;
          transform: translateY(0);
        }
        
        .animate-fadeInLeft {
          opacity: 1;
          transform: translateX(0);
        }
        
        .animate-fadeInRight {
          opacity: 1;
          transform: translateX(0);
        }
        
        .animate-scaleIn {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
    </div>
  );
}
