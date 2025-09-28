'use client';

import { useState } from 'react';
import LazyImage from './LazyImage';
import LazySection from './LazySection';

export default function FeaturedProperties() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [likedProperties, setLikedProperties] = useState(new Set());
  const featuredProperties = [
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

  const filteredProperties = featuredProperties.filter(property => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'buy') return property.dealType === 'فروش';
    if (activeFilter === 'rent') return property.dealType === 'اجاره';
    return true;
  });

  return (
    <section className="featured-properties">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            آگهی‌های جدید
          </h2>
          <p className="section-subtitle">
            جدیدترین املاک برای فروش و اجاره در سراسر تهران
          </p>
        </div>

        <div className="properties-tabs">
          <button 
            className={`property-tab ${activeFilter === 'all' ? 'active' : ''}`} 
            onClick={() => handleFilterChange('all')}
          >
            همه آگهی‌ها
          </button>
          <button 
            className={`property-tab ${activeFilter === 'buy' ? 'active' : ''}`} 
            onClick={() => handleFilterChange('buy')}
          >
            آگهی‌های فروش
          </button>
          <button 
            className={`property-tab ${activeFilter === 'rent' ? 'active' : ''}`} 
            onClick={() => handleFilterChange('rent')}
          >
            آگهی‌های اجاره
          </button>
        </div>

        <div className="properties-grid">
          {filteredProperties.map((property, index) => (
            <LazySection
              key={property.id}
              animationType="fadeInUp"
              delay={index * 150}
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

        <div className="view-all-section">
          <a href="/all-properties" className="golden-view-all-btn">
            <div className="golden-btn-bg"></div>
            <div className="golden-btn-content">
              <div className="golden-btn-icon">
                <i className="fas fa-building"></i>
              </div>
              <div className="golden-btn-text">
                <span className="golden-btn-title">مشاهده همه آگهی‌ها</span>
                <span className="golden-btn-subtitle">بیش از 1000+ ملک منتخب</span>
              </div>
              <div className="golden-btn-arrow">
                <i className="fas fa-chevron-left"></i>
              </div>
            </div>
            <div className="golden-btn-shimmer"></div>
            <div className="golden-btn-glow"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
