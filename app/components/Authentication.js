'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Authentication() {
  const { t, language, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState('login');
  const [step, setStep] = useState('phone'); // phone, otp
  const [isLoading, setIsLoading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [formData, setFormData] = useState({
    phone: '',
    otp: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    fullName: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    // شبیه‌سازی ارسال کد
    console.log('ارسال کد به:', formData.phone);
    setStep('otp');
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // شبیه‌سازی تایید کد
    console.log('تایید کد:', formData.otp);
    if (activeTab === 'register') {
      setStep('profile');
    } else {
      alert('ورود موفقیت‌آمیز!');
    }
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log('ثبت نام کامل شد');
  };

  const resetForm = () => {
    setFormData({
      phone: '',
      otp: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      fullName: ''
    });
    setStep('phone');
  };

  const handleTabChange = (newTab) => {
    if (newTab === activeTab || isTransitioning) return;
    
    setIsTransitioning(true);
    
    // شروع انیمیشن خروج
    const currentForm = document.querySelector('.auth-form');
    if (currentForm) {
      currentForm.classList.add('form-transition-exit');
    }
    
    setTimeout(() => {
      setActiveTab(newTab);
      resetForm();
      
      setTimeout(() => {
        const newForm = document.querySelector('.auth-form');
        if (newForm) {
          newForm.classList.remove('form-transition-exit');
          newForm.classList.add('form-transition-enter');
          
          setTimeout(() => {
            newForm.classList.remove('form-transition-enter');
            setIsTransitioning(false);
          }, 600);
        }
      }, 50);
    }, 400);
  };

  const handleClose = () => {
    // اضافه کردن کلاس انیمیشن خروج
    const authSection = document.querySelector('.auth-section');
    if (authSection) {
      authSection.classList.add('auth-closing');
      
      // بعد از اتمام انیمیشن، صفحه را تغییر دهیم
      setTimeout(() => {
        window.location.href = '/';
      }, 200); // مدت زمان انیمیشن خروج (سریع‌تر)
    }
  };

  useEffect(() => {
    // بدون تاخیر - فوری لود می‌شود
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <section className="auth-loading-section">
        <div className="auth-spinner-container">
          <div className="golden-spinner">
            <div className="spinner-ring ring-1"></div>
            <div className="spinner-ring ring-2"></div>
            <div className="spinner-ring ring-3"></div>
            <div className="spinner-center">
              <i className="fas fa-key"></i>
            </div>
          </div>
          <div className="loading-text">
            <h3>Golden Life</h3>
            <p>در حال بارگذاری...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="auth-section">
      <div className="auth-container">
        <div className="auth-card">
          {/* Close Button */}
          <button className="auth-close-btn" onClick={handleClose}>
            <i className="fas fa-times"></i>
          </button>

          {/* Logo */}
          <div className="auth-logo">
            <div className="logo-main">
              <i className="fas fa-key"></i>
              <span>Golden Life</span>
            </div>
            <small className="logo-subtitle">{t('real_estate_market')}</small>
          </div>

          {/* Tabs */}
          <div className="auth-tabs">
            <button 
              className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
              onClick={() => handleTabChange('login')}
              disabled={isTransitioning}
            >
              {t('login')}
            </button>
            <button 
              className={`auth-tab ${activeTab === 'register' ? 'active' : ''}`}
              onClick={() => handleTabChange('register')}
              disabled={isTransitioning}
            >
              {t('register')}
            </button>
          </div>

          {/* Form Content */}
          <div className="auth-content">
            {step === 'phone' && activeTab === 'login' && (
              <form onSubmit={handlePhoneSubmit} className="auth-form login-form">
                <h2 className="auth-title">{t('login_title')}</h2>
                
                <div className="form-group">
                  <label htmlFor="email">{t('email_username')}</label>
                  <div className="input-with-icon">
                    <i className="fas fa-user"></i>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t('enter_email_username')}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="password">{t('password')}</label>
                  <div className="input-with-icon">
                    <i className="fas fa-lock" style={{color: 'var(--primary-gold)'}}></i>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password || ''}
                      onChange={handleInputChange}
                      placeholder={t('enter_password')}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group remember-group">
                  <label className="checkbox-container">
                    <input type="checkbox" id="remember" name="remember" />
                    <span className="checkmark"></span>
                    <span className="checkbox-text">{t('remember_me')}</span>
                  </label>
                </div>

                <button type="submit" className="auth-btn primary login-btn">
                  <i className="fas fa-sign-in-alt"></i>
                  {t('login')}
                </button>

                <div className="auth-links">
                  <a href="#" className="forgot-link">{t('forgot_password')}</a>
                  <p className="register-link">
                    {t('no_account')} 
                    <a href="#" onClick={(e) => {e.preventDefault(); handleTabChange('register');}}>
                      {t('join_now')}
                    </a>
                  </p>
                </div>
              </form>
            )}

            {step === 'phone' && activeTab === 'register' && (
              <form onSubmit={handlePhoneSubmit} className="auth-form register-form">
                <h2 className="auth-title">{t('register_title')}</h2>
                
                <div className="form-group">
                  <label htmlFor="fullName">{t('full_name')}</label>
                  <div className="input-with-icon">
                    <i className="fas fa-user"></i>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName || ''}
                      onChange={handleInputChange}
                      placeholder={t('enter_full_name')}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="registerEmail">{t('email')}</label>
                  <div className="input-with-icon">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="email"
                      id="registerEmail"
                      name="email"
                      value={formData.email || ''}
                      onChange={handleInputChange}
                      placeholder={t('enter_email')}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="registerPassword">{t('password')}</label>
                  <div className="input-with-icon">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      id="registerPassword"
                      name="password"
                      value={formData.password || ''}
                      onChange={handleInputChange}
                      placeholder={t('enter_password')}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">{t('confirm_password')}</label>
                  <div className="input-with-icon">
                    <i className="fas fa-lock" style={{color: 'var(--primary-gold)'}}></i>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword || ''}
                      onChange={handleInputChange}
                      placeholder={t('enter_confirm_password')}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group remember-group">
                  <label className="checkbox-container">
                    <input type="checkbox" id="terms" name="terms" required />
                    <span className="checkmark"></span>
                    <span className="checkbox-text">{t('accept_terms')}</span>
                  </label>
                </div>

                <button type="submit" className="auth-btn primary register-btn">
                  <i className="fas fa-user-plus"></i>
                  {t('register')}
                </button>

                <div className="auth-links">
                  <p className="login-link">
                    {t('have_account')} 
                    <a href="#" onClick={(e) => {e.preventDefault(); handleTabChange('login');}}>
                      {t('login_now')}
                    </a>
                  </p>
                </div>
              </form>
            )}

            {step === 'otp' && (
              <form onSubmit={handleOtpSubmit} className="auth-form">
                <h2 className="auth-title">{t('otp_title')}</h2>
                <p className="auth-subtitle">
                  {t('otp_subtitle', { phone: formData.phone })}
                </p>

                <div className="form-group">
                  <label htmlFor="otp">{t('otp_label')}</label>
                  <input
                    type="text"
                    id="otp"
                    name="otp"
                    value={formData.otp}
                    onChange={handleInputChange}
                    placeholder="12345"
                    className="form-input otp-input"
                    maxLength="5"
                    required
                  />
                </div>

                <button type="submit" className="auth-btn primary">
                  <i className="fas fa-check"></i>
                  {t('verify_code')}
                </button>

                <div className="auth-actions">
                  <button 
                    type="button" 
                    className="auth-btn secondary"
                    onClick={() => setStep('phone')}
                  >
                    <i className="fas fa-arrow-right"></i>
                    {t('back')}
                  </button>
                  <button type="button" className="resend-btn">
                    {t('resend_code')}
                  </button>
                </div>
              </form>
            )}

            {step === 'profile' && activeTab === 'register' && (
              <form onSubmit={handleProfileSubmit} className="auth-form">
                <h2 className="auth-title">{t('complete_info')}</h2>
                <p className="auth-subtitle">
                  {t('complete_info_subtitle')}
                </p>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">نام</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="نام خود را وارد کنید"
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">نام خانوادگی</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="نام خانوادگی خود را وارد کنید"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">ایمیل (اختیاری)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@email.com"
                    className="form-input"
                  />
                </div>

                <button type="submit" className="auth-btn primary">
                  <i className="fas fa-user-plus"></i>
                  تکمیل ثبت نام
                </button>

                <div className="auth-actions">
                  <button 
                    type="button" 
                    className="auth-btn secondary"
                    onClick={() => setStep('otp')}
                  >
                    <i className="fas fa-arrow-right"></i>
                    بازگشت
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Background Elements */}
        <div className="auth-bg-elements">
          <div className="bg-circle circle-1"></div>
          <div className="bg-circle circle-2"></div>
          <div className="bg-circle circle-3"></div>
        </div>
      </div>
    </section>
  );
}
