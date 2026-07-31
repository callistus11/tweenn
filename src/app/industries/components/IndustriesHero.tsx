'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function IndustriesHero() {
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
      <div className="absolute top-1/4 right-1/3 w-80 h-80 blob-accent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-10"
          style={{ opacity: 0, animation: 'fadeInUp 0.6s ease 0.1s forwards' }}>
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Icon name="ChevronRightIcon" size={14} />
          <span className="text-foreground font-600">Industries</span>
        </div>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/6 border border-primary/15 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-dot" />
            <span className="text-primary text-xs font-700 uppercase tracking-widest">Sectors We Serve</span>
          </div>

          <h1 className="text-hero-xl text-foreground mb-6">
            <span className="line-reveal">
              <span ref={(el) => { lineRefs.current[0] = el; }} style={{ transform: 'translateY(105%)' }}>
                Deep Expertise
              </span>
            </span>
            <span className="line-reveal">
              <span ref={(el) => { lineRefs.current[1] = el; }} style={{ transform: 'translateY(105%)' }}>
                Across Every
              </span>
            </span>
            <span className="line-reveal">
              <span ref={(el) => { lineRefs.current[2] = el; }} className="gradient-text" style={{ transform: 'translateY(105%)' }}>
                Industry.
              </span>
            </span>
          </h1>

          <p className="text-muted-foreground text-xl leading-relaxed mb-10 max-w-2xl"
            style={{ opacity: 0, animation: 'fadeInUp 0.8s ease 0.7s forwards' }}>
            We bring domain-specific knowledge to every engagement — understanding the regulatory, operational, and competitive dynamics unique to your sector.
          </p>

          <div className="flex flex-col sm:flex-row gap-4"
            style={{ opacity: 0, animation: 'fadeInUp 0.8s ease 0.9s forwards' }}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-700 rounded-xl hover:bg-primary/90 transition-all duration-200 magnetic-btn shadow-sm text-sm"
            >
              Discuss Your Industry
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-card border border-border text-foreground font-600 rounded-xl hover:bg-muted transition-all duration-200 text-sm"
            >
              Our Services
              <Icon name="ChevronRightIcon" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
