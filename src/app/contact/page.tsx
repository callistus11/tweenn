import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/app/contact/components/ContactHero';
import ContactForm from '@/app/contact/components/ContactForm';

export const metadata = {
  title: 'Contact Us | Tween Technologies',
  description: 'Get in touch with Tween Technologies. Schedule a consultation, request a quote, or ask us anything about our enterprise technology services.',
};

export default function ContactPage() {
  return (
    <main className="bg-background overflow-x-hidden">
      <Header />
      <ContactHero />
      <ContactForm />
      <Footer />
    </main>
  );
}
