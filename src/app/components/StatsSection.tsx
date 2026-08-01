'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  { value: 50, suffix: '+', label: 'Projects Delivered', description: 'Across various industries' },
  { value: 30, suffix: '+', label: 'Global Clients', description: 'From startups to enterprises' },
  { value: 5, suffix: '+', label: 'Years Experience', description: 'Founded by industry trailblazers' },
  { value: 95, suffix: '%', label: 'Success Rate', description: 'Client satisfaction score' },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const [active, setActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-secondary border-y border-border py-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center lg:items-start gap-1 px-6 py-10 reveal-hidden"
              style={{
                opacity: active ? 1 : 0,
                transform: active ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
              }}
            >
              <span className="text-4xl font-800 text-foreground tracking-tight">
                <CountUp target={stat.value} suffix={stat.suffix} active={active} />
              </span>
              <span className="text-foreground text-sm font-700">{stat.label}</span>
              <span className="text-muted-foreground text-xs font-500">{stat.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}