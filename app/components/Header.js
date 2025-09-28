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
          
          {/* Left Navigation - Settings */}
          <div className="nav-left">
            <button onClick={toggleTheme} className="nav-link nav-btn">
              <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
              {isDarkMode ? t('light_mode') : t('dark_mode')}
            </button>
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
              خدمات VIP
            </button>
          </div>

          <div 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </header>
  );
}
