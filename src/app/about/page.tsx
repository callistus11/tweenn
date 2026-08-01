import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/app/about/components/AboutHero';
import ValuesSection from '@/app/components/ValuesSection';

export const metadata = {
  title: 'About Us | Tween Technologies',
  description: 'Learn about Tween Technologies — our mission, values, team, and the story behind our enterprise technology practice.',
};

export default function AboutPage() {
  return (
    <main className="bg-background overflow-x-hidden">
      <Header />
      <AboutHero />
      <ValuesSection />
      <Footer />
    </main>
  );
}
