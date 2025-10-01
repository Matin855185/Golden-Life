'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function TrustSection() {
  const [currentReview, setCurrentReview] = useState(0);

  const testimonials = [
    {
      content: 'من امسال یک خانه در منطقه ولنجک خریدم و خدمات VIP گلدن لایف واقعاً فوق‌العاده بود. از طراحی داخلی تا خدمات نظافت، همه چیز عالی پیش رفت. از این به بعد تمام نیازهایم فقط با گلدن لایف :)',
      author: 'مریم احمدی',
      role: 'مشتری VIP',
      rating: 5,
      date: '۲ هفته پیش',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face'
    },
    {
      content: 'همه مراحل خرید خانه خوب و سریع پیش رفت. عملکرد سایت شب و روز نداره. من قبلاً از سایت‌های دیگر استفاده می‌کردم ولی گلدن لایف واقعاً متفاوت بود و همونقدر کارآمد بود. تبریک میگم بهتون.',
      author: 'علی رضایی',
      role: 'مشتری VIP',
      rating: 5,
      date: '۱ ماه پیش',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face'
    },
    {
      content: 'من رزرو لحظه آخری داشتم برای خدمات باغبانی و چون وقت تنگ بود نگران بودم و اگر که شما کمک نمی‌کردین شاید رزرو رو لغو می کردم ولی الان میدونم که اگه از قبل رزرو کنم دیگه هیچ مشکلی نخواهد بود.',
      author: 'فاطمه کریمی',
      role: 'مشتری VIP',
      rating: 4,
      date: '۳ هفته پیش',
      avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=80&h=80&fit=crop&crop=face'
    },
    {
      content: 'کارتون عالیه دوستان... هرچند برای تایید خدمات منتظر موندم ولی واقعا تجربه خوبی داشتم از خریدی که انجام دادم، فقط کاش مناطق بیشتری رو تحت پوشش بگیرید تا بتونیم بیشتر ازش استفاده کنیم.',
      author: 'حسین نوری',
      role: 'مشتری VIP',
      rating: 4,
      date: '۱۰ روز پیش',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face'
    },
    {
      content: 'اولین بار واقعا با شک و تردید از سایت استفاده کردم که نکنه پول رو واریز کنم و از کسی خبری نشه! ولی واقعا راضی هستم و دیگه میدونم داستان چیه ... از این به بعد حتما هر خدمتی بخوام از گلدن لایف استفاده می‌کنم.',
      author: 'سارا محمدی',
      role: 'مشتری VIP',
      rating: 5,
      date: '۵ روز پیش',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face'
    }
  ];

  // اسلایدر خودکار
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % testimonials.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} style={{ color: i < rating ? 'var(--primary-gold)' : 'rgba(255, 255, 255, 0.3)', fontSize: '0.9rem' }}>
        ★
      </span>
    ));
  };

  return (
    <section style={{
      padding: '5rem 0',
      background: 'linear-gradient(135deg, rgba(13, 13, 13, 0.95), rgba(26, 26, 26, 0.9))',
      position: 'relative'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '3rem',
          color: 'var(--primary-gold)',
          fontSize: '2.5rem',
          fontWeight: '700',
          fontFamily: 'IRANSans, Arial, sans-serif'
        }}>
          <i className="fas fa-quote-right" style={{ marginLeft: '0.5rem', color: 'var(--primary-gold)' }}></i>
          نظرات مشتریان راضی
        </h2>

        {/* اسلایدر نظرات */}
        <div style={{
          position: 'relative',
          maxWidth: '600px',
          margin: '0 auto',
          background: 'rgba(26, 26, 26, 0.9)',
          borderRadius: '15px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
          overflow: 'hidden',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          backdropFilter: 'blur(10px)'
        }}>
          {/* نظر فعلی */}
          <div style={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem',
            position: 'relative'
          }}>
            {/* عکس پروفایل */}
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid var(--primary-gold)',
              boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)'
            }}>
              <Image 
                src={testimonials[currentReview].avatar} 
                alt={testimonials[currentReview].author}
                width={80}
                height={80}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* نام و فامیل */}
            <h4 style={{
              color: 'var(--primary-gold)',
              fontSize: '1.2rem',
              margin: 0,
              fontFamily: 'IRANSans, Arial, sans-serif',
              fontWeight: '600'
            }}>
              {testimonials[currentReview].author}
            </h4>

            {/* ستاره‌های نظر */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}>
              {renderStars(testimonials[currentReview].rating)}
            </div>

            {/* متن نظر */}
            <p style={{
              fontSize: '1rem',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.9)',
              textAlign: 'center',
              margin: 0,
              fontFamily: 'IRANSans, Arial, sans-serif',
              maxWidth: '450px'
            }}>
              {testimonials[currentReview].content}
            </p>

            {/* تاریخ نظر */}
            <span style={{
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: '0.85rem',
              fontFamily: 'IRANSans, Arial, sans-serif'
            }}>
              {testimonials[currentReview].date}
            </span>
          </div>

          {/* دکمه‌های کنترل */}
          <button
            onClick={nextReview}
            style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(212, 175, 55, 0.3)',
              color: 'var(--primary-gold)',
              border: 'none',
              width: '35px',
              height: '35px',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--primary-gold)';
              e.target.style.color = 'var(--primary-dark)';
              e.target.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(212, 175, 55, 0.3)';
              e.target.style.color = 'var(--primary-gold)';
              e.target.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            ❯
          </button>

          <button
            onClick={prevReview}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(212, 175, 55, 0.3)',
              color: 'var(--primary-gold)',
              border: 'none',
              width: '35px',
              height: '35px',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--primary-gold)';
              e.target.style.color = 'var(--primary-dark)';
              e.target.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(212, 175, 55, 0.3)';
              e.target.style.color = 'var(--primary-gold)';
              e.target.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            ❮
          </button>
        </div>

        {/* نقطه‌های ناوبری */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginTop: '2rem'
        }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                border: 'none',
                background: index === currentReview ? 'var(--primary-gold)' : 'rgba(212, 175, 55, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: index === currentReview ? 'scale(1.4)' : 'scale(1)',
                boxShadow: index === currentReview ? '0 4px 15px rgba(212, 175, 55, 0.5)' : 'none'
              }}
            />
          ))}
        </div>

        {/* آمار اعتماد */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginTop: '4rem',
          maxWidth: '800px',
          margin: '4rem auto 0'
        }}>
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            background: 'rgba(26, 26, 26, 0.6)',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              color: 'var(--primary-gold)',
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '0.5rem'
            }}>
              ۹۸٪
            </div>
            <div style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1rem',
              fontFamily: 'IRANSans, Arial, sans-serif'
            }}>
              رضایت مشتریان
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            padding: '2rem',
            background: 'rgba(26, 26, 26, 0.6)',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              color: 'var(--primary-gold)',
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '0.5rem'
            }}>
              ۱۲۰۰+
            </div>
            <div style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1rem',
              fontFamily: 'IRANSans, Arial, sans-serif'
            }}>
              نظرات مثبت
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            padding: '2rem',
            background: 'rgba(26, 26, 26, 0.6)',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              color: 'var(--primary-gold)',
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '0.5rem'
            }}>
              ۴.۹
            </div>
            <div style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1rem',
              fontFamily: 'IRANSans, Arial, sans-serif'
            }}>
              امتیاز میانگین
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
