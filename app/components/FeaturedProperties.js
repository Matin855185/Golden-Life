'use client';

import { useState } from 'react';
import Link from 'next/link';
import PropertyImageSlider from './PropertyImageSlider';
import LazySection from './LazySection';

// Wrapper component for property image with independent hover states
function PropertyImageWrapper({ property }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isSliderHovered, setIsSliderHovered] = useState(false);

  const handleImageAreaEnter = () => {
    setShowOverlay(true);
  };

  const handleImageAreaLeave = () => {
    setShowOverlay(false);
  };

  const handleSliderEnter = () => {
    setIsSliderHovered(true);
    setShowOverlay(false);
  };

  const handleSliderLeave = () => {
    setIsSliderHovered(false);
    setShowOverlay(true);
  };

  const formatPrice = (price, dealType) => {
    if (dealType === 'اجاره') {
      return `${price} میلیون تومان`;
    }
    return `${price} میلیارد تومان`;
  };

  return (
    <div 
      className="property-image"
      onMouseEnter={handleImageAreaEnter}
      onMouseLeave={handleImageAreaLeave}
    >
      <div
        onMouseEnter={handleSliderEnter}
        onMouseLeave={handleSliderLeave}
      >
        <PropertyImageSlider 
          images={property.images} 
          alt={`${property.type} در ${property.location}`}
        />
      </div>
      
      
      {showOverlay && !isSliderHovered && (
        <div className="property-overlay">
          <button className="view-details-btn">
            <i className="fas fa-eye"></i>
            مشاهده جزئیات
          </button>
        </div>
      )}
    </div>
  );
}

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
      images: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop'
      ],
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
      images: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400&h=300&fit=crop'
      ],
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
      images: [
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=400&h=300&fit=crop'
      ],
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
      images: [
        'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop'
      ],
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
      images: [
        'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop'
      ],
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
      images: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop'
      ],
      isVip: false
    },
    {
      id: 7,
      type: 'آپارتمان',
      dealType: 'فروش',
      location: 'تهران - پونک',
      price: '9,800',
      area: '75',
      rooms: '2',
      year: '1396',
      floor: '1',
      parking: true,
      images: [
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop'
      ],
      isVip: false
    },
    {
      id: 8,
      type: 'خانه ویلایی',
      dealType: 'اجاره',
      location: 'تهران - لواسان',
      price: '85',
      area: '300',
      rooms: '4',
      year: '1403',
      floor: '2 طبقه',
      parking: true,
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop'
      ],
      isVip: true
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
                </div>
              )}
              
              <PropertyImageWrapper property={property} />

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

                <div className="property-price">
                  <i className="fas fa-tag"></i>
                  <span className="price-text">
                    {formatPrice(property.price, property.dealType)}
                  </span>
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
          <Link href="/all-properties" className="golden-view-all-btn">
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
          </Link>
        </div>
      </div>
    </section>
  );
}
