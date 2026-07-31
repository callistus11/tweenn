'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const services = [
  {
    icon: 'CodeBracketIcon',
    title: 'Software Development',
    description: 'Custom enterprise applications, APIs, and platforms built with modern stacks that scale with your business.',
    detail: 'We architect and build production-grade software — from greenfield applications to complex system integrations. Our engineers work across the full stack, delivering clean, maintainable code with rigorous testing and CI/CD pipelines.',
    tags: ['React', 'Node.js', 'Python', 'TypeScript', 'GraphQL'],
    color: 'text-primary',
    bg: 'bg-primary/6',
    border: 'group-hover:border-primary/30',
  },
  {
    icon: 'CloudIcon',
    title: 'Cloud Solutions',
    description: 'Cloud migration, architecture design, and managed services on AWS, Azure, and GCP for resilient infrastructure.',
    detail: 'We design cloud-native architectures that are secure, cost-optimized, and built for scale. From lift-and-shift migrations to fully serverless platforms, we guide your cloud journey end to end.',
    tags: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform'],
    color: 'text-accent',
    bg: 'bg-accent/6',
    border: 'group-hover:border-accent/30',
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'Cybersecurity',
    description: 'End-to-end security assessments, zero-trust architecture, and compliance frameworks to protect your assets.',
    detail: 'Security is not an afterthought — it is embedded at every layer. We conduct penetration testing, threat modeling, and compliance audits to ensure your systems meet the highest security standards.',
    tags: ['SOC2', 'ISO 27001', 'SIEM', 'Zero Trust', 'GDPR'],
    color: 'text-success',
    bg: 'bg-success/6',
    border: 'group-hover:border-success/30',
  },
  {
    icon: 'LightBulbIcon',
    title: 'IT Consulting',
    description: 'Strategic technology roadmaps and advisory services that align your IT investments with business outcomes.',
    detail: 'Our senior advisors work alongside your leadership team to build technology strategies that are pragmatic, executable, and aligned with your growth objectives — not just theoretical frameworks.',
    tags: ['Strategy', 'Architecture', 'CTO Advisory', 'Roadmapping'],
    color: 'text-primary',
    bg: 'bg-primary/6',
    border: 'group-hover:border-primary/30',
  },
  {
    icon: 'CpuChipIcon',
    title: 'AI & Automation',
    description: 'Machine learning pipelines, intelligent automation, and data science solutions that unlock operational efficiency.',
    detail: 'We build AI systems that solve real business problems — from predictive analytics and NLP to computer vision and LLM-powered applications. Every solution is production-ready and maintainable.',
    tags: ['TensorFlow', 'LLMs', 'MLOps', 'PyTorch', 'RAG'],
    color: 'text-accent',
    bg: 'bg-accent/6',
    border: 'group-hover:border-accent/30',
  },
  {
    icon: 'ArrowPathIcon',
    title: 'Digital Transformation',
    description: 'Full-spectrum modernization — from legacy migration to process reinvention and digital-first operating models.',
    detail: 'We guide organizations through the full transformation journey — assessing current state, designing the future state, and executing the change with minimal disruption to ongoing operations.',
    tags: ['Agile', 'DevOps', 'Change Mgmt', 'Legacy Migration'],
    color: 'text-success',
    bg: 'bg-success/6',
    border: 'group-hover:border-success/30',
  },
];

export default function ServicesGrid() {
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
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`reveal-hidden stagger-${(i % 4) + 1} group bg-card border border-border rounded-2xl p-8 service-card-hover cursor-pointer ${service.border} transition-all duration-300`}
            >
              <div className="flex items-start gap-5 mb-5">
                <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={service.icon as any} size={26} className={service.color} />
                </div>
                <div>
                  <h3 className="text-foreground text-xl font-700 mb-1 leading-tight">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 pl-0">{service.detail}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {service.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-secondary border border-border rounded-lg text-xs font-600 text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                className={`inline-flex items-center gap-1.5 text-sm font-700 ${service.color} group-hover:gap-3 transition-all duration-200`}
              >
                Discuss This Service
                <Icon name="ArrowRightIcon" size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
