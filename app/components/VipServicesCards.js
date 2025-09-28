import LazyImage from './LazyImage';
import LazySection from './LazySection';

export default function VipServicesCards() {
  const services = [
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
      <section className="vip-services-showcase">
        <div className="container">
          <LazySection animationType="fadeInDown" delay={100}>
            <div className="vip-showcase-header">
              <h2 className="vip-showcase-title">خدمات VIP ما</h2>
              <p className="vip-showcase-subtitle">
                خدمات لوکس و حرفه‌ای با بالاترین کیفیت در خدمت شما
              </p>
            </div>
          </LazySection>
          <div className="vip-services-grid">
            {services.map((service, index) => (
              <LazySection 
                key={index}
                animationType="scaleIn"
                delay={index * 100}
                className="vip-service-card-showcase"
              >
                <div className="vip-service-image-container">
                  <LazyImage 
                    src={service.image} 
                    alt={service.title}
                    className="vip-service-image"
                    placeholder="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0yMDAgMTI1TDE3NSAxMDBIMjI1TDIwMCAxMjVaIiBmaWxsPSIjRDBEMEQwIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5OTk5IiBmb250LXNpemU9IjE0Ij5Loading...</dGV4dD4KPC9zdmc+"
                  />
                  <div className="vip-service-overlay">
                    <div 
                      className="vip-service-icon-showcase"
                      style={{ background: service.gradient }}
                    >
                      <i className={service.icon}></i>
                    </div>
                  </div>
                </div>
              
                <div className="vip-service-content-showcase">
                  <h3 className="vip-service-title-showcase">{service.title}</h3>
                  <p className="vip-service-description-showcase">{service.description}</p>
                  
                  <div className="vip-service-actions">
                    <button className="vip-service-btn-primary">
                      <i className="fas fa-phone"></i>
                      درخواست خدمت
                    </button>
                    <button className="vip-service-btn-secondary">
                      <i className="fas fa-info-circle"></i>
                      جزئیات بیشتر
                    </button>
                  </div>
                </div>
                
                <div className="vip-service-badge">
                  <span>VIP</span>
                </div>
              </LazySection>
            ))}
          </div>
        </div>
      </section>
    </LazySection>
  );
}
