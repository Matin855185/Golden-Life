'use client';

import { useState } from 'react';

export default function MapSection() {
  const [mapFilters, setMapFilters] = useState({
    dealType: '',
    propertyType: '',
    priceRange: '',
    area: ''
  });

  const handleFilterChange = (e) => {
    setMapFilters({
      ...mapFilters,
      [e.target.name]: e.target.value
    });
  };

  const handleMapSearch = () => {
    console.log('Map search parameters:', mapFilters);
    alert('املاک در نقشه بر اساس فیلترهای انتخابی نمایش داده شد');
    
    // پاک کردن مقدار اینپوت منطقه
    setMapFilters({
      ...mapFilters,
      area: ''
    });
  };

  return (
    <section id="map" className="map-section real-estate-map">
      <div className="container">
        <div className="map-header">
          <h2 className="section-title">
            <i className="fas fa-map-marked-alt"></i>
            جستجو روی نقشه
          </h2>
          <p className="section-subtitle">
            املاک را روی نقشه مشاهده کنید و بهترین گزینه را انتخاب کنید
          </p>
        </div>


        <div className="map-content-wrapper">
          <div className="map-search-filters">
            <h3 className="filters-title">
              <i className="fas fa-search"></i>
              جستجو روی نقشه
            </h3>
            <div className="filter-column">
              <div className="filter-group">
                <label>نوع معامله</label>
                <select 
                  name="dealType" 
                  value={mapFilters.dealType}
                  onChange={handleFilterChange}
                  className="map-filter-select"
                >
                  <option value="">انتخاب کنید</option>
                  <option value="buy">خرید</option>
                  <option value="rent">رهن و اجاره</option>
                </select>
              </div>
              <div className="filter-group">
                <label>نوع ملک</label>
                <select 
                  name="propertyType" 
                  value={mapFilters.propertyType}
                  onChange={handleFilterChange}
                  className="map-filter-select"
                >
                  <option value="">انتخاب کنید</option>
                  <option value="apartment">آپارتمان</option>
                  <option value="house">خانه ویلایی</option>
                  <option value="office">اداری</option>
                  <option value="commercial">تجاری</option>
                </select>
              </div>
              <div className="filter-group">
                <label>محدوده قیمت</label>
                <select 
                  name="priceRange" 
                  value={mapFilters.priceRange}
                  onChange={handleFilterChange}
                  className="map-filter-select"
                >
                  <option value="">انتخاب کنید</option>
                  <option value="0-5">تا 5 میلیارد</option>
                  <option value="5-10">5 تا 10 میلیارد</option>
                  <option value="10-20">10 تا 20 میلیارد</option>
                  <option value="20+">بالای 20 میلیارد</option>
                </select>
              </div>
              <div className="filter-group">
                <label>منطقه</label>
                <input 
                  type="text" 
                  name="area"
                  placeholder="جستجو در محله یا منطقه"
                  value={mapFilters.area}
                  onChange={handleFilterChange}
                  className="map-filter-input"
                />
              </div>
              <button className="map-search-button" onClick={handleMapSearch}>
                <i className="fas fa-search"></i>
                جستجو در نقشه
              </button>
            </div>
          </div>

          <div className="interactive-map-container">
            <div className="map-wrapper">
              <div className="leaflet-map" style={{ width: '100%', height: '100%', background: '#1a1a1a', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', color: '#d4af37' }}>
                  <i className="fas fa-map-marked-alt" style={{ fontSize: '3rem', marginBottom: '1rem' }}></i>
                  <h3>نقشه تعاملی</h3>
                  <p>نقشه در نسخه بعدی فعال خواهد شد</p>
                </div>
              </div>
              
              {/* Loading overlay */}
              {false && (
                <div className="map-loading-overlay">
                  <div className="map-content">
                    <div className="map-icon">
                      <i className="fas fa-map-marked-alt"></i>
                    </div>
                    <h3>در حال بارگذاری نقشه...</h3>
                    <p>نقشه تعاملی رایگان و قدرتمند</p>
                    <div className="map-features">
                      <div className="feature-item">
                        <i className="fas fa-home"></i>
                        <span>نمایش املاک روی نقشه</span>
                      </div>
                      <div className="feature-item">
                        <i className="fas fa-filter"></i>
                        <span>فیلتر بر اساس قیمت و نوع</span>
                      </div>
                      <div className="feature-item">
                        <i className="fas fa-info-circle"></i>
                        <span>اطلاعات کامل هر ملک</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
