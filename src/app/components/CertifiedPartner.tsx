'use client';

import React, { useRef, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const partnerLogos = [
{ src: 'https://callistus11.github.io/tech/wp-content/uploads/2025/03/hex.svg', alt: 'Hex technology partner logo', name: 'Hex' },
{ src: 'https://callistus11.github.io/tech/wp-content/uploads/2025/03/MTgox.svg', alt: 'MTgox partner logo', name: 'MTgox' },
{ src: 'https://callistus11.github.io/tech/wp-content/uploads/2025/03/savex.svg', alt: 'Savex partner logo', name: 'Savex' },
{ src: 'https://callistus11.github.io/tech/wp-content/uploads/2025/03/coinbase.svg', alt: 'Coinbase partner logo', name: 'Coinbase' },
{ src: 'https://callistus11.github.io/tech/wp-content/uploads/2025/03/konstruktion.svg', alt: 'Konstruktion partner logo', name: 'Konstruktion' },
{ src: 'https://callistus11.github.io/tech/wp-content/uploads/2025/03/meta.svg', alt: 'Meta partner logo', name: 'Meta' }];


export default function CertifiedPartner() {
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
    if (leftRef?.current) observer?.observe(leftRef?.current);
    if (rightRef?.current) observer?.observe(rightRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-secondary border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left */}
          <div ref={leftRef} className="reveal-hidden lg:col-span-5">
            <span className="inline-block text-primary text-xs font-700 uppercase tracking-widest mb-4 px-3 py-1.5 bg-primary/6 rounded-full border border-primary/15">
              Trusted Partner
            </span>
            <h2 className="text-section-title text-foreground mb-5">
              Certified Technology Partner
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We help you achieve your vision and cultivate confidence and peace of mind throughout your technology journey. Our certifications and partnerships ensure you&apos;re always working with industry-leading standards.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-700 rounded-xl hover:bg-primary/90 transition-all text-sm magnetic-btn">
              
              Free Consultation
              <Icon name="ArrowRightIcon" size={16} />
            </a>

            {/* CPA Badge */}
            <div className="mt-8 inline-flex items-center gap-4 p-4 bg-card border border-border rounded-2xl">
              <AppImage
                src="https://callistus11.github.io/tech/wp-content/uploads/2025/02/cpa-k-350-thumbnail.png"
                alt="CPA-K certification badge — certified technology partner credential"
                width={56}
                height={56}
                className="w-14 h-14 object-contain" />
              
              <div>
                <p className="text-foreground text-sm font-700">CPA-K Certified</p>
                <p className="text-muted-foreground text-xs">Certified Technology Partner</p>
              </div>
            </div>
          </div>

          {/* Right — Partner logos */}
          <div ref={rightRef} className="reveal-hidden lg:col-span-7">
            <p className="text-muted-foreground text-xs font-700 uppercase tracking-widest mb-6">
              Trusted by organizations using
            </p>
            <div className="grid grid-cols-3 gap-4">
              {partnerLogos?.map((logo, i) =>
              <div
                key={logo?.name}
                className="bg-card border border-border rounded-2xl p-5 flex items-center justify-center hover:border-primary/20 hover:shadow-card transition-all duration-200 group"
                style={{
                  animationDelay: `${i * 80}ms`
                }}>
                
                  <AppImage
                  src={logo?.src}
                  alt={logo?.alt}
                  width={100}
                  height={40}
                  className="h-8 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-200 grayscale group-hover:grayscale-0" />
                
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}