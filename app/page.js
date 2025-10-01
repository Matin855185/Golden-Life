'use client';

import { useEffect, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturedProperties from './components/FeaturedProperties';
import ServicesSection from './components/ServicesSection';
import TechniciansSection from './components/TechniciansSection';
import TrustSection from './components/TrustSection';
// import MapSection from './components/MapSection';
import Footer from './components/Footer';
import SuccessModal from './components/SuccessModal';
import ScrollToTop from './components/ScrollToTop';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="golden-life-app">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturedProperties />
      {/* <MapSection /> */}
      <ServicesSection />
      <TechniciansSection />
      <TrustSection />
      <Footer />
      <SuccessModal showModal={showModal} setShowModal={setShowModal} />
      <ScrollToTop />
    </div>
  );
}
