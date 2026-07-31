import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from '@/app/services/components/ServicesHero';
import ServicesGrid from '@/app/services/components/ServicesGrid';
import ProcessSection from '@/app/services/components/ProcessSection';
import TechStack from '@/app/components/TechStack';

export const metadata = {
  title: 'Services | Tween Technologies',
  description: 'Explore Tween Technologies full spectrum of enterprise technology services — from software development and cloud solutions to AI automation and cybersecurity.',
};

export default function ServicesPage() {
  return (
    <main className="bg-background overflow-x-hidden">
      <Header />
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <TechStack />
      <Footer />
    </main>
  );
}
