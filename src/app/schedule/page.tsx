import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScheduleHero from '@/app/schedule/components/ScheduleHero';
import CalendlyEmbed from '@/app/schedule/components/CalendlyEmbed';

export const metadata = {
  title: 'Schedule a Meeting | Tween Technologies',
  description: 'Book a consultation with Tween Technologies. Choose a convenient time and let us help you build your next digital solution.',
};

export default function SchedulePage() {
  return (
    <main className="bg-background overflow-x-hidden">
      <Header />
      <ScheduleHero />
      <CalendlyEmbed />
      <Footer />
    </main>
  );
}
