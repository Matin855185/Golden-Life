'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import LazyImage from './LazyImage';
import LazySection from './LazySection';

export default function AllPropertiesNew() {
  const router = useRouter();
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [likedProperties, setLikedProperties] = useState(new Set());
  const [selectedDistricts, setSelectedDistricts] = useState([]);
  const [propertyType, setPropertyType] = useState('all');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minArea, setMinArea] = useState('');
  const [maxArea, setMaxArea] = useState('');
  const [rooms, setRooms] = useState('all');
  const [hasParking, setHasParking] = useState('all');
  const [buildingAge, setBuildingAge] = useState('all');
  const propertiesPerPage = 12;

  // Sample enhanced property data
  const allProperties = [
    {
      id: 1,
      type: 'آپارتمان',
      dealType: 'فروش',
      location: 'تهران - نیاوران',
      district: 'نیاوران',
      price: '15500',
      area: '120',
      rooms: '3',
      year: '1402',
      floor: '5',
      totalFloors: '8',
      parking: true,
      elevator: true,
      balcony: true,
      storage: true,
      furnished: false,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop'
      ],
      isVip: true,
      agent: 'احمد محمدی',
      agentPhone: '09123456789',
      description: 'آپارتمان لوکس در بهترین منطقه نیاوران',
      features: ['آسانسور', 'پارکینگ', 'انباری', 'بالکن'],
      viewCount: 245,
      publishDate: '1403/01/15'
    },
    // Add more properties...
  ];

  const districts = ['نیاوران', 'سعادت آباد', 'شهرک غرب', 'زعفرانیه', 'فرمانیه'];

  const formatPrice = (price, dealType) => {
    const numPrice = parseInt(price);
    if (dealType === 'اجاره') {
      return `${numPrice} میلیون تومان`;
    }
    return `${(numPrice / 1000).toFixed(1)} میلیارد تومان`;
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

  return (
    <section className="all-properties-premium">
      {/* Hero Header */}
      <div className="properties-hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="breadcrumb-modern">
              <Link href="/" className="breadcrumb-link">
                <i className="fas fa-home"></i>
                خانه
              </Link>
              <i className="fas fa-chevron-left"></i>
              <span className="breadcrumb-current">همه آگهی‌ها</span>
            </div>
            <h1 className="hero-title">
              <span className="title-main">مجموعه کامل</span>
              <span className="title-highlight">آگهی‌های املاک</span>
            </h1>
            <p className="hero-subtitle">
              بیش از {allProperties.length} آگهی منتخب در بهترین مناطق تهران
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Advanced Search & Filters */}
        <div className="search-filters-premium">
          <div className="search-header">
            <div className="search-main">
              <div className="search-input-group">
                <i className="fas fa-search search-icon"></i>
                <input
                  type="text"
                  placeholder="جستجو در آگهی‌ها..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input-premium"
                />
                <button className="search-clear" onClick={() => setSearchQuery('')}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <button 
                className="filters-toggle"
                onClick={() => setShowFilters(!showFilters)}
              >
                <i className="fas fa-sliders-h"></i>
                فیلترهای پیشرفته
                <span className="filter-count">3</span>
              </button>
            </div>
            
            <div className="view-controls">
              <div className="view-mode-toggle">
                <button 
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <i className="fas fa-th-large"></i>
                </button>
                <button 
                  className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  <i className="fas fa-list"></i>
                </button>
                <button 
                  className={`view-btn ${viewMode === 'map' ? 'active' : ''}`}
                  onClick={() => setViewMode('map')}
                >
                  <i className="fas fa-map"></i>
                </button>
              </div>
              
              <div className="sort-dropdown">
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select-premium"
                >
                  <option value="newest">جدیدترین</option>
                  <option value="price-high">گران‌ترین</option>
                  <option value="price-low">ارزان‌ترین</option>
                  <option value="area-large">بزرگ‌ترین</option>
                </select>
              </div>
            </div>
          </div>

          {/* Advanced Filters Panel */}
          {showFilters && (
            <div className="filters-panel-premium">
              <div className="filters-grid">
                <div className="filter-group-premium">
                  <label className="filter-label-premium">نوع معامله</label>
                  <div className="filter-buttons-premium">
                    {['all', 'buy', 'rent'].map(type => (
                      <button
                        key={type}
                        className={`filter-btn-premium ${activeFilter === type ? 'active' : ''}`}
                        onClick={() => setActiveFilter(type)}
                      >
                        {type === 'all' ? 'همه' : type === 'buy' ? 'فروش' : 'اجاره'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="filter-group-premium">
                  <label className="filter-label-premium">نوع ملک</label>
                  <select 
                    value={propertyType} 
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="filter-select-premium"
                  >
                    <option value="all">همه انواع</option>
                    <option value="apartment">آپارتمان</option>
                    <option value="villa">ویلا</option>
                    <option value="office">اداری</option>
                  </select>
                </div>

                <div className="filter-group-premium">
                  <label className="filter-label-premium">محدوده قیمت (میلیون تومان)</label>
                  <div className="price-range-inputs">
                    <input
                      type="number"
                      placeholder="از"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      className="price-input"
                    />
                    <span className="range-separator">تا</span>
                    <input
                      type="number"
                      placeholder="تا"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      className="price-input"
                    />
                  </div>
                </div>

                <div className="filter-group-premium">
                  <label className="filter-label-premium">متراژ</label>
                  <div className="area-range-inputs">
                    <input
                      type="number"
                      placeholder="از"
                      value={minArea}
                      onChange={(e) => setMinArea(e.target.value)}
                      className="area-input"
                    />
                    <span className="range-separator">تا</span>
                    <input
                      type="number"
                      placeholder="تا"
                      value={maxArea}
                      onChange={(e) => setMaxArea(e.target.value)}
                      className="area-input"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Info */}
        <div className="results-info-premium">
          <div className="results-stats">
            <span className="results-count">
              <i className="fas fa-home"></i>
              {allProperties.length} آگهی یافت شد
            </span>
            <span className="results-page">
              صفحه {currentPage} از {Math.ceil(allProperties.length / propertiesPerPage)}
            </span>
          </div>
        </div>

        {/* Properties Grid */}
        <div className={`properties-container ${viewMode}`}>
          {allProperties.slice(0, 6).map((property, index) => (
            <LazySection
              key={property.id}
              animationType="fadeInUp"
              delay={index * 100}
              className={`property-card-premium ${property.isVip ? 'vip-property' : ''}`}
            >
              {property.isVip && (
                <div className="vip-badge-premium">
                  <i className="fas fa-crown"></i>
                  <span>VIP</span>
                </div>
              )}
              
              <div className="property-image-container">
                <LazyImage 
                  src={property.image} 
                  alt={`${property.type} در ${property.location}`}
                  className="property-image-premium"
                  width={400}
                  height={300}
                />
                <div className="image-overlay">
                  <div className="overlay-actions">
                    <button className="overlay-btn view-gallery">
                      <i className="fas fa-images"></i>
                      {property.images?.length || 1}
                    </button>
                    <button 
                      className={`overlay-btn favorite ${likedProperties.has(property.id) ? 'liked' : ''}`}
                      onClick={() => toggleLike(property.id)}
                    >
                      <i className={likedProperties.has(property.id) ? "fas fa-heart" : "far fa-heart"}></i>
                    </button>
                  </div>
                  <div className="price-overlay-premium">
                    <span className="price-text">
                      {formatPrice(property.price, property.dealType)}
                    </span>
                    <span className="deal-type-badge">
                      {property.dealType}
                    </span>
                  </div>
                </div>
              </div>

              <div className="property-content-premium">
                <div className="property-header-premium">
                  <div className="property-title">
                    <h3 className="property-type">{property.type}</h3>
                    <div className="property-location">
                      <i className="fas fa-map-marker-alt"></i>
                      {property.location}
                    </div>
                  </div>
                  <div className="property-stats">
                    <span className="view-count">
                      <i className="fas fa-eye"></i>
                      {property.viewCount}
                    </span>
                  </div>
                </div>

                <div className="property-details-premium">
                  <div className="detail-row">
                    <div className="detail-item-premium">
                      <i className="fas fa-expand-arrows-alt"></i>
                      <span>{property.area} متر</span>
                    </div>
                    <div className="detail-item-premium">
                      <i className="fas fa-bed"></i>
                      <span>{property.rooms} خواب</span>
                    </div>
                    <div className="detail-item-premium">
                      <i className="fas fa-calendar-alt"></i>
                      <span>{property.year}</span>
                    </div>
                  </div>
                  <div className="detail-row">
                    <div className="detail-item-premium">
                      <i className="fas fa-layer-group"></i>
                      <span>طبقه {property.floor}</span>
                    </div>
                    <div className="detail-item-premium">
                      <i className={`fas ${property.parking ? 'fa-car text-success' : 'fa-times text-danger'}`}></i>
                      <span>{property.parking ? 'پارکینگ' : 'بدون پارکینگ'}</span>
                    </div>
                  </div>
                </div>

                <div className="property-features">
                  {property.features?.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                  {property.features?.length > 3 && (
                    <span className="feature-more">
                      +{property.features.length - 3} مورد دیگر
                    </span>
                  )}
                </div>

                <div className="property-actions-premium">
                  <button className="action-btn primary" onClick={() => router.push(`/property/${property.id}`)}>
                    <i className="fas fa-eye"></i>
                    مشاهده جزئیات
                  </button>
                  <button className="action-btn secondary">
                    <i className="fas fa-phone"></i>
                    تماس
                  </button>
                  <button className="action-btn icon-only">
                    <i className="fas fa-share-alt"></i>
                  </button>
                </div>
              </div>
            </LazySection>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination-premium">
          <button className="pagination-btn prev">
            <i className="fas fa-chevron-right"></i>
            قبلی
          </button>
          <div className="pagination-numbers">
            {[1, 2, 3, 4, 5].map(page => (
              <button
                key={page}
                className={`pagination-number ${currentPage === page ? 'active' : ''}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
          </div>
          <button className="pagination-btn next">
            بعدی
            <i className="fas fa-chevron-left"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
