'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

export default function Header() {
  const { t, language, isRTL } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [logoError, setLogoError] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // بازگشت به بالای صفحه هنگام لود
    window.scrollTo(0, 0);
    
    // بارگذاری تم از localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.body.classList.add('light-mode');
    }
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToHome = () => {
    window.location.href = '/';
    setIsMenuOpen(false);
  };

  const navigateToAllProperties = () => {
    window.location.href = '/all-properties';
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      // تغییر به Dark Mode
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      // تغییر به Light Mode
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    }
    
    setIsMenuOpen(false);
  };

  return (
    <header className={`header kilid-header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar kilid-style">
        <div className="nav-container">
          {/* Logo Section - Kilid Style */}
          <div className="nav-logo">
            <div className="logo-main">
              {!logoError ? (
                <Image 
                  src="/SiteLogo.png.png" 
                  alt="Golden Life Logo" 
                  className="site-logo"
                  width={48}
                  height={48}
                  onError={() => setLogoError(true)}
                />
              ) : (
                <i className="fas fa-key logo-fallback" />
              )}
              <div className="logo-text">
                <span className="logo-title">{t('golden_life')}</span>
                <small className="logo-subtitle">{t('real_estate_market')}</small>
              </div>
            </div>
          </div>

          {/* Right Navigation - Authentication */}
          <div className="nav-right">
            <button onClick={() => window.location.href = '/authentication'} className="nav-link auth-btn register-btn">
              <i className="fas fa-user-plus"></i>
              {t('register') || 'ثبت نام'}
            </button>
            <button onClick={() => window.location.href = '/authentication'} className="nav-link auth-btn login-btn">
              <i className="fas fa-user"></i>
              {t('login') || 'ورود'}
            </button>
          </div>
          
          {/* Left Navigation - Settings */}
          <div className="nav-left">
            <div className="toggle-btn-container">
              <button 
                onClick={toggleTheme} 
                className={`theme-toggle-btn ${!isDarkMode ? 'light-mode' : ''}`}
              >
                <div className="theme-content">
                  <i className={`fas ${isDarkMode ? 'fa-lightbulb' : 'fa-moon'} theme-icon`}></i>
                  <div className="theme-text">
                    {isDarkMode ? 'Light' : 'Dark'}
                  </div>
                </div>
              </button>
              <div className="toggle-tooltip">
                {isDarkMode ? 'حالت روز' : 'حالت شب'}
              </div>
            </div>
            <LanguageToggle />
          </div>

          {/* Center Navigation - Routes */}
          <div className="nav-center">
            <button onClick={navigateToHome} className="nav-link nav-btn">
              <i className="fas fa-home"></i>
              {t('home')}
            </button>
            <button onClick={navigateToAllProperties} className="nav-link nav-btn">
              <i className="fas fa-building"></i>
              {t('all_properties')}
            </button>
            <button onClick={() => window.location.href = '/vip-services'} className="nav-link nav-btn vip-nav-btn">
              <i className="fas fa-crown"></i>
              {t('vip_services')}
            </button>
            
            {/* Dropdown for Collaboration */}
            <div 
              className="nav-dropdown-collaboration" 
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="nav-link nav-btn collaboration-btn">
                <i className="fas fa-user-plus"></i>
                همکاری با ما
                <i className="fas fa-chevron-down" style={{ 
                  transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  fontSize: '12px',
                  marginLeft: '8px',
                  color: '#d4af37'
                }}></i>
              </button>
              {dropdownOpen && (
                <div className="collaboration-dropdown-menu">
                  <button 
                    onClick={() => window.location.href = '/technician-registration'} 
                    className="collaboration-dropdown-item"
                  >
                    <i className="fas fa-tools"></i>
                    <span>ثبت‌نام تکنسین</span>
                  </button>
                  <button 
                    onClick={() => window.location.href = '/consultant-registration'} 
                    className="collaboration-dropdown-item"
                  >
                    <i className="fas fa-handshake"></i>
                    <span>ثبت‌نام مشاور املاک</span>
                  </button>
                </div>
              )}
            </div>

          <div 
            className={'hamburger ' + (isMenuOpen ? 'active' : '')}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
