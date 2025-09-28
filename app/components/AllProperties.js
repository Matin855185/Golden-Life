'use client';

import { useState, useEffect } from 'react';
import LazyImage from './LazyImage';
import LazySection from './LazySection';

export default function AllProperties() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [likedProperties, setLikedProperties] = useState(new Set());
  const [sortBy, setSortBy] = useState('newest');
  const [priceRange, setPriceRange] = useState('all');
  const [areaRange, setAreaRange] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 9;

  // داده‌های کامل املاک (بیشتر از صفحه اصلی)
  const allProperties = [
    {
      id: 1,
      type: 'آپارتمان',
      dealType: 'فروش',
      location: 'تهران - نیاوران',
      price: '15,500',
      area: '120',
      rooms: '3',
      year: '1402',
      floor: '5',
      parking: true,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
      isVip: true
    },
    {
      id: 2,
      type: 'آپارتمان',
      dealType: 'فروش',
      location: 'تهران - سعادت آباد',
      price: '12,800',
      area: '95',
      rooms: '2',
      year: '1398',
      floor: '3',
      parking: true,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
      isVip: false
    },
    {
      id: 3,
      type: 'آپارتمان',
      dealType: 'فروش',
      location: 'تهران - شهرک غرب',
      price: '18,200',
      area: '140',
      rooms: '3',
      year: '1401',
      floor: '7',
      parking: true,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop',
      isVip: true
    },
    {
      id: 4,
      type: 'آپارتمان',
      dealType: 'اجاره',
      location: 'تهران - زعفرانیه',
      price: '45',
      area: '110',
      rooms: '2',
      year: '1400',
      floor: '4',
      parking: true,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
      isVip: true
    },
    {
      id: 5,
      type: 'خانه ویلایی',
      dealType: 'فروش',
      location: 'تهران - فرمانیه',
      price: '28,500',
      area: '220',
      rooms: '4',
      year: '1399',
      floor: '2 طبقه',
      parking: true,
      image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400&h=300&fit=crop',
      isVip: true
    },
    {
      id: 6,
      type: 'آپارتمان',
      dealType: 'اجاره',
      location: 'تهران - تهرانپارس',
      price: '28',
      area: '85',
      rooms: '2',
      year: '1395',
      floor: '2',
      parking: false,
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop',
      isVip: false
    },
    // املاک اضافی برای صفحه همه آگهی‌ها
    {
      id: 7,
      type: 'آپارتمان',
      dealType: 'فروش',
      location: 'تهران - ولنجک',
      price: '22,300',
      area: '160',
      rooms: '3',
      year: '1401',
      floor: '6',
      parking: true,
      image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop',
      isVip: true
    },
    {
      id: 8,
      type: 'آپارتمان',
      dealType: 'اجاره',
      location: 'تهران - پونک',
      price: '35',
      area: '100',
      rooms: '2',
      year: '1399',
      floor: '8',
      parking: true,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
      isVip: false
    },
    {
      id: 9,
      type: 'خانه ویلایی',
      dealType: 'فروش',
      location: 'تهران - دروس',
      price: '35,000',
      area: '300',
      rooms: '5',
      year: '1400',
      floor: '3 طبقه',
      parking: true,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
      isVip: true
    },
    {
      id: 10,
      type: 'آپارتمان',
      dealType: 'فروش',
      location: 'تهران - جردن',
      price: '19,800',
      area: '130',
      rooms: '3',
      year: '1402',
      floor: '4',
      parking: true,
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop',
      isVip: false
    },
    {
      id: 11,
      type: 'آپارتمان',
      dealType: 'اجاره',
      location: 'تهران - اقدسیه',
      price: '50',
      area: '125',
      rooms: '3',
      year: '1401',
      floor: '5',
      parking: true,
      image: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=400&h=300&fit=crop',
      isVip: true
    },
    {
      id: 12,
      type: 'آپارتمان',
      dealType: 'فروش',
      location: 'تهران - کامرانیه',
      price: '16,700',
      area: '115',
      rooms: '2',
      year: '1400',
      floor: '3',
      parking: true,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      isVip: false
    }
  ];

  const formatPrice = (price, dealType) => {
    if (dealType === 'اجاره') {
      return `${price} میلیون تومان`;
    }
    return `${price} میلیارد تومان`;
  };

  const handleFilterChange = (filterType) => {
    setActiveFilter(filterType);
    setCurrentPage(1);
  };

  const toggleLike = (propertyId) => {
    setLikedProperties(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(propertyId)) {
        newLiked.delete(propertyId);
      } else {
        newLiked.add(propertyId);
      }
      return newLiked;
    });
  };

  // فیلتر کردن املاک
  const filteredProperties = allProperties.filter(property => {
    // فیلتر نوع معامله
    if (activeFilter === 'buy' && property.dealType !== 'فروش') return false;
    if (activeFilter === 'rent' && property.dealType !== 'اجاره') return false;
    
    // فیلتر قیمت
    if (priceRange !== 'all') {
      const numPrice = parseFloat(property.price.replace(',', ''));
      if (property.dealType === 'فروش') {
        if (priceRange === 'low' && numPrice > 15000) return false;
        if (priceRange === 'medium' && (numPrice <= 15000 || numPrice > 25000)) return false;
        if (priceRange === 'high' && numPrice <= 25000) return false;
      } else {
        if (priceRange === 'low' && numPrice > 30) return false;
        if (priceRange === 'medium' && (numPrice <= 30 || numPrice > 50)) return false;
        if (priceRange === 'high' && numPrice <= 50) return false;
      }
    }
    
    // فیلتر متراژ
    if (areaRange !== 'all') {
      const area = parseInt(property.area);
      if (areaRange === 'small' && area > 100) return false;
      if (areaRange === 'medium' && (area <= 100 || area > 150)) return false;
      if (areaRange === 'large' && area <= 150) return false;
    }
    
    return true;
  });

  // مرتب‌سازی املاک
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return parseInt(b.year) - parseInt(a.year);
      case 'oldest':
        return parseInt(a.year) - parseInt(b.year);
      case 'price-high':
        const priceA = parseFloat(a.price.replace(',', ''));
        const priceB = parseFloat(b.price.replace(',', ''));
        return priceB - priceA;
      case 'price-low':
        const priceA2 = parseFloat(a.price.replace(',', ''));
        const priceB2 = parseFloat(b.price.replace(',', ''));
        return priceA2 - priceB2;
      case 'area-large':
        return parseInt(b.area) - parseInt(a.area);
      case 'area-small':
        return parseInt(a.area) - parseInt(b.area);
      default:
        return 0;
    }
  });

  // صفحه‌بندی
  const totalPages = Math.ceil(sortedProperties.length / propertiesPerPage);
  const startIndex = (currentPage - 1) * propertiesPerPage;
  const currentProperties = sortedProperties.slice(startIndex, startIndex + propertiesPerPage);

  return (
    <section className="all-properties-page">
      <div className="container">
        {/* هدر صفحه */}
        <div className="page-header">
          <div className="breadcrumb">
            <a href="/" className="breadcrumb-link">خانه</a>
            <i className="fas fa-chevron-left"></i>
            <span className="breadcrumb-current">همه آگهی‌ها</span>
          </div>
          <h1 className="page-title">همه آگهی‌های املاک</h1>
          <p className="page-subtitle">
            {sortedProperties.length} آگهی در دسترس
          </p>
        </div>

        {/* فیلترها و مرتب‌سازی */}
        <div className="filters-section">
          <div className="filters-row">
            {/* فیلتر نوع معامله */}
            <div className="filter-group">
              <label className="filter-label">نوع معامله:</label>
              <div className="filter-buttons">
                <button 
                  className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} 
                  onClick={() => handleFilterChange('all')}
                >
                  همه
                </button>
                <button 
                  className={`filter-btn ${activeFilter === 'buy' ? 'active' : ''}`} 
                  onClick={() => handleFilterChange('buy')}
                >
                  فروش
                </button>
                <button 
                  className={`filter-btn ${activeFilter === 'rent' ? 'active' : ''}`} 
                  onClick={() => handleFilterChange('rent')}
                >
                  اجاره
                </button>
              </div>
            </div>

            {/* فیلتر قیمت */}
            <div className="filter-group">
              <label className="filter-label">محدوده قیمت:</label>
              <select 
                className="filter-select" 
                value={priceRange} 
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="all">همه قیمت‌ها</option>
                <option value="low">ارزان</option>
                <option value="medium">متوسط</option>
                <option value="high">گران</option>
              </select>
            </div>

            {/* فیلتر متراژ */}
            <div className="filter-group">
              <label className="filter-label">متراژ:</label>
              <select 
                className="filter-select" 
                value={areaRange} 
                onChange={(e) => setAreaRange(e.target.value)}
              >
                <option value="all">همه متراژها</option>
                <option value="small">کمتر از 100 متر</option>
                <option value="medium">100 تا 150 متر</option>
                <option value="large">بیشتر از 150 متر</option>
              </select>
            </div>

            {/* مرتب‌سازی */}
            <div className="filter-group">
              <label className="filter-label">مرتب‌سازی:</label>
              <select 
                className="filter-select" 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">جدیدترین</option>
                <option value="oldest">قدیمی‌ترین</option>
                <option value="price-high">گران‌ترین</option>
                <option value="price-low">ارزان‌ترین</option>
                <option value="area-large">بزرگ‌ترین</option>
                <option value="area-small">کوچک‌ترین</option>
              </select>
            </div>
          </div>
        </div>

        {/* نتایج */}
        <div className="results-info">
          <span className="results-count">
            نمایش {startIndex + 1} تا {Math.min(startIndex + propertiesPerPage, sortedProperties.length)} از {sortedProperties.length} آگهی
          </span>
        </div>

        {/* گرید املاک */}
        <div className="properties-grid">
          {currentProperties.map((property, index) => (
            <LazySection
              key={property.id}
              animationType="fadeInUp"
              delay={index * 100}
              className={`property-card ${property.isVip ? 'vip-property' : ''}`}
            >
              {property.isVip && (
                <div className="vip-badge">
                  <i className="fas fa-crown"></i>
                  VIP
                </div>
              )}
              
              <div className="property-image">
                <LazyImage 
                  src={property.image} 
                  alt={`${property.type} در ${property.location}`}
                  className="property-img"
                />
                <div className="property-price-overlay">
                  <span className="price-overlay-text">
                    {formatPrice(property.price, property.dealType)}
                  </span>
                </div>
                <div className="property-overlay">
                  <button className="view-details-btn">
                    <i className="fas fa-eye"></i>
                    مشاهده جزئیات
                  </button>
                </div>
              </div>

              <div className="property-content">
                <div className="property-header">
                  <div className="property-type">
                    <i className="fas fa-building"></i>
                    {property.type}
                  </div>
                  <div className={`deal-type ${property.dealType === 'فروش' ? 'sale' : 'rent'}`}>
                    {property.dealType}
                  </div>
                </div>

                <div className="property-location">
                  <i className="fas fa-map-marker-alt"></i>
                  {property.location}
                </div>

                <div className="property-details">
                  <div className="detail-item">
                    <i className="fas fa-expand-arrows-alt"></i>
                    <span>{property.area} متر</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-bed"></i>
                    <span>{property.rooms} خواب</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-calendar-alt"></i>
                    <span>ساخت {property.year}</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-layer-group"></i>
                    <span>طبقه {property.floor}</span>
                  </div>
                  <div className="detail-item">
                    <i className={`fas ${property.parking ? 'fa-car' : 'fa-times-circle'}`}></i>
                    <span>{property.parking ? 'پارکینگ دارد' : 'بدون پارکینگ'}</span>
                  </div>
                </div>

                <div className="property-actions">
                  <button className="contact-btn">
                    <i className="fas fa-phone"></i>
                    تماس
                  </button>
                  <button className="message-btn">
                    <i className="fas fa-comment"></i>
                    پیام
                  </button>
                  <button 
                    className={`favorite-btn ${likedProperties.has(property.id) ? 'liked' : ''}`}
                    onClick={() => toggleLike(property.id)}
                  >
                    <i className={likedProperties.has(property.id) ? "fas fa-heart" : "far fa-heart"}></i>
                  </button>
                  <button className="share-btn">
                    <i className="fas fa-share-alt"></i>
                  </button>
                </div>
              </div>
            </LazySection>
          ))}
        </div>

        {/* صفحه‌بندی */}
        {totalPages > 1 && (
          <div className="pagination">
            <button 
              className="pagination-btn prev"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <i className="fas fa-chevron-right"></i>
              قبلی
            </button>
            
            <div className="pagination-numbers">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  className={`pagination-number ${currentPage === page ? 'active' : ''}`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button 
              className="pagination-btn next"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              بعدی
              <i className="fas fa-chevron-left"></i>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
