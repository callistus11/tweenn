'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const values = [
  {
    icon: 'ScaleIcon',
    title: 'Integrity',
    description: 'We uphold the highest ethical standards in every interaction, ensuring transparency, honesty, and trust in all our work.',
    color: 'text-primary',
    bg: 'bg-primary/8',
  },
  {
    icon: 'UserGroupIcon',
    title: 'Client Focus',
    description: 'Your success is our success. We build lasting partnerships by deeply understanding your goals and delivering beyond expectations.',
    color: 'text-accent',
    bg: 'bg-accent/8',
  },
  {
    icon: 'ShieldExclamationIcon',
    title: 'Risk Resilience',
    description: 'We design solutions that anticipate failure and recover gracefully — building confidence into every system we deliver.',
    color: 'text-success',
    bg: 'bg-success/8',
  },
  {
    icon: 'AcademicCapIcon',
    title: 'Expertise',
    description: 'Our teams bring deep domain knowledge and continuous learning to every engagement, staying ahead of the technology curve.',
    color: 'text-primary',
    bg: 'bg-primary/8',
  },
];

export default function ValuesSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            entry.target.classList.remove('reveal-hidden');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-primary text-xs font-700 uppercase tracking-widest mb-4 px-3 py-1.5 bg-primary/6 rounded-full border border-primary/15">
            Our Values
          </span>
          <h2 className="text-section-title text-foreground mb-4">
            We Listen, Think Independently, Advise &amp; Take Action
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            These principles guide every decision we make and every relationship we build.
          </p>
        </div>

        {/* Values grid — 4 cards, 2-col on md, 4-col on lg */}
        {/* Row 1: [col-1: Integrity] [col-2: Client Focus] [col-3: Risk Resilience] [col-4: Expertise] */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <div
              key={value.title}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`reveal-hidden stagger-${i + 1} bg-secondary border border-border rounded-2xl p-7 hover:border-primary/20 hover:shadow-card transition-all duration-300 group`}
            >
              <div className={`w-12 h-12 rounded-xl ${value.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={value.icon as any} size={22} className={value.color} />
              </div>
              <h3 className="text-foreground text-base font-700 mb-3">{value.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-20 bg-gradient-to-br from-primary/5 via-accent/3 to-background rounded-3xl border border-primary/10 p-10 md:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-primary text-xs font-700 uppercase tracking-widest mb-4">
                Why Us?
              </span>
              <h2 className="text-section-title text-foreground mb-5">
                You&apos;ll Know What You&apos;re Getting. We Are Transparent Like That.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                No gimmicks. No hidden costs. No surprises. We believe the best partnerships are built on radical transparency — from scoping to delivery to support.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-700 rounded-xl hover:bg-primary/90 transition-all text-sm magnetic-btn"
              >
                Schedule a Call
                <Icon name="CalendarIcon" size={16} />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: 'CheckCircleIcon', label: 'Fixed-price or T&M contracts', color: 'text-success' },
                { icon: 'CheckCircleIcon', label: 'Weekly progress reports', color: 'text-success' },
                { icon: 'CheckCircleIcon', label: 'Dedicated project manager', color: 'text-success' },
                { icon: 'CheckCircleIcon', label: 'Source code ownership', color: 'text-success' },
                { icon: 'CheckCircleIcon', label: 'No vendor lock-in', color: 'text-success' },
                { icon: 'CheckCircleIcon', label: 'Post-launch support SLA', color: 'text-success' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border">
                  <Icon name={item.icon as any} size={18} className={item.color} variant="solid" />
                  <span className="text-foreground text-sm font-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}