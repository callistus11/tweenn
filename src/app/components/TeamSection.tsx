'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const team = [
{
  name: 'Bright Callistus',
  role: 'Vice President',
  img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&auto=format&q=80',
  alt: 'Professional headshot of a man in a dark suit, neutral studio background, confident expression',
  linkedin: '#'
},
{
  name: 'Klara Berger',
  role: 'Senior Advisor Associate',
  img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&auto=format&q=80',
  alt: 'Professional headshot of a woman with light background, business attire, warm expression',
  linkedin: '#'
},
{
  name: 'Rebbeka Hof',
  role: 'Vice President',
  img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&auto=format&q=80',
  alt: 'Professional headshot of a woman in business attire, clean light background, composed expression',
  linkedin: '#'
},
{
  name: 'Donald Ferreira',
  role: 'Managing Director',
  img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format&q=80',
  alt: 'Professional headshot of a man in formal attire, neutral background, authoritative expression',
  linkedin: '#'
}];


export default function TeamSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-block text-primary text-xs font-700 uppercase tracking-widest mb-4 px-3 py-1.5 bg-primary/6 rounded-full border border-primary/15">
              Our Team
            </span>
            <h2 className="text-section-title text-foreground">
              Choosing the Right Data Science Team
            </h2>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground font-600 rounded-xl hover:bg-muted transition-all text-sm">
              Careers
            </Link>
            <Link href="#" className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-700 rounded-xl hover:bg-primary/90 transition-all text-sm magnetic-btn">
              View All
              <Icon name="ArrowRightIcon" size={14} />
            </Link>
          </div>
        </div>

        {/* 4-col team grid */}
        {/* Row 1: [col-1: Bright] [col-2: Klara] [col-3: Rebbeka] [col-4: Donald] */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) =>
          <div
            key={member.name}
            ref={(el) => {cardRefs.current[i] = el;}}
            className={`reveal-hidden stagger-${i + 1} group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-card-hover hover:border-primary/20 transition-all duration-300`}>
            
              <div className="relative overflow-hidden h-64">
                <AppImage
                src={member.img}
                alt={member.alt}
                width={320}
                height={256}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <a
                href={member.linkedin}
                aria-label={`${member.name} LinkedIn`}
                className="absolute bottom-4 right-4 w-9 h-9 bg-white rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-white text-foreground">
                
                  <Icon name="LinkIcon" size={16} />
                </a>
              </div>
              <div className="p-5">
                <h3 className="text-foreground font-700 text-base">{member.name}</h3>
                <p className="text-muted-foreground text-sm font-500 mt-0.5">{member.role}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}