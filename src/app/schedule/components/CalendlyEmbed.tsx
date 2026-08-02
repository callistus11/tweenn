'use client';

import React, { useEffect } from 'react';

export default function CalendlyEmbed() {
  useEffect(() => {
    // Load Calendly widget script
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="py-16 bg-background min-h-[600px]">
      <div className="max-w-4xl mx-auto px-6">
        <div 
          className="calendly-inline-widget"
          data-url="https://calendly.com/brightnickson63/30min"
          style={{ minWidth: '100%', height: '700px' }}
        />
      </div>
    </section>
  );
}
