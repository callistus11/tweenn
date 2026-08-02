'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const features = [
{ icon: 'AcademicCapIcon', label: 'Experienced Engineers', desc: 'Senior engineers with deep expertise across enterprise domains' },
{ icon: 'BoltIcon', label: 'Modern Technologies', desc: 'Cloud-native, AI-ready, and built for scale' },
{ icon: 'ShieldCheckIcon', label: 'Secure by Design', desc: 'Security embedded at every layer of the stack' },
{ icon: 'CubeTransparentIcon', label: 'Scalable Architecture', desc: 'Systems that grow with your business without re-engineering' },
{ icon: 'ArrowPathIcon', label: 'Agile Delivery', desc: 'Iterative sprints with transparent progress and fast releases' },
{ icon: 'ClockIcon', label: '24/7 Support', desc: 'Dedicated support teams across time zones' }];


export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

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
    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left — Image composition */}
          <div ref={leftRef} className="reveal-hidden lg:col-span-5 relative">
            <div className="relative">
              {/* Primary image */}
              <div className="rounded-3xl overflow-hidden shadow-card border border-border">
                <AppImage
                  src="/assets/images/tween3.jpg"
                  alt="Tween Technologies team working in a bright, modern office environment with natural light"
                  width={560}
                  height={420}
                  className="w-full h-72 object-cover"
                  priority />

              </div>

              {/* Secondary image — offset */}
              <div className="absolute -bottom-8 -right-6 w-48 h-36 rounded-2xl overflow-hidden shadow-card-hover border-2 border-white hidden sm:block">
                <AppImage
                  src="/assets/images/tween4.jpg"
                  alt="Tween Technologies engineers collaborating at workstations in well-lit office space"
                  width={192}
                  height={144}
                  className="w-full h-full object-cover" />

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

              {/* Decorative blob */}
              <div className="absolute -z-10 -bottom-12 -left-12 w-64 h-64 blob-primary" />
            </div>
          </div>

          {/* Right — Content */}
          <div ref={rightRef} className="reveal-hidden lg:col-span-7 flex flex-col justify-between h-full">
            <div>
              <span className="inline-block text-primary text-xs font-700 uppercase tracking-widest mb-4 px-3 py-1.5 bg-primary/6 rounded-full border border-primary/15">
                Who We Are
              </span>
              <h2 className="text-section-title text-foreground mb-5">
                Tween Technologies
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Tween Technologies is a technology company focused on building practical, high-impact digital solutions for modern businesses. We work at the intersection of software development, data, and product design to turn ideas into systems that deliver real results.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our approach is simple: build what works, keep it scalable, and make it useful. Every product we create is grounded in real-world needs, not just technical ambition.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                What sets us apart is how we think long-term. Alongside building products, we are actively developing a growing network of trained engineers and problem-solvers through our ecosystem. This allows us to deliver not just solutions, but the people and capability to sustain them.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We are not just service providers. We are builders, partners, and enablers of growth.
              </p>
            </div>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((f, i) =>
              <div key={f.label} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/20 hover:shadow-card transition-all duration-200">
                  <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={f.icon as any} size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-700 leading-tight">{f.label}</p>
                    <p className="text-muted-foreground text-xs mt-0.5 leading-snug">{f.desc}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-700 rounded-xl hover:bg-primary/90 transition-all text-sm magnetic-btn">
                
                Learn More
                <Icon name="ArrowRightIcon" size={15} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-border text-foreground font-600 rounded-xl hover:bg-muted transition-all text-sm">
                
                Our Philosophy
                <Icon name="BookOpenIcon" size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>);

}