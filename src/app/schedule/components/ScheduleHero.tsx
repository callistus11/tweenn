'use client';

import React from 'react';

export default function ScheduleHero() {
  return (
    <section className="relative pt-32 pb-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/6 border border-primary/15 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-dot" />
          <span className="text-primary text-xs font-700 uppercase tracking-widest">
            Book a Meeting
          </span>
        </div>

        <h1 className="text-hero-xl text-foreground mb-6">
          Schedule Your Consultation
        </h1>

        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          Choose a time that works for you. Our team will review your request and confirm the meeting details.
        </p>
      </div>
    </section>
  );
}
