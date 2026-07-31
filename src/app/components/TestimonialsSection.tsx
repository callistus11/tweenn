'use client';

import React, { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

const testimonials = [
{
  name: 'Carlos Martinez',
  location: 'MEX',
  role: 'CEO',
  company: 'TechVentures MX',
  quote: 'Tweentech has been instrumental in our growth. Their team took the time to truly understand our needs and helped us eliminate inefficiencies across our entire technology stack.',
  avatar: '/assets/images/Eli1.jpg',
  avatarAlt: 'Professional headshot of a man in business casual attire, warm background',
  rating: 5
},
{
  name: 'Kate Smith',
  location: 'Swirl',
  role: 'CEO & President',
  company: 'Swirl Inc.',
  quote: 'Partnering with Tweentech was a game-changer for us. They took the time to understand our challenges and helped us streamline our operations for measurable success.',
  avatar: '/assets/images/Eli2.jpg',
  avatarAlt: 'Professional headshot of a woman with a warm smile, light natural background',
  rating: 5
},
{
  name: 'Rebecca Roy',
  location: 'H&N',
  role: 'CEO & President',
  company: 'H&N Group',
  quote: 'I hired Tweentech for a small project and was very happy. They didn\'t treat me like a "small project." I was very satisfied and would recommend them to any organization.',
  avatar: '/assets/images/tween3.jpg',
  avatarAlt: 'Professional headshot of a woman in business attire, neutral light background',
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
    <section id="testimonials" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-block text-primary text-xs font-700 uppercase tracking-widest mb-4 px-3 py-1.5 bg-primary/6 rounded-full border border-primary/15">
              Client Testimonials
            </span>
            <h2 className="text-section-title text-foreground">
              Client Experiences That Speak for Themselves
            </h2>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="flex">
              {[...Array(5)].map((_, i) =>
              <Icon key={i} name="StarIcon" size={18} variant="solid" className="text-yellow-400" />
              )}
            </div>
            <span className="text-foreground font-700 ml-1">4.9</span>
            <span className="text-muted-foreground text-sm ml-1">Google Reviews</span>
          </div>
        </div>

        {/* Testimonial display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main testimonial */}
          <div className="lg:col-span-8">
            <div className="bg-secondary border border-border rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[260px]">
              {/* Quote mark */}
              <div className="absolute top-6 right-8 text-primary/10">
                <Icon name="ChatBubbleLeftEllipsisIcon" size={80} />
              </div>

              {testimonials.map((t, i) =>
              <div
                key={t.name}
                className="transition-all duration-500"
                style={{
                  opacity: i === active ? 1 : 0,
                  transform: i === active ? 'translateY(0)' : 'translateY(12px)',
                  position: i === active ? 'relative' : 'absolute',
                  pointerEvents: i === active ? 'auto' : 'none'
                }}>
                
                  <div className="flex mb-4">
                    {[...Array(t.rating)].map((_, j) =>
                  <Icon key={j} name="StarIcon" size={16} variant="solid" className="text-yellow-400" />
                  )}
                  </div>
                  <blockquote className="text-foreground text-xl md:text-2xl font-500 leading-relaxed mb-8 relative z-10">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-border flex-shrink-0">
                      <AppImage
                      src={t.avatar}
                      alt={t.avatarAlt}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover" />
                    
                    </div>
                    <div>
                      <p className="text-foreground font-700 text-sm">{t.name}, {t.location}</p>
                      <p className="text-muted-foreground text-xs font-500">{t.role} — {t.company}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2 mt-5">
              {testimonials.map((_, i) =>
              <button
                key={i}
                onClick={() => handleDot(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? 'bg-primary w-7' : 'bg-border w-2 hover:bg-muted-foreground'}`
                } />

              )}
            </div>
          </div>

          {/* Side cards — stacked mini testimonials */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {testimonials.map((t, i) =>
            <button
              key={t.name}
              onClick={() => handleDot(i)}
              className={`text-left p-4 rounded-2xl border transition-all duration-200 ${
              i === active ?
              'border-primary/30 bg-primary/4 shadow-card' :
              'border-border bg-secondary hover:border-primary/15'}`
              }>
              
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                    <AppImage
                    src={t.avatar}
                    alt={t.avatarAlt}
                    width={36}
                    height={36}
                    className="w-full h-full object-cover" />
                  
                  </div>
                  <div>
                    <p className="text-foreground text-xs font-700">{t.name}</p>
                    <p className="text-muted-foreground text-[10px] font-500">{t.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">{t.quote}</p>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>);

}