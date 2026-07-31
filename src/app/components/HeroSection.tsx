'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

const floatingCards = [
{
  icon: 'CloudIcon',
  label: 'Cloud Solutions',
  sub: 'AWS · Azure · GCP',
  color: 'text-primary',
  bg: 'bg-primary/8',
  delay: '0s',
  position: 'top-[8%] right-[5%]'
},
{
  icon: 'CpuChipIcon',
  label: 'AI & Automation',
  sub: 'TensorFlow · PyTorch',
  color: 'text-accent',
  bg: 'bg-accent/8',
  delay: '1.5s',
  position: 'top-[38%] right-[-2%]'
},
{
  icon: 'ShieldCheckIcon',
  label: 'Cybersecurity',
  sub: 'Zero Trust · SOC2',
  color: 'text-success',
  bg: 'bg-success/8',
  delay: '0.8s',
  position: 'bottom-[28%] right-[4%]'
},
{
  icon: 'CodeBracketIcon',
  label: 'Software Dev',
  sub: 'React · Node · Python',
  color: 'text-primary',
  bg: 'bg-primary/8',
  delay: '2s',
  position: 'bottom-[8%] right-[20%]'
},
{
  icon: 'ChartBarIcon',
  label: 'Data Science',
  sub: 'Analytics · ML',
  color: 'text-accent',
  bg: 'bg-accent/8',
  delay: '1.2s',
  position: 'top-[62%] right-[-1%]'
}];


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
      
      {/* Background grid */}
      <div className="absolute inset-0 hero-grid-bg opacity-40 pointer-events-none" />

      {/* Blob backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 blob-primary pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 blob-accent pointer-events-none" />

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

            {/* Trust indicators */}
            <div
              className="flex flex-wrap items-center gap-6 mt-10 pt-10 border-t border-border"
              style={{ opacity: 0, animation: 'fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.1s forwards' }}>
              
              {[
              { val: '200+', label: 'Projects' },
              { val: '150+', label: 'Clients' },
              { val: '10+', label: 'Years' }].
              map((stat) =>
              <div key={stat.label} className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-800 text-foreground">{stat.val}</span>
                  <span className="text-muted-foreground text-sm font-500">{stat.label}</span>
                </div>
              )}
              <div className="flex items-center gap-1.5 ml-auto sm:ml-0">
                <div className="flex">
                  {[...Array(5)].map((_, i) =>
                  <Icon key={i} name="StarIcon" size={14} variant="solid" className="text-yellow-400" />
                  )}
                </div>
                <span className="text-muted-foreground text-sm font-600">4.9 Google</span>
              </div>
            </div>
          </div>

          {/* Right — Floating Cards Visual */}
          <div
            className="lg:col-span-6 xl:col-span-7 relative h-[520px] hidden lg:block"
            style={{ opacity: 0, animation: 'fadeInUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s forwards' }}>
            
            {/* Central visual */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[340px] h-[340px]">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/15 animate-[spin_40s_linear_infinite]" />
                {/* Inner ring */}
                <div className="absolute inset-8 rounded-full border border-accent/20 animate-[spin_25s_linear_infinite_reverse]" />
                {/* Core */}
                <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/15 flex items-center justify-center">
                  <AppImage
                    src="/assets/images/logo1.jpg"
                    alt="Tween Technologies logo mark"
                    width={80}
                    height={80}
                    className="w-16 h-16 object-contain" />
                  
                </div>
                {/* Orbital dots */}
                {[0, 60, 120, 180, 240, 300].map((deg) =>
                <div
                  key={deg}
                  className="absolute w-2.5 h-2.5 rounded-full bg-primary/40"
                  style={{
                    top: `calc(50% + ${Math.sin(deg * Math.PI / 180) * 155}px - 5px)`,
                    left: `calc(50% + ${Math.cos(deg * Math.PI / 180) * 155}px - 5px)`
                  }} />

                )}
              </div>
            </div>

            {/* Floating tech cards */}
            {floatingCards.map((card, i) =>
            <div
              key={card.label}
              className={`absolute ${card.position} floating-card rounded-2xl px-4 py-3 flex items-center gap-3 min-w-[180px]`}
              style={{ animationDelay: card.delay, animation: `floatY ${4 + i * 0.5}s ease-in-out ${card.delay} infinite` }}>
              
                <div className={`w-9 h-9 rounded-xl ${card.bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon name={card.icon as any} size={18} className={card.color} />
                </div>
                <div>
                  <p className="text-foreground text-xs font-700 leading-tight">{card.label}</p>
                  <p className="text-muted-foreground text-[10px] font-500">{card.sub}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}