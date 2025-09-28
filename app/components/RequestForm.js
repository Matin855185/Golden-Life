'use client';

import { useState } from 'react';

export default function RequestForm({ setShowModal }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    time: '',
    address: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setShowModal(true);
      setFormData({
        name: '',
        phone: '',
        service: '',
        time: '',
        address: '',
        description: ''
      });
    }, 500);
  };

  return (
    <section id="request" className="request-form-new">
      <div className="container">
        <div className="form-layout">
          <div className="form-info">
            <h2 className="section-title">ثبت درخواست خدمات VIP</h2>
            <p className="form-description">
              با ثبت درخواست در سامانه گلدن لایف، از خدمات لوکس و حرفه‌ای ما بهره‌مند شوید. 
              تیم متخصص ما آماده ارائه بهترین خدمات در کمترین زمان ممکن است.
            </p>
            
            <div className="info-features">
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="info-content">
                  <h4>پاسخ سریع</h4>
                  <p>دریافت پاسخ در کمتر از 30 دقیقه</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-star"></i>
                </div>
                <div className="info-content">
                  <h4>کیفیت برتر</h4>
                  <p>خدمات با بالاترین استانداردهای کیفی</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-shield-check"></i>
                </div>
                <div className="info-content">
                  <h4>ضمانت کامل</h4>
                  <p>ضمانت کیفیت و رضایت مشتری</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="form-container">
          <form className="modern-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input-group">
                <div className="input-icon">
                  <i className="fas fa-user"></i>
                </div>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  placeholder=" "
                />
                <label htmlFor="name">نام و نام خانوادگی</label>
                <div className="input-border"></div>
              </div>
              
              <div className="input-group">
                <div className="input-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                  placeholder=" "
                />
                <label htmlFor="phone">شماره تماس</label>
                <div className="input-border"></div>
              </div>
            </div>

            <div className="input-group full-width">
              <div className="input-icon">
                <i className="fas fa-concierge-bell"></i>
              </div>
              <select 
                id="service" 
                name="service" 
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">انتخاب کنید</option>
                <option value="shopping">خرید</option>
                <option value="medical">درمانی</option>
                <option value="gardening">باغبانی</option>
                <option value="cleaning">نظافت</option>
                <option value="technical">فنی</option>
                <option value="transport">حمل‌ونقل</option>
                <option value="security">امنیت</option>
                <option value="catering">پذیرایی</option>
                <option value="beauty">زیبایی و سلامت</option>
                <option value="it">فناوری اطلاعات</option>
                <option value="pets">مراقبت از حیوانات</option>
                <option value="education">آموزشی</option>
              </select>
              <label htmlFor="service">نوع خدمت</label>
              <div className="input-border"></div>
            </div>

            <div className="input-group">
              <div className="input-icon">
                <i className="fas fa-clock"></i>
              </div>
              <input 
                type="datetime-local" 
                id="time" 
                name="time" 
                value={formData.time}
                onChange={handleChange}
                required 
              />
              <label htmlFor="time">زمان اجرا</label>
              <div className="input-border"></div>
            </div>

            <div className="input-group full-width compact">
              <div className="input-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <input 
                type="text" 
                id="address" 
                name="address" 
                value={formData.address}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label htmlFor="address">آدرس</label>
              <div className="input-border"></div>
            </div>

            <div className="input-group full-width compact">
              <div className="input-icon">
                <i className="fas fa-comment-alt"></i>
              </div>
              <input 
                type="text" 
                id="description" 
                name="description" 
                value={formData.description}
                onChange={handleChange}
                placeholder=" "
              />
              <label htmlFor="description">توضیحات (اختیاری)</label>
              <div className="input-border"></div>
            </div>

            <button type="submit" className="submit-button-new">
              <div className="btn-content">
                <span>ارسال درخواست</span>
                <div className="btn-loading">
                  <i className="fas fa-spinner"></i>
                </div>
              </div>
              <div className="btn-ripple"></div>
            </button>
          </form>
          
          <div className="form-features">
            <div className="feature-item">
              <i className="fas fa-shield-check"></i>
              <span>امنیت کامل اطلاعات</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-headset"></i>
              <span>پشتیبانی 24/7</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-bolt"></i>
              <span>پاسخ سریع</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
