'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VipServicesCards from '../components/VipServicesCards';

export default function VipServicesPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedTechnician, setSelectedTechnician] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [userInfo, setUserInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    description: ''
  });
  const [step, setStep] = useState(1);

  // داده‌های خدمات
  const services = [
    {
      id: 1,
      name: 'تعمیرات لوله‌کشی',
      icon: 'fas fa-wrench',
      color: '#3498db',
      description: 'رفع نشتی، تعویض شیرآلات، باز کردن گرفتگی'
    },
    {
      id: 2,
      name: 'تعمیرات برق',
      icon: 'fas fa-bolt',
      color: '#f39c12',
      description: 'نصب کلید و پریز، تعمیر تابلو برق، سیم‌کشی'
    },
    {
      id: 3,
      name: 'تعمیرات کولر و پکیج',
      icon: 'fas fa-snowflake',
      color: '#1abc9c',
      description: 'سرویس کولر، تعمیر پکیج، شارژ گاز'
    },
    {
      id: 4,
      name: 'نظافت منزل',
      icon: 'fas fa-broom',
      color: '#e74c3c',
      description: 'نظافت کامل، شستشوی فرش، نظافت شیشه'
    },
    {
      id: 5,
      name: 'باغبانی',
      icon: 'fas fa-seedling',
      color: '#27ae60',
      description: 'هرس درختان، کاشت گل، طراحی فضای سبز'
    },
    {
      id: 6,
      name: 'نقاشی ساختمان',
      icon: 'fas fa-paint-roller',
      color: '#9b59b6',
      description: 'رنگ‌آمیزی دیوار، کاغذ دیواری، رنگ نما'
    }
  ];

  // داده‌های تکنسین‌ها
  const technicians = [
    {
      id: 1,
      name: 'احمد محمدی',
      specialty: [1, 2], // لوله‌کشی و برق
      rating: 4.8,
      experience: 8,
      avatar: '/images/tech1.jpg',
      availableTimes: ['09:00', '10:30', '14:00', '16:00']
    },
    {
      id: 2,
      name: 'علی رضایی',
      specialty: [3, 4], // کولر و نظافت
      rating: 4.9,
      experience: 12,
      avatar: '/images/tech2.jpg',
      availableTimes: ['08:00', '11:00', '15:30', '17:00']
    },
    {
      id: 3,
      name: 'حسن احمدی',
      specialty: [5, 6], // باغبانی و نقاشی
      rating: 4.7,
      experience: 6,
      avatar: '/images/tech3.jpg',
      availableTimes: ['09:30', '13:00', '15:00', '18:00']
    },
    {
      id: 4,
      name: 'مهدی کریمی',
      specialty: [1, 3, 6], // لوله‌کشی، کولر، نقاشی
      rating: 4.6,
      experience: 10,
      avatar: '/images/tech4.jpg',
      availableTimes: ['10:00', '12:00', '14:30', '16:30']
    }
  ];

  // انتخاب تکنسین پیش‌فرض بر اساس خدمت انتخابی
  useEffect(() => {
    if (selectedService && !selectedTechnician) {
      const defaultTech = technicians.find(tech => 
        tech.specialty.includes(selectedService.id)
      );
      if (defaultTech) {
        setSelectedTechnician(defaultTech);
      }
    }
  }, [selectedService]);

  // فیلتر تکنسین‌ها بر اساس خدمت انتخابی
  const getAvailableTechnicians = () => {
    if (!selectedService) return [];
    return technicians.filter(tech => 
      tech.specialty.includes(selectedService.id)
    );
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setSelectedTechnician(null);
    setStep(2);
  };

  const handleTechnicianSelect = (tech) => {
    setSelectedTechnician(tech);
    // Reset time selection when technician changes
    setSelectedTime('');
    setSelectedDate('');
  };

  const handleContinueToTimeSelection = () => {
    if (selectedTechnician) {
      setStep(3);
    }
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(''); // Reset time when date changes
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleContinueToForm = () => {
    if (selectedDate && selectedTime) {
      setStep(4);
    }
  };

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const errors = {};
    
    if (!userInfo.name.trim()) {
      errors.name = 'نام و نام خانوادگی الزامی است';
    }
    
    if (!userInfo.phone.trim()) {
      errors.phone = 'شماره تماس الزامی است';
    } else if (!/^09\d{9}$/.test(userInfo.phone)) {
      errors.phone = 'شماره تماس باید با 09 شروع شده و 11 رقم باشد';
    }
    
    if (userInfo.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.email)) {
      errors.email = 'فرمت ایمیل صحیح نیست';
    }
    
    if (!userInfo.address.trim()) {
      errors.address = 'آدرس کامل الزامی است';
    }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    setFormErrors(errors);
    
    if (Object.keys(errors).length > 0) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // شبیه‌سازی ارسال درخواست
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const requestData = {
        service: selectedService,
        technician: selectedTechnician,
        date: selectedDate,
        time: selectedTime,
        userInfo,
        requestId: 'VIP-' + Date.now(),
        status: 'pending'
      };
      
      console.log('درخواست ثبت شده:', requestData);
      
      // نمایش پیام موفقیت
      alert(`درخواست شما با موفقیت ثبت شد!\nکد پیگیری: ${requestData.requestId}\nتکنسین ${selectedTechnician.name} در تاریخ ${selectedDate} ساعت ${selectedTime} با شما تماس خواهد گرفت.`);
      
      // ریست فرم
      setStep(1);
      setSelectedService(null);
      setSelectedTechnician(null);
      setSelectedDate('');
      setSelectedTime('');
      setUserInfo({
        name: '',
        phone: '',
        email: '',
        address: '',
        description: ''
      });
      
    } catch (error) {
      alert('خطا در ثبت درخواست. لطفاً دوباره تلاش کنید.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <Header />
      
      <div className="vip-services-container">
        <div className="container mx-auto px-4 py-20">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="vip-services-title">
              <i className="fas fa-crown"></i>
              ثبت درخواست خدمات VIP
            </h1>
            <p className="vip-services-subtitle">
              خدمات تخصصی برای صاحبان املاک گلدن لایف
            </p>
          </div>

          {/* Progress Steps */}
          <div className="vip-progress-steps">
            <div className={`vip-step ${step >= 1 ? 'active' : ''}`}>
              <div className="vip-step-number">1</div>
              <span>انتخاب خدمت</span>
            </div>
            <div className={`vip-step ${step >= 2 ? 'active' : ''}`}>
              <div className="vip-step-number">2</div>
              <span>انتخاب تکنسین</span>
            </div>
            <div className={`vip-step ${step >= 3 ? 'active' : ''}`}>
              <div className="vip-step-number">3</div>
              <span>رزرو زمان</span>
            </div>
            <div className={`vip-step ${step >= 4 ? 'active' : ''}`}>
              <div className="vip-step-number">4</div>
              <span>اطلاعات تماس</span>
            </div>
          </div>

          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div className="vip-services-grid">
              {services.map(service => (
                <div 
                  key={service.id}
                  className="vip-service-card"
                  onClick={() => handleServiceSelect(service)}
                >
                  <div className="vip-service-icon" style={{color: service.color}}>
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="vip-service-name">{service.name}</h3>
                  <p className="vip-service-description">{service.description}</p>
                  <div className="vip-select-btn">
                    <i className="fas fa-arrow-left"></i>
                    انتخاب خدمت
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Step 2: Technician Selection */}
          {step === 2 && selectedService && (
            <div className="vip-technician-section">
              <div className="vip-section-header">
                <h2>انتخاب تکنسین برای {selectedService.name}</h2>
                <button 
                  className="vip-back-btn"
                  onClick={() => setStep(1)}
                >
                  <i className="fas fa-arrow-right"></i>
                  بازگشت
                </button>
              </div>

              <div className="vip-technicians-grid">
                {getAvailableTechnicians().map(tech => (
                  <div 
                    key={tech.id}
                    className={`vip-technician-card ${selectedTechnician?.id === tech.id ? 'selected' : ''}`}
                    onClick={() => handleTechnicianSelect(tech)}
                  >
                    <div className="vip-tech-avatar">
                      <i className="fas fa-user"></i>
                    </div>
                    <div className="vip-tech-info">
                      <h3>{tech.name}</h3>
                      <div className="vip-tech-rating">
                        <i className="fas fa-star"></i>
                        <span>{tech.rating}</span>
                      </div>
                      <div className="vip-tech-experience">
                        {tech.experience} سال تجربه
                      </div>
                    </div>
                    {selectedTechnician?.id === tech.id && (
                      <div className="vip-selected-badge">
                        <i className="fas fa-check"></i>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Technician Details */}
              {selectedTechnician && (
                <div className="vip-tech-details">
                  <div className="vip-tech-detail-card">
                    <h3>اطلاعات تکنسین انتخابی</h3>
                    <div className="vip-tech-info-detailed">
                      <div className="vip-tech-avatar-large">
                        <i className="fas fa-user"></i>
                      </div>
                      <div className="vip-tech-data">
                        <h4>{selectedTechnician.name}</h4>
                        <div className="vip-tech-stats">
                          <div className="vip-stat">
                            <i className="fas fa-star"></i>
                            <span>امتیاز: {selectedTechnician.rating}</span>
                          </div>
                          <div className="vip-stat">
                            <i className="fas fa-briefcase"></i>
                            <span>تجربه: {selectedTechnician.experience} سال</span>
                          </div>
                          <div className="vip-stat">
                            <i className="fas fa-clock"></i>
                            <span>ساعات کاری: {selectedTechnician.availableTimes.join(', ')}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="vip-continue-section">
                    <button 
                      className="vip-continue-btn"
                      onClick={handleContinueToTimeSelection}
                    >
                      ادامه به انتخاب زمان
                      <i className="fas fa-arrow-left"></i>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Time Selection */}
          {step === 3 && selectedTechnician && (
            <div className="vip-time-section">
              <div className="vip-section-header">
                <h2>انتخاب زمان مراجعه</h2>
                <button 
                  className="vip-back-btn"
                  onClick={() => setStep(2)}
                >
                  <i className="fas fa-arrow-right"></i>
                  بازگشت
                </button>
              </div>

              <div className="vip-calendar-section">
                <div className="vip-selected-tech-info">
                  <h3>تکنسین انتخابی: {selectedTechnician.name}</h3>
                  <p>امتیاز: {selectedTechnician.rating} ⭐ | تجربه: {selectedTechnician.experience} سال</p>
                </div>

                <div className="vip-date-picker">
                  <h3>
                    <i className="fas fa-calendar-alt"></i>
                    انتخاب تاریخ مراجعه
                  </h3>
                  <input 
                    type="date" 
                    className="vip-date-input"
                    value={selectedDate}
                    onChange={(e) => handleDateSelect(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    max={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                  />
                  {selectedDate && (
                    <div className="vip-selected-date">
                      <i className="fas fa-check-circle"></i>
                      تاریخ انتخابی: {new Date(selectedDate).toLocaleDateString('fa-IR')}
                    </div>
                  )}
                </div>

                {selectedDate && (
                  <div className="vip-time-picker">
                    <h3>
                      <i className="fas fa-clock"></i>
                      ساعات خالی تکنسین در تاریخ انتخابی
                    </h3>
                    <div className="vip-time-slots">
                      {selectedTechnician.availableTimes.map(time => (
                        <button
                          key={time}
                          className={`vip-time-slot ${selectedTime === time ? 'selected' : ''}`}
                          onClick={() => handleTimeSelect(time)}
                        >
                          <i className="fas fa-clock"></i>
                          {time}
                        </button>
                      ))}
                    </div>
                    {selectedTime && (
                      <div className="vip-selected-time">
                        <i className="fas fa-check-circle"></i>
                        ساعت انتخابی: {selectedTime}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {selectedDate && selectedTime && (
                <div className="vip-booking-summary">
                  <div className="vip-summary-card">
                    <h3>خلاصه رزرو</h3>
                    <div className="vip-booking-details">
                      <div className="vip-booking-item">
                        <i className="fas fa-tools"></i>
                        <span>خدمت: {selectedService.name}</span>
                      </div>
                      <div className="vip-booking-item">
                        <i className="fas fa-user"></i>
                        <span>تکنسین: {selectedTechnician.name}</span>
                      </div>
                      <div className="vip-booking-item">
                        <i className="fas fa-calendar"></i>
                        <span>تاریخ: {new Date(selectedDate).toLocaleDateString('fa-IR')}</span>
                      </div>
                      <div className="vip-booking-item">
                        <i className="fas fa-clock"></i>
                        <span>ساعت: {selectedTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="vip-continue-section">
                    <button 
                      className="vip-continue-btn"
                      onClick={handleContinueToForm}
                    >
                      تایید و ادامه
                      <i className="fas fa-arrow-left"></i>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 4: User Information */}
          {step === 4 && (
            <div className="vip-form-section">
              <div className="vip-section-header">
                <h2>اطلاعات تماس و آدرس</h2>
                <button 
                  className="vip-back-btn"
                  onClick={() => setStep(3)}
                >
                  <i className="fas fa-arrow-right"></i>
                  بازگشت
                </button>
              </div>

              <form onSubmit={handleSubmit} className="vip-user-form">
                <div className="vip-form-grid">
                  <div className="vip-form-group">
                    <label>نام و نام خانوادگی *</label>
                    <input 
                      type="text"
                      required
                      value={userInfo.name}
                      onChange={(e) => {
                        setUserInfo({...userInfo, name: e.target.value});
                        if (formErrors.name) {
                          setFormErrors({...formErrors, name: ''});
                        }
                      }}
                      placeholder="نام کامل خود را وارد کنید"
                      className={formErrors.name ? 'error' : ''}
                    />
                    {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                  </div>

                  <div className="vip-form-group">
                    <label>شماره تماس *</label>
                    <input 
                      type="tel"
                      required
                      value={userInfo.phone}
                      onChange={(e) => {
                        setUserInfo({...userInfo, phone: e.target.value});
                        if (formErrors.phone) {
                          setFormErrors({...formErrors, phone: ''});
                        }
                      }}
                      placeholder="09xxxxxxxxx"
                      className={formErrors.phone ? 'error' : ''}
                    />
                    {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
                  </div>

                  <div className="vip-form-group">
                    <label>ایمیل (اختیاری)</label>
                    <input 
                      type="email"
                      value={userInfo.email}
                      onChange={(e) => {
                        setUserInfo({...userInfo, email: e.target.value});
                        if (formErrors.email) {
                          setFormErrors({...formErrors, email: ''});
                        }
                      }}
                      placeholder="example@email.com"
                      className={formErrors.email ? 'error' : ''}
                    />
                    {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                  </div>

                  <div className="vip-form-group full-width">
                    <label>آدرس کامل *</label>
                    <textarea 
                      required
                      value={userInfo.address}
                      onChange={(e) => {
                        setUserInfo({...userInfo, address: e.target.value});
                        if (formErrors.address) {
                          setFormErrors({...formErrors, address: ''});
                        }
                      }}
                      placeholder="آدرس دقیق محل انجام خدمت را وارد کنید"
                      rows="3"
                      className={formErrors.address ? 'error' : ''}
                    ></textarea>
                    {formErrors.address && <span className="error-message">{formErrors.address}</span>}
                  </div>

                  <div className="vip-form-group full-width">
                    <label>توضیحات اضافی</label>
                    <textarea 
                      value={userInfo.description}
                      onChange={(e) => setUserInfo({...userInfo, description: e.target.value})}
                      placeholder="توضیحات مربوط به نوع خدمت مورد نیاز..."
                      rows="4"
                    ></textarea>
                  </div>
                </div>

                {/* Summary */}
                <div className="vip-order-summary">
                  <h3>خلاصه درخواست</h3>
                  <div className="vip-summary-item">
                    <span>خدمت:</span>
                    <span>{selectedService?.name}</span>
                  </div>
                  <div className="vip-summary-item">
                    <span>تکنسین:</span>
                    <span>{selectedTechnician?.name}</span>
                  </div>
                  <div className="vip-summary-item">
                    <span>تاریخ و زمان:</span>
                    <span>{selectedDate} - {selectedTime}</span>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className={`vip-submit-btn ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      در حال ثبت درخواست...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-check"></i>
                      ثبت درخواست نهایی
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* VIP Services Cards Section */}
      <VipServicesCards />

      <Footer />
    </div>
  );
}
