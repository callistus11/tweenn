'use client';

import React, { useRef, useEffect } from 'react';

const technologies = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#000000' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Python', color: '#3776AB' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Azure', color: '#0078D4' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Kubernetes', color: '#326CE5' },
  { name: 'PostgreSQL', color: '#4169E1' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'Flutter', color: '#02569B' },
  { name: 'TensorFlow', color: '#FF6F00' },
];

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          itemRefs.current.forEach((el, i) => {
            if (!el) return;
            setTimeout(() => {
              el.classList.add('reveal-visible');
              el.classList.remove('reveal-hidden');
            }, i * 60);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-secondary border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-primary text-xs font-700 uppercase tracking-widest mb-4 px-3 py-1.5 bg-primary/6 rounded-full border border-primary/15">
            Technologies
          </span>
          <h2 className="text-section-title text-foreground mb-4">
            Built With the Best Tools in the Industry
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            We work with the technology stack that gives your business the best foundation for growth.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {technologies.map((tech, i) => (
            <div
              key={tech.name}
              ref={(el) => { itemRefs.current[i] = el; }}
              className="reveal-hidden group bg-card border border-border rounded-2xl p-4 flex flex-col items-center gap-2 hover:border-primary/20 hover:shadow-card transition-all duration-200 cursor-default"
            >
              {/* Color dot representing tech */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-xs font-800 transition-all duration-300"
                style={{ backgroundColor: `${tech.color}20` }}
              >
                <span
                  className="text-sm font-800 transition-all duration-300"
                  style={{ color: tech.color }}
                >
                  {tech.name.slice(0, 2)}
                </span>
              </div>
              <span className="text-muted-foreground text-xs font-600 group-hover:text-foreground transition-colors text-center leading-tight">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}