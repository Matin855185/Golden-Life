'use client';

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { useLanguage } from '../contexts/LanguageContext';

export default function TechnicianRegistrationPage() {
  const { t } = useLanguage();
  const [selectedServices, setSelectedServices] = useState([]);
  const [workingHours, setWorkingHours] = useState(8);
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    workingAreas: '',
    specializations: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // خدمات تکنسین
  const services = [
    {
      id: 'plumbing',
      title: t('plumbing_service'),
      icon: '🔧',
      hourlyRate: 150000,
      description: t('plumbing_desc')
    },
    {
      id: 'electrical',
      title: t('electrical_service'),
      icon: '⚡',
      hourlyRate: 180000,
      description: t('electrical_desc')
    },
    {
      id: 'hvac',
      title: t('hvac_service'),
      icon: '❄️',
      hourlyRate: 200000,
      description: t('hvac_desc')
    },
    {
      id: 'cleaning',
      title: t('cleaning_service_tech'),
      icon: '🧹',
      hourlyRate: 120000,
      description: t('cleaning_desc')
    },
    {
      id: 'gardening',
      title: t('gardening_service_tech'),
      icon: '🌱',
      hourlyRate: 140000,
      description: t('gardening_desc')
    },
    {
      id: 'security',
      title: t('security_service_tech'),
      icon: '🛡️',
      hourlyRate: 160000,
      description: t('security_desc')
    }
  ];

  // محاسبه درآمد ماهانه
  const calculateIncome = () => {
    if (selectedServices.length > 0) {
      const totalHourlyRate = selectedServices.reduce((total, serviceId) => {
        const service = services.find(s => s.id === serviceId);
        return total + (service ? service.hourlyRate : 0);
      }, 0);
      const averageHourlyRate = totalHourlyRate / selectedServices.length;
      const dailyIncome = averageHourlyRate * workingHours;
      const monthlyIncome = dailyIncome * 25;
      setMonthlyIncome(monthlyIncome);
    } else {
      setMonthlyIncome(0);
    }
  };

  // محاسبه خودکار درآمد
  useEffect(() => {
    calculateIncome();
  }, [selectedServices, workingHours]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSpecializationChange = (serviceId) => {
    const newSelectedServices = selectedServices.includes(serviceId)
      ? selectedServices.filter(id => id !== serviceId)
      : [...selectedServices, serviceId];
    
    setSelectedServices(newSelectedServices);
    setFormData(prev => ({
      ...prev,
      specializations: newSelectedServices
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        experience: '',
        workingAreas: '',
        specializations: []
      });
      setSelectedServices([]);
    }, 2000);
  };

  return (
    <div style={{ paddingTop: '8rem' }}>
      <Header />
      
      <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg, rgba(13, 13, 13, 0.98), rgba(26, 26, 26, 0.95))' }}>
        
        {/* Hero Section */}
        <section style={{
          padding: '4rem 0 2rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)',
            animation: 'pulse 4s ease-in-out infinite'
          }}></div>
          
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 2 }}>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              color: '#ffffff',
              marginBottom: '1rem',
              lineHeight: '1.2'
            }}>
              {t('technician_registration')}
            </h1>
            <p style={{
              fontSize: '1.2rem',
              color: '#d4af37',
              marginBottom: '1.5rem',
              fontWeight: '600'
            }}>
              {t('earn_per_hour')}
            </p>
            <p style={{
              fontSize: '1rem',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '2.5rem',
              maxWidth: '500px',
              margin: '0 auto 2.5rem'
            }}>
              {t('join_platform')}
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <button 
                onClick={() => document.getElementById('registration-form').scrollIntoView({ behavior: 'smooth' })}
                style={{
                  fontSize: '1rem',
                  padding: '0.8rem 2rem',
                  borderRadius: '6px',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  fontWeight: '600',
                  letterSpacing: '0.4px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  border: 'none',
                  background: 'linear-gradient(135deg, #d4af37, #b8941f)',
                  color: '#000000'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(212, 175, 55, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.3)';
                }}
              >
                <i className="fas fa-rocket" style={{ marginLeft: '0.3rem', fontSize: '1rem' }}></i>
                {t('start_registration')}
              </button>
            </div>
          </div>
        </section>


        {/* Combined Calculator & Form Section */}
        <section id="registration-form" style={{ padding: '4rem 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div style={{
                background: 'rgba(34, 197, 94, 0.1)',
                border: '2px solid rgba(34, 197, 94, 0.3)',
                borderRadius: '16px',
                padding: '2rem',
                  textAlign: 'center',
                  marginBottom: '3rem'
                }}>
                  <i className="fas fa-check-circle" style={{ color: '#22c55e', fontSize: '2rem', marginBottom: '1rem' }}></i>
                  <h3 style={{ color: '#ffffff', fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
                    {t('request_sent')}
                  </h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem' }}>
                    {t('request_review')}
                  </p>
                </div>
              )}

              {/* Side by Side Layout */}
              <div className="side-by-side-layout" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: '2rem',
                alignItems: 'start'
              }}>
                
                {/* Left Side - Income Calculator */}
                <div style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  borderRadius: '20px',
                  padding: '1.5rem',
                  position: 'sticky',
                  top: '9rem'
                }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#d4af37',
                    marginBottom: '0.5rem',
                    textAlign: 'center'
                  }}>
                    💰 {t('income_calculator')}
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    textAlign: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    {t('select_daily_hours')}
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1.5rem'
                  }}>
                    <span style={{ color: '#ffffff', fontSize: '0.9rem', minWidth: '60px' }}>{t('hours')}:</span>
                    <input
                      type="range"
                      min="4"
                      max="12"
                      value={workingHours}
                      onChange={(e) => {
                        setWorkingHours(parseInt(e.target.value));
                        calculateIncome();
                      }}
                      style={{
                        flex: 1,
                        height: '8px',
                        borderRadius: '4px',
                        background: `linear-gradient(to right, #d4af37 0%, #d4af37 ${((workingHours - 4) / 8) * 100}%, rgba(255, 255, 255, 0.2) ${((workingHours - 4) / 8) * 100}%, rgba(255, 255, 255, 0.2) 100%)`,
                        outline: 'none',
                        cursor: 'pointer',
                        appearance: 'none'
                      }}
                    />
                    <div style={{
                      background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                      color: '#000000',
                      padding: '0.5rem 1rem',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      fontWeight: '700',
                      minWidth: '70px',
                      textAlign: 'center'
                    }}>
                      {workingHours}h
                    </div>
                  </div>

                  <div style={{
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(212, 175, 55, 0.05))',
                    border: '2px solid rgba(212, 175, 55, 0.3)',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    textAlign: 'center'
                  }}>
                    <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                      {t('monthly_income')}
                    </div>
                    <div style={{ color: '#d4af37', fontSize: '2.2rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                      {monthlyIncome.toLocaleString()}
                    </div>
                    <div style={{ color: '#d4af37', fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem' }}>
                      {t('toman')}
                    </div>
                    <div style={{
                      background: 'rgba(0, 0, 0, 0.2)',
                      borderRadius: '8px',
                      padding: '0.8rem',
                      fontSize: '0.8rem',
                      color: 'rgba(255, 255, 255, 0.8)'
                    }}>
                      {selectedServices.length > 0 ? 
                        `${Math.round(selectedServices.reduce((total, serviceId) => {
                          const service = services.find(s => s.id === serviceId);
                          return total + (service ? service.hourlyRate : 0);
                        }, 0) / selectedServices.length).toLocaleString()} ${t('per_hour')} × ${workingHours} ${t('hours')} × 25 days`
                        : t('select_specialization_first')
                      }
                    </div>
                  </div>

                  <div style={{
                    marginTop: '1rem',
                    textAlign: 'center',
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: '0.8rem'
                  }}>
                    💡 {t('calculation_note')}
                  </div>
                </div>

                {/* Right Side - Registration Form */}
                <div style={{
                  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08), rgba(0, 0, 0, 0.6))',
                  backdropFilter: 'blur(25px)',
                  border: '2px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: '24px',
                  padding: '2rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{
                      textAlign: 'center',
                      marginBottom: '1.5rem'
                    }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem'
                      }}>
                        <i className="fas fa-user-plus" style={{ fontSize: '1.5rem', color: '#000000' }}></i>
                      </div>
                      
                      <h2 style={{
                        fontSize: '2.2rem',
                        fontWeight: '800',
                        background: 'linear-gradient(135deg, #ffffff, #d4af37)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '0.8rem'
                      }}>
                        {t('personal_info')}
                      </h2>
                      <p style={{
                        fontSize: '1rem',
                        color: 'rgba(255, 255, 255, 0.8)',
                        maxWidth: '300px',
                        margin: '0 auto'
                      }}>
                        {t('fill_form_carefully')}
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        
                        {/* Specializations Checkboxes */}
                        <div>
                          <label style={{
                            display: 'block',
                            color: '#d4af37',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            marginBottom: '0.8rem',
                            textTransform: 'uppercase'
                          }}>
                            <i className="fas fa-tools" style={{ marginLeft: '0.5rem' }}></i>
                            {t('select_specializations')}
                          </label>
                          <div className="specialization-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                            gap: '0.6rem'
                          }}>
                            {services.map((service) => (
                              <label
                                key={service.id}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '0.8rem',
                                  padding: '0.8rem',
                                  background: selectedServices.includes(service.id) 
                                    ? 'rgba(212, 175, 55, 0.15)' 
                                    : 'rgba(0, 0, 0, 0.3)',
                                  border: selectedServices.includes(service.id)
                                    ? '2px solid rgba(212, 175, 55, 0.5)'
                                    : '1px solid rgba(255, 255, 255, 0.1)',
                                  borderRadius: '12px',
                                  cursor: 'pointer',
                                  transition: 'all 0.3s ease',
                                  backdropFilter: 'blur(10px)'
                                }}
                                onMouseEnter={(e) => {
                                  if (!selectedServices.includes(service.id)) {
                                    e.target.style.borderColor = 'rgba(212, 175, 55, 0.3)';
                                  }
                                }}
                                onMouseLeave={(e) => {
                                  if (!selectedServices.includes(service.id)) {
                                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                  }
                                }}
                              >
                                <input
                                  type="checkbox"
                                  checked={selectedServices.includes(service.id)}
                                  onChange={() => handleSpecializationChange(service.id)}
                                  style={{
                                    width: '18px',
                                    height: '18px',
                                    accentColor: '#d4af37',
                                    cursor: 'pointer'
                                  }}
                                />
                                <div style={{
                                  fontSize: '1.5rem',
                                  marginLeft: '0.3rem'
                                }}>
                                  {service.icon}
                                </div>
                                <div style={{ flex: 1 }}>
                                  <div style={{
                                    color: selectedServices.includes(service.id) ? '#d4af37' : '#ffffff',
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    marginBottom: '0.2rem'
                                  }}>
                                    {service.title}
                                  </div>
                                  <div style={{
                                    color: 'rgba(255, 255, 255, 0.6)',
                                    fontSize: '0.75rem'
                                  }}>
                                    {service.hourlyRate.toLocaleString()} {t('per_hour')}
                                  </div>
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>
                        
                        {/* Two Column Form Fields */}
                        <div className="form-two-columns" style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr',
                          gap: '1rem'
                        }}>
                          <div>
                            <label style={{
                              display: 'block',
                              color: '#d4af37',
                              fontSize: '0.85rem',
                              fontWeight: '600',
                              marginBottom: '0.4rem',
                              textTransform: 'uppercase'
                            }}>
                              <i className="fas fa-user" style={{ marginLeft: '0.5rem' }}></i>
                              {t('full_name_required')}
                            </label>
                            <input
                              type="text"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              required
                              style={{
                                width: '100%',
                                padding: '0.7rem 1rem',
                                background: 'rgba(0, 0, 0, 0.3)',
                                backdropFilter: 'blur(10px)',
                                border: '2px solid rgba(212, 175, 55, 0.2)',
                                borderRadius: '12px',
                                color: '#ffffff',
                                fontSize: '0.95rem',
                                outline: 'none'
                              }}
                              placeholder={t('enter_full_name_placeholder')}
                            />
                          </div>

                          <div>
                            <label style={{
                              display: 'block',
                              color: '#d4af37',
                              fontSize: '0.85rem',
                              fontWeight: '600',
                              marginBottom: '0.4rem',
                              textTransform: 'uppercase'
                            }}>
                              <i className="fas fa-phone" style={{ marginLeft: '0.5rem' }}></i>
                              {t('phone_required')}
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              style={{
                                width: '100%',
                                padding: '0.7rem 1rem',
                                background: 'rgba(0, 0, 0, 0.3)',
                                backdropFilter: 'blur(10px)',
                                border: '2px solid rgba(212, 175, 55, 0.2)',
                                borderRadius: '12px',
                                color: '#ffffff',
                                fontSize: '0.95rem',
                                outline: 'none'
                              }}
                              placeholder={t('enter_phone_placeholder')}
                            />
                          </div>
                        </div>

                        <div className="form-two-columns" style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr',
                          gap: '1rem'
                        }}>
                          <div>
                            <label style={{
                              display: 'block',
                              color: '#d4af37',
                              fontSize: '0.85rem',
                              fontWeight: '600',
                              marginBottom: '0.4rem',
                              textTransform: 'uppercase'
                            }}>
                              <i className="fas fa-envelope" style={{ marginLeft: '0.5rem' }}></i>
                              {t('email_required')}
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              style={{
                                width: '100%',
                                padding: '0.7rem 1rem',
                                background: 'rgba(0, 0, 0, 0.3)',
                                backdropFilter: 'blur(10px)',
                                border: '2px solid rgba(212, 175, 55, 0.2)',
                                borderRadius: '12px',
                                color: '#ffffff',
                                fontSize: '0.95rem',
                                outline: 'none'
                              }}
                              placeholder={t('enter_email_placeholder')}
                            />
                          </div>

                          <div>
                            <label style={{
                              display: 'block',
                              color: '#d4af37',
                              fontSize: '0.85rem',
                              fontWeight: '600',
                              marginBottom: '0.4rem',
                              textTransform: 'uppercase'
                            }}>
                              <i className="fas fa-briefcase" style={{ marginLeft: '0.5rem' }}></i>
                              {t('experience_required')}
                            </label>
                            <select
                              name="experience"
                              value={formData.experience}
                              onChange={handleInputChange}
                              required
                              style={{
                                width: '100%',
                                padding: '0.7rem 1rem',
                                background: 'rgba(0, 0, 0, 0.3)',
                                backdropFilter: 'blur(10px)',
                                border: '2px solid rgba(212, 175, 55, 0.2)',
                                borderRadius: '12px',
                                color: '#ffffff',
                                fontSize: '0.95rem',
                                outline: 'none',
                                cursor: 'pointer'
                              }}
                            >
                              <option value="" style={{ background: '#1a1a1a', color: '#ffffff' }}>{t('select_experience')}</option>
                              <option value="1-2" style={{ background: '#1a1a1a', color: '#ffffff' }}>{t('experience_1_2')}</option>
                              <option value="3-5" style={{ background: '#1a1a1a', color: '#ffffff' }}>{t('experience_3_5')}</option>
                              <option value="6-10" style={{ background: '#1a1a1a', color: '#ffffff' }}>{t('experience_6_10')}</option>
                              <option value="10+" style={{ background: '#1a1a1a', color: '#ffffff' }}>{t('experience_10_plus')}</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label style={{
                            display: 'block',
                            color: '#d4af37',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            marginBottom: '0.4rem',
                            textTransform: 'uppercase'
                          }}>
                            <i className="fas fa-map-marker-alt" style={{ marginLeft: '0.5rem' }}></i>
                            {t('working_areas_required')}
                          </label>
                          <textarea
                            name="workingAreas"
                            value={formData.workingAreas}
                            onChange={handleInputChange}
                            required
                            rows="3"
                            style={{
                              width: '100%',
                              padding: '0.7rem 1rem',
                              background: 'rgba(0, 0, 0, 0.3)',
                              backdropFilter: 'blur(10px)',
                              border: '2px solid rgba(212, 175, 55, 0.2)',
                              borderRadius: '12px',
                              color: '#ffffff',
                              fontSize: '0.95rem',
                              outline: 'none',
                              resize: 'vertical',
                              minHeight: '80px'
                            }}
                            placeholder={t('working_areas_placeholder')}
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                          background: isSubmitting 
                            ? 'rgba(212, 175, 55, 0.5)' 
                            : 'linear-gradient(135deg, #d4af37 0%, #f4d03f 50%, #d4af37 100%)',
                          color: '#000000',
                          border: 'none',
                          padding: '0.8rem 1.5rem',
                          borderRadius: '12px',
                          fontSize: '0.95rem',
                          fontWeight: '600',
                          cursor: isSubmitting ? 'not-allowed' : 'pointer',
                          transition: 'all 0.4s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.6rem',
                          width: 'auto',
                          alignSelf: 'center',
                          textTransform: 'uppercase'
                        }}
                      >
                        <i className={`fas ${isSubmitting ? 'fa-spinner fa-spin' : 'fa-rocket'}`}></i>
                        {isSubmitting ? t('submitting') : t('submit_request')}
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* Benefits Section */}
              <div style={{
                background: 'rgba(212, 175, 55, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                borderRadius: '20px',
                padding: '2rem',
                marginTop: '3rem'
              }}>
                <h3 style={{
                  color: '#d4af37',
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  textAlign: 'center',
                  marginBottom: '1.5rem'
                }}>
                  {t('golden_life_benefits')}
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '1rem'
                }}>
                  {[
                    t('stable_income'),
                    t('insurance_coverage'),
                    t('continuous_training'),
                    t('technical_support'),
                    t('multi_area_work'),
                    t('flexible_schedule')
                  ].map((benefit, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '0.9rem'
                    }}>
                      <i className="fas fa-check" style={{ color: '#d4af37' }}></i>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

      </main>

      <Footer />
      <ScrollToTop />

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #d4af37, #f4d03f);
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.5);
        }

        @media (max-width: 1024px) {
          .side-by-side-layout {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .specialization-grid {
            grid-template-columns: 1fr !important;
          }
          .form-two-columns {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
