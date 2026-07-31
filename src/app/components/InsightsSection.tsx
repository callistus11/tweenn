'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const articles = [
{
  tag: 'Financing',
  tagColor: 'text-primary bg-primary/8 border-primary/15',
  title: 'Use Physician Lifecycle Planning to Maximize Your Technology Potential',
  excerpt: 'Discover how aligning technology investment cycles with business maturity stages unlocks compounding returns on digital infrastructure.',
  date: 'July 14, 2026',
  readTime: '6 min read',
  img: '/assets/images/twwen.jpg',
  imgAlt: 'Financial charts and technology strategy documents on a bright, clean desk with natural window light, airy office environment'
},
{
  tag: 'Report',
  tagColor: 'text-accent bg-accent/8 border-accent/15',
  title: 'Diversity, Equity, and Inclusion in Technology Teams',
  excerpt: 'Our annual report on building diverse engineering teams and why inclusive organizations ship better software, faster.',
  date: 'June 28, 2026',
  readTime: '8 min read',
  img: '/assets/images/tween4.jpg',
  imgAlt: 'Diverse team of professionals collaborating around a table in a bright, modern office with large windows and neutral tones'
},
{
  tag: 'Advice',
  tagColor: 'text-success bg-success/8 border-success/15',
  title: 'How to Overcome the Impact of Inflation on Technology Budgets',
  excerpt: 'Practical strategies for CIOs and CTOs to protect technology roadmaps and deliver more value per dollar in a high-cost environment.',
  date: 'June 10, 2026',
  readTime: '5 min read',
  img: '/assets/images/tween3.jpg',
  imgAlt: 'Clean white desk with laptop, financial documents, and a cup of coffee in a bright minimalist office with white walls'
}];


export default function InsightsSection() {
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
    <section id="insights" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-block text-primary text-xs font-700 uppercase tracking-widest mb-4 px-3 py-1.5 bg-primary/6 rounded-full border border-primary/15">
              Insights
            </span>
            <h2 className="text-section-title text-foreground">
              Hear Directly From Tweentech Experts
            </h2>
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground font-600 rounded-xl hover:bg-muted transition-all text-sm flex-shrink-0">
            
            More Insights
            <Icon name="ArrowRightIcon" size={14} />
          </Link>
        </div>

        {/* 3-col articles grid */}
        {/* Row 1: [col-1: Financing] [col-2: Report] [col-3: Advice] */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {articles.map((article, i) =>
          <div
            key={article.title}
            ref={(el) => {cardRefs.current[i] = el;}}
            className={`reveal-hidden stagger-${i + 1} group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 cursor-pointer`}>
            
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <AppImage
                src={article.img}
                alt={article.imgAlt}
                width={400}
                height={192}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              
                {/* Scrim for tag readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <span className={`absolute top-4 left-4 px-2.5 py-1 border rounded-full text-[10px] font-700 uppercase tracking-widest ${article.tagColor}`}>
                  {article.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-muted-foreground text-xs font-500 mb-3">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-foreground font-700 text-base leading-snug mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-1.5 text-primary text-sm font-700">
                  Read Article
                  <Icon name="ArrowRightIcon" size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}