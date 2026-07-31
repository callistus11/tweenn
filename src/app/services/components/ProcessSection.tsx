'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const steps = [
  {
    num: '01',
    icon: 'MagnifyingGlassIcon',
    title: 'Discovery',
    desc: 'We conduct deep-dive workshops with your stakeholders to understand your business goals, technical landscape, and constraints.',
    color: 'text-primary',
    bg: 'bg-primary/8',
  },
  {
    num: '02',
    icon: 'DocumentTextIcon',
    title: 'Planning',
    desc: 'We produce a detailed technical specification, architecture blueprint, and phased delivery roadmap with clear milestones.',
    color: 'text-accent',
    bg: 'bg-accent/8',
  },
  {
    num: '03',
    icon: 'CodeBracketSquareIcon',
    title: 'Development',
    desc: 'Agile sprints with daily standups, weekly demos, and continuous integration ensure you see progress from day one.',
    color: 'text-success',
    bg: 'bg-success/8',
  },
  {
    num: '04',
    icon: 'BeakerIcon',
    title: 'Testing',
    desc: 'Automated test suites, security audits, performance benchmarks, and UAT sessions guarantee production readiness.',
    color: 'text-primary',
    bg: 'bg-primary/8',
  },
  {
    num: '05',
    icon: 'RocketLaunchIcon',
    title: 'Deployment',
    desc: 'Zero-downtime deployments with blue-green strategies, rollback plans, and full monitoring from the first release.',
    color: 'text-accent',
    bg: 'bg-accent/8',
  },
  {
    num: '06',
    icon: 'WrenchScrewdriverIcon',
    title: 'Support',
    desc: 'Dedicated post-launch support with SLA-backed response times, proactive monitoring, and continuous improvement cycles.',
    color: 'text-success',
    bg: 'bg-success/8',
  },
];

export default function ProcessSection() {
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
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary text-xs font-700 uppercase tracking-widest mb-4 px-3 py-1.5 bg-primary/6 rounded-full border border-primary/15">
            How We Work
          </span>
          <h2 className="text-section-title text-foreground mb-4">
            A Process Built for Predictable Outcomes
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every engagement follows a proven methodology that eliminates surprises and keeps projects on time, on budget, and on scope.
          </p>
        </div>

        {/* Bento-style process grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.title}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`reveal-hidden stagger-${(i % 3) + 1} group bg-card border border-border rounded-2xl p-8 hover:border-primary/20 hover:shadow-card transition-all duration-300 relative overflow-hidden`}
            >
              {/* Large step number watermark */}
              <span className="absolute top-4 right-5 text-7xl font-900 text-border/60 select-none pointer-events-none leading-none">
                {step.num}
              </span>
              <div className={`w-12 h-12 rounded-xl ${step.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                <Icon name={step.icon as any} size={22} className={step.color} />
              </div>
              <h3 className="text-foreground text-lg font-700 mb-3 relative z-10">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
