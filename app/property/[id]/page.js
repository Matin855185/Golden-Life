'use client';

import { useParams } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import PropertyDetails from '../../components/PropertyDetails';

export default function PropertyPage() {
  const params = useParams();
  const propertyId = params.id;

  return (
    <div className="golden-life-app">
      <Header />
      <PropertyDetails propertyId={propertyId} />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
