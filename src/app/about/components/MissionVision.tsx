'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const pillars = [
  {
    icon: 'EyeIcon',
    label: 'Our Vision',
    color: 'text-primary',
    bg: 'bg-primary/8',
    heading: 'To Be the Most Trusted Technology Partner in the World',
    body: 'We envision a future where every organization — regardless of size or sector — has access to enterprise-grade technology that drives real, measurable outcomes. Our goal is to be the partner that makes that possible.',
  },
  {
    icon: 'RocketLaunchIcon',
    label: 'Our Mission',
    color: 'text-accent',
    bg: 'bg-accent/8',
    heading: 'Engineering Digital Solutions That Scale Businesses',
    body: 'We exist to help organizations harness the full potential of modern technology. Through deep expertise, transparent partnerships, and relentless execution, we turn complex challenges into competitive advantages.',
  },
];

const timeline = [
  { year: '2014', event: 'Founded in San Francisco with a team of 5 engineers focused on enterprise software.' },
  { year: '2016', event: 'Expanded into cloud infrastructure services, partnering with AWS and Azure.' },
  { year: '2018', event: 'Launched our AI & Automation practice, serving Fortune 500 clients.' },
  { year: '2020', event: 'Opened offices in Lagos and London, growing to 80+ engineers globally.' },
  { year: '2022', event: 'Achieved SOC2 Type II certification and ISO 27001 compliance.' },
  { year: '2024', event: 'Delivered projects across multiple industries worldwide.' },
];

export default function MissionVision() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

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
    if (timelineRef.current) observer.observe(timelineRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Mission & Vision */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary text-xs font-700 uppercase tracking-widest mb-4 px-3 py-1.5 bg-primary/6 rounded-full border border-primary/15">
            Purpose & Direction
          </span>
          <h2 className="text-section-title text-foreground mb-4">
            What Drives Everything We Do
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our mission and vision aren&apos;t statements on a wall — they&apos;re the principles that guide every decision, every hire, and every line of code we write.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {pillars.map((p, i) => (
            <div
              key={p.label}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`reveal-hidden stagger-${i + 1} bg-secondary border border-border rounded-3xl p-10 hover:border-primary/20 hover:shadow-card transition-all duration-300`}
            >
              <div className={`w-14 h-14 rounded-2xl ${p.bg} flex items-center justify-center mb-6`}>
                <Icon name={p.icon as any} size={26} className={p.color} />
              </div>
              <span className={`text-xs font-700 uppercase tracking-widest ${p.color} mb-3 block`}>{p.label}</span>
              <h3 className="text-foreground text-2xl font-800 leading-tight mb-4">{p.heading}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Company Timeline */}
        <div ref={timelineRef} className="reveal-hidden">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="inline-block text-primary text-xs font-700 uppercase tracking-widest mb-4 px-3 py-1.5 bg-primary/6 rounded-full border border-primary/15">
              Our Journey
            </span>
            <h2 className="text-section-title text-foreground">
              A Decade of Building What Matters
            </h2>
          </div>

          {/* Horizontal scrollable timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-8 left-0 right-0 h-px bg-border hidden md:block" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {timeline.map((item, i) => (
                <div key={item.year} className={`relative stagger-${i + 1}`}>
                  {/* Dot */}
                  <div className="hidden md:flex items-center justify-center mb-6">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm relative z-10" />
                  </div>
                  <div className="bg-card border border-border rounded-2xl p-5 hover:border-primary/20 hover:shadow-card transition-all duration-200">
                    <span className="text-primary text-sm font-800 block mb-2">{item.year}</span>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
