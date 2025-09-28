'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function HeroSection() {
  const { t, language, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState('buy');
  
  useEffect(() => {
    // اطمینان از بازگشت به بالای صفحه
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);
  
  const scrollToService = (serviceType) => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const headerHeight = 100;
      const targetPosition = servicesSection.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }

    // Highlight service card
    setTimeout(() => {
      highlightServiceCard(serviceType);
    }, 800);

    // Pre-select service in form
    setTimeout(() => {
      preSelectService(serviceType);
    }, 1000);
  };

  const highlightServiceCard = (serviceType) => {
    const serviceMap = {
      'shopping': 0,
      'medical': 1,
      'gardening': 2,
      'cleaning': 3,
      'technical': 4,
      'transport': 5,
      'security': 6,
      'catering': 7
    };

    const cardIndex = serviceMap[serviceType];
    if (cardIndex !== undefined) {
      const serviceCards = document.querySelectorAll('.service-card');
      const targetCard = serviceCards[cardIndex];
      
      if (targetCard) {
        // Reset all cards
        serviceCards.forEach(card => {
          card.style.transform = '';
          card.style.boxShadow = '';
          card.style.borderColor = '';
          card.style.background = '';
        });

        // Highlight target card
        targetCard.style.transform = 'translateY(-15px) scale(1.05)';
        targetCard.style.boxShadow = '0 15px 40px rgba(212, 175, 55, 0.5)';
        targetCard.style.borderColor = '#d4af37';
        targetCard.style.background = 'linear-gradient(135deg, #333333, rgba(212, 175, 55, 0.1))';

        // Remove highlight after 3 seconds
        setTimeout(() => {
          targetCard.style.transform = '';
          targetCard.style.boxShadow = '';
          targetCard.style.borderColor = '';
          targetCard.style.background = '';
        }, 3000);
      }
    }
  };

  const preSelectService = (serviceType) => {
  };

  const scrollToRequest = () => {
    const requestSection = document.getElementById('request');
    if (requestSection) {
      const headerHeight = 100;
      const targetPosition = requestSection.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleTabChange = (tabType) => {
    setActiveTab(tabType);
  };

  // handleAdvancedSearch moved to AdvancedSearchModal component

  const searchEstates = () => {
    const propertyType = document.getElementById('propertyType').value;
    const minPrice = document.getElementById('minPrice').value;
    const maxPrice = document.getElementById('maxPrice').value;
    const rooms = document.getElementById('rooms').value;
    const size = document.getElementById('size').value;
    const location = document.querySelector('.location-input').value;

    const searchParams = {
      dealType: activeTab,
      propertyType,
      minPrice,
      maxPrice,
      rooms,
      size,
      location
    };

    console.log('جستجوی املاک با پارامترهای:', searchParams);

    let message = 'نتایج جستجو:\n';
    const dealTypeMap = {
      'buy': 'خرید',
      'rent': 'رهن و اجاره',
      'price-evaluation': 'ارزیابی قیمت'
    };
    message += `نوع معامله: ${dealTypeMap[activeTab] || activeTab}\n`;
    if (propertyType) message += `نوع ملک: ${propertyType}\n`;
    if (location) message += `مکان: ${location}\n`;
    if (minPrice || maxPrice) message += `محدوده قیمت: ${minPrice || '0'} تا ${maxPrice || 'نامحدود'} میلیون تومان\n`;
    if (rooms) message += `تعداد اتاق: ${rooms}\n`;
    if (size) message += `متراژ: ${size}\n`;
    
    alert(message + '\nاملاک مناسب پیدا شد! برای مشاهده جزئیات با ما تماس بگیرید.');
  };


  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content" style={{marginTop: '40px'}}>
        <h1 className="hero-title fade-in" style={{marginTop: '-80px', fontSize: '3.2rem'}} data-mobile-style="font-size: 2.5rem; margin-top: -60px;">{t('hero_title')}</h1>
        <p className="hero-subtitle fade-in">{t('hero_subtitle')}</p>
        
        {/* Enhanced Search Box */}
        <div className="enhanced-search-container fade-in">
          <div className="search-tabs">
            <button 
              className={`search-tab ${activeTab === 'buy' ? 'active' : ''}`} 
              onClick={() => setActiveTab('buy')}
            >
              <i className="fas fa-shopping-cart"></i>
              {t('buy_tab')}
            </button>
            <button 
              className={`search-tab ${activeTab === 'rent' ? 'active' : ''}`} 
              onClick={() => setActiveTab('rent')}
            >
              <i className="fas fa-handshake"></i>
              {t('rent_tab')}
            </button>
            <button 
              className={`search-tab ${activeTab === 'price-evaluation' ? 'active' : ''}`} 
              onClick={() => setActiveTab('price-evaluation')}
            >
              <i className="fas fa-calculator"></i>
              {t('sell_tab')}
            </button>
          </div>
          
          <div className="search-form-enhanced">
            {/* Main Search Row */}
            <div className="search-row main-filters">
              <div className="search-field">
                <label>نوع ملک</label>
                <select id="propertyType" className="search-select">
                  <option value="">انتخاب کنید</option>
                  <option value="apartment">آپارتمان</option>
                  <option value="house">خانه ویلایی</option>
                  <option value="villa">ویلا</option>
                  <option value="office">اداری</option>
                  <option value="commercial">تجاری</option>
                  <option value="land">زمین</option>
                </select>
              </div>
              
              <div className="search-field location-field">
                <label>محدوده</label>
                <div className="input-with-icon">
                  <i className="fas fa-map-marker-alt"></i>
                  <input type="text" placeholder="شهر، محله یا منطقه" className="location-input" />
                </div>
              </div>
              
              <div className="search-field">
                <label>تعداد اتاق</label>
                <select id="rooms" className="search-select">
                  <option value="">انتخاب کنید</option>
                  <option value="1">1 خواب</option>
                  <option value="2">2 خواب</option>
                  <option value="3">3 خواب</option>
                  <option value="4">4 خواب</option>
                  <option value="5+">5+ خواب</option>
                </select>
              </div>
            </div>

            {/* Price and Size Row */}
            <div className="search-row price-size-row">
              <div className="price-range-group">
                <label>محدوده قیمت (میلیارد تومان)</label>
                <div className="price-inputs">
                  <input type="number" id="minPrice" placeholder="حداقل" className="price-input" />
                  <span className="price-separator">تا</span>
                  <input type="number" id="maxPrice" placeholder="حداکثر" className="price-input" />
                </div>
              </div>
              
              <div className="search-field">
                <label>متراژ</label>
                <select id="size" className="search-select">
                  <option value="">انتخاب کنید</option>
                  <option value="50-80">50-80 متر</option>
                  <option value="80-120">80-120 متر</option>
                  <option value="120-200">120-200 متر</option>
                  <option value="200-300">200-300 متر</option>
                  <option value="300+">بالای 300 متر</option>
                </select>
              </div>
            </div>

            {/* Essential Filters - Always Visible */}
            <div className="essential-filters-section">
              <div className="amenities-section">
                <label className="amenities-title">امکانات:</label>
                <div className="amenities-grid-mini">
                  <label className="checkbox-item-mini">
                    <input type="checkbox" id="parking" />
                    <span className="checkmark-mini"></span>
                    <span className="checkbox-text-mini">پارکینگ</span>
                  </label>
                  <label className="checkbox-item-mini">
                    <input type="checkbox" id="elevator" />
                    <span className="checkmark-mini"></span>
                    <span className="checkbox-text-mini">آسانسور</span>
                  </label>
                  <label className="checkbox-item-mini">
                    <input type="checkbox" id="storage" />
                    <span className="checkmark-mini"></span>
                    <span className="checkbox-text-mini">انباری</span>
                  </label>
                  <label className="checkbox-item-mini">
                    <input type="checkbox" id="furnished" />
                    <span className="checkmark-mini"></span>
                    <span className="checkbox-text-mini">مبله</span>
                  </label>
                  <label className="checkbox-item-mini">
                    <input type="checkbox" id="balcony" />
                    <span className="checkmark-mini"></span>
                    <span className="checkbox-text-mini">بالکن</span>
                  </label>
                  <label className="checkbox-item-mini">
                    <input type="checkbox" id="pool" />
                    <span className="checkmark-mini"></span>
                    <span className="checkbox-text-mini">استخر</span>
                  </label>
                  <label className="checkbox-item-mini">
                    <input type="checkbox" id="garden" />
                    <span className="checkmark-mini"></span>
                    <span className="checkbox-text-mini">باغچه</span>
                  </label>
                  <label className="checkbox-item-mini">
                    <input type="checkbox" id="renovated" />
                    <span className="checkmark-mini"></span>
                    <span className="checkbox-text-mini">نوساز</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Additional Filters Row */}
            <div className="search-row additional-filters">
              <div className="search-field">
                <label>طبقه</label>
                <select id="floor" className="search-select">
                  <option value="">انتخاب کنید</option>
                  <option value="همکف">همکف</option>
                  <option value="1-3">طبقات 1-3</option>
                  <option value="4-7">طبقات 4-7</option>
                  <option value="8+">طبقات بالا (8+)</option>
                </select>
              </div>
              
              <div className="search-field">
                <label>سن بنا</label>
                <select id="buildingAge" className="search-select">
                  <option value="">انتخاب کنید</option>
                  <option value="نوساز">نوساز (تا 2 سال)</option>
                  <option value="2-5">2-5 سال</option>
                  <option value="5-10">5-10 سال</option>
                  <option value="10-20">10-20 سال</option>
                  <option value="20+">بالای 20 سال</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <div className="search-button-row">
              <button className="search-btn-enhanced" onClick={searchEstates}>
                <i className="fas fa-search"></i>
                جستجو در املاک
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  );
}
