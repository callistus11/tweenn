'use client';

import React, { useEffect, useRef } from 'react';

export default function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-16 bg-background min-h-[600px]">
      <div className="max-w-4xl mx-auto px-6">
        <div 
          ref={containerRef}
          className="calendly-inline-widget"
          data-url="https://calendly.com/YOUR_CALENDLY_USERNAME"
          style={{ minWidth: '100%', height: '700px' }}
        />
      </div>
    </section>
  );
}
