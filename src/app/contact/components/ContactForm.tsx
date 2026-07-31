'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const services = [
  'Software Development',
  'Cloud Solutions',
  'Cybersecurity',
  'IT Consulting',
  'AI & Automation',
  'Digital Transformation',
  'Other',
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-24 bg-background">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
            <Icon name="CheckCircleIcon" size={40} className="text-success" variant="solid" />
          </div>
          <h2 className="text-section-title text-foreground mb-4">Message Received</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Thank you for reaching out. A member of our team will be in touch within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-700 rounded-xl hover:bg-primary/90 transition-all text-sm"
          >
            Send Another Message
            <Icon name="ArrowRightIcon" size={15} />
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left — Context */}
          <div className="lg:col-span-4">
            <span className="inline-block text-primary text-xs font-700 uppercase tracking-widest mb-4 px-3 py-1.5 bg-primary/6 rounded-full border border-primary/15">
              Start a Conversation
            </span>
            <h2 className="text-section-title text-foreground mb-5">
              Tell Us About Your Project
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Fill in the form and one of our senior consultants will review your requirements and respond with a tailored proposal.
            </p>

            <div className="space-y-4">
              {[
                { icon: 'CheckCircleIcon', text: 'No obligation, free initial consultation' },
                { icon: 'CheckCircleIcon', text: 'Response within 24 business hours' },
                { icon: 'CheckCircleIcon', text: 'NDA available upon request' },
                { icon: 'CheckCircleIcon', text: 'Dedicated engagement manager assigned' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <Icon name={item.icon as any} size={18} className="text-success flex-shrink-0" variant="solid" />
                  <span className="text-muted-foreground text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-3xl p-8 md:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="block text-foreground text-sm font-600 mb-2">Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-foreground text-sm font-600 mb-2">Work Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-foreground text-sm font-600 mb-2">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-foreground text-sm font-600 mb-2">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-foreground text-sm font-600 mb-2">Service Needed</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all appearance-none"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-foreground text-sm font-600 mb-2">Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all appearance-none"
                  >
                    <option value="">Select a range</option>
                    <option value="&lt;25k">Under $25,000</option>
                    <option value="25k-100k">$25,000 – $100,000</option>
                    <option value="100k-500k">$100,000 – $500,000</option>
                    <option value="500k+">$500,000+</option>
                  </select>
                </div>
              </div>

              <div className="mb-7">
                <label htmlFor="message" className="block text-foreground text-sm font-600 mb-2">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-700 rounded-xl hover:bg-primary/90 transition-all duration-200 magnetic-btn shadow-sm text-sm"
              >
                Send Message
                <Icon name="PaperAirplaneIcon" size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
