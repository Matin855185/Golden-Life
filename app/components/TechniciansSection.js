'use client';

import { useState, useEffect } from 'react';

export default function TechniciansSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // تکنسین‌های متخصص ما
  const technicians = [
    {
      id: 1,
      name: 'احمد رضایی',
      specialty: 'متخصص فنی',
      responseTime: '۳۰ دقیقه',
      rating: 4.9,
      experience: '۵ سال تجربه',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      icon: 'fas fa-tools',
      color: '#3498db'
    },
    {
      id: 2,
      name: 'مریم احمدی',
      specialty: 'متخصص نظافت',
      responseTime: '۲۰ دقیقه',
      rating: 4.8,
      experience: '۳ سال تجربه',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
      icon: 'fas fa-broom',
      color: '#e74c3c'
    },
    {
      id: 3,
      name: 'علی محمدی',
      specialty: 'متخصص باغبانی',
      responseTime: '۴۵ دقیقه',
      rating: 5.0,
      experience: '۷ سال تجربه',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      icon: 'fas fa-seedling',
      color: '#27ae60'
    },
    {
      id: 4,
      name: 'سارا کریمی',
      specialty: 'متخصص زیبایی',
      responseTime: '۲۵ دقیقه',
      rating: 4.7,
      experience: '۴ سال تجربه',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
      icon: 'fas fa-spa',
      color: '#e91e63'
    },
    {
      id: 5,
      name: 'حسین نوری',
      specialty: 'متخصص امنیت',
      responseTime: '۱۵ دقیقه',
      rating: 4.9,
      experience: '۶ سال تجربه',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
      icon: 'fas fa-shield-alt',
      color: '#34495e'
    }
  ];

  // اسلایدر خودکار
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % technicians.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [technicians.length]);

  const nextSlide = () => {
    const newSlide = (currentSlide + 1) % technicians.length;
    console.log('Next slide:', newSlide);
    setCurrentSlide(newSlide);
  };

  const prevSlide = () => {
    const newSlide = (currentSlide - 1 + technicians.length) % technicians.length;
    console.log('Prev slide:', newSlide);
    setCurrentSlide(newSlide);
  };

  const goToSlide = (index) => {
    console.log('Go to slide:', index);
    setCurrentSlide(index);
  };

  return (
    <section style={{
      padding: '4rem 0',
      background: 'linear-gradient(135deg, rgba(13, 13, 13, 0.95), rgba(26, 26, 26, 0.9))',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '3rem',
          color: 'var(--primary-gold)',
          fontSize: '2.2rem',
          fontWeight: '700'
        }}>
          <i className="fas fa-users" style={{ marginLeft: '0.5rem' }}></i>
          تیم متخصص ما
        </h2>
        
        {/* اسلایدر ساده */}
        <div style={{
          position: 'relative',
          maxWidth: '800px',
          margin: '0 auto',
          height: '400px',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          background: 'rgba(26, 26, 26, 0.9)'
        }}>
          {/* نمایش تکنسین فعلی */}
          <div style={{
            width: '100%',
            height: '100%',
            background: `linear-gradient(135deg, ${technicians[currentSlide].color}15, rgba(26, 26, 26, 0.9))`,
            display: 'flex',
            alignItems: 'center',
            padding: '2rem'
          }}>
            {/* محتوای اسلاید */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              gap: '3rem'
            }}>
              {/* عکس تکنسین */}
              <div style={{
                position: 'relative',
                flexShrink: 0
              }}>
                <div style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: `4px solid ${technicians[currentSlide].color}`,
                  boxShadow: `0 0 30px ${technicians[currentSlide].color}40`,
                  position: 'relative'
                }}>
                  <img 
                    src={technicians[currentSlide].avatar} 
                    alt={technicians[currentSlide].name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                
                {/* آیکون تخصص */}
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  width: '50px',
                  height: '50px',
                  background: technicians[currentSlide].color,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
                }}>
                  <i className={technicians[currentSlide].icon} style={{
                    color: 'white',
                    fontSize: '1.2rem'
                  }}></i>
                </div>
              </div>

              {/* اطلاعات تکنسین */}
              <div style={{ flex: 1 }}>
                <h3 style={{
                  color: 'var(--primary-gold)',
                  fontSize: '2rem',
                  marginBottom: '0.5rem',
                  fontWeight: '700'
                }}>
                  {technicians[currentSlide].name}
                </h3>
                
                <p style={{
                  color: technicians[currentSlide].color,
                  fontSize: '1.2rem',
                  marginBottom: '1rem',
                  fontWeight: '600'
                }}>
                  {technicians[currentSlide].specialty}
                </p>
                
                <p style={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '1rem',
                  marginBottom: '1.5rem',
                  lineHeight: '1.6'
                }}>
                  {technicians[currentSlide].experience}
                </p>

                {/* آمار */}
                <div style={{
                  display: 'flex',
                  gap: '2rem',
                  marginBottom: '2rem'
                }}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '0.8rem 1.2rem',
                    borderRadius: '10px',
                    textAlign: 'center',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <div style={{
                      color: 'var(--primary-gold)',
                      fontSize: '1.5rem',
                      fontWeight: '700'
                    }}>
                      ⭐ {technicians[currentSlide].rating}
                    </div>
                    <div style={{
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '0.8rem'
                    }}>
                      امتیاز
                    </div>
                  </div>
                  
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '0.8rem 1.2rem',
                    borderRadius: '10px',
                    textAlign: 'center',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <div style={{
                      color: 'var(--primary-gold)',
                      fontSize: '1.5rem',
                      fontWeight: '700'
                    }}>
                      ⚡ {technicians[currentSlide].responseTime}
                    </div>
                    <div style={{
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '0.8rem'
                    }}>
                      زمان حضور
                    </div>
                  </div>
                </div>

                {/* دکمه انتخاب */}
                <button style={{
                  background: `linear-gradient(135deg, ${technicians[currentSlide].color}, ${technicians[currentSlide].color}dd)`,
                  color: 'white',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: `0 4px 15px ${technicians[currentSlide].color}40`
                }}>
                  <i className="fas fa-phone" style={{ marginLeft: '0.5rem' }}></i>
                  تماس با {technicians[currentSlide].name}
                </button>
              </div>
            </div>
          </div>

          {/* دکمه‌های کنترل */}
          <button
            onClick={nextSlide}
            className="technician-slider-container"
            style={{
              position: 'absolute',
              left: '15px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              color: 'var(--primary-gold)',
              border: 'none',
              width: '30px',
              height: '30px',
              cursor: 'pointer',
              fontSize: '1.8rem',
              transition: 'all 0.3s ease',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0.7
            }}
          >
            ❯
          </button>
          
          <button
            onClick={prevSlide}
            className="technician-slider-container"
            style={{
              position: 'absolute',
              right: '15px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              color: 'var(--primary-gold)',
              border: 'none',
              width: '30px',
              height: '30px',
              cursor: 'pointer',
              fontSize: '1.8rem',
              transition: 'all 0.3s ease',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0.7
            }}
          >
            ❮
          </button>
        </div>

        {/* نقطه‌های ناوبری */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginTop: '2rem'
        }}>
          {technicians.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: index === currentSlide ? 'var(--primary-gold)' : 'rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: index === currentSlide ? 'scale(1.2)' : 'scale(1)'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
