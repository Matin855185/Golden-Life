'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

export default function TechniciansSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const gridRef = useRef(null);
  const timerRef = useRef(null);

  // Function to scroll any technician to center
  const scrollToCenter = useCallback((index) => {
    const grid = gridRef.current;
    if (!grid || !grid.children[index]) return;

    const targetCard = grid.children[index];
    const viewportCenter = window.innerWidth / 2;
    const cardOffsetLeft = targetCard.offsetLeft;
    const cardWidth = targetCard.offsetWidth;
    const cardCenter = cardOffsetLeft + (cardWidth / 2);
    const gridRect = grid.getBoundingClientRect();
    const gridLeft = gridRect.left;
    const targetScrollLeft = cardCenter - (viewportCenter - gridLeft);
    const maxScroll = grid.scrollWidth - grid.clientWidth;
    const finalScrollPosition = Math.max(0, Math.min(targetScrollLeft, maxScroll));

    grid.scrollTo({
      left: finalScrollPosition,
      behavior: 'smooth'
    });
  }, []);

  const technicians = [
    {
      name: 'احمد رضایی',
      service: 'متخصص فنی',
      time: '۳۰ دقیقه',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'مریم احمدی',
      service: 'متخصص نظافت',
      time: '۲۰ دقیقه',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'علی محمدی',
      service: 'متخصص باغبانی',
      time: '۴۵ دقیقه',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'سارا کریمی',
      service: 'متخصص زیبایی',
      time: '۶۰ دقیقه',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'حسین نوری',
      service: 'متخصص امنیت',
      time: '۲۴ ساعت',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'فاطمه حسینی',
      service: 'متخصص پذیرایی',
      time: '۱۲۰ دقیقه',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'رضا موسوی',
      service: 'متخصص حمل‌ونقل',
      time: '۱۵ دقیقه',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'زهرا صادقی',
      service: 'متخصص آموزش',
      time: '۹۰ دقیقه',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'محمد رحیمی',
      service: 'متخصص IT',
      time: '۴۰ دقیقه',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'لیلا قاسمی',
      service: 'متخصص مراقبت حیوانات',
      time: '۷۵ دقیقه',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'امیر حسنی',
      service: 'متخصص خرید',
      time: '۳۵ دقیقه',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face'
    }
  ];

  // Auto-slide timer - cycles through all technicians every 5 seconds
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % 11; // Fixed length to avoid dependency
          console.log(`Auto-switching from technician ${prevIndex} to ${nextIndex}`);
          return nextIndex;
        });
      }, 5000); // 5 seconds interval
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused]);

  // Initial setup - center the first technician (Ahmad Rezaei) on component mount
  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      scrollToCenter(0); // Center Ahmad Rezaei (first technician)
      console.log('Initial centering: Ahmad Rezaei (index 0)');
    }, 500);
    
    return () => clearTimeout(initialTimeout);
  }, []); // Only run once on mount

  // Scroll active technician to exact center whenever activeIndex changes
  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      scrollToCenter(activeIndex);
      const technicianName = technicians[activeIndex]?.name || 'Unknown';
      console.log(`Centering technician ${activeIndex} (${technicianName})`);
    }, 100);
    
    return () => clearTimeout(scrollTimeout);
  }, [activeIndex, scrollToCenter]);

  // Mouse wheel scroll - Enhanced for better user experience
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const handleWheel = (e) => {
      // Check if scrolling horizontally or vertically
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        // Horizontal scroll - use deltaX
        e.preventDefault();
        grid.scrollLeft += e.deltaX;
      } else {
        // Vertical scroll - convert to horizontal
        e.preventDefault();
        grid.scrollLeft += e.deltaY;
      }
      
      // Pause auto-slide when user manually scrolls
      setIsPaused(true);
      console.log('Manual scroll detected - pausing auto-slide for 5 seconds');
      setTimeout(() => {
        setIsPaused(false);
        console.log('Auto-slide resumed');
      }, 5000);
    };

    const handleMouseEnter = () => {
      // Add visual feedback when mouse enters the scroll area
      grid.style.cursor = isDragging ? 'grabbing' : 'grab';
    };

    const handleMouseLeave = () => {
      grid.style.cursor = 'default';
      setIsDragging(false);
    };

    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - grid.offsetLeft);
      setScrollLeft(grid.scrollLeft);
      grid.style.cursor = 'grabbing';
      setIsPaused(true);
      console.log('Drag scroll started - pausing auto-slide');
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - grid.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed multiplier
      grid.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      grid.style.cursor = 'grab';
      setTimeout(() => {
        setIsPaused(false);
        console.log('Auto-slide resumed after drag');
      }, 3000);
    };

    // Add event listeners
    grid.addEventListener('wheel', handleWheel, { passive: false });
    grid.addEventListener('mouseenter', handleMouseEnter);
    grid.addEventListener('mouseleave', handleMouseLeave);
    grid.addEventListener('mousedown', handleMouseDown);
    grid.addEventListener('mousemove', handleMouseMove);
    grid.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      grid.removeEventListener('wheel', handleWheel);
      grid.removeEventListener('mouseenter', handleMouseEnter);
      grid.removeEventListener('mouseleave', handleMouseLeave);
      grid.removeEventListener('mousedown', handleMouseDown);
      grid.removeEventListener('mousemove', handleMouseMove);
      grid.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <section className="technicians">
      <div className="container">
        <h2 className="section-title">تکنسین‌های ما</h2>
        <div className="technicians-grid" ref={gridRef}>
          {technicians.map((technician, index) => (
            <div 
              key={index} 
              className={`technician-card ${index === activeIndex ? 'active' : ''}`}
              onClick={() => {
                console.log(`Clicked on technician ${index}`);
                setActiveIndex(index);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 5000);
              }}
              onMouseEnter={() => {
                console.log(`Hovered on technician ${index}`);
                setActiveIndex(index);
                setIsPaused(true);
              }}
              onMouseLeave={() => {
                setTimeout(() => setIsPaused(false), 1000);
              }}
            >
              <div className="technician-image">
                <img src={technician.image} alt={technician.name} />
              </div>
              <h3>{technician.name}</h3>
              <p className="technician-service">{technician.service}</p>
              <p className="technician-time">زمان حضور: {technician.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
