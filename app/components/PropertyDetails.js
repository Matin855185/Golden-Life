'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LazyImage from './LazyImage';
import LazySection from './LazySection';

export default function PropertyDetails({ propertyId }) {
  const [property, setProperty] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // داده‌های کامل املاک (همان داده‌های AllProperties + اطلاعات اضافی)
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
      elevator: true,
      storage: true,
      balcony: true,
      images: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop'
      ],
      description: 'آپارتمان لوکس و مدرن در بهترین نقطه نیاوران با دسترسی عالی به مراکز خرید و تفریحی. این واحد دارای نما مدرن، نورگیری عالی و چشم‌انداز فوق‌العاده است.',
      features: ['پارکینگ', 'آسانسور', 'انباری', 'بالکن', 'سرایداری', 'سیستم گرمایشی', 'کولر گازی'],
      agent: {
        name: 'احمد رضایی',
        phone: '09123456789',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
      },
      coordinates: { lat: 35.7219, lng: 51.4677 },
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
      elevator: true,
      storage: false,
      balcony: true,
      images: [
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop'
      ],
      description: 'آپارتمان نوساز در منطقه سعادت آباد با امکانات کامل و دسترسی آسان به مترو.',
      features: ['پارکینگ', 'آسانسور', 'بالکن', 'کابینت MDF', 'کف پارکت'],
      agent: {
        name: 'مریم احمدی',
        phone: '09987654321',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
      },
      coordinates: { lat: 35.7575, lng: 51.3751 },
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
      elevator: true,
      storage: true,
      balcony: true,
      images: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop'
      ],
      description: 'آپارتمان فوق‌العاده در شهرک غرب با ویو عالی و امکانات کامل رفاهی.',
      features: ['پارکینگ', 'آسانسور', 'انباری', 'بالکن', 'استخر', 'سونا', 'سالن ورزش'],
      agent: {
        name: 'علی محمدی',
        phone: '09111222333',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
      },
      coordinates: { lat: 35.7589, lng: 51.3773 },
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
      elevator: true,
      storage: false,
      balcony: true,
      images: [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop'
      ],
      description: 'آپارتمان مبله و لوکس در زعفرانیه برای اجاره کوتاه مدت و بلند مدت.',
      features: ['پارکینگ', 'آسانسور', 'بالکن', 'مبله', 'کولر گازی', 'پکیج'],
      agent: {
        name: 'سارا کریمی',
        phone: '09444555666',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
      },
      coordinates: { lat: 35.8067, lng: 51.4310 },
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
      elevator: false,
      storage: true,
      balcony: true,
      images: [
        'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop'
      ],
      description: 'ویلای مدرن دو طبقه با حیاط سازی شده و فضای سبز زیبا در فرمانیه.',
      features: ['پارکینگ', 'حیاط', 'باربیکیو', 'فضای سبز', 'تراس', 'کمد دیواری'],
      agent: {
        name: 'حسین نوری',
        phone: '09777888999',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
      },
      coordinates: { lat: 35.7919, lng: 51.4696 },
      isVip: true
    }
  ];

  useEffect(() => {
    const foundProperty = allProperties.find(p => p.id === parseInt(propertyId));
    setProperty(foundProperty);
  }, [propertyId]);

  const formatPrice = (price, dealType) => {
    if (dealType === 'اجاره') {
      return `${price} میلیون تومان`;
    }
    return `${price} میلیارد تومان`;
  };

  const handleImageChange = (index) => {
    setActiveImageIndex(index);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  if (!property) {
    return (
      <div className="property-details-loading">
        <div className="container">
          <div className="loading-spinner">
            <i className="fas fa-spinner fa-spin"></i>
            <p>در حال بارگذاری...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="property-details-page">
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link href="/" className="breadcrumb-link">خانه</Link>
          <i className="fas fa-chevron-left"></i>
          <Link href="/all-properties" className="breadcrumb-link">همه آگهی‌ها</Link>
          <i className="fas fa-chevron-left"></i>
          <span className="breadcrumb-current">{property.type} در {property.location}</span>
        </div>

        <div className="property-details-content">
          {/* گالری تصاویر */}
          <LazySection animationType="fadeInUp" className="property-gallery">
            <div className="main-image">
              <LazyImage
                src={property.images[activeImageIndex]}
                alt={`${property.type} در ${property.location}`}
                width={800}
                height={600}
                className="main-property-image"
              />
              {property.isVip && (
                <div className="vip-badge-large">
                  <i className="fas fa-crown"></i>
                  VIP
                </div>
              )}
              <button 
                className={`favorite-btn-large ${isLiked ? 'liked' : ''}`}
                onClick={toggleLike}
              >
                <i className={isLiked ? "fas fa-heart" : "far fa-heart"}></i>
              </button>
            </div>
            
            <div className="image-thumbnails">
              {property.images.map((image, index) => (
                <div 
                  key={index}
                  className={`thumbnail ${index === activeImageIndex ? 'active' : ''}`}
                  onClick={() => handleImageChange(index)}
                >
                  <LazyImage
                    src={image}
                    alt={`تصویر ${index + 1}`}
                    width={150}
                    height={100}
                  />
                </div>
              ))}
            </div>
          </LazySection>

          {/* اطلاعات اصلی */}
          <LazySection animationType="fadeInUp" delay={200} className="property-info">
            <div className="property-header-details">
              <div className="property-title">
                <h1>{property.type} {property.area} متری در {property.location}</h1>
                <div className="property-meta">
                  <span className={`deal-type ${property.dealType === 'فروش' ? 'sale' : 'rent'}`}>
                    {property.dealType}
                  </span>
                  <span className="property-id">کد: {property.id}</span>
                </div>
              </div>
              
              <div className="property-price-large">
                <span className="price-amount">{formatPrice(property.price, property.dealType)}</span>
                <span className="price-per-meter">
                  {property.dealType === 'فروش' ? 
                    `${Math.round(parseFloat(property.price.replace(',', '')) * 1000000000 / parseInt(property.area)).toLocaleString()} تومان/متر` :
                    `${Math.round(parseFloat(property.price) * 1000000 / parseInt(property.area)).toLocaleString()} تومان/متر`
                  }
                </span>
              </div>
            </div>

            {/* مشخصات کلیدی */}
            <div className="property-specs">
              <div className="spec-item">
                <i className="fas fa-expand-arrows-alt"></i>
                <div>
                  <span className="spec-label">متراژ</span>
                  <span className="spec-value">{property.area} متر</span>
                </div>
              </div>
              <div className="spec-item">
                <i className="fas fa-bed"></i>
                <div>
                  <span className="spec-label">تعداد اتاق</span>
                  <span className="spec-value">{property.rooms} خواب</span>
                </div>
              </div>
              <div className="spec-item">
                <i className="fas fa-calendar-alt"></i>
                <div>
                  <span className="spec-label">سال ساخت</span>
                  <span className="spec-value">{property.year}</span>
                </div>
              </div>
              <div className="spec-item">
                <i className="fas fa-layer-group"></i>
                <div>
                  <span className="spec-label">طبقه</span>
                  <span className="spec-value">{property.floor}</span>
                </div>
              </div>
            </div>

            {/* توضیحات */}
            <div className="property-description">
              <h3>توضیحات</h3>
              <p>{property.description}</p>
            </div>

            {/* امکانات */}
            <div className="property-features">
              <h3>امکانات</h3>
              <div className="features-grid">
                {property.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <i className="fas fa-check"></i>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </LazySection>

          {/* اطلاعات مشاور */}
          <LazySection animationType="fadeInUp" delay={400} className="agent-info">
            <h3>مشاور املاک</h3>
            <div className="agent-card">
              <div className="agent-avatar">
                <LazyImage
                  src={property.agent.image}
                  alt={property.agent.name}
                  width={80}
                  height={80}
                />
              </div>
              <div className="agent-details">
                <h4>{property.agent.name}</h4>
                <p>مشاور املاک گلدن لایف</p>
              </div>
              <div className="agent-actions">
                <a href={`tel:${property.agent.phone}`} className="contact-btn">
                  <i className="fas fa-phone"></i>
                  تماس
                </a>
                <button className="message-btn">
                  <i className="fas fa-comment"></i>
                  پیام
                </button>
              </div>
            </div>
          </LazySection>

          {/* نقشه */}
          <LazySection animationType="fadeInUp" delay={600} className="property-map">
            <h3>موقعیت مکانی</h3>
            <div className="map-container">
              <div className="map-placeholder">
                <i className="fas fa-map-marker-alt"></i>
                <p>{property.location}</p>
                <small>نقشه در حال بارگذاری...</small>
              </div>
            </div>
          </LazySection>

          {/* دکمه‌های عملیات */}
          <LazySection animationType="fadeInUp" delay={800} className="property-actions-large">
            <button className="action-btn primary">
              <i className="fas fa-calendar-check"></i>
              درخواست بازدید
            </button>
            <button className="action-btn secondary">
              <i className="fas fa-calculator"></i>
              محاسبه وام
            </button>
            <button className="action-btn secondary">
              <i className="fas fa-share-alt"></i>
              اشتراک‌گذاری
            </button>
            <button className="action-btn secondary">
              <i className="fas fa-print"></i>
              چاپ
            </button>
          </LazySection>
        </div>
      </div>
    </section>
  );
}
