'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const services = [
  {
    icon: 'CodeBracketIcon',
    title: 'Software Development',
    description: 'We build fast, scalable web and backend systems tailored to your business needs.',
    tags: ['Web', 'Backend', 'APIs'],
    color: 'text-primary',
    bg: 'bg-primary/6',
    border: 'group-hover:border-primary/30',
  },
  {
    icon: 'CpuChipIcon',
    title: 'AI & Data Intelligence',
    description: 'We turn data into actionable insights and intelligent systems that improve decision-making.',
    tags: ['ML', 'Analytics', 'Insights'],
    color: 'text-accent',
    bg: 'bg-accent/6',
    border: 'group-hover:border-accent/30',
  },
  {
    icon: 'LightBulbIcon',
    title: 'Product Design & Development',
    description: 'We design intuitive, user-focused digital products and bring them to life from concept to launch.',
    tags: ['UX/UI', 'Design', 'Launch'],
    color: 'text-success',
    bg: 'bg-success/6',
    border: 'group-hover:border-success/30',
  },
  {
    icon: 'CloudIcon',
    title: 'Digital Infrastructure',
    description: 'We set up reliable systems, cloud environments, and tools that keep your business running smoothly.',
    tags: ['Cloud', 'Systems', 'Tools'],
    color: 'text-primary',
    bg: 'bg-primary/6',
    border: 'group-hover:border-primary/30',
  },
  {
    icon: 'AcademicCapIcon',
    title: 'Advisory & Implementation Support',
    description: 'We help you make the right technical decisions and execute them effectively.',
    tags: ['Strategy', 'Advisory', 'Execution'],
    color: 'text-accent',
    bg: 'bg-accent/6',
    border: 'group-hover:border-accent/30',
  },
  {
    icon: 'UserGroupIcon',
    title: 'Training & Talent Development',
    description: 'We prepare skilled, job-ready tech talent through practical, project-based learning.',
    tags: ['Training', 'Talent', 'Learning'],
    color: 'text-success',
    bg: 'bg-success/6',
    border: 'group-hover:border-success/30',
  },
  {
    icon: 'GlobeAltIcon',
    title: 'Ecosystem & Community Building',
    description: 'We support the growth of developer communities and talent pipelines across regions.',
    tags: ['Community', 'Ecosystem', 'Growth'],
    color: 'text-primary',
    bg: 'bg-primary/6',
    border: 'group-hover:border-primary/30',
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
            We work with businesses to design, build, and scale technology that solves real problems and creates measurable impact.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From strategy to execution, we deliver end-to-end technology solutions that transform how businesses operate and compete.
          </p>
        </div>

        {/* Grid — 7 cards, mixed layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First 6 in 3x2 grid, last 1 centered */}
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`${i === 6 ? 'lg:col-start-2' : ''} reveal-hidden group bg-card border border-border rounded-2xl p-7 service-card-hover cursor-pointer ${service.border} transition-all duration-300 stagger-${i + 1}`}
              ref={(el) => { cardRefs.current[i] = el; }}
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