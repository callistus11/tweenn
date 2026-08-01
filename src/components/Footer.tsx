'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const footerLinks = {
  company: [
    { label: 'Who We Are', href: '/about' },
    { label: 'Our Team', href: '/about#team' },
    { label: 'Contact Us', href: '/contact' },
  ],
  services: [
    { label: 'Software Development', href: '/services' },
    { label: 'Cloud Solutions', href: '/services' },
    { label: 'AI & Automation', href: '/services' },
    { label: 'Cybersecurity', href: '/services' },
    { label: 'IT Consulting', href: '/services' },
  ],
  resources: [
    { label: 'FAQ', href: '/contact#faq' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="bg-dark-navy text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <p className="text-accent text-sm font-600 uppercase tracking-widest mb-3">Ready to Transform?</p>
            <h2 className="text-section-title text-white mb-3">
              Ready to Build Your Next Digital Solution?
            </h2>
            <p className="text-white/60 text-lg">
              We look forward to learning about your technology goals.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-primary text-white font-700 rounded-xl hover:bg-primary/90 transition-all magnetic-btn text-center text-sm"
            >
              Free Consultation
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-white/10 text-white font-600 rounded-xl hover:bg-white/20 transition-all text-center text-sm border border-white/20"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Details Row */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Icon name="PhoneIcon" size={18} className="text-primary" />
            </div>
            <div>
              <p className="text-white/40 text-xs font-600 uppercase tracking-wider mb-0.5">Phone</p>
              <p className="text-white text-sm font-600">+233 50 137 2510</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Icon name="EnvelopeIcon" size={18} className="text-primary" />
            </div>
            <div>
              <p className="text-white/40 text-xs font-600 uppercase tracking-wider mb-0.5">Email</p>
              <p className="text-white text-sm font-600">info@tweentech.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Icon name="MapPinIcon" size={18} className="text-primary" />
            </div>
            <div>
              <p className="text-white/40 text-xs font-600 uppercase tracking-wider mb-0.5">Address</p>
              <p className="text-white text-sm font-600">Accra, Ghana</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-3">
            <AppImage
              src="/assets/images/logo2.jpg"
              alt="Tween Technologies logo"
              width={130}
              height={34}
              className="h-8 w-auto object-contain mb-5"
            />
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Engineering digital solutions that scale businesses globally.
            </p>
            {/* Newsletter */}
            <p className="text-white/70 text-xs font-600 uppercase tracking-wider mb-3">Newsletter</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary/60 transition-colors min-w-0"
              />
              <button
                type="submit"
                className="px-3 py-2 bg-primary rounded-lg text-white text-sm font-600 hover:bg-primary/90 transition-colors flex-shrink-0"
              >
                <Icon name="PaperAirplaneIcon" size={16} />
              </button>
            </form>
          </div>

          {/* Links */}
          <div className="md:col-span-2 md:col-start-5">
            <p className="text-white/40 text-xs font-700 uppercase tracking-widest mb-5">Company</p>
            <ul className="space-y-3">
              {footerLinks.company.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/60 text-sm font-500 hover:text-white transition-colors min-h-[44px] flex items-center">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-white/40 text-xs font-700 uppercase tracking-widest mb-5">Services</p>
            <ul className="space-y-3">
              {footerLinks.services.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/60 text-sm font-500 hover:text-white transition-colors min-h-[44px] flex items-center">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-white/40 text-xs font-700 uppercase tracking-widest mb-5">Resources</p>
            <ul className="space-y-3">
              {footerLinks.resources.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/60 text-sm font-500 hover:text-white transition-colors min-h-[44px] flex items-center">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-white/40 text-xs font-700 uppercase tracking-widest mb-5">Hours</p>
            <p className="text-white/60 text-sm">Mon–Fri</p>
            <p className="text-white text-sm font-600 mb-5">8:30am – 5:30pm</p>
            <p className="text-white/40 text-xs font-700 uppercase tracking-widest mb-4">Follow Us</p>
            <div className="flex gap-3">
              {[
                { href: '#', label: 'Twitter', icon: 'XMarkIcon' },
                { href: '#', label: 'LinkedIn', icon: 'BuildingOfficeIcon' },
                { href: '#', label: 'Facebook', icon: 'UserGroupIcon' },
                { href: '#', label: 'Instagram', icon: 'CameraIcon' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/50 hover:bg-primary hover:text-white transition-all"
                >
                  <Icon name={s.icon as any} size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Tweentech. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/terms" className="text-white/40 text-sm hover:text-white/70 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-white/40 text-sm hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
