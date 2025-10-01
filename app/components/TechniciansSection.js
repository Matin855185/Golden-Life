'use client';

import { useState, useEffect } from 'react';

export default function TechniciansSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  // تکنسین‌های متخصص ما - بر اساس طراحی Awesomic
  const technicians = [
    {
      id: 1,
      name: 'احمد رضایی',
      specialty: 'متخصص فنی و تعمیرات',
      responseTime: '۳۰ دقیقه',
      rating: 4.9,
      experience: '۵ سال تجربه',
      completedProjects: '۲۵۰+',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      icon: 'fas fa-tools',
      color: '#d4af37',
      skills: ['تعمیرات برقی', 'لوله‌کشی', 'نصب تجهیزات'],
      badge: 'متخصص برتر'
    },
    {
      id: 2,
      name: 'مریم احمدی',
      specialty: 'متخصص نظافت و بهداشت',
      responseTime: '۲۰ دقیقه',
      rating: 4.8,
      experience: '۳ سال تجربه',
      completedProjects: '۱۸۰+',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      icon: 'fas fa-broom',
      color: '#d4af37',
      skills: ['نظافت عمیق', 'ضدعفونی', 'نظافت پس از ساخت'],
      badge: 'سریع‌ترین پاسخ'
    },
    {
      id: 3,
      name: 'علی محمدی',
      specialty: 'متخصص باغبانی و فضای سبز',
      responseTime: '۴۵ دقیقه',
      rating: 5.0,
      experience: '۷ سال تجربه',
      completedProjects: '۳۰۰+',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      icon: 'fas fa-seedling',
      color: '#d4af37',
      skills: ['طراحی باغ', 'کاشت و نگهداری', 'سیستم آبیاری'],
      badge: 'بالاترین امتیاز'
    },
    {
      id: 4,
      name: 'سارا کریمی',
      specialty: 'متخصص زیبایی و مراقبت',
      responseTime: '۲۵ دقیقه',
      rating: 4.7,
      experience: '۴ سال تجربه',
      completedProjects: '۲۰۰+',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      icon: 'fas fa-spa',
      color: '#d4af37',
      skills: ['مراقبت پوست', 'ماساژ درمانی', 'آرایش'],
      badge: 'محبوب مشتریان'
    },
    {
      id: 5,
      name: 'حسین نوری',
      specialty: 'متخصص امنیت و نگهبانی',
      responseTime: '۱۵ دقیقه',
      rating: 4.9,
      experience: '۶ سال تجربه',
      completedProjects: '۴۰۰+',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
      icon: 'fas fa-shield-alt',
      color: '#d4af37',
      skills: ['نگهبانی', 'سیستم‌های امنیتی', 'کنترل دسترسی'],
      badge: 'بیشترین تجربه'
    },
    {
      id: 6,
      name: 'فاطمه موسوی',
      specialty: 'متخصص آشپزی و کیترینگ',
      responseTime: '۳۵ دقیقه',
      rating: 4.8,
      experience: '۵ سال تجربه',
      completedProjects: '۲۲۰+',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
      icon: 'fas fa-utensils',
      color: '#d4af37',
      skills: ['آشپزی ایرانی', 'کیترینگ مجالس', 'تزئین غذا'],
      badge: 'خلاق‌ترین'
    }
  ];

  // آمار کیفیت (الهام از Awesomic)
  const qualityStats = [
    {
      percentage: '۹۸٪',
      title: 'رضایت مشتریان',
      description: 'از خدمات ما راضی هستند',
      icon: 'fas fa-heart'
    },
    {
      percentage: '۲٪',
      title: 'نرخ پذیرش',
      description: 'فقط بهترین‌ها پذیرفته می‌شوند',
      icon: 'fas fa-user-check'
    },
    {
      percentage: '۲۴ ساعت',
      title: 'زمان پاسخ',
      description: 'حداکثر زمان برای شروع کار',
      icon: 'fas fa-clock'
    }
  ];

  const categories = [
    { name: 'همه تخصص‌ها', count: technicians.length },
    { name: 'فنی و تعمیرات', count: 2 },
    { name: 'نظافت و بهداشت', count: 1 },
    { name: 'باغبانی', count: 1 },
    { name: 'زیبایی و مراقبت', count: 1 },
    { name: 'امنیت', count: 1 }
  ];

  const getFilteredTechnicians = () => {
    if (activeTab === 0) return technicians;
    
    const categoryMap = {
      1: ['متخصص فنی و تعمیرات'],
      2: ['متخصص نظافت و بهداشت'],
      3: ['متخصص باغبانی و فضای سبز'],
      4: ['متخصص زیبایی و مراقبت'],
      5: ['متخصص امنیت و نگهبانی']
    };
    
    return technicians.filter(tech => 
      categoryMap[activeTab]?.some(cat => tech.specialty.includes(cat.split(' ')[1]))
    );
  };

  return (
    <section style={{
      padding: '6rem 0',
      background: 'linear-gradient(135deg, rgba(13, 13, 13, 0.98), rgba(26, 26, 26, 0.95))',
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
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(212, 175, 55, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(212, 175, 55, 0.05) 0%, transparent 50%)
        `,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* Header Section - Awesomic Style */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            color: '#ffffff',
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
تیم متخصص ما
          </h2>
          <p style={{
            fontSize: '1.3rem',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}>
            فقط بهترین‌ها را انتخاب می‌کنیم تا خدمات باکیفیت به شما ارائه دهیم
          </p>

          {/* Quality Stats - Compact Design */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
            {qualityStats.map((stat, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.05))',
                backdropFilter: 'blur(15px)',
                border: '2px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '20px',
                padding: '1.2rem 1.8rem',
                textAlign: 'center',
                transition: 'all 0.4s ease',
                cursor: 'pointer',
                minWidth: '160px',
                maxWidth: '200px',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.6)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(212, 175, 55, 0.08))';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(212, 175, 55, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.05))';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                {/* Decorative element */}
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  width: '30px',
                  height: '30px',
                  background: 'rgba(212, 175, 55, 0.1)',
                  borderRadius: '50%',
                  opacity: '0.5'
                }}></div>
                
                <div style={{
                  fontSize: '2.2rem',
                  fontWeight: '800',
                  color: '#d4af37',
                  marginBottom: '0.3rem',
                  textShadow: '0 2px 10px rgba(212, 175, 55, 0.3)'
                }}>
                  {stat.percentage}
                </div>
                <h4 style={{
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  marginBottom: '0.2rem',
                  letterSpacing: '0.5px'
                }}>
                  {stat.title}
                </h4>
                <p style={{
                  fontSize: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.3',
                  margin: '0'
                }}>
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '3rem'
        }}>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              style={{
                background: activeTab === index 
                  ? 'linear-gradient(135deg, #d4af37, #b8941f)' 
                  : 'rgba(255, 255, 255, 0.05)',
                color: activeTab === index ? '#000000' : '#ffffff',
                border: activeTab === index 
                  ? '2px solid #d4af37' 
                  : '2px solid rgba(255, 255, 255, 0.1)',
                padding: '0.8rem 1.5rem',
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== index) {
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.5)';
                  e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== index) {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                }
              }}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Team Grid - Awesomic Style */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {getFilteredTechnicians().map((technician, index) => (
            <div
              key={technician.id}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '2rem',
                transition: 'all 0.4s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={() => setHoveredCard(technician.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onMouseMove={(e) => {
                if (hoveredCard === technician.id) {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.4)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(212, 175, 55, 0.15)';
                }
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Badge */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'linear-gradient(135deg, #d4af37, #b8941f)',
                color: '#000000',
                padding: '0.3rem 0.8rem',
                borderRadius: '20px',
                fontSize: '0.7rem',
                fontWeight: '600'
              }}>
                {technician.badge}
              </div>

              {/* Profile Section */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1.5rem',
                gap: '1rem'
              }}>
                <div style={{
                  position: 'relative'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '3px solid #d4af37',
                    boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)'
                  }}>
                    <img 
                      src={technician.avatar} 
                      alt={technician.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: '-5px',
                    right: '-5px',
                    width: '30px',
                    height: '30px',
                    background: '#d4af37',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <i className={technician.icon} style={{
                      color: '#000000',
                      fontSize: '0.8rem'
                    }}></i>
                  </div>
                </div>

                <div style={{ flex: 1 }}>
                  <h3 style={{
                    color: '#ffffff',
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    marginBottom: '0.3rem'
                  }}>
                    {technician.name}
                  </h3>
                  <p style={{
                    color: '#d4af37',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    {technician.specialty}
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div style={{
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  {technician.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} style={{
                      background: 'rgba(212, 175, 55, 0.1)',
                      color: '#d4af37',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '15px',
                      fontSize: '0.7rem',
                      fontWeight: '500',
                      border: '1px solid rgba(212, 175, 55, 0.2)'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    color: '#d4af37',
                    fontSize: '1.2rem',
                    fontWeight: '700'
                  }}>
                    ⭐ {technician.rating}
                  </div>
                  <div style={{
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.7rem'
                  }}>
                    امتیاز
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    color: '#d4af37',
                    fontSize: '1.2rem',
                    fontWeight: '700'
                  }}>
                    {technician.completedProjects}
                  </div>
                  <div style={{
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.7rem'
                  }}>
                    پروژه
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    color: '#d4af37',
                    fontSize: '1.2rem',
                    fontWeight: '700'
                  }}>
                    {technician.responseTime}
                  </div>
                  <div style={{
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.7rem'
                  }}>
                    پاسخ
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button style={{
                width: '100%',
                background: hoveredCard === technician.id 
                  ? 'linear-gradient(135deg, #d4af37, #b8941f)' 
                  : 'rgba(212, 175, 55, 0.1)',
                color: hoveredCard === technician.id ? '#000000' : '#d4af37',
                border: '2px solid #d4af37',
                padding: '0.8rem',
                borderRadius: '12px',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                <i className="fas fa-phone" style={{ marginLeft: '0.5rem' }}></i>
                تماس با {technician.name}
              </button>
            </div>
          ))}
        </div>

        {/* Elegant CTA Section */}
        <div style={{
          marginTop: '4rem',
          position: 'relative'
        }}>
          {/* Morphism Container */}
          <div style={{
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            border: '1px solid rgba(212, 175, 55, 0.18)',
            borderRadius: '24px',
            padding: '3rem 2rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.37)'
          }}>
            
            {/* Subtle animated background */}
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              background: 'linear-gradient(45deg, transparent 30%, rgba(212, 175, 55, 0.03) 50%, transparent 70%)',
              animation: 'slideBackground 8s ease-in-out infinite',
              pointerEvents: 'none'
            }}></div>

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              {/* Modern Title */}
              <h3 style={{
                fontSize: '2.5rem',
                fontWeight: '300',
                color: '#ffffff',
                marginBottom: '0.5rem',
                letterSpacing: '-0.02em',
                lineHeight: '1.2'
              }}>
                آماده <span style={{ 
                  fontWeight: '700', 
                  color: '#d4af37',
                  position: 'relative'
                }}>
                  همکاری
                  <div style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: '0',
                    right: '0',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #d4af37, transparent)',
                    borderRadius: '1px'
                  }}></div>
                </span> هستید؟
              </h3>

              {/* Subtitle */}
              <p style={{
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '2.5rem',
                fontWeight: '400',
                maxWidth: '400px',
                margin: '0 auto 2.5rem'
              }}>
                به تیم متخصصان ما بپیوندید و تجربه کار در محیطی حرفه‌ای داشته باشید
              </p>

              {/* Modern Button with Neumorphism */}
              <button 
                onClick={() => window.location.href = '/technician-registration'}
                style={{
                  background: 'linear-gradient(145deg, #d4af37, #b8941f)',
                  color: '#000000',
                  border: 'none',
                  padding: '1rem 2.5rem',
                  borderRadius: '16px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: `
                    0 4px 15px rgba(212, 175, 55, 0.4),
                    inset 0 1px 0 rgba(255, 255, 255, 0.2),
                    inset 0 -1px 0 rgba(0, 0, 0, 0.1)
                  `,
                  position: 'relative',
                  overflow: 'hidden',
                  minWidth: '200px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = `
                    0 8px 25px rgba(212, 175, 55, 0.5),
                    inset 0 1px 0 rgba(255, 255, 255, 0.3),
                    inset 0 -1px 0 rgba(0, 0, 0, 0.1)
                  `;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `
                    0 4px 15px rgba(212, 175, 55, 0.4),
                    inset 0 1px 0 rgba(255, 255, 255, 0.2),
                    inset 0 -1px 0 rgba(0, 0, 0, 0.1)
                  `;
                }}
              >
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                  شروع همکاری
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>

              {/* Minimal trust indicator */}
              <div style={{
                marginTop: '2rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
                fontSize: '0.85rem',
                color: 'rgba(255, 255, 255, 0.5)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#d4af37'
                  }}></div>
                  ثبت‌نام رایگان
                </div>
                <div style={{
                  width: '1px',
                  height: '12px',
                  background: 'rgba(255, 255, 255, 0.2)'
                }}></div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#d4af37'
                  }}></div>
                  بدون تعهد
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal CSS animations */}
        <style jsx>{`
          @keyframes slideBackground {
            0%, 100% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
          }
        `}</style>
      </div>
    </section>
  );
}
