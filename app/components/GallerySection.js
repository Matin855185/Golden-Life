'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function GallerySection() {
  const galleryItems = [
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      title: 'خدمات خرید'
    },
    {
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      title: 'خدمات درمانی'
    },
    {
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
      title: 'باغبانی'
    },
    {
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop',
      title: 'نظافت'
    }
  ];

  useEffect(() => {
    // Initialize Swiper if needed
    if (typeof window !== 'undefined' && window.Swiper) {
      new window.Swiper('.gallery-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          }
        }
      });
    }
  }, []);

  return (
    <section className="gallery">
      <div className="container">
        <h2 className="section-title">گالری خدمات</h2>
        <div className="swiper gallery-swiper">
          <div className="swiper-wrapper">
            {galleryItems.map((item, index) => (
              <div key={index} className="swiper-slide">
                <Image src={item.image} alt={item.title} width={800} height={600} />
                <div className="slide-overlay">
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    </section>
  );
}
