'use client';

import { useState, useEffect } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 4);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const steps = [
    {
      icon: 'fas fa-search',
      title: 'جستجو و انتخاب',
      description: 'ملک ایده‌آل خود را با فیلترهای پیشرفته پیدا کنید',
      color: '#3498db'
    },
    {
      icon: 'fas fa-handshake',
      title: 'معامله امن',
      description: 'با تضمین کامل و مشاوره تخصصی معامله کنید',
      color: '#27ae60'
    },
    {
      icon: 'fas fa-key',
      title: 'تحویل ملک',
      description: 'کلید خانه رویایی‌تان را تحویل بگیرید',
      color: '#f39c12'
    },
    {
      icon: 'fas fa-crown',
      title: 'خدمات VIP',
      description: 'از خدمات ویژه پس از معامله بهره‌مند شوید',
      color: '#d4af37'
    }
  ];

  return (
    <section id="about-section" className="about-golden-life-new">
      <div className="container">
        <div className={`about-hero ${isVisible ? 'fade-in' : ''}`}>
          <div className="about-content-new">
            <div className="about-header">
              <span className="about-badge">
                <i className="fas fa-star"></i>
                پلتفرم تخصصی املاک
              </span>
              <h2 className="about-title-new">
                گلدن لایف، تجربه‌ای متفاوت از 
                <span className="highlight">خرید و فروش املاک</span>
              </h2>
              <p className="about-description-new">
                گلدن لایف اولین پلتفرم تخصصی املاک با خدمات VIP در ایران است. ما فراتر از یک سایت معمولی املاک، 
                تجربه‌ای کاملاً متفاوت و لوکس از خرید، فروش و اجاره ملک ارائه می‌دهیم. 
                با مجموعه‌ای از بهترین املاک و خدمات ویژه پس از معامله، رویای خانه‌ای که همیشه می‌خواستید را محقق کنید.
              </p>
            </div>

            <div className="journey-container">
              <h3 className="journey-title">سفر شما با گلدن لایف</h3>
              <div className="journey-steps">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className={`journey-step ${index === activeStep ? 'active' : ''} ${index < activeStep ? 'completed' : ''}`}
                  >
                    <div className="step-number" style={{ backgroundColor: step.color }}>
                      <i className={step.icon}></i>
                    </div>
                    <div className="step-content">
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="stats-showcase">
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-building"></i>
                </div>
                <div className="stat-info">
                  <span className="stat-number">۱۰۰۰+</span>
                  <span className="stat-label">ملک فعال</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="stat-info">
                  <span className="stat-number">۵۰۰+</span>
                  <span className="stat-label">مشتری راضی</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="stat-info">
                  <span className="stat-number">۲۴/۷</span>
                  <span className="stat-label">پشتیبانی</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
