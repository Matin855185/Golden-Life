import LazyImage from './LazyImage';
import LazySection from './LazySection';

export default function ServicesSection() {
  const services = [
    {
      icon: 'fas fa-shopping-bag',
      title: 'خرید',
      description: 'خرید اقلام مورد نیاز شما با بهترین کیفیت و قیمت مناسب',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
      gradient: 'linear-gradient(135deg, var(--primary-gold), #f4d03f)',
      shadowColor: 'rgba(212, 175, 55, 0.4)'
    },
    {
      icon: 'fas fa-user-md',
      title: 'درمانی',
      description: 'خدمات درمانی و مراقبتی در منزل با کادر متخصص و مجرب',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop',
      gradient: 'linear-gradient(135deg, #e74c3c, #c0392b)',
      shadowColor: 'rgba(231, 76, 60, 0.4)'
    },
    {
      icon: 'fas fa-seedling',
      title: 'باغبانی',
      description: 'طراحی و نگهداری فضای سبز با متخصصان حرفه‌ای باغبانی',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop',
      gradient: 'linear-gradient(135deg, #27ae60, #2ecc71)',
      shadowColor: 'rgba(46, 204, 113, 0.4)'
    },
    {
      icon: 'fas fa-broom',
      title: 'نظافت',
      description: 'خدمات نظافت حرفه‌ای برای منزل و محل کار با تجهیزات مدرن',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=250&fit=crop',
      gradient: 'linear-gradient(135deg, #3498db, #2980b9)',
      shadowColor: 'rgba(52, 152, 219, 0.4)'
    },
    {
      icon: 'fas fa-tools',
      title: 'فنی',
      description: 'تعمیرات و خدمات فنی با کیفیت بالا و ضمانت کامل',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=250&fit=crop',
      gradient: 'linear-gradient(135deg, #f39c12, #e67e22)',
      shadowColor: 'rgba(243, 156, 18, 0.4)'
    },
    {
      icon: 'fas fa-car',
      title: 'حمل‌ونقل',
      description: 'خدمات حمل‌ونقل VIP و تاکسی لوکس با راننده مجرب',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop',
      gradient: 'linear-gradient(135deg, #9b59b6, #8e44ad)',
      shadowColor: 'rgba(155, 89, 182, 0.4)'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'امنیت',
      description: 'خدمات امنیتی و محافظت شخصی با نیروهای آموزش دیده',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop',
      gradient: 'linear-gradient(135deg, #34495e, #2c3e50)',
      shadowColor: 'rgba(52, 73, 94, 0.4)'
    },
    {
      icon: 'fas fa-utensils',
      title: 'پذیرایی',
      description: 'خدمات پذیرایی و کیترینگ لوکس برای مهمانی‌های شما',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop',
      gradient: 'linear-gradient(135deg, #e91e63, #ad1457)',
      shadowColor: 'rgba(233, 30, 99, 0.4)'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'آموزشی',
      description: 'خدمات آموزشی و کوچینگ تخصصی در منزل و محل کار',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
      gradient: 'linear-gradient(135deg, #16a085, #1abc9c)',
      shadowColor: 'rgba(26, 188, 156, 0.4)'
    },
    {
      icon: 'fas fa-spa',
      title: 'زیبایی و سلامت',
      description: 'خدمات زیبایی، ماساژ و مراقبت‌های سلامتی در منزل',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=250&fit=crop',
      gradient: 'linear-gradient(135deg, #ff6b6b, #ee5a52)',
      shadowColor: 'rgba(255, 107, 107, 0.4)'
    },
    {
      icon: 'fas fa-laptop-code',
      title: 'فناوری اطلاعات',
      description: 'خدمات IT، تعمیر کامپیوتر و راه‌اندازی شبکه در منزل و دفتر',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
      gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
      shadowColor: 'rgba(102, 126, 234, 0.4)'
    },
    {
      icon: 'fas fa-paw',
      title: 'مراقبت از حیوانات',
      description: 'خدمات نگهداری، آموزش و مراقبت از حیوانات خانگی',
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=250&fit=crop',
      gradient: 'linear-gradient(135deg, #ffeaa7, #fab1a0)',
      shadowColor: 'rgba(255, 234, 167, 0.4)'
    }
  ];

  return (
    <LazySection animationType="fadeInUp" delay={200}>
      <section id="services" className="services">
        <div className="container">
          <LazySection animationType="fadeInDown" delay={100}>
            <div className="section-header">
              <h2 className="section-title">خدمات VIP ما</h2>
              <p className="section-subtitle">
                خدمات لوکس و حرفه‌ای با بالاترین کیفیت در خدمت شما
              </p>
            </div>
          </LazySection>
          <div id="services-cards" className="services-grid-new">
            {services.map((service, index) => (
              <LazySection 
                key={index}
                animationType="scaleIn"
                delay={index * 100}
                className="service-card-new"
              >
                <div className="service-image-container">
                  <LazyImage 
                    src={service.image} 
                    alt={service.title}
                    className="service-image"
                    placeholder="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0yMDAgMTI1TDE3NSAxMDBIMjI1TDIwMCAxMjVaIiBmaWxsPSIjRDBEMEQwIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5OTk5IiBmb250LXNpemU9IjE0Ij5Loading...</dGV4dD4KPC9zdmc+"
                  />
                  <div className="service-overlay">
                    <div 
                      className="service-icon-new"
                      style={{ background: service.gradient }}
                    >
                      <i className={service.icon}></i>
                    </div>
                  </div>
                </div>
              
                <div className="service-content-new">
                  <h3 className="service-title-new">{service.title}</h3>
                  <p className="service-description-new">{service.description}</p>
                  
                  <div className="service-actions">
                    <button className="service-btn-primary">
                      <i className="fas fa-phone"></i>
                      درخواست خدمت
                    </button>
                    <button className="service-btn-secondary">
                      <i className="fas fa-info-circle"></i>
                      جزئیات بیشتر
                    </button>
                  </div>
                </div>
                
                <div className="service-badge">
                  <span>VIP</span>
                </div>
              </LazySection>
            ))}
          </div>
          
          {/* VIP Services Request Button */}
          <LazySection animationType="fadeInUp" delay={300}>
            <div className="vip-services-cta">
              <a href="/vip-services" className="vip-services-btn">
                <div className="vip-btn-bg"></div>
                <div className="vip-btn-content">
                  <div className="vip-btn-icon">
                    <i className="fas fa-crown"></i>
                  </div>
                  <div className="vip-btn-text">
                    <span className="vip-btn-title">ثبت درخواست خدمات VIP</span>
                    <span className="vip-btn-subtitle">برای صاحبان املاک گلدن لایف</span>
                  </div>
                  <div className="vip-btn-arrow">
                    <i className="fas fa-chevron-left"></i>
                  </div>
                </div>
                <div className="vip-btn-shimmer"></div>
                <div className="vip-btn-glow"></div>
              </a>
            </div>
          </LazySection>
        </div>
      </section>
    </LazySection>
  );
}
