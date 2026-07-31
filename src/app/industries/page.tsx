import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IndustriesHero from '@/app/industries/components/IndustriesHero';
import IndustriesGrid from '@/app/industries/components/IndustriesGrid';
import TestimonialsSection from '@/app/components/TestimonialsSection';

export const metadata = {
  title: 'Industries | Tween Technologies',
  description: 'Tween Technologies delivers specialized technology solutions across healthcare, finance, education, retail, government, and more.',
};

export default function IndustriesPage() {
  return (
    <main className="bg-background overflow-x-hidden">
      <Header />
      <IndustriesHero />
      <IndustriesGrid />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
