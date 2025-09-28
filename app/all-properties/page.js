'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import AllPropertiesComponent from '../components/AllPropertiesNew';

export default function AllPropertiesPage() {
  return (
    <div className="golden-life-app">
      <Header />
      <AllPropertiesComponent />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
