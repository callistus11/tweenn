'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const services = [
  {
    icon: 'CodeBracketIcon',
    title: 'Software Development',
    description: 'Custom enterprise applications, APIs, and platforms built with modern stacks that scale with your business.',
    tags: ['React', 'Node.js', 'Python'],
    color: 'text-primary',
    bg: 'bg-primary/6',
    border: 'group-hover:border-primary/30',
  },
  {
    icon: 'CloudIcon',
    title: 'Cloud Solutions',
    description: 'Cloud migration, architecture design, and managed services on AWS, Azure, and GCP for resilient infrastructure.',
    tags: ['AWS', 'Azure', 'Kubernetes'],
    color: 'text-accent',
    bg: 'bg-accent/6',
    border: 'group-hover:border-accent/30',
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'Cybersecurity',
    description: 'End-to-end security assessments, zero-trust architecture, and compliance frameworks to protect your assets.',
    tags: ['SOC2', 'ISO 27001', 'SIEM'],
    color: 'text-success',
    bg: 'bg-success/6',
    border: 'group-hover:border-success/30',
  },
  {
    icon: 'LightBulbIcon',
    title: 'IT Consulting',
    description: 'Strategic technology roadmaps and advisory services that align your IT investments with business outcomes.',
    tags: ['Strategy', 'Architecture', 'CTO Advisory'],
    color: 'text-primary',
    bg: 'bg-primary/6',
    border: 'group-hover:border-primary/30',
  },
  {
    icon: 'CpuChipIcon',
    title: 'AI & Automation',
    description: 'Machine learning pipelines, intelligent automation, and data science solutions that unlock operational efficiency.',
    tags: ['TensorFlow', 'LLMs', 'MLOps'],
    color: 'text-accent',
    bg: 'bg-accent/6',
    border: 'group-hover:border-accent/30',
  },
  {
    icon: 'ArrowPathIcon',
    title: 'Digital Transformation',
    description: 'Full-spectrum modernization — from legacy migration to process reinvention and digital-first operating models.',
    tags: ['Agile', 'DevOps', 'Change Mgmt'],
    color: 'text-success',
    bg: 'bg-success/6',
    border: 'group-hover:border-success/30',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
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
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-primary text-xs font-700 uppercase tracking-widest mb-4 px-3 py-1.5 bg-primary/6 rounded-full border border-primary/15">
            What We Do
          </span>
          <h2 className="text-section-title text-foreground mb-5">
            Covering the Full Spectrum of Global Technology Services
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From strategy to execution, we deliver end-to-end technology solutions that transform how businesses operate and compete.
          </p>
        </div>

        {/* Grid — 6 cards, 3-col */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Row 1: [col-1: Software Dev] [col-2: Cloud] [col-3: Cybersecurity] */}
          {/* Row 2: [col-1: IT Consulting] [col-2: AI & Automation] [col-3: Digital Transformation] */}
          {services.map((service, i) => (
            <div
              key={service.title}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`reveal-hidden group bg-card border border-border rounded-2xl p-7 service-card-hover cursor-pointer ${service.border} transition-all duration-300 stagger-${i + 1}`}
            >
              <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={service.icon as any} size={22} className={service.color} />
              </div>
              <h3 className="text-foreground text-lg font-700 mb-3 leading-tight">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {service.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-secondary border border-border rounded-lg text-xs font-600 text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                className={`inline-flex items-center gap-1.5 text-sm font-700 ${service.color} group-hover:gap-3 transition-all duration-200`}
              >
                Learn More
                <Icon name="ArrowRightIcon" size={14} />
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-700 rounded-xl hover:bg-primary/90 transition-all duration-200 magnetic-btn shadow-sm text-sm"
          >
            View All Services
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}