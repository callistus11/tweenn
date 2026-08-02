'use client';

import React, { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

const testimonials = [
{
  name: 'Kwame Mensah',
  location: 'Accra, Ghana',
  role: 'Managing Director',
  company: 'Mensa Technologies',
  quote: 'Tweentech has been instrumental in our growth. Their team took the time to truly understand our needs and helped us eliminate inefficiencies across our entire technology stack.',
  avatar: '/assets/images/testimonial1.png',
  avatarAlt: 'Professional headshot of Kwame Mensah',
  rating: 5
},
{
  name: 'Adwoa Asante',
  location: 'Kumasi, Ghana',
  role: 'CEO & Founder',
  company: 'Asante Innovations',
  quote: 'Partnering with Tweentech was a game-changer for us. They took the time to understand our challenges and helped us streamline our operations for measurable success.',
  avatar: '/assets/images/testimonial2.png',
  avatarAlt: 'Professional headshot of Adwoa Asante',
  rating: 5
},
{
  name: 'Emmanuel Osei',
  location: 'Takoradi, Ghana',
  role: 'Operations Director',
  company: 'Osei Logistics',
  quote: 'I hired Tweentech for a small project and was very happy. They didn\'t treat me like a "small project." I was very satisfied and would recommend them to any organization.',
  avatar: '/assets/images/testimonial3.png',
  avatarAlt: 'Professional headshot of Emmanuel Osei',
  rating: 5
},
{
  name: 'Nana Gyamfi',
  location: 'Tamale, Ghana',
  role: 'CTO',
  company: 'Northern Tech Solutions',
  quote: 'The technical expertise and professionalism of the Tweentech team exceeded our expectations. They delivered a robust solution that has transformed our digital infrastructure.',
  avatar: '/assets/images/testimonial4.png',
  avatarAlt: 'Professional headshot of Nana Akua',
  rating: 5
}];


export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleDot = (i: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActive(i);
    startInterval();
  };

  return (
    <section id="testimonials" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-xs font-700 uppercase tracking-widest mb-4 px-3 py-1.5 bg-primary/6 rounded-full border border-primary/15">
            Client Testimonials
          </span>
          <h2 className="text-section-title text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by businesses across Ghana to deliver exceptional technology solutions
          </p>
        </div>

        {/* Testimonial cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Icon key={j} name="StarIcon" size={14} variant="solid" className="text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground text-sm leading-relaxed mb-6 min-h-[80px]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <AppImage
                    src={t.avatar}
                    alt={t.avatarAlt}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-foreground font-700 text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                  <p className="text-muted-foreground text-[10px]">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>);

}