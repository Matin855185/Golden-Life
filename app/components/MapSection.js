'use client';

import { useState, useEffect, useRef } from 'react';

export default function MapSection() {
  const [mapFilters, setMapFilters] = useState({
    dealType: '',
    propertyType: '',
    priceRange: '',
    area: ''
  });
  
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Sample property data
  const properties = [
    { id: 1, lat: 35.7219, lng: 51.3347, price: '15.5 میلیارد', type: 'فروش', title: 'آپارتمان نیاوران' },
    { id: 2, lat: 35.7589, lng: 51.4078, price: '12.8 میلیارد', type: 'فروش', title: 'آپارتمان سعادت آباد' },
    { id: 3, lat: 35.7665, lng: 51.3751, price: '18.2 میلیارد', type: 'فروش', title: 'آپارتمان شهرک غرب' },
    { id: 4, lat: 35.8058, lng: 51.4264, price: '45 میلیون', type: 'اجاره', title: 'آپارتمان زعفرانیه' },
  ];

  useEffect(() => {
    const initMap = async () => {
      await loadLeaflet();
    };
    
    initMap();

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  const loadLeaflet = async () => {
    if (typeof window === 'undefined') return;
    
    // Load Leaflet CSS
    if (!document.querySelector('link[href*="leaflet"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }

    // Load Leaflet JS
    if (!window.L) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.onload = () => {
        // Add small delay to ensure container is ready
        setTimeout(initializeLeafletMap, 100);
      };
      document.head.appendChild(script);
    } else {
      // Add small delay to ensure container is ready
      setTimeout(initializeLeafletMap, 100);
    }
  };

  // loadMapbox removed - now using MapboxMap component

  const initializeLeafletMap = () => {
    if (!mapRef.current || !window.L) {
      console.log('Map container or Leaflet not ready');
      return;
    }

    try {
      console.log('Initializing Leaflet map...');
      
      // Initialize map centered on Tehran
      const mapInstance = window.L.map(mapRef.current, {
        center: [35.6892, 51.3890],
        zoom: 11,
        zoomControl: true,
        scrollWheelZoom: true
      });

      // Add dark theme tile layer
      window.L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(mapInstance);

      setMap(mapInstance);
      setIsMapLoaded(true);
      
      // Force map to recalculate size
      setTimeout(() => {
        mapInstance.invalidateSize();
      }, 200);
      
      addPropertyMarkers(mapInstance);
      
      console.log('Leaflet map initialized successfully');
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  // initializeMapboxMap removed - now using MapboxMap component

  const addPropertyMarkers = (mapInstance) => {
    properties.forEach(property => {
      // Create custom icon based on property type
      const iconColor = property.type === 'فروش' ? '#d4af37' : '#3498db';
      
      const customIcon = window.L.divIcon({
        html: `
          <div style="
            background-color: ${iconColor};
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
            position: relative;
          "></div>
          <div style="
            position: absolute;
            top: -35px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0,0,0,0.8);
            color: white;
            padding: 2px 6px;
            border-radius: 10px;
            font-size: 10px;
            white-space: nowrap;
            border: 1px solid ${iconColor};
          ">${property.price}</div>
        `,
        className: 'custom-marker',
        iconSize: [20, 20],
        iconAnchor: [10, 10]
      });

      const marker = window.L.marker([property.lat, property.lng], {
        icon: customIcon
      }).addTo(mapInstance);

      // Add popup
      const popupContent = `
        <div style="color: #333; padding: 10px; text-align: center; font-family: Vazirmatn;">
          <h4 style="margin: 0 0 8px 0; color: ${iconColor}; font-size: 14px;">${property.title}</h4>
          <p style="margin: 0; font-weight: bold; font-size: 12px;">${property.type}: ${property.price}</p>
          <button style="
            margin-top: 8px;
            background: ${iconColor};
            color: ${property.type === 'فروش' ? '#0d0d0d' : 'white'};
            border: none;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 10px;
            cursor: pointer;
          ">مشاهده جزئیات</button>
        </div>
      `;

      marker.bindPopup(popupContent, {
        maxWidth: 200,
        className: 'custom-popup'
      });
    });
  };

  // Mapbox functions removed - using single Leaflet map only

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
              <div ref={mapRef} className="leaflet-map" style={{ width: '100%', height: '100%' }}>
                {/* Leaflet Map will be loaded here */}
              </div>
              
              {/* Loading overlay */}
              {!isMapLoaded && (
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
