'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const contactMethods = [
  {
    icon: 'PhoneIcon',
    label: 'Phone',
    value: '+1(122) 800 88 08',
    sub: 'Mon–Fri, 8:30am – 5:30pm',
    color: 'text-primary',
    bg: 'bg-primary/8',
  },
  {
    icon: 'EnvelopeIcon',
    label: 'Email',
    value: 'info@tweentech.com',
    sub: 'We reply within 24 hours',
    color: 'text-accent',
    bg: 'bg-accent/8',
  },
  {
    icon: 'MapPinIcon',
    label: 'Office',
    value: '1140 Harrison St',
    sub: 'San Francisco, CA 94103',
    color: 'text-success',
    bg: 'bg-success/8',
  },
];

export default function ContactHero() {
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      lineRefs.current.forEach((el, i) => {
        if (!el) return;
        el.style.transition = `transform 1s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.18}s`;
        el.style.transform = 'translateY(0)';
      });
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-secondary">
      <div className="absolute inset-0 hero-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 blob-primary pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/6 border border-primary/15 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-dot" />
              <span className="text-primary text-xs font-700 uppercase tracking-widest">Get In Touch</span>
            </div>

            <h1 className="text-hero-xl text-foreground mb-6">
              <span className="line-reveal">
                <span ref={(el) => { lineRefs.current[0] = el; }} style={{ transform: 'translateY(105%)' }}>
                  Let&apos;s Build
                </span>
              </span>
              <span className="line-reveal">
                <span ref={(el) => { lineRefs.current[1] = el; }} style={{ transform: 'translateY(105%)' }}>
                  Something
                </span>
              </span>
              <span className="line-reveal">
                <span ref={(el) => { lineRefs.current[2] = el; }} className="gradient-text" style={{ transform: 'translateY(105%)' }}>
                  Together.
                </span>
              </span>
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg"
              style={{ opacity: 0, animation: 'fadeInUp 0.8s ease 0.7s forwards' }}>
              Whether you have a specific project in mind or just want to explore what&apos;s possible, our team is ready to listen and advise.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              style={{ opacity: 0, animation: 'fadeInUp 0.8s ease 0.9s forwards' }}>
              {contactMethods.map((method) => (
                <div key={method.label} className="bg-card border border-border rounded-2xl p-5 hover:border-primary/20 hover:shadow-card transition-all duration-200">
                  <div className={`w-10 h-10 rounded-xl ${method.bg} flex items-center justify-center mb-3`}>
                    <Icon name={method.icon as any} size={18} className={method.color} />
                  </div>
                  <p className="text-muted-foreground text-xs font-600 uppercase tracking-wider mb-1">{method.label}</p>
                  <p className="text-foreground text-sm font-700 leading-tight">{method.value}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{method.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 hidden lg:block"
            style={{ opacity: 0, animation: 'fadeInUp 1s ease 0.5s forwards' }}>
            <div className="bg-gradient-to-br from-primary/5 via-accent/3 to-background rounded-3xl border border-primary/10 p-10">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: 'ClockIcon', label: 'Fast Response', sub: 'Within 24 hours', color: 'text-primary', bg: 'bg-primary/8' },
                  { icon: 'UserGroupIcon', label: 'Dedicated Team', sub: 'Named contacts', color: 'text-accent', bg: 'bg-accent/8' },
                  { icon: 'ShieldCheckIcon', label: 'NDA Ready', sub: 'Confidential by default', color: 'text-success', bg: 'bg-success/8' },
                  { icon: 'GlobeAltIcon', label: 'Global Reach', sub: '3 continents', color: 'text-primary', bg: 'bg-primary/8' },
                ].map((item) => (
                  <div key={item.label} className="bg-card border border-border rounded-2xl p-5 hover:border-primary/20 transition-all duration-200">
                    <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mb-3`}>
                      <Icon name={item.icon as any} size={18} className={item.color} />
                    </div>
                    <p className="text-foreground text-sm font-700">{item.label}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
