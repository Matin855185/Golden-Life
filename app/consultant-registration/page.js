'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function ConsultantRegistrationPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    licenseNumber: '',
    experience: '',
    education: '',
    specializations: [],
    workingAreas: '',
    address: '',
    motivation: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const specializationOptions = [
    'خرید و فروش آپارتمان',
    'خرید و فروش ویلا',
    'اجاره مسکونی',
    'اجاره تجاری',
    'سرمایه‌گذاری املاک',
    'مشاوره حقوقی املاک',
    'ارزیابی املاک',
    'مدیریت املاک'
  ];

  const showcaseSlides = [
    {
      title: 'سیستم CRM پیشرفته',
      desc: 'مدیریت مشتریان، پیگیری معاملات و گزارش‌گیری هوشمند',
      icon: '📊',
      features: ['مدیریت لیدها', 'پیگیری خودکار', 'گزارش فروش', 'تحلیل بازار']
    },
    {
      title: 'پلتفرم آموزشی',
      desc: 'دسترسی به بهترین دوره‌های آموزشی املاک و فروش',
      icon: '🎓',
      features: ['دوره‌های آنلاین', 'وبینارهای زنده', 'مربی شخصی', 'گواهینامه معتبر']
    },
    {
      title: 'شبکه ارتباطات',
      desc: 'دسترسی به شبکه گسترده مشاوران و سرمایه‌گذاران',
      icon: '🤝',
      features: ['شبکه ملی', 'رویدادهای تخصصی', 'گروه‌های منطقه‌ای', 'تبادل تجربه']
    },
    {
      title: 'ابزارهای بازاریابی',
      desc: 'ابزارهای حرفه‌ای برای تبلیغات و جذب مشتری',
      icon: '📱',
      features: ['کمپین دیجیتال', 'محتوای آماده', 'طراحی گرافیک', 'مدیریت شبکه‌های اجتماعی']
    }
  ];

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % showcaseSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [showcaseSlides.length]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSpecializationChange = (specialization) => {
    setFormData(prev => ({
      ...prev,
      specializations: prev.specializations.includes(specialization)
        ? prev.specializations.filter(s => s !== specialization)
        : [...prev.specializations, specialization]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.specializations.length === 0) {
      alert('لطفاً حداقل یک تخصص انتخاب کنید');
      return;
    }

    setIsSubmitting(true);
    
    // شبیه‌سازی ارسال فرم
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          licenseNumber: '',
          experience: '',
          education: '',
          specializations: [],
          workingAreas: '',
          address: '',
          motivation: ''
        });
      }, 3000);
    }, 2000);
  };

  return (
    <>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
      
    <div className="golden-life-app consultant-registration-page">
      <Header />
      
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #0d0d0d, #1a1a1a, #0d0d0d)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '8rem'
      }}>
        {/* Background Effects */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(212, 175, 55, 0.05), transparent, rgba(212, 175, 55, 0.05))'
          }}></div>
        </div>
        
        <div style={{ position: 'relative', width: '100%', padding: '5rem 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            
            {/* Hero Content */}
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
              <div style={{ display: 'inline-block', marginBottom: '2rem' }}>
                <span style={{
                  background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                  color: '#000',
                  padding: '0.75rem 2rem',
                  borderRadius: '2rem',
                  fontSize: '1.125rem',
                  fontWeight: 'bold',
                  boxShadow: '0 8px 24px rgba(212, 175, 55, 0.3)',
                  animation: 'pulse 2s infinite'
                }}>
                  🏆 بهترین مشاوران املاک
                </span>
              </div>
              <h1 style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '2rem',
                lineHeight: 1.2,
                whiteSpace: 'nowrap'
              }}>
                به تیم <span style={{
                  background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Golden Life</span> بپیوندید
              </h1>
              <p style={{
                color: '#cccccc',
                fontSize: '1.2rem',
                maxWidth: '800px',
                margin: '0 auto 3rem',
                lineHeight: 1.4
              }}>
                فرصت طلایی برای همکاری با بهترین پلتفرم املاک کشور
                <br />
                <span style={{ color: '#d4af37', fontWeight: '600' }}>درآمد بالا، آموزش رایگان، پشتیبانی 24/7</span>
              </p>
              
              {/* Stats Section */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                {[
                  { number: '500+', label: 'مشاور فعال', icon: '👥' },
                  { number: '10K+', label: 'معامله موفق', icon: '🏠' },
                  { number: '98%', label: 'رضایت مشتری', icon: '⭐' },
                  { number: '24/7', label: 'پشتیبانی', icon: '📞' }
                ].map((stat, index) => (
                  <div key={index} style={{
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.05))',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    borderRadius: '1.5rem',
                    padding: '2rem 1rem',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-5px)';
                    e.target.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                    <div style={{
                      fontSize: '2.5rem',
                      fontWeight: 'bold',
                      color: '#d4af37',
                      marginBottom: '0.5rem'
                    }}>{stat.number}</div>
                    <div style={{
                      fontSize: '1rem',
                      color: '#cccccc',
                      fontWeight: '500'
                    }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div style={{
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.1))',
                border: '2px solid rgba(34, 197, 94, 0.4)',
                borderRadius: '1.5rem',
                padding: '3rem',
                textAlign: 'center',
                marginBottom: '3rem',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🎉</div>
                <h3 style={{ color: '#22c55e', fontWeight: 'bold', fontSize: '2rem', marginBottom: '1rem' }}>
                  تبریک! درخواست شما ثبت شد
                </h3>
                <p style={{ color: '#cccccc', fontSize: '1.25rem', lineHeight: 1.6 }}>
                  تیم Golden Life در کمترین زمان با شما تماس خواهد گرفت
                  <br />
                  <span style={{ color: '#22c55e', fontWeight: '600' }}>
                    شماره پیگیری: GL-{Math.floor(Math.random() * 10000)}
                  </span>
                </p>
              </div>
            )}

            {/* Benefits Section */}
            <div style={{ marginBottom: '5rem' }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#ffffff',
                textAlign: 'center',
                marginBottom: '3rem'
              }}>چرا Golden Life؟</h2>
              
              <div style={{
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08), rgba(0, 0, 0, 0.4))',
                backdropFilter: 'blur(20px)',
                border: '2px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '2rem',
                padding: '3rem',
                maxWidth: '800px',
                margin: '0 auto',
                textAlign: 'center'
              }}>
                <div style={{
                  color: '#ffffff',
                  fontSize: '1.2rem',
                  lineHeight: '2',
                  marginBottom: '2rem'
                }}>
                  <p style={{ marginBottom: '1.5rem' }}>
                    <span style={{ color: '#d4af37', fontWeight: 'bold', fontSize: '1.3rem' }}>💰 درآمد بالا:</span>
                    <br />
                    کمیسیون رقابتی تا 3% از هر معامله و امکان کسب درآمد ماهانه بالای 20 میلیون تومان
                  </p>
                  
                  <p style={{ marginBottom: '1.5rem' }}>
                    <span style={{ color: '#d4af37', fontWeight: 'bold', fontSize: '1.3rem' }}>🎓 آموزش رایگان:</span>
                    <br />
                    دسترسی به دوره‌های تخصصی املاک، فروش، بازاریابی و مذاکره با مربیان حرفه‌ای
                  </p>
                  
                  <p style={{ marginBottom: '1.5rem' }}>
                    <span style={{ color: '#d4af37', fontWeight: 'bold', fontSize: '1.3rem' }}>🏆 برند معتبر:</span>
                    <br />
                    همکاری با بزرگترین و معتبرترین پلتفرم املاک کشور با بیش از 500 مشاور فعال
                  </p>
                  
                  <p style={{ marginBottom: '1.5rem' }}>
                    <span style={{ color: '#d4af37', fontWeight: 'bold', fontSize: '1.3rem' }}>📞 پشتیبانی 24/7:</span>
                    <br />
                    تیم پشتیبانی حرفه‌ای همیشه در کنار شما برای حل مشکلات و راهنمایی
                  </p>
                  
                  <p style={{ marginBottom: '1.5rem' }}>
                    <span style={{ color: '#d4af37', fontWeight: 'bold', fontSize: '1.3rem' }}>🚀 رشد سریع:</span>
                    <br />
                    فرصت ارتقا به مدیر منطقه، سوپروایزر و حتی شریک تجاری در کمترین زمان
                  </p>
                  
                  <p style={{ marginBottom: '0' }}>
                    <span style={{ color: '#d4af37', fontWeight: 'bold', fontSize: '1.3rem' }}>🤝 شبکه گسترده:</span>
                    <br />
                    دسترسی به هزاران مشتری فعال، سرمایه‌گذاران و شبکه ملی مشاوران املاک
                  </p>
                </div>
                
                <div style={{
                  marginTop: '2.5rem',
                  padding: '1.5rem',
                  background: 'rgba(212, 175, 55, 0.1)',
                  borderRadius: '1rem',
                  border: '1px solid rgba(212, 175, 55, 0.3)'
                }}>
                  <p style={{
                    color: '#d4af37',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    margin: '0'
                  }}>
                    ✨ همین امروز عضو خانواده Golden Life شوید و آینده‌ای طلایی را تجربه کنید!
                  </p>
                </div>
              </div>
            </div>

            {/* Success Stories */}
            <div style={{ marginBottom: '5rem' }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#ffffff',
                textAlign: 'center',
                marginBottom: '3rem'
              }}>داستان‌های موفقیت</h2>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
              }}>
                {[
                  { name: 'احمد رضایی', role: 'مشاور ارشد', income: '15 میلیون', desc: 'در 6 ماه از تازه‌کار به مشاور ارشد رسیدم' },
                  { name: 'مریم احمدی', role: 'مدیر منطقه', income: '25 میلیون', desc: 'تیم 10 نفره دارم و درآمد ثابت ماهانه' },
                  { name: 'علی محمدی', role: 'مشاور VIP', income: '20 میلیون', desc: 'تخصص در املاک لوکس، مشتریان ثابت' }
                ].map((story, index) => (
                  <div key={index} style={{
                    background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.05))',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    borderRadius: '1.5rem',
                    padding: '2rem',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem',
                      fontSize: '2rem'
                    }}>👤</div>
                    <h3 style={{ color: '#22c55e', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                      {story.name}
                    </h3>
                    <p style={{ color: '#d4af37', fontSize: '1rem', marginBottom: '0.5rem' }}>
                      {story.role}
                    </p>
                    <p style={{ color: '#ffffff', fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                      درآمد ماهانه: {story.income} تومان
                    </p>
                    <p style={{ color: '#cccccc', fontSize: '0.9rem', fontStyle: 'italic' }}>
                      &ldquo;{story.desc}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Showcase Slider */}
            <div style={{ marginBottom: '5rem' }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#ffffff',
                textAlign: 'center',
                marginBottom: '3rem'
              }}>امکانات و ابزارهای حرفه‌ای</h2>
              
              <div style={{
                position: 'relative',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '2rem',
                padding: '3rem',
                overflow: 'hidden'
              }}>
                {/* Slide Content */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '3rem',
                  minHeight: '300px'
                }}>
                  {/* Icon */}
                  <div style={{
                    fontSize: '6rem',
                    background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textAlign: 'center',
                    minWidth: '120px'
                  }}>
                    {showcaseSlides[currentSlide].icon}
                  </div>
                  
                  {/* Content */}
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '2.5rem',
                      fontWeight: 'bold',
                      color: '#d4af37',
                      marginBottom: '1rem'
                    }}>
                      {showcaseSlides[currentSlide].title}
                    </h3>
                    <p style={{
                      fontSize: '1.25rem',
                      color: '#cccccc',
                      marginBottom: '2rem',
                      lineHeight: 1.6
                    }}>
                      {showcaseSlides[currentSlide].desc}
                    </p>
                    
                    {/* Features */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '1rem'
                    }}>
                      {showcaseSlides[currentSlide].features.map((feature, index) => (
                        <div key={index} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.75rem 1rem',
                          background: 'rgba(212, 175, 55, 0.1)',
                          border: '1px solid rgba(212, 175, 55, 0.3)',
                          borderRadius: '0.75rem'
                        }}>
                          <span style={{ color: '#d4af37', fontSize: '1.25rem' }}>✓</span>
                          <span style={{ color: '#ffffff', fontSize: '1rem' }}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Navigation Dots */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '1rem',
                  marginTop: '2rem'
                }}>
                  {showcaseSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        border: 'none',
                        background: index === currentSlide ? '#d4af37' : 'rgba(255, 255, 255, 0.3)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  ))}
                </div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + showcaseSlides.length) % showcaseSlides.length)}
                  style={{
                    position: 'absolute',
                    left: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    border: '2px solid rgba(212, 175, 55, 0.5)',
                    background: 'rgba(0, 0, 0, 0.5)',
                    color: '#d4af37',
                    fontSize: '1.25rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(212, 175, 55, 0.2)';
                    e.target.style.borderColor = '#d4af37';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(0, 0, 0, 0.5)';
                    e.target.style.borderColor = 'rgba(212, 175, 55, 0.5)';
                  }}
                >
                  ←
                </button>
                
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % showcaseSlides.length)}
                  style={{
                    position: 'absolute',
                    right: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    border: '2px solid rgba(212, 175, 55, 0.5)',
                    background: 'rgba(0, 0, 0, 0.5)',
                    color: '#d4af37',
                    fontSize: '1.25rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(212, 175, 55, 0.2)';
                    e.target.style.borderColor = '#d4af37';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(0, 0, 0, 0.5)';
                    e.target.style.borderColor = 'rgba(212, 175, 55, 0.5)';
                  }}
                >
                  →
                </button>
                
                {/* Progress Bar */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'rgba(255, 255, 255, 0.1)'
                }}>
                  <div
                    style={{
                      height: '100%',
                      background: 'linear-gradient(90deg, #d4af37, #f4d03f)',
                      width: `${((currentSlide + 1) / showcaseSlides.length) * 100}%`,
                      transition: 'width 0.3s ease'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Form Container */}
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: '#ffffff',
                  marginBottom: '1rem'
                }}>فرم ثبت‌نام مشاوران</h2>
                <p style={{ color: '#cccccc', fontSize: '1.125rem' }}>
                  لطفاً تمام فیلدها را با دقت و صحت تکمیل کنید
                </p>
              </div>
              
              <form onSubmit={handleSubmit}>
                
                {/* Personal Info Section */}
                <div style={{
                  position: 'relative',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  marginBottom: '2rem',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #d4af37, #f4d03f, #d4af37)'
                  }}></div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '2rem',
                    paddingBottom: '1rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <div style={{
                      width: '3.5rem',
                      height: '3.5rem',
                      background: 'linear-gradient(135deg, #d4af37, #b8941f)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#000',
                      fontWeight: 'bold',
                      fontSize: '1.25rem',
                      marginLeft: '1rem',
                      boxShadow: '0 8px 16px rgba(212, 175, 55, 0.3)'
                    }}>1</div>
                    <h3 style={{
                      fontSize: '1.875rem',
                      fontWeight: 'bold',
                      color: '#ffffff',
                      margin: 0
                    }}>اطلاعات شخصی</h3>
                  </div>
                  
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem'
                  }}>
                    {/* Full Name */}
                    <div style={{ position: 'relative', marginBottom: '1rem' }}>
                      <div style={{
                        position: 'absolute',
                        right: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#d4af37',
                        fontSize: '1.25rem',
                        zIndex: 10
                      }}>👤</div>
                      <input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          paddingRight: '3rem',
                          paddingLeft: '1.5rem',
                          paddingTop: '1rem',
                          paddingBottom: '1rem',
                          background: 'rgba(0, 0, 0, 0.4)',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '1rem',
                          color: '#ffffff',
                          fontSize: '1.125rem',
                          fontWeight: '500',
                          backdropFilter: 'blur(10px)',
                          transition: 'all 0.3s ease',
                          outline: 'none'
                        }}
                        placeholder="نام و نام خانوادگی"
                        onFocus={(e) => e.target.style.borderColor = '#d4af37'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
                      />
                    </div>

                    {/* Email */}
                    <div style={{ position: 'relative', marginBottom: '1rem' }}>
                      <div style={{
                        position: 'absolute',
                        right: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#d4af37',
                        fontSize: '1.25rem',
                        zIndex: 10
                      }}>📧</div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          paddingRight: '3rem',
                          paddingLeft: '1.5rem',
                          paddingTop: '1rem',
                          paddingBottom: '1rem',
                          background: 'rgba(0, 0, 0, 0.4)',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '1rem',
                          color: '#ffffff',
                          fontSize: '1.125rem',
                          fontWeight: '500',
                          backdropFilter: 'blur(10px)',
                          transition: 'all 0.3s ease',
                          outline: 'none'
                        }}
                        placeholder="آدرس ایمیل"
                        onFocus={(e) => e.target.style.borderColor = '#d4af37'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
                      />
                    </div>

                    {/* Phone */}
                    <div style={{ position: 'relative', marginBottom: '1rem' }}>
                      <div style={{
                        position: 'absolute',
                        right: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#d4af37',
                        fontSize: '1.25rem',
                        zIndex: 10
                      }}>📱</div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          paddingRight: '3rem',
                          paddingLeft: '1.5rem',
                          paddingTop: '1rem',
                          paddingBottom: '1rem',
                          background: 'rgba(0, 0, 0, 0.4)',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '1rem',
                          color: '#ffffff',
                          fontSize: '1.125rem',
                          fontWeight: '500',
                          backdropFilter: 'blur(10px)',
                          transition: 'all 0.3s ease',
                          outline: 'none'
                        }}
                        placeholder="شماره تماس"
                        onFocus={(e) => e.target.style.borderColor = '#d4af37'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
                      />
                    </div>

                    {/* License Number */}
                    <div style={{ position: 'relative', marginBottom: '1rem' }}>
                      <div style={{
                        position: 'absolute',
                        right: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#d4af37',
                        fontSize: '1.25rem',
                        zIndex: 10
                      }}>🏢</div>
                      <input
                        name="licenseNumber"
                        value={formData.licenseNumber}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          paddingRight: '3rem',
                          paddingLeft: '1.5rem',
                          paddingTop: '1rem',
                          paddingBottom: '1rem',
                          background: 'rgba(0, 0, 0, 0.4)',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '1rem',
                          color: '#ffffff',
                          fontSize: '1.125rem',
                          fontWeight: '500',
                          backdropFilter: 'blur(10px)',
                          transition: 'all 0.3s ease',
                          outline: 'none'
                        }}
                        placeholder="شماره پروانه کسب"
                        onFocus={(e) => e.target.style.borderColor = '#d4af37'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Info Section */}
                <div style={{
                  position: 'relative',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  marginBottom: '2rem',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #22c55e, #16a34a, #22c55e)'
                  }}></div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '2rem',
                    paddingBottom: '1rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <div style={{
                      width: '3.5rem',
                      height: '3.5rem',
                      background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#000',
                      fontWeight: 'bold',
                      fontSize: '1.25rem',
                      marginLeft: '1rem',
                      boxShadow: '0 8px 16px rgba(34, 197, 94, 0.3)'
                    }}>2</div>
                    <h3 style={{
                      fontSize: '1.875rem',
                      fontWeight: 'bold',
                      color: '#ffffff',
                      margin: 0
                    }}>اطلاعات حرفه‌ای</h3>
                  </div>
                  
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem',
                    marginBottom: '1.5rem'
                  }}>
                    {/* Experience */}
                    <div style={{ position: 'relative', marginBottom: '1rem' }}>
                      <div style={{
                        position: 'absolute',
                        right: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#22c55e',
                        fontSize: '1.25rem',
                        zIndex: 10
                      }}>⏰</div>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          paddingRight: '3rem',
                          paddingLeft: '1.5rem',
                          paddingTop: '1rem',
                          paddingBottom: '1rem',
                          background: 'rgba(0, 0, 0, 0.4)',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '1rem',
                          color: '#ffffff',
                          fontSize: '1.125rem',
                          fontWeight: '500',
                          backdropFilter: 'blur(10px)',
                          transition: 'all 0.3s ease',
                          outline: 'none',
                          appearance: 'none'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#22c55e'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
                      >
                        <option value="" style={{ background: '#1a1a1a', color: '#ffffff' }}>سابقه کار</option>
                        <option value="تازه‌کار" style={{ background: '#1a1a1a', color: '#ffffff' }}>تازه‌کار (کمتر از 1 سال)</option>
                        <option value="1-2" style={{ background: '#1a1a1a', color: '#ffffff' }}>1-2 سال</option>
                        <option value="3-5" style={{ background: '#1a1a1a', color: '#ffffff' }}>3-5 سال</option>
                        <option value="6-10" style={{ background: '#1a1a1a', color: '#ffffff' }}>6-10 سال</option>
                        <option value="10+" style={{ background: '#1a1a1a', color: '#ffffff' }}>بیش از 10 سال</option>
                      </select>
                    </div>

                    {/* Education */}
                    <div style={{ position: 'relative', marginBottom: '1rem' }}>
                      <div style={{
                        position: 'absolute',
                        right: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#22c55e',
                        fontSize: '1.25rem',
                        zIndex: 10
                      }}>🎓</div>
                      <select
                        name="education"
                        value={formData.education}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          paddingRight: '3rem',
                          paddingLeft: '1.5rem',
                          paddingTop: '1rem',
                          paddingBottom: '1rem',
                          background: 'rgba(0, 0, 0, 0.4)',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '1rem',
                          color: '#ffffff',
                          fontSize: '1.125rem',
                          fontWeight: '500',
                          backdropFilter: 'blur(10px)',
                          transition: 'all 0.3s ease',
                          outline: 'none',
                          appearance: 'none'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#22c55e'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
                      >
                        <option value="" style={{ background: '#1a1a1a', color: '#ffffff' }}>تحصیلات</option>
                        <option value="diploma" style={{ background: '#1a1a1a', color: '#ffffff' }}>دیپلم</option>
                        <option value="associate" style={{ background: '#1a1a1a', color: '#ffffff' }}>کاردانی</option>
                        <option value="bachelor" style={{ background: '#1a1a1a', color: '#ffffff' }}>کارشناسی</option>
                        <option value="master" style={{ background: '#1a1a1a', color: '#ffffff' }}>کارشناسی ارشد</option>
                        <option value="phd" style={{ background: '#1a1a1a', color: '#ffffff' }}>دکتری</option>
                      </select>
                    </div>
                  </div>
                  
                  {/* Motivation */}
                  <div style={{ position: 'relative', marginBottom: '1rem' }}>
                    <div style={{
                      position: 'absolute',
                      right: '1rem',
                      top: '1.5rem',
                      color: '#22c55e',
                      fontSize: '1.25rem',
                      zIndex: 10
                    }}>💼</div>
                    <textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      rows="4"
                      style={{
                        width: '100%',
                        paddingRight: '3rem',
                        paddingLeft: '1.5rem',
                        paddingTop: '1rem',
                        paddingBottom: '1rem',
                        background: 'rgba(0, 0, 0, 0.4)',
                        border: '2px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '1rem',
                        color: '#ffffff',
                        fontSize: '1.125rem',
                        fontWeight: '500',
                        backdropFilter: 'blur(10px)',
                        transition: 'all 0.3s ease',
                        outline: 'none',
                        resize: 'none'
                      }}
                      placeholder="چرا می‌خواهید با Golden Life همکاری کنید؟"
                      onFocus={(e) => e.target.style.borderColor = '#22c55e'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
                    />
                  </div>
                </div>

                {/* Specializations Section */}
                <div style={{
                  position: 'relative',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  marginBottom: '2rem',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #8b5cf6, #7c3aed, #8b5cf6)'
                  }}></div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '2rem',
                    paddingBottom: '1rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <div style={{
                      width: '3.5rem',
                      height: '3.5rem',
                      background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontWeight: 'bold',
                      fontSize: '1.25rem',
                      marginLeft: '1rem',
                      boxShadow: '0 8px 16px rgba(139, 92, 246, 0.3)'
                    }}>3</div>
                    <h3 style={{
                      fontSize: '1.875rem',
                      fontWeight: 'bold',
                      color: '#ffffff',
                      margin: 0
                    }}>تخصص‌ها *</h3>
                  </div>
                  
                  <p style={{
                    color: '#cccccc',
                    marginBottom: '2rem',
                    fontSize: '1.125rem',
                    textAlign: 'center'
                  }}>
                    حداقل یک تخصص انتخاب کنید
                  </p>
                  
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1rem'
                  }}>
                    {specializationOptions.map((spec) => (
                      <label key={spec} style={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '1rem',
                        background: 'rgba(0, 0, 0, 0.3)',
                        border: `2px solid ${formData.specializations.includes(spec) ? '#8b5cf6' : 'rgba(255, 255, 255, 0.1)'}`,
                        borderRadius: '1rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        backdropFilter: 'blur(5px)'
                      }}
                      onMouseEnter={(e) => {
                        if (!formData.specializations.includes(spec)) {
                          e.target.style.borderColor = 'rgba(139, 92, 246, 0.5)';
                          e.target.style.background = 'rgba(139, 92, 246, 0.05)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!formData.specializations.includes(spec)) {
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                          e.target.style.background = 'rgba(0, 0, 0, 0.3)';
                        }
                      }}>
                        <input
                          type="checkbox"
                          checked={formData.specializations.includes(spec)}
                          onChange={() => handleSpecializationChange(spec)}
                          style={{ display: 'none' }}
                        />
                        <div style={{
                          width: '1.5rem',
                          height: '1.5rem',
                          marginLeft: '0.75rem',
                          border: '2px solid rgba(255, 255, 255, 0.4)',
                          borderRadius: '0.375rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: formData.specializations.includes(spec) 
                            ? 'linear-gradient(135deg, #8b5cf6, #7c3aed)' 
                            : 'transparent',
                          borderColor: formData.specializations.includes(spec) ? '#8b5cf6' : 'rgba(255, 255, 255, 0.4)',
                          transition: 'all 0.3s ease'
                        }}>
                          {formData.specializations.includes(spec) && (
                            <span style={{ color: '#ffffff', fontSize: '1rem' }}>✓</span>
                          )}
                        </div>
                        <span style={{
                          color: '#ffffff',
                          fontWeight: '500',
                          fontSize: '1rem',
                          transition: 'color 0.3s ease'
                        }}>{spec}</span>
                      </label>
                    ))}
                  </div>
                  
                  {formData.specializations.length > 0 && (
                    <div style={{
                      marginTop: '1.5rem',
                      padding: '1rem',
                      background: 'rgba(34, 197, 94, 0.1)',
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                      borderRadius: '0.75rem',
                      textAlign: 'center'
                    }}>
                      <p style={{ color: '#22c55e', margin: 0 }}>
                        ✅ {formData.specializations.length} تخصص انتخاب شده
                      </p>
                    </div>
                  )}
                </div>

                {/* Additional Info Section */}
                <div style={{
                  position: 'relative',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  marginBottom: '2rem',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #f97316, #ea580c, #f97316)'
                  }}></div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '2rem',
                    paddingBottom: '1rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <div style={{
                      width: '3.5rem',
                      height: '3.5rem',
                      background: 'linear-gradient(135deg, #f97316, #ea580c)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontWeight: 'bold',
                      fontSize: '1.25rem',
                      marginLeft: '1rem',
                      boxShadow: '0 8px 16px rgba(249, 115, 22, 0.3)'
                    }}>4</div>
                    <h3 style={{
                      fontSize: '1.875rem',
                      fontWeight: 'bold',
                      color: '#ffffff',
                      margin: 0
                    }}>اطلاعات تکمیلی</h3>
                  </div>
                  
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem'
                  }}>
                    {/* Working Areas */}
                    <div style={{ position: 'relative', marginBottom: '1rem' }}>
                      <div style={{
                        position: 'absolute',
                        right: '1rem',
                        top: '1.5rem',
                        color: '#f97316',
                        fontSize: '1.25rem',
                        zIndex: 10
                      }}>🗺️</div>
                      <textarea
                        name="workingAreas"
                        value={formData.workingAreas}
                        onChange={handleInputChange}
                        required
                        rows="4"
                        style={{
                          width: '100%',
                          paddingRight: '3rem',
                          paddingLeft: '1.5rem',
                          paddingTop: '1rem',
                          paddingBottom: '1rem',
                          background: 'rgba(0, 0, 0, 0.4)',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '1rem',
                          color: '#ffffff',
                          fontSize: '1.125rem',
                          fontWeight: '500',
                          backdropFilter: 'blur(10px)',
                          transition: 'all 0.3s ease',
                          outline: 'none',
                          resize: 'none'
                        }}
                        placeholder="مناطق فعالیت خود را بنویسید (مثال: تهران، کرج، اسلامشهر)"
                        onFocus={(e) => e.target.style.borderColor = '#f97316'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
                      />
                    </div>

                    {/* Address */}
                    <div style={{ position: 'relative', marginBottom: '1rem' }}>
                      <div style={{
                        position: 'absolute',
                        right: '1rem',
                        top: '1.5rem',
                        color: '#f97316',
                        fontSize: '1.25rem',
                        zIndex: 10
                      }}>🏠</div>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        rows="4"
                        style={{
                          width: '100%',
                          paddingRight: '3rem',
                          paddingLeft: '1.5rem',
                          paddingTop: '1rem',
                          paddingBottom: '1rem',
                          background: 'rgba(0, 0, 0, 0.4)',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '1rem',
                          color: '#ffffff',
                          fontSize: '1.125rem',
                          fontWeight: '500',
                          backdropFilter: 'blur(10px)',
                          transition: 'all 0.3s ease',
                          outline: 'none',
                          resize: 'none'
                        }}
                        placeholder="آدرس کامل دفتر کار یا محل فعالیت"
                        onFocus={(e) => e.target.style.borderColor = '#f97316'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Section */}
                <div style={{ textAlign: 'center', paddingTop: '3rem' }}>
                  {/* Info Box */}
                  <div style={{ marginBottom: '2.5rem' }}>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '1rem',
                      background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(244, 224, 166, 0.1))',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(212, 175, 55, 0.4)',
                      borderRadius: '1.5rem',
                      padding: '2rem 2.5rem',
                      boxShadow: '0 8px 24px rgba(212, 175, 55, 0.2)'
                    }}>
                      <span style={{ 
                        color: '#d4af37', 
                        fontSize: '2rem',
                        animation: 'pulse 2s infinite'
                      }}>⚡</span>
                      <div>
                        <p style={{ 
                          color: '#ffffff', 
                          fontWeight: 'bold', 
                          fontSize: '1.25rem',
                          margin: '0 0 0.5rem 0'
                        }}>پاسخ سریع تضمینی</p>
                        <p style={{ 
                          color: '#cccccc',
                          margin: 0,
                          fontSize: '1rem'
                        }}>حداکثر 24 ساعت با شما تماس می‌گیریم</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || formData.specializations.length === 0}
                    style={{
                      position: 'relative',
                      background: isSubmitting || formData.specializations.length === 0 
                        ? 'rgba(212, 175, 55, 0.5)' 
                        : 'linear-gradient(135deg, #d4af37, #f4d03f)',
                      color: '#000000',
                      fontWeight: 'bold',
                      fontSize: '1.25rem',
                      padding: '1.5rem 3rem',
                      border: 'none',
                      borderRadius: '2rem',
                      cursor: isSubmitting || formData.specializations.length === 0 ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: isSubmitting || formData.specializations.length === 0 
                        ? 'none' 
                        : '0 8px 24px rgba(212, 175, 55, 0.4)',
                      transform: 'scale(1)',
                      outline: 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting && formData.specializations.length > 0) {
                        e.target.style.transform = 'scale(1.05)';
                        e.target.style.boxShadow = '0 12px 32px rgba(212, 175, 55, 0.5)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting && formData.specializations.length > 0) {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = '0 8px 24px rgba(212, 175, 55, 0.4)';
                      }
                    }}
                    onMouseDown={(e) => {
                      if (!isSubmitting && formData.specializations.length > 0) {
                        e.target.style.transform = 'scale(0.98)';
                      }
                    }}
                    onMouseUp={(e) => {
                      if (!isSubmitting && formData.specializations.length > 0) {
                        e.target.style.transform = 'scale(1.05)';
                      }
                    }}
                  >
                    {isSubmitting ? (
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        gap: '0.75rem' 
                      }}>
                        <div style={{
                          width: '1.5rem',
                          height: '1.5rem',
                          border: '2px solid rgba(0, 0, 0, 0.3)',
                          borderTop: '2px solid #000000',
                          borderRadius: '50%',
                          animation: 'spin 1s linear infinite'
                        }}></div>
                        در حال ارسال...
                      </div>
                    ) : (
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        gap: '0.75rem' 
                      }}>
                        <span style={{ fontSize: '1.5rem' }}>🚀</span>
                        ارسال درخواست و شروع همکاری
                        <span style={{ 
                          fontSize: '1.25rem',
                          transition: 'transform 0.3s ease'
                        }}>←</span>
                      </div>
                    )}
                  </button>
                  
                  {formData.specializations.length === 0 && (
                    <p style={{
                      color: '#ef4444',
                      marginTop: '1rem',
                      fontSize: '1rem'
                    }}>
                      ⚠️ لطفاً حداقل یک تخصص انتخاب کنید
                    </p>
                  )}
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
    </>
  );
}
