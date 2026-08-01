import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import ServicesSection from '@/app/components/ServicesSection';
import AboutSection from '@/app/components/AboutSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import InsightsSection from '@/app/components/InsightsSection';

export default function HomePage() {
  return (
    <main className="bg-background overflow-x-hidden">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <InsightsSection />
      <Footer />
    </main>
  );
}