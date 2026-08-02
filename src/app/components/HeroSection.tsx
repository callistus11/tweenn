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
      className="relative min-h-[85vh] flex items-center pt-28 pb-16 overflow-hidden">
      
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
                href="/schedule"
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

          {/* Right — Hero Image */}
          <div className="lg:col-span-6 xl:col-span-7 hidden lg:block relative">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border">
                <AppImage
                  src="/assets/images/tween3.jpg"
                  alt="Tween Technologies team collaborating"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name="CheckCircleIcon" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-700 text-sm">Trusted Partner</p>
                    <p className="text-muted-foreground text-xs">200+ Projects Delivered</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>

        {/* Learning Platform CTA - Centered */}
        <div
          className="max-w-3xl mx-auto mt-10"
          style={{ opacity: 0, animation: 'fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.1s forwards' }}>
          <div className="p-8 bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary/20 rounded-2xl shadow-lg">
            <div className="flex items-start gap-5 mb-5">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 shadow-md">
                <Icon name="AcademicCapIcon" size={28} className="text-primary-foreground" />
              </div>
              <div>
                <p className="text-foreground font-700 text-lg mb-2">Level Up Your Skills</p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Access our learning platform to master modern technologies through hands-on courses and tutorials designed for real-world application.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <a
                href="https://tweenlearning.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-700 rounded-xl hover:bg-primary/90 transition-all duration-200 text-base shadow-md">
                Start Learning
                <Icon name="ArrowUpRightIcon" size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

}