'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    timeout = setTimeout(() => {
      lineRefs.current.forEach((el, i) => {
        if (!el) return;
        el.style.transition = `transform 1s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.18}s`;
        el.style.transform = 'translateY(0)';
      });
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      
      {/* Gradient overlay bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left — Text */}
          <div className="lg:col-span-6 xl:col-span-5">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/6 border border-primary/15 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-dot" />
              <span className="text-primary text-xs font-700 uppercase tracking-widest">
                Enterprise Technology Partner
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-hero-xl text-foreground mb-6">
              <span className="line-reveal">
                <span
                  ref={(el) => {lineRefs.current[0] = el;}}
                  style={{ transform: 'translateY(105%)' }}>
                  
                  Engineering
                </span>
              </span>
              <span className="line-reveal">
                <span
                  ref={(el) => {lineRefs.current[1] = el;}}
                  style={{ transform: 'translateY(105%)' }}>
                  
                  Digital Solutions
                </span>
              </span>
              <span className="line-reveal">
                <span
                  ref={(el) => {lineRefs.current[2] = el;}}
                  className="gradient-text"
                  style={{ transform: 'translateY(105%)' }}>
                  
                  That Scale.
                </span>
              </span>
            </h1>

            <p
              className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg"
              style={{ opacity: 0, animation: 'fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.7s forwards' }}>
              
              We&apos;re a staff of smart, friendly professionals dedicated to anticipating your needs and building technology businesses can trust.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{ opacity: 0, animation: 'fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.9s forwards' }}>
              
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-700 rounded-xl hover:bg-primary/90 transition-all duration-200 magnetic-btn shadow-sm text-sm">
                
                Let&apos;s Get Started
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-secondary border border-border text-foreground font-600 rounded-xl hover:bg-muted transition-all duration-200 text-sm">
                
                View Services
                <Icon name="ChevronDownIcon" size={16} />
              </Link>
            </div>
          </div>

          {/* Right — Empty for now */}
          <div className="lg:col-span-6 xl:col-span-7 hidden lg:block" />
        </div>
      </div>
    </section>);

}