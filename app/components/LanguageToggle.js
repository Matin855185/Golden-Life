'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div className="toggle-btn-container">
      <button 
        className="language-toggle-btn"
        onClick={toggleLanguage}
      >
        <div className="lang-content">
          <div className="lang-icon">
            {language === 'fa' ? '🇺🇸' : '🇮🇷'}
          </div>
          <div className="lang-text">
            {language === 'fa' ? 'EN' : 'فا'}
          </div>
        </div>
      </button>
      <div className="toggle-tooltip">
        {language === 'fa' ? 'English' : 'فارسی'}
      </div>
    </div>
  );
}
