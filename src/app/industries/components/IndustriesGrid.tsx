'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const industries = [
  {
    icon: 'HeartIcon',
    title: 'Healthcare',
    description: 'HIPAA-compliant platforms, EHR integrations, telemedicine solutions, and clinical data analytics for modern healthcare providers.',
    solutions: ['Patient portals', 'EHR/EMR integration', 'Telemedicine platforms', 'Clinical analytics'],
    color: 'text-primary',
    bg: 'bg-primary/6',
    border: 'hover:border-primary/30',
  },
  {
    icon: 'BanknotesIcon',
    title: 'Finance & Banking',
    description: 'Secure fintech platforms, core banking modernization, regulatory compliance systems, and real-time payment infrastructure.',
    solutions: ['Core banking systems', 'Payment processing', 'Fraud detection', 'Regulatory reporting'],
    color: 'text-accent',
    bg: 'bg-accent/6',
    border: 'hover:border-accent/30',
  },
  {
    icon: 'AcademicCapIcon',
    title: 'Education',
    description: 'Learning management systems, student information platforms, and AI-powered personalized learning experiences.',
    solutions: ['LMS platforms', 'Student portals', 'Virtual classrooms', 'Analytics dashboards'],
    color: 'text-success',
    bg: 'bg-success/6',
    border: 'hover:border-success/30',
  },
  {
    icon: 'ShoppingBagIcon',
    title: 'Retail & E-Commerce',
    description: 'Omnichannel commerce platforms, inventory management, personalization engines, and supply chain optimization.',
    solutions: ['E-commerce platforms', 'Inventory systems', 'Recommendation engines', 'POS integration'],
    color: 'text-primary',
    bg: 'bg-primary/6',
    border: 'hover:border-primary/30',
  },
  {
    icon: 'BuildingLibraryIcon',
    title: 'Government',
    description: 'Citizen-facing digital services, secure data infrastructure, and compliance-first platforms for public sector organizations.',
    solutions: ['Citizen portals', 'Case management', 'Document management', 'Compliance systems'],
    color: 'text-accent',
    bg: 'bg-accent/6',
    border: 'hover:border-accent/30',
  },
  {
    icon: 'CogIcon',
    title: 'Manufacturing',
    description: 'IoT-enabled factory automation, predictive maintenance, supply chain visibility, and ERP modernization.',
    solutions: ['IoT platforms', 'Predictive maintenance', 'ERP integration', 'Quality management'],
    color: 'text-success',
    bg: 'bg-success/6',
    border: 'hover:border-success/30',
  },
  {
    icon: 'TruckIcon',
    title: 'Logistics',
    description: 'Real-time fleet tracking, route optimization, warehouse management, and last-mile delivery platforms.',
    solutions: ['Fleet management', 'Route optimization', 'WMS platforms', 'Delivery tracking'],
    color: 'text-primary',
    bg: 'bg-primary/6',
    border: 'hover:border-primary/30',
  },
  {
    icon: 'BoltIcon',
    title: 'Energy & Utilities',
    description: 'Smart grid management, energy analytics, asset monitoring, and sustainability reporting platforms.',
    solutions: ['Smart grid systems', 'Asset monitoring', 'Energy analytics', 'Sustainability reporting'],
    color: 'text-accent',
    bg: 'bg-accent/6',
    border: 'hover:border-accent/30',
  },
];

export default function IndustriesGrid() {
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
      { threshold: 0.1 }
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary text-xs font-700 uppercase tracking-widest mb-4 px-3 py-1.5 bg-primary/6 rounded-full border border-primary/15">
            Industry Expertise
          </span>
          <h2 className="text-section-title text-foreground mb-4">
            Specialized Solutions for Every Sector
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We don&apos;t just build technology — we understand the unique challenges, regulations, and opportunities in your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, i) => (
            <div
              key={industry.title}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`reveal-hidden stagger-${(i % 4) + 1} group bg-card border border-border rounded-2xl p-7 ${industry.border} hover:shadow-card transition-all duration-300 cursor-pointer`}
            >
              <div className={`w-12 h-12 rounded-xl ${industry.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={industry.icon as any} size={22} className={industry.color} />
              </div>
              <h3 className="text-foreground text-base font-700 mb-3">{industry.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{industry.description}</p>
              <ul className="space-y-1.5 mb-5">
                {industry.solutions.map((sol) => (
                  <li key={sol} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className={`w-1.5 h-1.5 rounded-full ${industry.bg.replace('/6', '')} flex-shrink-0`} style={{ background: 'currentColor' }}>
                      <span className="sr-only">•</span>
                    </div>
                    <Icon name="CheckIcon" size={12} className={industry.color} />
                    {sol}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`inline-flex items-center gap-1.5 text-xs font-700 ${industry.color} group-hover:gap-2.5 transition-all duration-200`}
              >
                Learn More
                <Icon name="ArrowRightIcon" size={12} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
