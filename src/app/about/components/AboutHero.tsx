'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function AboutHero() {
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
      {/* Background grid */}
      <div className="absolute inset-0 hero-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 blob-primary pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-10"
          style={{ opacity: 0, animation: 'fadeInUp 0.6s ease 0.1s forwards' }}>
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Icon name="ChevronRightIcon" size={14} />
          <span className="text-foreground font-600">About</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/6 border border-primary/15 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-dot" />
              <span className="text-primary text-xs font-700 uppercase tracking-widest">Our Story</span>
            </div>

            <h1 className="text-hero-xl text-foreground mb-6">
              <span className="line-reveal">
                <span ref={(el) => { lineRefs.current[0] = el; }} style={{ transform: 'translateY(105%)' }}>
                  Founded by
                </span>
              </span>
              <span className="line-reveal">
                <span ref={(el) => { lineRefs.current[1] = el; }} style={{ transform: 'translateY(105%)' }}>
                  Industry
                </span>
              </span>
              <span className="line-reveal">
                <span ref={(el) => { lineRefs.current[2] = el; }} className="gradient-text" style={{ transform: 'translateY(105%)' }}>
                  Trailblazers.
                </span>
              </span>
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg"
              style={{ opacity: 0, animation: 'fadeInUp 0.8s ease 0.7s forwards' }}>
              We&apos;re a staff of smart, friendly professionals dedicated to anticipating your needs and making your life easier. Built on deep expertise and a commitment to transparency, we partner with organizations to engineer technology that drives measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4"
              style={{ opacity: 0, animation: 'fadeInUp 0.8s ease 0.9s forwards' }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-700 rounded-xl hover:bg-primary/90 transition-all duration-200 magnetic-btn shadow-sm text-sm"
              >
                Work With Us
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

          {/* Right — Image composition */}
          <div className="lg:col-span-6 relative"
            style={{ opacity: 0, animation: 'fadeInUp 1s ease 0.5s forwards' }}>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-card border border-border">
                <AppImage
                  src="https://callistus11.github.io/tech/wp-content/uploads/2025/02/new/_MG_3908.jpg"
                  alt="Tween Technologies team working in a bright, modern office environment with natural light"
                  width={640}
                  height={480}
                  className="w-full h-80 object-cover"
                  priority
                />
              </div>
              {/* Secondary image */}
              <div className="absolute -bottom-8 -right-6 w-52 h-40 rounded-2xl overflow-hidden shadow-card-hover border-2 border-white hidden sm:block">
                <AppImage
                  src="https://callistus11.github.io/tech/wp-content/uploads/2025/02/new/_MG_3925.jpg"
                  alt="Tween Technologies engineers collaborating at workstations in well-lit office space"
                  width={208}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -top-5 -left-4 floating-card rounded-2xl px-4 py-3 hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon name="TrophyIcon" size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-foreground text-xs font-700">Industry Leaders</p>
                  <p className="text-muted-foreground text-[10px] font-500">Trusted Partner</p>
                </div>
              </div>
              <div className="absolute -z-10 -bottom-12 -left-12 w-64 h-64 blob-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
