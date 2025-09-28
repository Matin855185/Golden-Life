'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button 
      className="nav-link nav-btn"
      onClick={toggleLanguage}
      title={t('language')}
    >
      <i className="fas fa-globe"></i>
      {language === 'fa' ? 'EN' : 'فا'}
    </button>
  );
}
