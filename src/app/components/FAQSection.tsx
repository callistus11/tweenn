'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const faqs = [
  {
    q: 'What should a technology strategy include?',
    a: 'A comprehensive technology strategy should include a current-state assessment, a future-state vision aligned with business goals, a roadmap with phased initiatives, budget allocation, risk mitigation plans, and clear KPIs. We work with your leadership team to build strategies that are executable, not just theoretical.',
  },
  {
    q: 'Can you help me plan for digital transformation?',
    a: 'Absolutely. Digital transformation is one of our core competencies. We guide organizations through every phase — from readiness assessment and change management to technology selection, implementation, and post-launch optimization. Our approach is pragmatic and business-outcome focused.',
  },
  {
    q: 'What is your technology philosophy?',
    a: 'We believe technology should serve business outcomes, not the other way around. We favor proven, maintainable solutions over bleeding-edge complexity. We advocate for open standards, cloud-native architectures, and security-by-design principles in every engagement.',
  },
  {
    q: 'Will I have a dedicated advisor?',
    a: 'Yes. Every client is assigned a dedicated engagement manager and technical lead. You\'ll always have a named point of contact who understands your context, your history, and your goals — no rotating anonymous support queues.',
  },
  {
    q: 'How do you handle data security and compliance?',
    a: 'Security and compliance are embedded from day one. We follow SOC2, ISO 27001, and GDPR frameworks by default. Our teams include certified security engineers who conduct threat modeling and code reviews throughout the development lifecycle.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && contentRef.current) {
          contentRef.current.classList.add('reveal-visible');
          contentRef.current.classList.remove('reveal-hidden');
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left */}
          <div className="lg:col-span-4">
            <span className="inline-block text-primary text-xs font-700 uppercase tracking-widest mb-4 px-3 py-1.5 bg-primary/6 rounded-full border border-primary/15">
              FAQ
            </span>
            <h2 className="text-section-title text-foreground mb-5">
              Technology Strategy FAQ&apos;s
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Common questions on data science, digital transformation, and working with Tweentech.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-700 rounded-xl hover:bg-primary/90 transition-all text-sm magnetic-btn"
            >
              Learn More
              <Icon name="ArrowRightIcon" size={15} />
            </Link>
          </div>

          {/* Right — Accordion */}
          <div ref={contentRef} className="reveal-hidden lg:col-span-8">
            <div className="space-y-3">
              {faqs?.map((faq, i) => (
                <div
                  key={i}
                  className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                    open === i ? 'border-primary/25 bg-primary/2' : 'border-border bg-card hover:border-primary/15'
                  }`}
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left min-h-[56px]"
                    aria-expanded={open === i}
                  >
                    <span className={`text-base font-700 leading-snug ${open === i ? 'text-primary' : 'text-foreground'}`}>
                      {faq?.q}
                    </span>
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                      open === i ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                    }`}>
                      <Icon name={open === i ? 'MinusIcon' : 'PlusIcon'} size={14} />
                    </div>
                  </button>
                  {open === i && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground text-sm leading-relaxed">{faq?.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
